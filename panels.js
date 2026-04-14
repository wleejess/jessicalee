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

// ── Panel groups ──────────────────────────────────────────
const INFO_KEYS       = new Set(['bio', 'edu', 'exp', 'contact', 'blog']);
const FULLSCREEN_KEYS = new Set(['fwca', 'sar', 'neutralize']);

// ── Shared SVG ────────────────────────────────────────────
const CLOSE_SVG = `
    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="1" y1="1" x2="8" y2="8"/><line x1="8" y1="1" x2="1" y2="8"/>
    </svg>`;

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
        const res  = await fetch(`notes/${slug}.md`);
        if (!res.ok) throw new Error(`${res.status}`);
        const html = marked.parse(await res.text());
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

// ─────────────────────────────────────────────────────────
// ── SIDE PANEL ────────────────────────────────────────────
// ─────────────────────────────────────────────────────────

const sidePanelEl  = document.getElementById('side-panel');
const sideContentEl = document.getElementById('side-content');
const sectionMap   = new Map();
let panelWidth     = 390;

function setSideW(open) {
    document.documentElement.style.setProperty('--side-w', open ? panelWidth + 'px' : '0px');
}

function openSideSection(key) {
    if (sectionMap.has(key)) {
        const existing = sectionMap.get(key);
        existing.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        existing.style.outline = '2px solid rgba(107,173,168,0.35)';
        setTimeout(() => existing.style.outline = '', 600);
        return;
    }

    const p = panels[key];
    if (!p) return;

    const section = document.createElement('div');
    section.className = 'side-section';
    section.dataset.key = key;
    section.innerHTML = `
        <div class="side-section-header">
            <span class="m-tag" style="${p.tagStyle}">${p.tag}</span>
            <span style="flex:1"></span>
            <button class="panel-close" aria-label="Close">${CLOSE_SVG}</button>
        </div>
        <h2 class="m-title">${p.title}</h2>
        ${p.html}
    `;

    section.querySelector('.panel-close').addEventListener('click', () => {
        section.classList.add('exiting');
        setTimeout(() => {
            section.remove();
            sectionMap.delete(key);
            if (sectionMap.size === 0) {
                sidePanelEl.classList.remove('open');
                setSideW(false);
            }
        }, 150);
    });

    sideContentEl.appendChild(section);
    sidePanelEl.classList.add('open');
    setSideW(true);
    sectionMap.set(key, section);

    if (p.init) {
        // find the title h2 and pass the section body as bodyEl
        const titleEl = section.querySelector('.m-title');
        p.init(section, titleEl);
    }
}

// ── Resize handle ─────────────────────────────────────────
const resizeEl = document.getElementById('side-panel-resize');

resizeEl.addEventListener('mousedown', e => {
    e.preventDefault();
    const startX = e.clientX;
    const startW = panelWidth;

    document.body.style.cursor    = 'col-resize';
    document.body.style.userSelect = 'none';
    // Disable transition while dragging
    sidePanelEl.style.transition = 'none';

    const onMove = e => {
        panelWidth = Math.max(280, Math.min(640, startW + (startX - e.clientX)));
        sidePanelEl.style.width = panelWidth + 'px';
        setSideW(sidePanelEl.classList.contains('open'));
    };

    const onUp = () => {
        document.body.style.cursor    = '';
        document.body.style.userSelect = '';
        sidePanelEl.style.transition  = '';
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup',   onUp);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup',   onUp);
});

// ─────────────────────────────────────────────────────────
// ── FULLSCREEN TAKEOVER ───────────────────────────────────
// ─────────────────────────────────────────────────────────

const overlayEl   = document.getElementById('project-overlay');
const overlayTag  = document.getElementById('project-overlay-tag');
const overlayBody = document.getElementById('project-overlay-body');

function openFullscreen(key) {
    const p = panels[key];
    if (!p) return;

    overlayTag.textContent   = p.tag;
    overlayTag.style.cssText = p.tagStyle;
    overlayBody.innerHTML    = `<h2 class="m-title">${p.title}</h2>${p.html}`;
    overlayBody.scrollTop    = 0;
    overlayEl.classList.add('open');

    if (p.init) {
        p.init(overlayBody, overlayBody.querySelector('.m-title'));
    }
}

function closeFullscreen() {
    overlayEl.classList.remove('open');
}

overlayEl.addEventListener('click', e => {
    if (e.target === overlayEl) closeFullscreen();
});
document.getElementById('project-overlay-close').addEventListener('click', closeFullscreen);

// ─────────────────────────────────────────────────────────
// ── DISPATCH ──────────────────────────────────────────────
// ─────────────────────────────────────────────────────────

document.querySelectorAll('[data-panel]').forEach(el => {
    el.addEventListener('click', () => {
        const key = el.dataset.panel;
        if      (INFO_KEYS.has(key))       openSideSection(key);
        else if (FULLSCREEN_KEYS.has(key)) openFullscreen(key);
    });
});
