export const projectPanels = {
    fwca: {
        tag: 'Project',
        label: 'forest wellness',
        tagStyle: 'background:#FAF1EC;color:#B8724F;',
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
                <span class="m-tag" style="background:#FAF1EC;color:#B8724F;">Dart</span>
                <span class="m-tag" style="background:#FAF1EC;color:#B8724F;">Flutter</span>
                <span class="m-tag" style="background:#FAF1EC;color:#B8724F;">SQFlite</span>
                <span class="m-tag" style="background:#FAF1EC;color:#B8724F;">Provider</span>
                <span class="m-tag" style="background:#FAF1EC;color:#B8724F;">iOS &amp; Android</span>
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
        tagStyle: 'background:#FAF1EC;color:#B8724F;',
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
                <span class="m-tag" style="background:#FAF1EC;color:#B8724F;">JavaScript</span>
                <span class="m-tag" style="background:#FAF1EC;color:#B8724F;">Chrome Extension</span>
                <span class="m-tag" style="background:#FAF1EC;color:#B8724F;">HTML/CSS</span>
            </div>
        `
    }
};
