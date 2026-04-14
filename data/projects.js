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
    neutralize: {
        tag: 'Project',
        label: 'neutralize',
        tagStyle: 'background:#FAF1EC;color:#B8724F;',
        title: 'Neutralize',
        html: `
            <p class="m-body">
                A browser extension for Chrome and Firefox that analyzes selected text for
                rhetorical devices — appeals, loaded language, structural techniques — and
                offers a neutral rewrite alongside synonym alternatives.
            </p>
            <p class="m-body">
                Highlight 3–5 sentences on any article or browser-rendered PDF. Neutralize
                color-codes seven rhetorical categories, explains each technique on hover,
                and generates a journalistic neutral rewrite. Pure opinions are flagged;
                plain factual statements are identified.
            </p>
            <div style="margin-top:1rem;padding:0.875rem 1rem;border-radius:10px;background:#fafaf6;border:1px solid #eeede6;">
                <p style="font-size:0.7rem;font-family:'JetBrains Mono',monospace;color:#bbb;letter-spacing:0.08em;margin-bottom:0.625rem;">7 rhetorical categories</p>
                <div style="display:flex;flex-direction:column;gap:0.35rem;">
                    <div style="display:flex;align-items:center;gap:0.625rem;font-size:0.8125rem;color:#5a5a5a;"><span style="width:10px;height:10px;background:#E8B86D;flex-shrink:0;border-radius:1px;"></span>Amplification</div>
                    <div style="display:flex;align-items:center;gap:0.625rem;font-size:0.8125rem;color:#5a5a5a;"><span style="width:10px;height:10px;background:#7BAFD4;flex-shrink:0;border-radius:1px;"></span>Emotional appeal</div>
                    <div style="display:flex;align-items:center;gap:0.625rem;font-size:0.8125rem;color:#5a5a5a;"><span style="width:10px;height:10px;background:#C48BB8;flex-shrink:0;border-radius:1px;"></span>Loaded language</div>
                    <div style="display:flex;align-items:center;gap:0.625rem;font-size:0.8125rem;color:#5a5a5a;"><span style="width:10px;height:10px;background:#E8906A;flex-shrink:0;border-radius:1px;"></span>Call to action</div>
                    <div style="display:flex;align-items:center;gap:0.625rem;font-size:0.8125rem;color:#5a5a5a;"><span style="width:10px;height:10px;background:#A88CC8;flex-shrink:0;border-radius:1px;"></span>Presupposition</div>
                    <div style="display:flex;align-items:center;gap:0.625rem;font-size:0.8125rem;color:#5a5a5a;"><span style="width:10px;height:10px;background:#90B878;flex-shrink:0;border-radius:1px;"></span>Hedging</div>
                    <div style="display:flex;align-items:center;gap:0.625rem;font-size:0.8125rem;color:#5a5a5a;"><span style="width:10px;height:10px;background:#6ABFAA;flex-shrink:0;border-radius:1px;"></span>Resolved · neutral rewrite</div>
                </div>
            </div>
            <div class="m-tags">
                <span class="m-tag" style="background:#FAF1EC;color:#B8724F;">React · TypeScript</span>
                <span class="m-tag" style="background:#FAF1EC;color:#B8724F;">Chrome MV3</span>
                <span class="m-tag" style="background:#FAF1EC;color:#B8724F;">Firefox MV2</span>
                <span class="m-tag" style="background:#FAF1EC;color:#B8724F;">Claude API</span>
                <span class="m-tag" style="background:#FAF1EC;color:#B8724F;">Vite · Turborepo</span>
            </div>
            <hr class="m-divider"/>
            <a href="neutralize.html" target="_blank" rel="noopener"
               style="display:block;font-size:0.8125rem;color:#B8724F;text-decoration:none;line-height:1.6;margin-bottom:0.35rem;"
               onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">
                Full case study ↗
            </a>
            <a href="https://github.com/wleejess/neutralize" target="_blank" rel="noopener"
               style="display:block;font-size:0.8125rem;color:#B8724F;text-decoration:none;line-height:1.6;"
               onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">
                View on GitHub ↗
            </a>
        `
    }
};
