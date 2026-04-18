# jessica lee — personal site

**Live at [jessicalee.me](https://jessicalee.me)**

---

## what's here

No framework, just first principles. No build step, no dependencies hiding in a `node_modules` folder. Just HTML, CSS, and JavaScript doing exactly what they're told.

Sections include:

- **About** — background, education, domains, stack
- **Work** — selected projects and professional experience
- **Notes** — writing on engineering, design, and research
- **Contact** — say hello

---

## tech

- Vanilla HTML / CSS / JavaScript
- Tailwind CSS (CDN) for utility classes
- Fonts: Cormorant Garamond, Inter, JetBrains Mono
- Hosted on GitHub Pages with a custom domain via `CNAME`

---

## structure

```
jessicalee/
├── index.html          # all markup
├── style.css           # all styles
├── panels.js           # panel content + interactive logic
├── about-canvas.js     # about section canvas rendering
├── garden.js           # generative background
├── neutralize.html     # Neutralize project case study
├── orbic.html          # orbIC project case study
├── data/               # structured content / data files
├── notes/              # notebook entries
└── CNAME               # custom domain config
```

---

## projects featured

**orbIC** — browser-native chemical space navigator. Renders 4,147 compounds via TMAP · MST layout. No install, no license, no data leaves your browser. Built with React, D3, OpenChemLib.

**Neutralize** — Chrome/Firefox extension that analyzes selected text for rhetorical devices and offers neutral rewrites. Built with React, TypeScript, Claude API, Chrome MV3.

---

## running locally

No build step needed.

```bash
git clone https://github.com/wleejess/jessicalee.git
cd jessicalee
open index.html
```

Or serve it locally to avoid any CORS quirks:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

*built with Claude Code, modified with ♥ and logic by jess.*
