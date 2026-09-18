# Portfolio — Javeed Zulfikar 🎯

A single-page personal portfolio built with React (Vite) and Tailwind CSS. It's a component-by-component port of an original static HTML/CSS site, restyled through a Tailwind theme that reproduces the original's exact colors, spacing, and typography, then extended with Experience and Certifications sections pulled from Javeed's resume.

## 🚀 Features

- 🧩 **Data-driven sections** — Work, Experience, Skills, and Certifications each read from a plain array in `src/data/`, so adding a project or role is editing an array, not writing new markup.
- 🎨 **Theme-matched Tailwind config** — `tailwind.config.js` re-declares every custom CSS variable from the original site (colors, gutters, font sizes, container widths) as Tailwind theme tokens, so utility classes like `bg-pink`, `p-gutter-normal`, and `text-huge` map to the original design exactly.
- 📱 **Responsive sidebar nav** — the nav bar collapses to a hamburger button below 900px, opening a right-hand slide-in sidebar with a backdrop, scroll lock, and Escape-to-close (`src/components/Nav.jsx`).
- ⬆️ **Back-to-top button** — appears once the page has scrolled past 700px (`useBackToTop`), reproducing the original vanilla-JS scroll listener as a hook.
- ⌨️ **Keyboard-only focus outline** — focus rings only appear when navigating with Tab, not on mouse clicks (`useKeyboardFocus`), matching the original site's accessibility behavior.
- 🖱️ **Sliding-fill hover effects** — the outlined/solid buttons, the "Visit Repo" text links, and the nav underline all reuse the original's `::after`-style sliding color-fill animation, rebuilt with Tailwind's `before:` pseudo-element utilities in `src/utils/classNames.js`.
- 🔠 **Rem-based responsive type** — the root `html { font-size: 62.5% }` trick from the original CSS is preserved in `src/index.css`, so every rem-based Tailwind utility scales exactly like the original.

## 🎯 How It Works

1. **Entry** → `index.html` loads `src/main.jsx`, which mounts `<App />` into `#root`.
2. **Composition** → `App.jsx` renders the page in order: `Header` (with `Nav`) → `main` (`Work`, `Experience`, `Skills`, `Certifications`, `About`) → `Contact` → `Footer` → `BackToTop`, and starts the `useKeyboardFocus` hook once for the whole page.
3. **Content** → section components (`Work`, `Experience`, `Skills`, `Certifications`) import their content from `src/data/*.js` and map over it to render item components (`WorkItem`, `ExperienceItem`, `SkillsBox`).
4. **Styling** → components apply Tailwind utility classes directly, pulling shared multi-part styles (buttons, links, nav underline, `.row` container) from the string constants exported by `src/utils/classNames.js`. Design tokens (colors, spacing, font sizes) come from `tailwind.config.js`.
5. **Interactivity** → `useBackToTop` and the `isOpen` state in `Nav.jsx` are the only pieces of client-side state in the app; everything else is static content rendered from the data files.

## 📦 Repo layout

```
.
├── index.html                     # Vite entry HTML (title, meta, favicon)
├── vite.config.js                 # Vite + @vitejs/plugin-react
├── tailwind.config.js             # theme tokens matching the original CSS variables
├── postcss.config.js              # tailwindcss + autoprefixer
├── package.json
├── public/
│   └── images/                    # (empty — copy in header.jpg, project-*.png, *.svg icons)
└── src/
    ├── main.jsx                   # ReactDOM.createRoot(...) mount point
    ├── App.jsx                    # page composition / section order
    ├── index.css                  # @tailwind directives, @font-face, base-layer rules
    ├── assets/
    │   └── fonts/                 # (not yet created — copy in HKGrotesk-Regular.woff, Jost-Regular.ttf)
    ├── data/
    │   ├── projects.js            # Work section content (4 projects)
    │   ├── experience.js          # Experience section content (3 roles) — company URLs are '#' placeholders
    │   ├── skills.js               # Skills section content (technical + soft skills)
    │   └── certifications.js       # Certifications section content (6 certs) — URLs are '#' placeholders
    ├── hooks/
    │   ├── useKeyboardFocus.js     # tab-vs-mouse focus outline logic
    │   └── useBackToTop.js         # scroll-position → button-visibility logic
    ├── utils/
    │   └── classNames.js           # shared Tailwind class strings (ROW, BTN_OUTLINE, BTN_SOLID, LINK_TEXT, NAV_LINK)
    └── components/
        ├── Nav.jsx                 # desktop nav + mobile hamburger/sidebar
        ├── Header.jsx              # hero section
        ├── SectionHeading.jsx      # shared <h2> + pink underline bar
        ├── Work.jsx / WorkItem.jsx
        ├── Experience.jsx / ExperienceItem.jsx
        ├── Skills.jsx / SkillsBox.jsx
        ├── Certifications.jsx
        ├── About.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        └── BackToTop.jsx
```

## ⚙️ Setup

### Prerequisites
- Node.js 18+

### Install
```bash
npm install
```

### Add the missing assets
`public/images/` and `src/assets/fonts/` are empty in this repo — copy in:
- **Images** → `public/images/`: `header.jpg`, `project-1.png`, `project-2.png`, `energy.png`, `github.svg`, `linkedin.svg`, `arrow-up.svg` (referenced directly by path, e.g. `/images/header.jpg`)
- **Fonts** → `src/assets/fonts/`: `HKGrotesk-Regular.woff`, `Jost-Regular.ttf` (referenced by the `@font-face` rules in `src/index.css`)

## ▶️ Running the app

```bash
npm run dev       # starts the Vite dev server
npm run build     # production build, output in dist/
npm run preview   # serve the production build locally
```

## 🛠️ Tech Stack

**Frontend** — React 18, Vite 5, Tailwind CSS 3, PostCSS + Autoprefixer
**Fonts** — Hk Grotesk, Jost (self-hosted, loaded via `@font-face`)

## ⚠️ Known limitations

- **Placeholder links**: every `companyUrl` in `src/data/experience.js` and every `url` in `src/data/certifications.js` is `'#'`. Update them with real URLs once you have them.
- **No automated tests**: there's no test runner configured; verification is currently manual (`npm run dev` + visual check).
- **Assets not committed**: `public/images/` and `src/assets/fonts/` need to be populated manually (see Setup) — the site will render with broken images/fonts until then.
- **Nav breakpoint is hard-coded**: the sidebar/desktop-nav switch happens at a fixed 900px (`min-[901px]:` / `max-[900px]:`) rather than a configurable Tailwind screen size, matching the rest of the site's one-off breakpoints (300/400/500/600/900/1000/1240/1340px) rather than Tailwind's default scale.

## 🚀 Deployment

Not deployed yet. `npm run build` produces a static `dist/` folder, so this is ready to deploy as-is to any static host (Vercel, Netlify, GitHub Pages, etc.) once you've picked one.

## 📬 Contact

- Email: [javeedrahman1404@gmail.com](mailto:javeedrahman1404@gmail.com)
- GitHub: [github.com/Javeed004](https://github.com/Javeed004/)
- LinkedIn: [linkedin.com/in/javeed-rahman](https://www.linkedin.com/in/javeed-rahman)