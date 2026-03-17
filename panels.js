const panels = {
    bio: {
        tag: 'About',
        label: 'about',
        tagStyle: 'background:#EDF5F4;color:#4A8C88;',
        title: "Hi, I'm Jess.",
        html: `
            <p class="m-body">
                Science at the heart of everything I do. I live somewhere at the intersection between
                life science &amp; computer science — where curiosity meets code.
            </p>
            <hr class="m-divider"/>
            <p style="font-size:0.8125rem;color:#bbb;line-height:1.65;font-style:italic;">
                Previously: Research Associate @ Vertex Pharmaceuticals &middot;
                Analytical Methods &amp; Product Development @ Dare Bioscience &middot;
                Project Manager @ Augmedix
            </p>
        `
    },
    edu: {
        tag: 'Education',
        label: 'education',
        tagStyle: 'background:#FAF1EC;color:#B8724F;',
        title: 'Academic Background',
        html: `
            <div style="margin-top:1.375rem;">
                <div class="m-edu-item" style="border-color:#6BADA8;">
                    <p style="font-size:0.7rem;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:#4A8C88;font-family:'JetBrains Mono',monospace;">UC San Diego</p>
                    <p style="font-size:1.0625rem;font-weight:400;color:#1a1a1a;margin-top:0.3rem;">B.S. Nanoengineering</p>
                    <p style="font-size:0.875rem;color:#999;margin-top:0.125rem;">Minor in Chemistry</p>
                </div>
                <div class="m-edu-item" style="border-color:#DEAB94;">
                    <p style="font-size:0.7rem;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:#B8724F;font-family:'JetBrains Mono',monospace;">Oregon State University</p>
                    <p style="font-size:1.0625rem;font-weight:400;color:#1a1a1a;margin-top:0.3rem;">B.S. Computer Science</p>
                    <p style="font-size:0.875rem;color:#999;margin-top:0.125rem;">Post-baccalaureate</p>
                </div>
            </div>
        `
    },
    fwca: {
        tag: 'Project',
        label: 'forest wellness',
        tagStyle: 'background:#EEF8F7;color:#5A9E98;',
        title: 'Forestry Wellness Check-Up',
        html: `
            <p class="m-body">
                An iOS and Android compatible application that digitizes the process of surveying
                forests. Built as a capstone project, the cross-platform app helps field researchers
                log observations, track metrics, and assess ecosystem health over time.
            </p>
            <p class="m-body">
                Provider was used for state management, and SQFlite served as a lightweight local
                relational database — keeping the app functional even in areas with no connectivity.
            </p>
            <div class="m-tags">
                <span class="m-tag" style="background:#EEF8F7;color:#5A9E98;">Dart</span>
                <span class="m-tag" style="background:#EEF8F7;color:#5A9E98;">Flutter</span>
                <span class="m-tag" style="background:#EEF8F7;color:#5A9E98;">SQFlite</span>
                <span class="m-tag" style="background:#EEF8F7;color:#5A9E98;">Provider</span>
                <span class="m-tag" style="background:#EEF8F7;color:#5A9E98;">iOS &amp; Android</span>
            </div>
        `
    },
    sar: {
        tag: 'Project',
        label: 'sar analysis',
        tagStyle: 'background:#FAF1EC;color:#B8724F;',
        title: 'Structure-Activity Relationship Analysis',
        html: `
            <p class="m-body">
                A project at work generated ~5,000 data points per week — overwhelming existing
                visualization tools as points began to overlap. I built a data analysis pipeline
                to investigate structure-activity relationships in molecular datasets.
            </p>
            <p class="m-body">
                Applies statistical modeling and dimensionality reduction to surface patterns
                between molecular structure and biological activity.
            </p>
            <div class="m-tags">
                <span class="m-tag" style="background:#FAF1EC;color:#B8724F;">Python</span>
                <span class="m-tag" style="background:#FAF1EC;color:#B8724F;">R</span>
                <span class="m-tag" style="background:#FAF1EC;color:#B8724F;">Data Analysis</span>
                <span class="m-tag" style="background:#FAF1EC;color:#B8724F;">Cheminformatics</span>
            </div>
            <hr class="m-divider"/>
            <p style="font-size:0.75rem;color:#bbb;margin-bottom:0.5rem;font-family:'JetBrains Mono',monospace;letter-spacing:0.06em;">References</p>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6646408/" target="_blank" rel="noopener"
               style="display:block;font-size:0.8125rem;color:#B8724F;text-decoration:none;line-height:1.6;margin-bottom:0.25rem;"
               onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">
                Finding Constellations in Chemical Space Through Core Analysis ↗
            </a>
            <a href="https://www.nature.com/articles/s41586-018-0056-8" target="_blank" rel="noopener"
               style="display:block;font-size:0.8125rem;color:#B8724F;text-decoration:none;line-height:1.6;"
               onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">
                Nanoscale Synthesis and Affinity Ranking ↗
            </a>
        `
    },
    chem: {
        tag: 'Project',
        label: 'chemystery',
        tagStyle: 'background:#EEF8F7;color:#5A9E98;',
        title: 'Chemystery Resolver',
        html: `
            <p class="m-body">
                A Chrome extension that lets users highlight any IUPAC chemical name in their browser
                and instantly see a pop-up with the 2D structure, molecular weight, and molecular
                formula. Born from the exact frustration it solves.
            </p>
            <p class="m-body" style="color:#bbb;font-style:italic;">Work in progress.</p>
            <div style="margin-top:1.25rem;padding:1rem 1.125rem;border-radius:10px;background:#fafaf6;border:1px solid #eeede6;">
                <p style="font-size:0.7rem;font-family:'JetBrains Mono',monospace;color:#bbb;letter-spacing:0.08em;margin-bottom:0.75rem;">Progress</p>
                <div style="display:flex;flex-direction:column;gap:0.55rem;">
                    <div style="display:flex;align-items:center;gap:0.625rem;font-size:0.875rem;color:#555;">
                        <span style="width:16px;height:16px;flex-shrink:0;border-radius:50%;background:#9BCFC9;display:flex;align-items:center;justify-content:center;">
                            <svg width="9" height="7" viewBox="0 0 9 7" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1,3.5 3,6 8,1"/></svg>
                        </span>
                        Detect &amp; capture highlighted text
                    </div>
                    <div style="display:flex;align-items:center;gap:0.625rem;font-size:0.875rem;color:#555;">
                        <span style="width:16px;height:16px;flex-shrink:0;border-radius:50%;background:#9BCFC9;display:flex;align-items:center;justify-content:center;">
                            <svg width="9" height="7" viewBox="0 0 9 7" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1,3.5 3,6 8,1"/></svg>
                        </span>
                        Display pop-up on text selection
                    </div>
                    <div style="display:flex;align-items:center;gap:0.625rem;font-size:0.875rem;color:#bbb;">
                        <span style="width:16px;height:16px;flex-shrink:0;border-radius:50%;background:#eee;display:flex;align-items:center;justify-content:center;">
                            <svg width="7" height="2" viewBox="0 0 7 2" fill="none" stroke="#ccc" stroke-width="2" stroke-linecap="round"><line x1="0.5" y1="1" x2="6.5" y2="1"/></svg>
                        </span>
                        API: chemical name → structure image
                    </div>
                </div>
            </div>
            <div class="m-tags">
                <span class="m-tag" style="background:#EEF8F7;color:#5A9E98;">JavaScript</span>
                <span class="m-tag" style="background:#EEF8F7;color:#5A9E98;">Chrome Extension</span>
                <span class="m-tag" style="background:#EEF8F7;color:#5A9E98;">HTML/CSS</span>
            </div>
        `
    },
    blog: {
        tag: 'Notes',
        label: 'notes',
        tagStyle: 'background:#EDF5F4;color:#4A8C88;',
        title: 'Sparknotes to Myself',
        html: `
            <p class="m-body">
                Thoughts on science, software, and the space between — notes I find worth keeping.
            </p>
            <div style="margin-top:1.25rem;display:flex;flex-direction:column;gap:0.75rem;">
                <div style="padding:0.875rem 1rem;border-radius:10px;border:1px solid rgba(107,173,168,0.18);background:#fafaf8;">
                    <p style="font-size:0.7rem;font-family:'JetBrains Mono',monospace;color:#bbb;letter-spacing:0.08em;margin-bottom:0.35rem;">coming soon</p>
                    <p style="font-size:0.9rem;color:#aaa;font-style:italic;line-height:1.65;">
                        More to come here — stay tuned.
                    </p>
                </div>
            </div>
        `
    },
    contact: {
        tag: 'Contact',
        label: 'contact',
        tagStyle: 'background:#EDF5F4;color:#4A8C88;',
        title: "Let's connect.",
        html: `
            <p class="m-body">Interested in collaboration, opportunities, or just want to talk science and code?</p>
            <div style="margin-top:1.375rem;display:flex;flex-direction:column;">
                <a class="m-link" href="mailto:jess.wslee@gmail.com"
                   style="color:#4A8C88;border-color:rgba(107,173,168,0.25);"
                   onmouseover="this.style.background='#EDF5F4'" onmouseout="this.style.background='transparent'">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2.5"/><polyline points="2,7.5 12,14 22,7.5"/>
                    </svg>
                    jess.wslee@gmail.com
                </a>
                <a class="m-link" href="https://github.com/wleejess" target="_blank" rel="noopener"
                   style="color:#1a1a1a;border-color:rgba(0,0,0,0.1);"
                   onmouseover="this.style.background='#f5f5f0'" onmouseout="this.style.background='transparent'">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    github.com/wleejess
                </a>
                <a class="m-link" href="https://www.linkedin.com/in/wleejessica/" target="_blank" rel="noopener"
                   style="color:#0077b5;border-color:rgba(0,119,181,0.18);"
                   onmouseover="this.style.background='#f0f8ff'" onmouseout="this.style.background='transparent'">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    linkedin.com/in/wleejessica
                </a>
            </div>
        `
    }
};

// ── Floating draggable panels ────────────────────────────
const openPanels = new Map(); // key → el
let zTop = 50;
let spawnCount = 0; // drives cascade offset

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

    // Mouse
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

    // Touch
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
    // Already open → just bring it to front
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

    // Cascade position: stack from right side, offset each new panel
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

    // Clicking anywhere on the panel brings it to front
    el.addEventListener('mousedown', () => bringToFront(el), true);

    makeDraggable(el);
    document.body.appendChild(el);
    openPanels.set(key, el);
}

document.querySelectorAll('[data-panel]').forEach(el => {
    el.addEventListener('click', () => openPanel(el.dataset.panel));
});
