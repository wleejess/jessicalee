import { infoPanels }    from './data/info.js';
import { projectPanels } from './data/projects.js';
import { notesMeta, noteEntries } from './data/notes.js';

// ── Panel registry ────────────────────────────────────────
const panels = {
    ...infoPanels,
    ...projectPanels,
    blog: {
        tag:      notesMeta.tag,
        tagStyle: notesMeta.tagStyle,
        title:    notesMeta.title,
        html:     '',
        init(bodyEl, titleEl) {
            renderNotesList(bodyEl, titleEl);
        }
    }
};

// ── Notes: list view ─────────────────────────────────────
function renderNotesList(bodyEl, titleEl) {
    titleEl.textContent = notesMeta.title;

    const isEmpty = noteEntries.length === 0;
    bodyEl.innerHTML = `
        <p class="m-body">Thoughts on science, software, and the space between — notes I find worth keeping.</p>
        <div style="margin-top:1.25rem;display:flex;flex-direction:column;gap:0.75rem;">
            ${isEmpty ? `
                <div style="padding:0.875rem 1rem;border-radius:10px;border:1px solid rgba(107,173,168,0.18);background:#fafaf8;">
                    <p style="font-size:0.7rem;font-family:'JetBrains Mono',monospace;color:#bbb;letter-spacing:0.08em;margin-bottom:0.35rem;">coming soon</p>
                    <p style="font-size:0.9rem;color:#aaa;font-style:italic;line-height:1.65;">More to come here — stay tuned.</p>
                </div>
            ` : noteEntries.map(entry => `
                <div class="note-card" data-slug="${entry.slug}"
                     style="cursor:pointer;padding:0.875rem 1rem;border-radius:10px;border:1px solid rgba(107,173,168,0.18);background:#fafaf8;transition:background 0.15s;">
                    <p style="font-size:0.65rem;font-family:'JetBrains Mono',monospace;color:#bbb;letter-spacing:0.08em;margin-bottom:0.35rem;">${entry.date}</p>
                    <p style="font-size:0.9375rem;font-weight:500;color:#1a1a1a;">${entry.title}</p>
                    <p style="font-size:0.875rem;color:#aaa;line-height:1.6;margin-top:0.3rem;">${entry.preview}</p>
                    <p style="font-size:0.75rem;color:#4A8C88;margin-top:0.625rem;font-family:'JetBrains Mono',monospace;">read →</p>
                </div>
            `).join('')}
        </div>
    `;

    bodyEl.querySelectorAll('.note-card').forEach(card => {
        card.addEventListener('mouseenter', () => card.style.background = '#EDF5F4');
        card.addEventListener('mouseleave', () => card.style.background = '#fafaf8');
        card.addEventListener('click', () => loadNote(card.dataset.slug, bodyEl, titleEl));
    });
}

// ── Notes: post view ─────────────────────────────────────
async function loadNote(slug, bodyEl, titleEl) {
    bodyEl.innerHTML = `<p style="color:#bbb;font-size:0.875rem;margin-top:1rem;font-family:'JetBrains Mono',monospace;">loading...</p>`;

    try {
        const res = await fetch(`notes/${slug}.md`);
        if (!res.ok) throw new Error(`${res.status}`);
        const md  = await res.text();
        const html = marked.parse(md);
        const entry = noteEntries.find(e => e.slug === slug);
        if (entry) titleEl.textContent = entry.title;

        bodyEl.innerHTML = `
            <button class="note-back" style="display:inline-flex;align-items:center;gap:0.4rem;margin-bottom:1.25rem;font-size:0.75rem;font-family:'JetBrains Mono',monospace;color:#4A8C88;background:none;border:none;cursor:pointer;padding:0;letter-spacing:0.04em;">
                ← all notes
            </button>
            <div class="note-body">${html}</div>
        `;
        bodyEl.querySelector('.note-back').addEventListener('click', () => renderNotesList(bodyEl, titleEl));
    } catch {
        bodyEl.innerHTML = `
            <button class="note-back" style="display:inline-flex;align-items:center;gap:0.4rem;margin-bottom:1rem;font-size:0.75rem;font-family:'JetBrains Mono',monospace;color:#4A8C88;background:none;border:none;cursor:pointer;padding:0;">
                ← all notes
            </button>
            <p style="color:#bbb;font-size:0.875rem;">Couldn't load this note. Make sure the site is served over HTTP (not file://).</p>
        `;
        bodyEl.querySelector('.note-back').addEventListener('click', () => renderNotesList(bodyEl, titleEl));
    }
}

// ── Floating draggable panels ─────────────────────────────
const openPanels = new Map();
let zTop = 50;
let spawnCount = 0;

function bringToFront(el) {
    el.style.zIndex = ++zTop;
}

function makeDraggable(el) {
    const handle = el.querySelector('.panel-handle');
    let sx, sy, ox, oy;

    function startDrag(cx, cy) {
        const r = el.getBoundingClientRect();
        ox = r.left; oy = r.top;
        sx = cx;     sy = cy;
        el.style.left   = ox + 'px';
        el.style.top    = oy + 'px';
        el.style.right  = 'auto';
        el.style.bottom = 'auto';
        bringToFront(el);
    }
    function moveDrag(cx, cy) {
        el.style.left = (ox + cx - sx) + 'px';
        el.style.top  = (oy + cy - sy) + 'px';
    }

    handle.addEventListener('mousedown', e => {
        if (e.target.closest('.panel-close')) return;
        e.preventDefault();
        startDrag(e.clientX, e.clientY);
        const mm = e2 => moveDrag(e2.clientX, e2.clientY);
        const mu = () => {
            document.removeEventListener('mousemove', mm);
            document.removeEventListener('mouseup', mu);
        };
        document.addEventListener('mousemove', mm);
        document.addEventListener('mouseup', mu);
    });

    handle.addEventListener('touchstart', e => {
        if (e.target.closest('.panel-close')) return;
        const t = e.touches[0];
        startDrag(t.clientX, t.clientY);
        const tm = e2 => { e2.preventDefault(); const t2 = e2.touches[0]; moveDrag(t2.clientX, t2.clientY); };
        const tu = () => {
            handle.removeEventListener('touchmove', tm);
            handle.removeEventListener('touchend', tu);
        };
        handle.addEventListener('touchmove', tm, { passive: false });
        handle.addEventListener('touchend', tu);
    }, { passive: true });
}

function openPanel(key) {
    if (openPanels.has(key)) {
        bringToFront(openPanels.get(key));
        return;
    }

    const p = panels[key];
    if (!p) return;

    const el = document.createElement('div');
    el.className = 'panel';

    el.innerHTML = `
        <div class="panel-handle">
            <svg class="panel-grip" width="10" height="8" viewBox="0 0 10 8" fill="currentColor">
                <circle cx="2" cy="2" r="1.2"/><circle cx="5" cy="2" r="1.2"/><circle cx="8" cy="2" r="1.2"/>
                <circle cx="2" cy="6" r="1.2"/><circle cx="5" cy="6" r="1.2"/><circle cx="8" cy="6" r="1.2"/>
            </svg>
            <span class="m-tag" style="${p.tagStyle}">${p.tag}</span>
            <span style="flex:1"></span>
            <button class="panel-close" aria-label="Close">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <line x1="1" y1="1" x2="8" y2="8"/><line x1="8" y1="1" x2="1" y2="8"/>
                </svg>
            </button>
        </div>
        <div class="panel-body">
            <h2 class="m-title">${p.title}</h2>
            ${p.html}
        </div>
    `;

    const W   = 755;
    const off = (spawnCount % 7) * 24;
    el.style.width  = W + 'px';
    el.style.left   = (window.innerWidth - W - 24 - off) + 'px';
    el.style.top    = (76 + off) + 'px';
    el.style.zIndex = ++zTop;
    spawnCount++;

    el.querySelector('.panel-close').addEventListener('click', () => {
        el.remove();
        openPanels.delete(key);
    });

    el.addEventListener('mousedown', () => bringToFront(el), true);

    makeDraggable(el);
    document.body.appendChild(el);
    openPanels.set(key, el);

    // Run any panel-specific init (e.g. notes list rendering)
    if (p.init) {
        const bodyEl  = el.querySelector('.panel-body');
        const titleEl = bodyEl.querySelector('.m-title');
        p.init(bodyEl, titleEl);
    }
}

document.querySelectorAll('[data-panel]').forEach(el => {
    el.addEventListener('click', () => openPanel(el.dataset.panel));
});
