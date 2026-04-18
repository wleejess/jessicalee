(function () {
    'use strict';

    const SEEDS = [
        { tx: 0.22, ty: 0.18, color: '#9BCFC9' },
        { tx: 0.68, ty: 0.12, color: '#DEAB94' },
        { tx: 0.80, ty: 0.48, color: '#6BADA8' },
        { tx: 0.15, ty: 0.58, color: '#DEAB94' },
        { tx: 0.55, ty: 0.72, color: '#9BCFC9' },
        { tx: 0.38, ty: 0.42, color: '#6BADA8' },
    ];

    let flowerPositions = [];
    let lastPair = null;

    function ns(tag) {
        return document.createElementNS('http://www.w3.org/2000/svg', tag);
    }

    function spawnFlower(svg, ex, ey, color, delay) {
        const posG = ns('g');
        posG.setAttribute('transform', `translate(${ex}, ${ey})`);

        const floatG = ns('g');
        const inner = ns('g');
        inner.style.transformOrigin = '0px 0px';
        inner.style.transform = 'scale(0)';
        inner.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';

        for (let i = 0; i < 5; i++) {
            const petal = ns('ellipse');
            petal.setAttribute('cx', '0');
            petal.setAttribute('cy', '-7');
            petal.setAttribute('rx', '3');
            petal.setAttribute('ry', '6');
            petal.setAttribute('fill', color);
            petal.setAttribute('fill-opacity', '0.60');
            petal.setAttribute('stroke', color);
            petal.setAttribute('stroke-width', '0.6');
            petal.setAttribute('stroke-opacity', '0.80');
            petal.setAttribute('transform', `rotate(${i * 72})`);
            inner.appendChild(petal);
        }

        const dot = ns('circle');
        dot.setAttribute('cx', '0');
        dot.setAttribute('cy', '0');
        dot.setAttribute('r', '2.5');
        dot.setAttribute('fill', color);
        dot.setAttribute('fill-opacity', '0.90');
        inner.appendChild(dot);

        floatG.appendChild(inner);
        posG.appendChild(floatG);
        svg.appendChild(posG);

        setTimeout(() => {
            requestAnimationFrame(() => requestAnimationFrame(() => {
                inner.style.transform = 'scale(1)';
            }));
            setTimeout(() => {
                const floatDur  = (5.5 + Math.random() * 3.5).toFixed(1) + 's';
                const breathDur = (3.5 + Math.random() * 3.0).toFixed(1) + 's';
                const animDelay = (Math.random() * 2.5).toFixed(1) + 's';
                floatG.style.animation =
                    `gardenFloat ${floatDur} ease-in-out ${animDelay} infinite, ` +
                    `gardenBreath ${breathDur} ease-in-out ${animDelay} infinite`;
            }, 450);
        }, delay);
    }

    // Pick a random pair different from the last one
    function randomPair(n, last) {
        let a, b;
        let attempts = 0;
        do {
            a = Math.floor(Math.random() * n);
            b = Math.floor(Math.random() * n);
            attempts++;
        } while (
            a === b ||
            (last && attempts < 20 && last.a === a && last.b === b)
        );
        return { a, b };
    }

    function clearLines(svg) {
        svg.querySelectorAll('.constellation-line').forEach(el => {
            el.style.transition = 'opacity 200ms ease';
            el.style.opacity = '0';
            setTimeout(() => el.remove(), 210);
        });
    }

    // Draws a line from positions[pair.a] → positions[pair.b], animating the stroke
    function drawLine(svg, positions, pair) {
        const p1 = positions[pair.a];
        const p2 = positions[pair.b];

        // Slight quadratic bow so the line has character
        const bow = 18;
        const perp = { x: -(p2.y - p1.y), y: p2.x - p1.x };
        const perpLen = Math.hypot(perp.x, perp.y) || 1;
        const mx = (p1.x + p2.x) / 2 + (perp.x / perpLen) * bow * (Math.random() < 0.5 ? 1 : -1);
        const my = (p1.y + p2.y) / 2 + (perp.y / perpLen) * bow * (Math.random() < 0.5 ? 1 : -1);

        const path = ns('path');
        path.setAttribute('d', `M ${p1.x},${p1.y} Q ${mx},${my} ${p2.x},${p2.y}`);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', '#6BADA8');
        path.setAttribute('stroke-width', '0.85');
        path.setAttribute('stroke-opacity', '0.55');
        path.setAttribute('stroke-linecap', 'round');
        path.classList.add('constellation-line');
        svg.insertBefore(path, svg.firstChild);

        // Animate: dashoffset from full length → 0, tracing p1 → p2
        requestAnimationFrame(() => {
            const len = path.getTotalLength();
            path.style.strokeDasharray = len;
            path.style.strokeDashoffset = len;
            path.style.transition = 'stroke-dashoffset 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            requestAnimationFrame(() => { path.style.strokeDashoffset = '0'; });
        });
    }

    function init() {
        const frame = document.getElementById('about-canvas-frame');
        if (!frame) return;

        const svg = frame.querySelector('#about-garden');
        const connectBtn = document.getElementById('about-connect-btn');
        const connectLabel = connectBtn && connectBtn.querySelector('.connect-label');
        if (!svg || !connectBtn) return;

        const w = frame.offsetWidth;
        const h = frame.offsetHeight;
        flowerPositions = SEEDS.map(s => ({ x: s.tx * w, y: s.ty * h }));
        SEEDS.forEach((s, i) => {
            spawnFlower(svg, s.tx * w, s.ty * h, s.color, i * 180);
        });

        connectBtn.addEventListener('click', () => {
            const pair = randomPair(flowerPositions.length, lastPair);
            lastPair = pair;
            drawLine(svg, flowerPositions, pair);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
