export const projectPanels = {
    fwca: {
        tag: 'Project',
        tagStyle: 'background:#EDF5F4;color:#4A8C88;',
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
                <span class="m-tag" style="background:#EDF5F4;color:#4A8C88;">Dart</span>
                <span class="m-tag" style="background:#EDF5F4;color:#4A8C88;">Flutter</span>
                <span class="m-tag" style="background:#EDF5F4;color:#4A8C88;">SQFlite</span>
                <span class="m-tag" style="background:#EDF5F4;color:#4A8C88;">Provider</span>
                <span class="m-tag" style="background:#EDF5F4;color:#4A8C88;">iOS &amp; Android</span>
            </div>
        `
    },
    orbic: {
        tag: 'Project',
        tagStyle: 'background:#EDF5F4;color:#4A8C88;',
        title: 'orbIC',
        html: `
            <p class="m-body" style="font-style:italic;color:#999;">Finding constellations in chemical space.</p>

            <div class="cs-meta">
                <div class="cs-meta-cell"><div class="cs-meta-label">Role</div><div class="cs-meta-value">Solo · Engineering + Design</div></div>
                <div class="cs-meta-cell"><div class="cs-meta-label">Stack</div><div class="cs-meta-value">React · D3 · OpenChemLib</div></div>
                <div class="cs-meta-cell"><div class="cs-meta-label">Timeline</div><div class="cs-meta-value">Ongoing</div></div>
                <div class="cs-meta-cell"><div class="cs-meta-label">Status</div><div class="cs-meta-value"><span class="cs-pulse"></span>Active · v2.0</div></div>
            </div>

            <div class="cs-badges">
                <span class="cs-badge cs-badge-acc">4,147 Compounds</span>
                <span class="cs-badge cs-badge-acc">TMAP · MST Layout</span>
                <span class="cs-badge cs-badge-acc">SMARTS Search</span>
                <span class="cs-badge">No Backend</span>
                <span class="cs-badge">MIT License</span>
                <span class="cs-badge">ChEMBL · openADMET</span>
            </div>

            <div class="cs-eyebrow">01 — The Problem</div>
            <h3 class="cs-h2">Scatter plots overlay. Structure disappears. Clusters become invisible.</h3>
            <p class="cs-p">When you plot MW against IC₅₀ on an X/Y axis, you get overplotting. Hundreds of compounds pile on top of each other, their structural relationships gone. You can't see that a cluster shares a scaffold — or the activity cliff where one fluorine substitution drops potency 10×.</p>
            <p class="cs-p">Tools that solve this — Schrödinger Suite, Pipeline Pilot, StarDrop — require expensive licenses and local installation. orbIC uses TMAP, a minimum spanning tree built on Tanimoto kNN similarity, so structurally related compounds stay adjacent regardless of absolute property values.</p>
            <div class="cs-quote">
                <p>Traditional XY scatter: axis-bound, overplotted, structurally blind.<br>orbIC: topology-preserving, filterable, zero-install.</p>
                <div class="cs-quote-label">The core distinction</div>
            </div>
            <div class="cs-tag-row">
                <span class="cs-tag">Hit-to-Lead</span>
                <span class="cs-tag">Lead Optimization</span>
                <span class="cs-tag">SAR Analysis</span>
                <span class="cs-tag">Activity Cliffs</span>
                <span class="cs-tag">Scaffold Hopping</span>
                <span class="cs-tag">Open Access</span>
            </div>

            <div class="cs-eyebrow">02 — How It Works</div>
            <h3 class="cs-h2">Filter. Navigate. Inspect. One coherent workspace.</h3>
            <div class="cs-panels">
                <div class="cs-panel-cell">
                    <div class="cs-panel-num">Panel 01 — Filter</div>
                    <div class="cs-panel-title">Property Filters</div>
                    <div class="cs-panel-desc">Range sliders for MW, LogP, PSA, pEC50. SMARTS substructure search. Name and SMILES input. Real-time graph redraw as filters move.</div>
                </div>
                <div class="cs-panel-cell">
                    <div class="cs-panel-num">Panel 02 — Navigate</div>
                    <div class="cs-panel-title">TMAP Chemical Space</div>
                    <div class="cs-panel-desc">MST layout positions compounds by structural similarity. Filtered hits, substructure matches, and scaffolds rendered in distinct hues. Zoom, pan, click to select.</div>
                </div>
                <div class="cs-panel-cell">
                    <div class="cs-panel-num">Panel 03 — Inspect</div>
                    <div class="cs-panel-title">Compound Detail</div>
                    <div class="cs-panel-desc">2D structure render, full property table (pEC50, MW, LogP, PSA), structure-activity analysis, scaffold similarity score, and save to list.</div>
                </div>
            </div>
            <div class="cs-cards">
                <div class="cs-card"><div class="cs-card-label">TMAP / MST Layout</div><p>Tanimoto kNN similarity over ECFP4 fingerprints builds a minimum spanning tree where structural neighbors stay adjacent. Inspired by Chemical Space Networks (Heikamp &amp; Bajorath, 2019).</p></div>
                <div class="cs-card"><div class="cs-card-label">SMARTS Substructure Search</div><p>Client-side substructure matching via OpenChemLib WebAssembly. Search by SMARTS, SMILES, name, or formula — results highlight on the graph instantly.</p></div>
                <div class="cs-card"><div class="cs-card-label">Import Any Dataset</div><p>Upload CSV with a SMILES column. Three bundled open datasets ship precomputed: Demo Pharmacology Set (ChEMBL CC0), COX Inhibitor SAR Series (Mitchell et al., PNAS 1993), PXR Challenge Train Split (openADMET, 4,139 cpds).</p></div>
                <div class="cs-card"><div class="cs-card-label">Lead-Orbit View</div><p>Centers a parent molecule and renders all derivatives as orbiting satellites — the celestial metaphor made literal. Potency delta is encoded in orbital position relative to the parent.</p></div>
            </div>

            <div class="cs-eyebrow">On the Name</div>
            <h3 class="cs-h2">orbit + IC₅₀</h3>
            <p class="cs-p">IC₅₀ — the half-maximal inhibitory concentration — is the primary potency anchor. Compounds orbit their scaffolds. The dark interface isn't decorative. It's the sky the constellations need to become visible.</p>
            <div class="cs-etym">
                <div class="cs-etym-row"><span class="cs-etym-key">orb</span><span class="cs-etym-sep">──</span><span class="cs-etym-val">orbital · spatial · celestial navigation</span></div>
                <div class="cs-etym-row"><span class="cs-etym-key">IC</span><span class="cs-etym-sep">──</span><span class="cs-etym-val">IC₅₀ · inhibitory concentration · potency anchor</span></div>
                <div class="cs-etym-row"><span class="cs-etym-key">orbIC</span><span class="cs-etym-sep">──</span><span class="cs-etym-val">navigate potency space as a starfield</span></div>
            </div>

            <div class="cs-eyebrow">03 — Process</div>
            <h3 class="cs-h2">The browser crashed. Here's the diagnosis.</h3>
            <p class="cs-p">Loading the PXR Challenge dataset — 4,139 compounds — froze the browser. Three compounding problems across the import pipeline, graph construction, and filter callbacks.</p>
            <div class="cs-dark">
                <div class="cs-dark-label">Diagnosis — Three Compounding Causes</div>
                <div class="cs-diag">
                    <div class="cs-diag-title">Cause 01 — Synchronous OCL on the main thread</div>
                    <div class="cs-diag-desc"><span class="cs-ci">parseCsvToCompounds</span> ran OpenChemLib 5–6× per compound inside a blocking callback. 4,139 × 6 = ~25,000 blocking OCL ops with no browser repaint opportunity.</div>
                </div>
                <div class="cs-diag">
                    <div class="cs-diag-title">Cause 02 — O(n²) scaffold graph construction</div>
                    <div class="cs-diag-desc"><span class="cs-ci">TMap.graphData</span> ran SSSearcher + kNN for every scaffold pair immediately after import. At 150 scaffolds: 22,350 synchronous OCL calls.</div>
                </div>
                <div class="cs-diag">
                    <div class="cs-diag-title">Cause 03 — Query fingerprint recomputed per compound</div>
                    <div class="cs-diag-desc"><span class="cs-ci">processSmiles(similarityQuery)</span> was called inside the per-compound filter callback — parsing the same SMILES 4,139 times per slider move.</div>
                </div>
            </div>
            <div class="cs-dark" style="margin-top:0.5rem;">
                <div class="cs-dark-label">Fixes Applied — v2</div>
                <table class="cs-dark-table">
                    <thead><tr><th>Fix</th><th>What it does</th></tr></thead>
                    <tbody>
                        <tr><td>Precomputed sidecar</td><td>Bundled datasets ship with <span class="cs-ci">.precomputed.json</span> — scaffold, fingerprint index, MW, LogP, PSA. Near-instant load, zero OCL at runtime.</td></tr>
                        <tr><td>Chunked async OCL</td><td>50 rows per tick via <span class="cs-ci">setTimeout(0)</span>. Browser stays responsive; shows "Processing N / total."</td></tr>
                        <tr><td>Scaffold cap</td><td>Keeps 150 highest-membership scaffolds. Prevents O(n²) lock-up while preserving meaningful topology.</td></tr>
                        <tr><td>Remove SSSearcher</td><td>Eliminated 22,350 synchronous OCL calls per import. kNN Tanimoto edges alone produce an equivalent MST.</td></tr>
                        <tr><td>O(1) compound lookup</td><td>Replaced <span class="cs-ci">compounds.find()</span> with a pre-built <span class="cs-ci">Map&lt;id,Compound&gt;</span>. Eliminates ~17M string comparisons per import.</td></tr>
                        <tr><td>Hoist query fingerprint</td><td>Moved <span class="cs-ci">processSmiles()</span> to its own <span class="cs-ci">useMemo</span> — runs once per query change, not 4,139× per slider move.</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="cs-eyebrow">04 — Design Decisions</div>
            <h3 class="cs-h2">The choices that shaped the product.</h3>
            <table class="cs-table">
                <thead><tr><th>Decision</th><th>What I chose and why</th></tr></thead>
                <tbody>
                    <tr><td>TMAP over scatter</td><td>TMAP MST preserves structural topology — compounds that are structurally similar stay adjacent. Scatter plots overplot at scale; UMAP loses interpretability.</td></tr>
                    <tr><td>Dark obsidian UI</td><td>Research sessions run long. Dark mode reduces fatigue and creates contrast for colored nodes. The celestial metaphor only works on a dark canvas.</td></tr>
                    <tr><td>Client-side only</td><td>Pharmaceutical compound libraries are proprietary. No backend means no data leaves the browser. Zero infrastructure cost, instant deploys.</td></tr>
                    <tr><td>Bundled open datasets</td><td>Real, cited literature data (ChEMBL CC0, Mitchell et al. PNAS 1993, openADMET) makes the demo scientifically credible from first load.</td></tr>
                    <tr><td>Precomputed sidecars</td><td>Moves all heavy chemistry to build time. Runtime is pure data rendering — near-instant at 4,139 compounds.</td></tr>
                </tbody>
            </table>

            <div class="cs-eyebrow">05 — What I Learned</div>
            <div class="cs-cards">
                <div class="cs-card"><div class="cs-card-label">On browser performance</div><p>The bottleneck wasn't rendering — it was domain-specific computation. OCL operations are expensive in ways that don't appear in standard JS profiling intuition. The fix required tracing the full import pipeline.</p></div>
                <div class="cs-card"><div class="cs-card-label">On layout algorithm choice</div><p>UMAP produces compelling projections but sacrifices interpretability. A researcher can't explain why two compounds are adjacent in UMAP space. The MST layout's logic is transparent: nodes are close because their Tanimoto scores are high.</p></div>
                <div class="cs-card"><div class="cs-card-label">On the privacy argument</div><p>Researchers at pharma companies can't upload lead candidates to a third-party server. "No data leaves the browser" is a genuine product feature — impossible to add retroactively once a backend exists.</p></div>
            </div>

            <div class="cs-eyebrow">06 — Outcomes</div>
            <h3 class="cs-h2">Shipped. Open source. Ongoing.</h3>
            <div class="cs-stats">
                <div class="cs-stat"><div class="cs-stat-num">4,147</div><div class="cs-stat-label">Compounds navigable</div></div>
                <div class="cs-stat"><div class="cs-stat-num">3</div><div class="cs-stat-label">Bundled open datasets</div></div>
                <div class="cs-stat"><div class="cs-stat-num">7</div><div class="cs-stat-label">Performance fixes in v2</div></div>
                <div class="cs-stat"><div class="cs-stat-num">0</div><div class="cs-stat-label">Server dependencies</div></div>
            </div>
            <div class="cs-roadmap">
                <div class="cs-roadmap-item"><span class="cs-roadmap-badge">Planned</span><p class="cs-roadmap-text"><strong>Web Worker for OCL</strong> — Move all OpenChemLib computation off the main thread. UI stays fully interactive during large custom imports.</p></div>
                <div class="cs-roadmap-item"><span class="cs-roadmap-badge">Planned</span><p class="cs-roadmap-text"><strong>Incremental TMAP updates</strong> — Recolor nodes on filter changes rather than re-running the full D3 force simulation.</p></div>
                <div class="cs-roadmap-item"><span class="cs-roadmap-badge future">Future</span><p class="cs-roadmap-text"><strong>LSH fingerprint index</strong> — Sub-linear similarity search at 10k+ compounds.</p></div>
            </div>
            <div class="cs-ctas">
                <a class="cs-btn cs-btn-primary" href="https://wleejess.github.io/orbIC/" target="_blank" rel="noopener">live demo ↗</a>
                <a class="cs-btn cs-btn-outline" href="https://github.com/wleejess/orbIC" target="_blank" rel="noopener">github ↗</a>
            </div>
        `
    },
    neutralize: {
        tag: 'Project',
        tagStyle: 'background:#EDF5F4;color:#4A8C88;',
        title: 'Neutralize',
        html: `
            <div class="cs-meta">
                <div class="cs-meta-cell"><div class="cs-meta-label">Role</div><div class="cs-meta-value">Solo · Engineering + Design + PM</div></div>
                <div class="cs-meta-cell"><div class="cs-meta-label">Stack</div><div class="cs-meta-value">Chrome MV3 · React · Claude API</div></div>
                <div class="cs-meta-cell"><div class="cs-meta-label">Timeline</div><div class="cs-meta-value">~2 weeks, casual</div></div>
                <div class="cs-meta-cell"><div class="cs-meta-label">Status</div><div class="cs-meta-value" style="color:#6ABFAA;">◈ Active</div></div>
            </div>

            <div class="cs-eyebrow">01 — The Problem</div>
            <h3 class="cs-h2">We read persuasive language constantly. Most of it goes unnoticed.</h3>
            <p class="cs-p">News articles, social media, political coverage, corporate press releases — they're full of rhetorical devices designed to shape how we think. Loaded language, emotional appeals, false presuppositions, artificial urgency.</p>
            <p class="cs-p">The problem isn't that persuasion exists. It's that most readers don't have a way to see it happening in real time, on the page they're already reading.</p>
            <div class="cs-callout">
                <p>"The radical regime has <em>completely</em> failed its citizens — and <em>obviously</em>, any reasonable person can see this <em>devastating</em> policy must be stopped now."</p>
                <cite>Every article, every day — annotated below</cite>
            </div>

            <div class="cs-eyebrow">02 — How It Works</div>
            <h3 class="cs-h2">Highlight. Analyze. Rewrite.</h3>
            <p class="cs-p">Select any sentence on a webpage or in a browser-rendered PDF. Neutralize identifies rhetorical devices with color-coded highlights, explains each one, and generates a neutral rewrite.</p>
            <div class="cs-demo">
                <div class="cs-demo-label">Input — Original Text</div>
                <div class="cs-demo-text">The <span class="cs-hl cs-hl-load">radical regime</span> has <span class="cs-hl cs-hl-amp">completely</span> failed its citizens. <span class="cs-hl cs-hl-pre">Obviously</span>, any <span class="cs-hl cs-hl-emo">reasonable person</span> can see this <span class="cs-hl cs-hl-amp">devastating</span> policy <span class="cs-hl cs-hl-cta">must be stopped now</span>.</div>
                <div class="cs-demo-arrow">↓ neutralized</div>
                <div class="cs-demo-resolved">
                    <div class="cs-demo-resolved-label">Resolved · Neutral Rewrite</div>
                    <div class="cs-demo-resolved-text">The government has faced significant criticism over this policy. Analysts are divided on its effects, and some argue it should be revised or repealed.</div>
                </div>
            </div>
            <div class="cs-legend">
                <div class="cs-legend-row" style="background:#FFF8EA;"><div class="cs-legend-swatch" style="background:#E8B86D;"></div><div class="cs-legend-name">Amplification</div><div class="cs-legend-desc">Intensifiers that exaggerate</div></div>
                <div class="cs-legend-row" style="background:#EDF4FB;"><div class="cs-legend-swatch" style="background:#7BAFD4;"></div><div class="cs-legend-name">Emotional appeal</div><div class="cs-legend-desc">Appeals to feeling over reason</div></div>
                <div class="cs-legend-row" style="background:#FAF0F8;"><div class="cs-legend-swatch" style="background:#C48BB8;"></div><div class="cs-legend-name">Loaded language</div><div class="cs-legend-desc">Words chosen for connotation</div></div>
                <div class="cs-legend-row" style="background:#FFF3EC;"><div class="cs-legend-swatch" style="background:#E8906A;"></div><div class="cs-legend-name">Call to action</div><div class="cs-legend-desc">Urgency framing</div></div>
                <div class="cs-legend-row" style="background:#F5F0FC;"><div class="cs-legend-swatch" style="background:#A88CC8;"></div><div class="cs-legend-name">Presupposition</div><div class="cs-legend-desc">Assumes agreement</div></div>
                <div class="cs-legend-row" style="background:#F2F8EE;"><div class="cs-legend-swatch" style="background:#90B878;"></div><div class="cs-legend-name">Hedging</div><div class="cs-legend-desc">Vague attribution</div></div>
                <div class="cs-legend-row" style="background:#EDF8F4;"><div class="cs-legend-swatch" style="background:#6ABFAA;"></div><div class="cs-legend-name">Resolved</div><div class="cs-legend-desc">Neutralized output</div></div>
            </div>

            <div class="cs-eyebrow">03 — Process</div>
            <h3 class="cs-h2">From idea to shipped in ~2 weeks.</h3>
            <div class="cs-steps">
                <div class="cs-step"><div class="cs-step-num">Day 1–3</div><div class="cs-step-title">Research + scoping</div><div class="cs-step-body">Mapped the rhetorical device taxonomy. Tested Claude API prompts. Defined 7 categories based on what was reliably detectable and meaningfully distinct.</div></div>
                <div class="cs-step"><div class="cs-step-num">Day 3–5</div><div class="cs-step-title">Extension architecture</div><div class="cs-step-body">Set up Chrome MV3 manifest, content script for DOM injection, background service worker for API calls. Dependency-free — no frameworks, no bundler complexity.</div></div>
                <div class="cs-step"><div class="cs-step-num">Day 5–8</div><div class="cs-step-title">Design system</div><div class="cs-step-body">Built a full color token system. Ran CVD simulation across 3 colorblindness types. Added secondary underline cues for WCAG 1.4.1.</div></div>
                <div class="cs-step"><div class="cs-step-num">Day 8–10</div><div class="cs-step-title">Palette evolution</div><div class="cs-step-body">Original palette was too cyberpunk. Shifted to warm mauve + cream to match the product's intent: gentle, analytical, inviting critical thinking rather than alarming.</div></div>
                <div class="cs-step"><div class="cs-step-num">Day 10–12</div><div class="cs-step-title">Prompt engineering</div><div class="cs-step-body">Iterated on the Claude prompt to reliably return structured JSON with device classifications and neutral rewrites. Balanced sensitivity against specificity.</div></div>
                <div class="cs-step"><div class="cs-step-num">Day 12–14</div><div class="cs-step-title">Polish + ship</div><div class="cs-step-body">Icon design iterations, accessibility audit, README, and brand assets. Added explanation panel showing the author's likely intent.</div></div>
            </div>

            <div class="cs-eyebrow">04 — Design Decisions</div>
            <h3 class="cs-h2">The choices that shaped the product.</h3>
            <table class="cs-table">
                <thead><tr><th>Decision</th><th>What I chose and why</th></tr></thead>
                <tbody>
                    <tr><td>Color system</td><td>7 distinct hues + secondary underline cues. Color alone fails colorblind users — underlines make each category distinguishable without it.</td></tr>
                    <tr><td>Dark palette</td><td>Warm mauve <code style="font-size:0.75em;background:#f5f5f0;padding:1px 4px;border-radius:2px;">#2A1F2E</code>. Cold palettes felt like surveillance tools. Warm tones encourage reading, not alarming.</td></tr>
                    <tr><td>AI model</td><td>Claude Haiku — fast, cost-efficient, and capable of structured JSON output with strong rhetorical framing in context.</td></tr>
                    <tr><td>Extension scope</td><td>Highlight-to-analyze. Grounded in Google's PAIR Guidebook: when stakes are higher, user control should be foregrounded. Auto-scanning everything would feel paternalistic.</td></tr>
                    <tr><td>Rewrite tone</td><td>Journalistic neutral — factual, clear, no implied judgment in the rewrite itself.</td></tr>
                </tbody>
            </table>

            <div class="cs-eyebrow">05 — What I Learned</div>
            <h3 class="cs-h2">What shipping fast with AI actually looks like.</h3>
            <div class="cs-cards">
                <div class="cs-card"><div class="cs-card-label">On AI product design</div><p>The highlight-to-analyze interaction was a deliberate design decision rooted in Google's PAIR Guidebook on human-centered AI. Rhetorical analysis sits in the higher-stakes category — it's an invitation to think critically, not a verdict handed down automatically.</p></div>
                <div class="cs-card"><div class="cs-card-label">On prompt engineering</div><p>The hardest part isn't getting good output once — it's making it consistent across wildly different input types. Political speech, corporate PR, and sports journalism all use rhetoric very differently.</p></div>
                <div class="cs-card"><div class="cs-card-label">On accessibility</div><p>Running a proper CVD simulation revealed that with 7 categories across 3 colorblindness types, it's mathematically impossible to separate all pairs with color alone. This led to the underline cue system, which made the UI richer anyway.</p></div>
            </div>
            <div class="cs-ntags">
                <span class="cs-ntag cs-ntag-hl">Chrome + Firefox Extension</span>
                <span class="cs-ntag cs-ntag-hl">Claude API</span>
                <span class="cs-ntag cs-ntag-hl">Prompt Engineering</span>
                <span class="cs-ntag cs-ntag-hl">Human-Centered AI</span>
                <span class="cs-ntag cs-ntag-hl">Design Systems</span>
                <span class="cs-ntag cs-ntag-hl">WCAG Accessibility</span>
                <span class="cs-ntag">React · TypeScript</span>
                <span class="cs-ntag">Product Management</span>
            </div>

            <div class="cs-eyebrow">06 — Outcomes</div>
            <h3 class="cs-h2">Shipped. Open source. Ongoing.</h3>
            <div class="cs-nstats">
                <div class="cs-nstat"><span class="cs-nstat-val">7</span><span class="cs-nstat-label">Rhetorical categories</span></div>
                <div class="cs-nstat"><span class="cs-nstat-val">14</span><span class="cs-nstat-label">Icon + asset exports</span></div>
                <div class="cs-nstat"><span class="cs-nstat-val">AA</span><span class="cs-nstat-label">WCAG contrast rating</span></div>
            </div>
            <p class="cs-p">Neutralize works on webpages and browser-rendered PDFs — useful for research papers, policy documents, and press releases that open inline. Next: severity scoring per rhetorical device, and a batch mode for analyzing full articles.</p>
            <div class="cs-ctas">
                <a class="cs-btn cs-btn-outline" href="https://github.com/wleejess/neutralize" target="_blank" rel="noopener">github ↗</a>
            </div>
        `
    }
};
