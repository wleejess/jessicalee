export const infoPanels = {
    bio: {
        tag: 'About',
        label: 'about',
        tagStyle: 'background:#EDF5F4;color:#4A8C88;',
        title: "Hi, I'm Jess.",
        html: `
            <p class="m-body">
                Science at the heart of everything I do. I exist somewhere between
                life science &amp; computer science — where curiosity meets code.
            </p>
        `
    },
    edu: {
        tag: 'Education',
        label: 'education',
        tagStyle: 'background:#EDF5F4;color:#4A8C88;',
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
    exp: {
        tag: 'Experience',
        label: 'experience',
        tagStyle: 'background:#EDF5F4;color:#4A8C88;',
        title: 'Experience',
        html: `
            <div style="margin-top:1.375rem;display:flex;flex-direction:column;gap:1.5rem;">

                <div class="m-edu-item" style="border-color:#6BADA8;">
                    <div style="display:flex;align-items:baseline;justify-content:space-between;gap:0.5rem;flex-wrap:wrap;">
                        <p style="font-size:0.7rem;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:#4A8C88;font-family:'JetBrains Mono',monospace;">BioIntelliSense, Inc.</p>
                        <p style="font-size:0.7rem;color:#bbb;font-family:'JetBrains Mono',monospace;">Sep 2024 – Present</p>
                    </div>
                    <p style="font-size:1.0625rem;font-weight:400;color:#1a1a1a;margin-top:0.3rem;">Software Engineer, Solution Engineering</p>
                    <p style="font-size:0.8rem;color:#aaa;margin-top:0.125rem;">Full-time &middot; Remote</p>
                    <ul style="margin-top:0.625rem;padding-left:1.1rem;display:flex;flex-direction:column;gap:0.4rem;">
                        <li style="font-size:0.875rem;color:#5a5a5a;line-height:1.65;">Built full-stack internal operations platform using .NET/Blazor, MongoDB Atlas, and AWS, serving 200+ users across device lifecycle management and analytics — reducing manual workflows by 70%</li>
                        <li style="font-size:0.875rem;color:#5a5a5a;line-height:1.65;">Engineered enterprise security infrastructure implementing Auth0 RBAC, JWT middleware, AWS VPC peering, TLS encryption, and Cloudflare WAF/DDoS protection to enforce HIPAA-adjacent controls</li>
                        <li style="font-size:0.875rem;color:#5a5a5a;line-height:1.65;">Implemented CI/CD pipelines using Terraform, AWS ECS, and ECR to automate build, test, and deployment workflows, reducing release cycle time from 2 weeks to 3 days and enabling zero-downtime deployments with automated rollback capabilities</li>
                        <li style="font-size:0.875rem;color:#5a5a5a;line-height:1.65;">Established audit log framework with MongoDB schema and indexing strategy that enables sub-second retrieval across millions of documents; developed bulk processing pipeline to reduce batch operation time by 33%</li>
                        <li style="font-size:0.875rem;color:#5a5a5a;line-height:1.65;">Built Databricks dashboards to monitor device health metrics and system performance across 5K+ active IoT devices, enabling real-time alerting on firmware issues and reducing mean time to resolution by 40%</li>
                    </ul>
                    <div class="m-tags" style="margin-top:0.875rem;">
                        <span class="m-tag" style="background:#EDF5F4;color:#4A8C88;">.NET</span>
                        <span class="m-tag" style="background:#EDF5F4;color:#4A8C88;">Blazor</span>
                        <span class="m-tag" style="background:#EDF5F4;color:#4A8C88;">MongoDB</span>
                        <span class="m-tag" style="background:#EDF5F4;color:#4A8C88;">AWS</span>
                        <span class="m-tag" style="background:#EDF5F4;color:#4A8C88;">Auth0</span>
                        <span class="m-tag" style="background:#EDF5F4;color:#4A8C88;">Databricks</span>
                    </div>
                </div>

                <div class="m-edu-item" style="border-color:#6BADA8;opacity:0.85;">
                    <div style="display:flex;align-items:baseline;justify-content:space-between;gap:0.5rem;flex-wrap:wrap;">
                        <p style="font-size:0.7rem;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:#4A8C88;font-family:'JetBrains Mono',monospace;">Augmedix</p>
                        <p style="font-size:0.7rem;color:#bbb;font-family:'JetBrains Mono',monospace;">Sep 2021 – Jun 2023</p>
                    </div>
                    <p style="font-size:1.0625rem;font-weight:400;color:#1a1a1a;margin-top:0.3rem;">Project Manager</p>
                    <p style="font-size:0.8rem;color:#aaa;margin-top:0.125rem;">Full-time &middot; Hybrid</p>
                    <p class="m-body" style="margin-top:0.625rem;">
                        Drove product adoption to 90% across 1,500+ users by leading usability studies, analyzing user behavior data, and collaborating with engineering teams to prioritize high-impact UI/UX improvements and feature enhancements.
                    </p>
                    <div class="m-tags" style="margin-top:0.875rem;">
                        <span class="m-tag" style="background:#EDF5F4;color:#4A8C88;">Product Management</span>
                        <span class="m-tag" style="background:#EDF5F4;color:#4A8C88;">UX/UI</span>
                        <span class="m-tag" style="background:#EDF5F4;color:#4A8C88;">Data Analysis</span>
                        <span class="m-tag" style="background:#EDF5F4;color:#4A8C88;">Stakeholder Management</span>
                    </div>
                </div>

                <div class="m-edu-item" style="border-color:#6BADA8;opacity:0.75;">
                    <div style="display:flex;align-items:baseline;justify-content:space-between;gap:0.5rem;flex-wrap:wrap;">
                        <p style="font-size:0.7rem;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:#4A8C88;font-family:'JetBrains Mono',monospace;">Vertex Pharmaceuticals</p>
                        <p style="font-size:0.7rem;color:#bbb;font-family:'JetBrains Mono',monospace;">Apr 2019 – Apr 2021</p>
                    </div>
                    <p style="font-size:1.0625rem;font-weight:400;color:#1a1a1a;margin-top:0.3rem;">Research Associate</p>
                    <p style="font-size:0.8rem;color:#aaa;margin-top:0.125rem;">Contract &middot; San Diego, CA</p>
                    <ul style="margin-top:0.625rem;padding-left:1.1rem;display:flex;flex-direction:column;gap:0.4rem;">
                        <li style="font-size:0.875rem;color:#5a5a5a;line-height:1.65;">Developed an automated system for high-throughput experimentation using nanoscale synthesis, enabling rapid screening at scale</li>
                        <li style="font-size:0.875rem;color:#5a5a5a;line-height:1.65;">Engineered Python-based ETL pipelines to automate data integration and transformation from high-throughput screening assays, processing 100K+ data points daily and improving hit identification accuracy by 35%</li>
                    </ul>
                    <div class="m-tags" style="margin-top:0.875rem;">
                        <span class="m-tag" style="background:#EDF5F4;color:#4A8C88;">Python</span>
                        <span class="m-tag" style="background:#EDF5F4;color:#4A8C88;">ETL</span>
                        <span class="m-tag" style="background:#EDF5F4;color:#4A8C88;">High-Throughput Screening</span>
                        <span class="m-tag" style="background:#EDF5F4;color:#4A8C88;">Cheminformatics</span>
                    </div>
                </div>

                <hr class="m-divider" style="margin:0;"/>

                <div>
                    <p style="font-size:0.7rem;font-family:'JetBrains Mono',monospace;letter-spacing:0.1em;text-transform:uppercase;color:#ccc;margin-bottom:0.875rem;">Earlier</p>
                    <div style="display:flex;flex-direction:column;gap:0.625rem;">
                        <div style="display:flex;justify-content:space-between;align-items:baseline;gap:0.5rem;flex-wrap:wrap;">
                            <div>
                                <span style="font-size:0.875rem;color:#555;">Dar&eacute; Bioscience</span>
                                <span style="font-size:0.8rem;color:#aaa;margin-left:0.5rem;">Analytical Methods Intern</span>
                            </div>
                            <span style="font-size:0.7rem;color:#ccc;font-family:'JetBrains Mono',monospace;white-space:nowrap;">Feb – Jun 2019</span>
                        </div>
                        <div style="display:flex;justify-content:space-between;align-items:baseline;gap:0.5rem;flex-wrap:wrap;">
                            <div>
                                <span style="font-size:0.875rem;color:#555;">RAPT Therapeutics</span>
                                <span style="font-size:0.8rem;color:#aaa;margin-left:0.5rem;">Medicinal Chemistry Intern</span>
                            </div>
                            <span style="font-size:0.7rem;color:#ccc;font-family:'JetBrains Mono',monospace;white-space:nowrap;">Jun – Sep 2018</span>
                        </div>
                        <div style="display:flex;justify-content:space-between;align-items:baseline;gap:0.5rem;flex-wrap:wrap;">
                            <div>
                                <span style="font-size:0.875rem;color:#555;">UC San Diego Health</span>
                                <span style="font-size:0.8rem;color:#aaa;margin-left:0.5rem;">Pharmacology Lab Assistant</span>
                            </div>
                            <span style="font-size:0.7rem;color:#ccc;font-family:'JetBrains Mono',monospace;white-space:nowrap;">Oct 2015 – Mar 2019</span>
                        </div>
                        <div style="display:flex;justify-content:space-between;align-items:baseline;gap:0.5rem;flex-wrap:wrap;">
                            <div>
                                <span style="font-size:0.875rem;color:#555;">The EVERY Company</span>
                                <span style="font-size:0.8rem;color:#aaa;margin-left:0.5rem;">Analytical Methods Intern</span>
                            </div>
                            <span style="font-size:0.7rem;color:#ccc;font-family:'JetBrains Mono',monospace;white-space:nowrap;">Jun – Sep 2017</span>
                        </div>
                    </div>
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
