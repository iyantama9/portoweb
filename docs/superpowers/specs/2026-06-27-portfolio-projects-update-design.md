# Portfolio Projects Section Update — Design Spec

## Overview
Update the portfolio's Projects section to:
1. Add a second image to the Pacarku project with an auto-carousel.
2. Add three new projects: Custodial Apps, LLM Router, and Flux HR.
3. Promote PacarKu and SPI as "Top Projects" shown in a separate section above the regular project grid.

---

## Design Direction

### Aesthetic
Keep the existing dark terminal/cosmic theme (`#0D1117` background, `Space Mono` headings, cyan/green accents). The Top Projects section should feel premium and distinct without breaking the cohesive dark theme.

### Top Projects Section
- Positioned above the regular project grid.
- Title: `~/top-projects$ ls -la` using existing terminal-style heading.
- Contains 2 cards in a 2-column grid on desktop, 1-column on mobile.
- Cards use a subtle gradient border (amber/yellow to orange) and a soft glow to distinguish them.
- Each card has a "Top Project" badge with a star icon.
- Card layout: image on top, content below — consistent with existing project cards.

### PacarKu Carousel
- Two images: `Pacarku.jpg` and `Pacarku2.jpg`.
- Auto-advances every 4 seconds.
- Manual navigation: left/right arrows on hover (desktop) and always visible on mobile; dot indicators.
- Transition: smooth horizontal slide.
- Pause on hover.
- Images use `object-contain` with dark background, consistent with existing cards.

### SPI Top Project
- Single static image, same card structure as PacarKu minus the carousel.
- Marked as private (link `#`).

### New Regular Projects
Added to the regular project grid:
- **Custodial Apps** — GitHub link `https://github.com/iyantama9/custodial-apps`, image `Custodial Apps.jpg`.
- **LLM Router** — GitHub link `https://github.com/iyantama9/iyanrouter-llm`, image `LLM Router.jpg`.
- **Flux HR** — private, link `#`, image `Flux HR.jpg`.

### Data Structure Changes
- Introduce a new `topProjects` array in `projects.js` containing PacarKu and SPI.
- Add `images?: string[]` optional field to project objects for carousel support.
- Keep `image` field for single-image projects and as the first/fallback image for carousel projects.
- Existing `projects` array will exclude PacarKu and SPI.

### Component Changes
- `src/components/Projects.jsx`:
  - Render Top Projects section first.
  - Render regular project grid below.
  - Build or import a reusable `ProjectCarousel` component for PacarKu.
- Optionally create `src/components/ProjectCarousel.jsx` for the carousel logic.

### Responsive Behavior
- Top Projects: 2 columns on `md+`, 1 column on smaller screens.
- Carousel arrows visible on hover for desktop, always visible on mobile.
- All existing hover effects preserved for regular cards.

---

## Data Changes

### `src/data/projects.js`
- Import new images: `Pacarku2.jpg`, `Custodial Apps.jpg`, `LLM Router.jpg`, `Flux HR.jpg`.
- Export `topProjects` array with PacarKu and SPI.
- Update `PacarKu` entry to include `images: [pacarkuImg, pacarku2Img]`.
- Remove PacarKu and SPI from the `projects` array.
- Append Custodial Apps, LLM Router, and Flux HR to the `projects` array.

### `src/components/Projects.jsx`
- Import `topProjects` and `projects`.
- Add Top Projects heading and grid.
- Add carousel rendering for top project entries with `images`.
- Keep existing regular grid unchanged except data source.

---

## Files Affected
- `src/data/projects.js`
- `src/components/Projects.jsx`
- `src/components/ProjectCarousel.jsx` (new, optional but recommended)

---

## Acceptance Criteria
- [ ] PacarKu top-project card shows both images in an auto-carousel with arrows and dots.
- [ ] SPI top-project card is displayed in the Top Projects section with premium styling.
- [ ] Custodial Apps, LLM Router, and Flux HR appear in the regular project grid.
- [ ] Flux HR links to `#` and shows "Private Project" label.
- [ ] Existing project cards below the fold remain unchanged in behavior.
- [ ] Responsive layout works on mobile and desktop.
