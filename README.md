# The Cozy Bean

A warm, neighborhood-inspired café site. The brand voice is inviting, unrushed, and human: coffee that feels like a hug and a space made for lingering.

## Tech stack
- React 19 (with React Router 7) for pages and routing
- Vite 8 for dev/build
- Tailwind CSS 3.4 for styling; design tokens and micro-interactions live in [src/styles/index.css](src/styles/index.css)
- ESLint (Vite defaults)

## Setup
1) Install dependencies: `npm install`
2) Start dev server: `npm run dev` (Vite outputs the local URL)
3) Production build: `npm run build`
4) Preview the build: `npm run preview`

## Brand concept
- Personality: cozy, coffee-first, human, never corporate. Slow mornings welcome.
- Visual vibe: warm earthy tones, soft gradients, gentle motion, plenty of breathing room.

## Design decisions
- Colors (CSS custom properties in [src/styles/index.css](src/styles/index.css)):
	- Espresso `#5a3626`
	- Caramel `#b27d4f`
	- Cream `#f6efe7`
	- Foam `#ffffff`
- Typography: Playfair Display for headings (serif warmth), Inter for body (clean, readable).
- Micro-interactions: subtle hover lifts on cards and buttons, gentle fade-ins on sections, reduced-motion opt-out respected.
- Layouts: cards and sections use soft shadows and rounded corners for an inviting feel.

## Responsive strategy
- Breakpoints: desktop ≥1280px, tablet 768–1279px, mobile <768px.
- Grids: menu and featured items shift from 1 → 2 → 3–4 columns across breakpoints.
- Navigation: sticky header with accessible hamburger on mobile; tap targets ≥44px.
- Overflow: horizontal scroll suppressed; spacing tuned for tablet readability.

## Content sources
- Menu and categories: [src/data/menu.js](src/data/menu.js)
- Navigation, perks, contact info: [src/data/siteContent.js](src/data/siteContent.js)
- Pages: [src/pages](src/pages) (Home, Menu, About, Contact, NotFound)
- Shared layout: [src/components/PageShell.jsx](src/components/PageShell.jsx), [src/components/Navbar.jsx](src/components/Navbar.jsx), [src/components/Footer.jsx](src/components/Footer.jsx)

## Assumptions
- No backend; all data is static/local.
- Map is a placeholder iframe; replace with a real embed when available.
- Enquiry form is non-functional (no submission endpoint).
- Hours, address, and menu items are sample content to be replaced with real data.

## Known limitations
- No authentication, CMS, or analytics wiring.
- Accessibility covered for focus styles and tap targets, but full a11y audit not yet performed.
- No automated tests included.
