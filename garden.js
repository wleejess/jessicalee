(function () {
    'use strict';

    const svg = document.getElementById('garden');
    if (!svg) return;

    const NODE_COLORS = {
        bio:        '#6BADA8',
        blog:       '#6BADA8',
        contact:    '#6BADA8',
        edu:        '#DEAB94',
        orbic:      '#DEAB94',
        fwca:       '#9BCFC9',
        neutralize: '#DEAB94',
    };

    const clickCounts = {};
    const tendrils    = []; // accumulates { endX, endY } for connector arcs

    // ── Helpers ─────────────────────────────────────────────

    function ns(tag) {
        return document.createElementNS('http://www.w3.org/2000/svg', tag);
    }

    // djb2-style hash → unsigned int, deterministic per string
    function strHash(s) {
        let h = 5381;
        for (const c of s) h = (Math.imul(h, 33) ^ c.charCodeAt(0)) >>> 0;
        return h;
    }

    // Returns a value in [-1, 1] unique to (key, clickN)
    function bias(key, clickN) {
        const h = strHash(key + String(clickN));
        return (h % 201 - 100) / 100;
    }

    // Animate stroke-dashoffset from full length → 0 over `duration` ms
    function animateDash(path, duration, easing) {
        const len = path.getTotalLength();
        path.style.strokeDasharray  = len;
        path.style.strokeDashoffset = len;
        path.style.transition =
            `stroke-dashoffset ${duration}ms ${easing || 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'}`;
        requestAnimationFrame(() => requestAnimationFrame(() => {
            path.style.strokeDashoffset = '0';
        }));
        return len;
    }

    // ── Core spawners ────────────────────────────────────────

    function spawnTendril(key, nx, ny) {
        const color  = NODE_COLORS[key] || '#6BADA8';
        const canvas = document.getElementById('canvas');
        const cw     = canvas.offsetWidth;
        const ch     = canvas.offsetHeight;
        const cx     = cw / 2;
        const cy     = ch / 2;

        const clickN = clickCounts[key];

        // Unit vector: node → center
        const dx   = cx - nx, dy = cy - ny;
        const dLen = Math.hypot(dx, dy) || 1;
        const Dx   = dx / dLen, Dy = dy / dLen;

        // Flower endpoint — past center, varies per click
        const extFrac = 0.15 + Math.abs(bias(key, clickN * 7)) * 0.20;
        const ex = cx + Dx * extFrac * cw;
        const ey = cy + Dy * extFrac * cw;

        // Connector start: point on the node-ring's circle edge facing the flower
        const RING_RADIUS = 34; // node-ring is 68px diameter
        const toDx  = ex - nx, toDy = ey - ny;
        const toDLen = Math.hypot(toDx, toDy) || 1;
        const startX = nx + (toDx / toDLen) * RING_RADIUS;
        const startY = ny + (toDy / toDLen) * RING_RADIUS;

        // ── Connector from circle edge → flower ──
        spawnConnector(startX, startY, ex, ey, cx, cy);

        // ── Flower blooms at endpoint ──
        setTimeout(() => spawnFlower(ex, ey, color), 200);

        tendrils.push({ endX: ex, endY: ey });
    }

    function spawnFlower(ex, ey, color) {
        // 3-layer structure avoids CSS transform conflicts:
        // posG  → SVG attribute translate (static position)
        // floatG → CSS animation: float + breath (added after bloom)
        // inner  → CSS transition: bloom scale 0→1
        const posG = ns('g');
        posG.setAttribute('transform', `translate(${ex}, ${ey})`);

        const floatG = ns('g');

        const inner = ns('g');
        inner.style.transformOrigin = '0px 0px';
        inner.style.transform       = 'scale(0)';
        inner.style.transition      = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';

        // 5 petals evenly spaced
        for (let i = 0; i < 5; i++) {
            const petal = ns('ellipse');
            petal.setAttribute('cx',             '0');
            petal.setAttribute('cy',             '-7');
            petal.setAttribute('rx',             '3');
            petal.setAttribute('ry',             '6');
            petal.setAttribute('fill',           color);
            petal.setAttribute('fill-opacity',   '0.60');
            petal.setAttribute('stroke',         color);
            petal.setAttribute('stroke-width',   '0.6');
            petal.setAttribute('stroke-opacity', '0.80');
            petal.setAttribute('transform',      `rotate(${i * 72})`);
            inner.appendChild(petal);
        }

        // Center dot
        const dot = ns('circle');
        dot.setAttribute('cx',           '0');
        dot.setAttribute('cy',           '0');
        dot.setAttribute('r',            '2.5');
        dot.setAttribute('fill',         color);
        dot.setAttribute('fill-opacity', '0.90');
        inner.appendChild(dot);

        floatG.appendChild(inner);
        posG.appendChild(floatG);
        svg.appendChild(posG);

        // Bloom
        requestAnimationFrame(() => requestAnimationFrame(() => {
            inner.style.transform = 'scale(1)';
        }));

        // After bloom completes, start float + breath animations with randomised timing
        setTimeout(() => {
            const floatDur  = (5.5 + Math.random() * 3.5).toFixed(1) + 's';
            const breathDur = (3.5 + Math.random() * 3.0).toFixed(1) + 's';
            const delay     = (Math.random() * 2.5).toFixed(1) + 's';
            floatG.style.animation =
                `gardenFloat ${floatDur} ease-in-out ${delay} infinite, ` +
                `gardenBreath ${breathDur} ease-in-out ${delay} infinite`;
        }, 450);
    }

    function spawnConnector(x1, y1, x2, y2, cx, cy) {
        // Quadratic bezier pulled slightly toward canvas center
        const cpx = (x1 + x2) / 2 + (cx - (x1 + x2) / 2) * 0.3;
        const cpy = (y1 + y2) / 2 + (cy - (y1 + y2) / 2) * 0.3;

        const p = ns('path');
        p.setAttribute('d',              `M ${x1},${y1} Q ${cpx},${cpy} ${x2},${y2}`);
        p.setAttribute('fill',           'none');
        p.setAttribute('stroke',         '#9BCFC9');
        p.setAttribute('stroke-width',   '0.7');
        p.setAttribute('stroke-opacity', '0.15');
        p.setAttribute('stroke-dasharray', '3 7');
        p.setAttribute('stroke-linecap', 'round');
        p.style.opacity    = '0';
        p.style.transition = 'opacity 800ms ease-in';
        svg.appendChild(p);

        requestAnimationFrame(() => requestAnimationFrame(() => {
            p.style.opacity = '1';
        }));
    }

    function spawnWildFlower() {
        const canvas = document.getElementById('canvas');
        const cw     = canvas.offsetWidth;
        const ch     = canvas.offsetHeight;
        const cx     = cw / 2;
        const cy     = ch / 2;

        const spawner     = document.getElementById('flower-spawner');
        const spawnerRect = spawner.getBoundingClientRect();
        const canvasRect  = canvas.getBoundingClientRect();
        const nx = spawnerRect.left + spawnerRect.width  / 2 - canvasRect.left;
        const ny = spawnerRect.top  + spawnerRect.height / 2 - canvasRect.top;

        // Random endpoint spread across the canvas
        const margin = 80;
        const ex = margin + Math.random() * (cw - margin * 2);
        const ey = margin + Math.random() * (ch - margin * 2);

        // Connector from spawner circle edge toward the flower
        const RING_RADIUS = 34;
        const toDx  = ex - nx, toDy = ey - ny;
        const toDLen = Math.hypot(toDx, toDy) || 1;
        const startX = nx + (toDx / toDLen) * RING_RADIUS;
        const startY = ny + (toDy / toDLen) * RING_RADIUS;

        const colors = ['#6BADA8', '#9BCFC9', '#DEAB94'];
        const color  = colors[Math.floor(Math.random() * colors.length)];

        spawnConnector(startX, startY, ex, ey, cx, cy);
        setTimeout(() => spawnFlower(ex, ey, color), 200);
        tendrils.push({ endX: ex, endY: ey });
    }

    // ── Initial flowers ──────────────────────────────────────

    function initFlowers() {
        if (window.innerWidth <= 700) return;

        const canvas = document.getElementById('canvas');
        const cw = canvas.offsetWidth;
        const ch = canvas.offsetHeight;

        // Positions chosen to fill gaps between the scattered node icons
        const seeds = [
            { tx: 0.44, ty: 0.18, color: '#9BCFC9' },
            { tx: 0.26, ty: 0.58, color: '#DEAB94' },
            { tx: 0.70, ty: 0.30, color: '#6BADA8' },
            { tx: 0.62, ty: 0.72, color: '#9BCFC9' },
            { tx: 0.16, ty: 0.78, color: '#DEAB94' },
        ];

        seeds.forEach((s, i) => {
            setTimeout(() => {
                spawnFlower(s.tx * cw, s.ty * ch, s.color);
            }, 300 + i * 420);
        });
    }

    // ── Event wiring ─────────────────────────────────────────

    document.querySelectorAll('[data-panel]').forEach(el => {
        el.addEventListener('click', () => {
            if (window.innerWidth <= 700) return;

            const key = el.dataset.panel;
            clickCounts[key] = (clickCounts[key] || 0) + 1;
            if (clickCounts[key] > 3) return;

            const rect   = el.getBoundingClientRect();
            const canvas = document.getElementById('canvas');
            const cr     = canvas.getBoundingClientRect();

            const nx = rect.left + rect.width  / 2 - cr.left;
            const ny = rect.top  + rect.height / 2 - cr.top;

            spawnTendril(key, nx, ny);
        });
    });

    const spawnerEl = document.getElementById('flower-spawner');
    if (spawnerEl) {
        spawnerEl.addEventListener('click', () => {
            if (window.innerWidth <= 700) return;
            spawnWildFlower();
        });
    }

    initFlowers();
})();
