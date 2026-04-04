# Portfolio Website — Session Plan
**Created:** 2026-03-29
**Project:** Personal Portfolio for Sooraj Murugaraj
**Stack:** React + Custom CSS (no UI library)

---

## Original Prompt Summary

Build a modern, futuristic, slightly playful personal portfolio website with:
- Dark base + electric blue/purple/cyan accents
- Glassmorphism, glowing accents, smooth animations
- Sections: Hero → About → Projects → Skills → Contact
- Split hero layout (text left, illustration right)
- Fonts: Space Grotesk (headings) + Inter/Manrope (body)
- Custom cursor glow, floating shapes, scroll fade-ins
- Fully responsive (desktop / tablet / mobile)

---

## Task Breakdown

### PHASE 1 — Project Setup
- [ ] **Task 1.1** — Initialize React app (Vite + React)
- [ ] **Task 1.2** — Install dependencies: `react-scroll`, `framer-motion`, `react-icons`, Google Fonts via `@fontsource`
- [ ] **Task 1.3** — Set up folder structure (`/components`, `/assets`, `/styles`)
- [ ] **Task 1.4** — Define CSS variables (color palette, fonts, spacing, shadows, gradients)
- [ ] **Task 1.5** — Set up global CSS reset and base styles

---

### PHASE 2 — Layout & Navigation
- [ ] **Task 2.1** — Build `Navbar` component with smooth scroll links and glass effect
- [ ] **Task 2.2** — Set up `App.jsx` with all section anchors and smooth scroll behavior
- [ ] **Task 2.3** — Add custom cursor glow component

---

### PHASE 3 — Hero Section
- [ ] **Task 3.1** — Build split hero layout (left: text, right: illustration placeholder)
- [ ] **Task 3.2** — Add heading: "Hi, I'm Sooraj" + tagline + two CTA buttons
- [ ] **Task 3.3** — Style CTA buttons with hover effects (scale, glow, gradient shift)
- [ ] **Task 3.4** — Add floating abstract background shapes with CSS/Framer Motion animation
- [ ] **Task 3.5** — Add illustration placeholder (image-ready slot with floating animation)

---

### PHASE 4 — About Section
- [ ] **Task 4.1** — Build About section layout with short bio text
- [ ] **Task 4.2** — Add skill/interest highlights with icons
- [ ] **Task 4.3** — Add scroll fade-in animation

---

### PHASE 5 — Projects Section
- [ ] **Task 5.1** — Build `ProjectCard` component (title, description, tech tags, links)
- [ ] **Task 5.2** — Build responsive grid layout for project cards
- [ ] **Task 5.3** — Add lift + glow hover animation on cards
- [ ] **Task 5.4** — Populate with 3–5 placeholder projects (easy to swap out)

---

### PHASE 6 — Skills Section
- [ ] **Task 6.1** — Build skills display using pill/badge style
- [ ] **Task 6.2** — Add technology icons (React, Python, JS, etc.) via `react-icons`
- [ ] **Task 6.3** — Add scroll animation for skill badges

---

### PHASE 7 — Contact Section
- [ ] **Task 7.1** — Build clean contact form (name, email, message, submit)
- [ ] **Task 7.2** — Add social media icon links (LinkedIn, GitHub, etc.)
- [ ] **Task 7.3** — Style form with glassmorphism + focus glow effects

---

### PHASE 8 — Footer
- [ ] **Task 8.1** — Build minimal footer with copyright and gradient divider

---

### PHASE 9 — Polish & Responsiveness
- [ ] **Task 9.1** — Add section dividers (gradient curves between sections)
- [ ] **Task 9.2** — Audit and fix responsiveness (mobile stacking, illustration resize)
- [ ] **Task 9.3** — Final animation pass (scroll fade-ins, micro-interactions)
- [ ] **Task 9.4** — Replace illustration placeholder with actual image (when provided)

---

## Color Palette (Reference)

| Token              | Value              |
|--------------------|--------------------|
| `--bg-primary`     | `#0d0d0f`          |
| `--bg-secondary`   | `#111318`          |
| `--accent-blue`    | `#00c6ff`          |
| `--accent-purple`  | `#7b2ff7`          |
| `--accent-cyan`    | `#0ff0fc`          |
| `--text-primary`   | `#f0f0f5`          |
| `--text-muted`     | `#8888aa`          |
| `--glass-bg`       | `rgba(255,255,255,0.05)` |
| `--glass-border`   | `rgba(255,255,255,0.1)`  |

---

## Font Stack

- **Headings:** Space Grotesk (700, 800)
- **Body:** Inter (400, 500)

---

## Notes
- Illustration slot: `src/assets/illustration.png` — replace when image is provided
- All content (bio, projects, skills) uses placeholder text — swap out before deploy
- Framer Motion used for scroll animations and floating effects
