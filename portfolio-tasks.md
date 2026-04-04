# Portfolio Website — Atomic Task List
**Project:** Personal Portfolio for Sooraj Murugaraj
**Stack:** React (Vite) + Custom CSS | Framer Motion | react-icons | react-scroll

---

## PHASE 1 — Project Setup

- [ ] **1.1** Run `npm create vite@latest portfolio -- --template react` and `cd portfolio`
- [ ] **1.2** Run `npm install react-scroll framer-motion react-icons`
- [ ] **1.3** Run `npm install @fontsource/space-grotesk @fontsource/inter`
- [ ] **1.4** Create folders: `src/components/`, `src/assets/`, `src/styles/`
- [ ] **1.5** Create `src/styles/variables.css` — define all CSS custom properties (colors, fonts, spacing, shadows, gradients) from the color palette reference
- [ ] **1.6** Create `src/styles/global.css` — CSS reset, `box-sizing`, `scroll-behavior: smooth`, base `body` styles (bg, font, color)
- [ ] **1.7** Import both CSS files in `src/main.jsx`; import `@fontsource/space-grotesk` and `@fontsource/inter`

---

## PHASE 2 — Layout & Navigation

- [ ] **2.1** Create `src/components/Navbar.jsx` — horizontal nav with logo/name on left, links (About, Projects, Skills, Contact) on right
- [ ] **2.2** Style `Navbar` with glassmorphism (`backdrop-filter`, `--glass-bg`, `--glass-border`), sticky positioning, subtle bottom border glow
- [ ] **2.3** Wire nav links using `react-scroll` `<Link>` with `smooth`, `offset`, `duration` props
- [ ] **2.4** Add mobile hamburger menu toggle (CSS-only or simple state toggle) for responsive nav
- [ ] **2.5** Create `src/components/CursorGlow.jsx` — follows `mousemove`, renders a blurred radial div as a custom cursor glow
- [ ] **2.6** Update `src/App.jsx` — import and render `<Navbar>`, `<CursorGlow>`, and section anchor `<div id="...">` wrappers for all sections

---

## PHASE 3 — Hero Section

- [ ] **3.1** Create `src/components/Hero.jsx` — two-column flex layout (left: text, right: illustration)
- [ ] **3.2** Add left column content: `<h1>Hi, I'm Sooraj</h1>`, tagline `<p>`, two `<button>` CTAs ("View Projects", "Contact Me")
- [ ] **3.3** Style CTA buttons: primary (gradient fill, glow shadow), secondary (outlined); add `:hover` scale + glow transitions
- [ ] **3.4** Create `src/components/FloatingShapes.jsx` — 4–6 abstract blurred blobs/circles using Framer Motion `animate` with infinite float loops
- [ ] **3.5** Add right column: `<img src="/src/assets/illustration.png" alt="illustration" />` wrapped in a `motion.div` with floating up/down animation; show a styled placeholder box if image is absent
- [ ] **3.6** Add full-section background: position `<FloatingShapes>` absolutely behind content

---

## PHASE 4 — About Section

- [ ] **4.1** Create `src/components/About.jsx` — section with heading "About Me" and a 2–3 sentence bio paragraph (placeholder text)
- [ ] **4.2** Add a row of 4–6 highlight cards (icon + label): e.g. "React Dev", "ML Enthusiast", "Problem Solver" using `react-icons`
- [ ] **4.3** Wrap section content in Framer Motion `<motion.div>` with `whileInView` fade-in + slide-up animation (`initial: opacity 0, y 40` → `animate: opacity 1, y 0`)

---

## PHASE 5 — Projects Section

- [ ] **5.1** Create `src/components/ProjectCard.jsx` — card with: title, short description, tech tag pills, GitHub icon link, live demo icon link
- [ ] **5.2** Style `ProjectCard` with glassmorphism background, rounded corners, subtle border; tag pills use accent colors
- [ ] **5.3** Add `:hover` on card: `translateY(-6px)` lift + box-shadow glow using CSS transition
- [ ] **5.4** Create `src/components/Projects.jsx` — section heading + CSS grid (3 cols desktop, 2 tablet, 1 mobile)
- [ ] **5.5** Add 4 placeholder project objects (title, description, tags array, githubUrl, liveUrl) and render via `.map()` into `<ProjectCard>`
- [ ] **5.6** Wrap section in `whileInView` fade-in animation

---

## PHASE 6 — Skills Section

- [ ] **6.1** Create `src/components/Skills.jsx` — section heading "Skills & Tools"
- [ ] **6.2** Define a skills array: `[{ name, icon }]` covering React, JavaScript, TypeScript, Python, Node.js, Git, CSS, Figma (use `react-icons` for icons)
- [ ] **6.3** Render each skill as a pill/badge: icon + name, styled with `--glass-bg` background, accent border, hover glow
- [ ] **6.4** Wrap badges in `motion.div` with staggered `whileInView` animation (each badge fades in with a small delay offset)

---

## PHASE 7 — Contact Section

- [ ] **7.1** Create `src/components/Contact.jsx` — section heading "Get In Touch"
- [ ] **7.2** Build form: controlled inputs for Name, Email, Message (`textarea`), and a Submit button; use `useState` for form values
- [ ] **7.3** Style form with glassmorphism card, input `:focus` glow border (`box-shadow: 0 0 0 2px var(--accent-blue)`)
- [ ] **7.4** Add a row of social icon links below the form: GitHub, LinkedIn, Twitter/X — using `react-icons`, open in new tab
- [ ] **7.5** Add `onSubmit` handler that prevents default and logs form data (placeholder — swap for real email service later)

---

## PHASE 8 — Footer

- [ ] **8.1** Create `src/components/Footer.jsx` — single centered line: "© 2026 Sooraj Murugaraj. Built with React."
- [ ] **8.2** Add gradient top border/divider (`border-top: 1px solid` with gradient via a pseudo-element or a `<hr>` with gradient background)

---

## PHASE 9 — Polish & Responsiveness

- [ ] **9.1** Add SVG wave or gradient curve `<div>` between each section as a visual divider
- [ ] **9.2** Audit breakpoints: `@media (max-width: 768px)` — stack hero columns, hide desktop nav, reduce font sizes
- [ ] **9.3** Audit breakpoints: `@media (max-width: 480px)` — single-column projects grid, compact padding
- [ ] **9.4** Final animation pass: ensure all `whileInView` animations have `viewport={{ once: true }}` so they don't replay
- [ ] **9.5** Add `aria-label` on icon-only buttons/links for accessibility
- [ ] **9.6** Run `npm run build` — fix any warnings or errors
- [ ] **9.7** Replace `src/assets/illustration.png` with actual image when provided

---

## Quick Reference

| CSS Token          | Value                        |
|--------------------|------------------------------|
| `--bg-primary`     | `#0d0d0f`                    |
| `--bg-secondary`   | `#111318`                    |
| `--accent-blue`    | `#00c6ff`                    |
| `--accent-purple`  | `#7b2ff7`                    |
| `--accent-cyan`    | `#0ff0fc`                    |
| `--text-primary`   | `#f0f0f5`                    |
| `--text-muted`     | `#8888aa`                    |
| `--glass-bg`       | `rgba(255,255,255,0.05)`     |
| `--glass-border`   | `rgba(255,255,255,0.1)`      |

**Fonts:** Space Grotesk 700/800 (headings) · Inter 400/500 (body)

**Component Files to Create:**
`Navbar` · `CursorGlow` · `Hero` · `FloatingShapes` · `About` · `ProjectCard` · `Projects` · `Skills` · `Contact` · `Footer`
