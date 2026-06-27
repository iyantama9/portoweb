# Portfolio Projects Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Pacarku image carousel, promote PacarKu and SPI to a Top Projects section, and add three new projects to the portfolio.

**Architecture:** Keep the existing terminal-themed dark UI. Introduce a new `topProjects` data array, a reusable `ProjectCarousel` component for multi-image top projects, and update `Projects.jsx` to render the Top Projects section above the regular grid. All styling uses Tailwind CSS; no new dependencies are required.

**Tech Stack:** React, Tailwind CSS, lucide-react icons, Vite.

---

## File Structure

- `src/data/projects.js` — source of truth for project data. Add `topProjects` export, new image imports, `images` field for Pacarku.
- `src/components/ProjectCarousel.jsx` — new reusable carousel component: auto-slide, arrows, dots, pause on hover.
- `src/components/Projects.jsx` — updated to render Top Projects section + regular grid.

---

## Task 1: Update Project Data

**Files:**
- Modify: `src/data/projects.js`

- [ ] **Step 1: Add new image imports**

Add these imports at the top of `src/data/projects.js` after the existing imports:

```js
import pacarku2Img from "../assets/Pacarku2.jpg";
import custodialImg from "../assets/Custodial Apps.jpg";
import llmRouterImg from "../assets/LLM Router.jpg";
import fluxHrImg from "../assets/Flux HR.jpg";
```

- [ ] **Step 2: Define the topProjects array**

After the existing `projects` array, add a new `topProjects` export. Use the current PacarKu object but replace `image` with `images` and include `top: true`.

```js
export const topProjects = [
  {
    title: "Pacarku Landing Page",
    description:
      "Landing page premium buat platform Pacarku. Scroll-driven animation pakai 3D hero section, karakter yang gerak ngikutin scroll, responsive mobile-first, dan dark theme Cosmic Void.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    images: [pacarkuImg, pacarku2Img],
    link: "https://github.com/iyantama9/pacarku-landing",
    top: true,
  },
  {
    title: "SPI - Secure Parking Indonesia",
    description:
      "Sistem internal buat Secure Parking Indonesia, salah satu perusahaan pengelola parkir terbesar di Indonesia. Handle manajemen data parkir, monitoring area, dan reporting dashboard buat operasional harian.",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    image: spiImg,
    link: "#",
    top: true,
  },
];
```

- [ ] **Step 3: Remove PacarKu and SPI from the regular projects array**

Delete the two objects for `Pacarku Landing Page` and `SPI - Secure Parking Indonesia` from the `projects` array.

- [ ] **Step 4: Add the three new projects to the regular array**

Append these objects to the end of the `projects` array:

```js
  {
    title: "Custodial Apps",
    description:
      "Aplikasi manajemen aset digital dengan fitur custodial wallet, tracking transaksi, dan dashboard monitoring. Dibangun dengan arsitektur modular dan fokus pada keamanan serta kemudahan pengguna.",
    tags: ["React", "TypeScript", "Node.js", "Web3"],
    image: custodialImg,
    link: "https://github.com/iyantama9/custodial-apps",
  },
  {
    title: "LLM Router",
    description:
      "Router LLM yang bisa menyalurkan request ke beberapa model sekaligus dan mengelola fallback otomatis. Mendukung multi-provider, load balancing sederhana, dan konfigurasi threshold.",
    tags: ["Python", "FastAPI", "LLM", "API Gateway"],
    image: llmRouterImg,
    link: "https://github.com/iyantama9/iyanrouter-llm",
  },
  {
    title: "Flux HR",
    description:
      "Sistem HRIS internal yang handle manajemen karyawan, absensi, pengajuan cuti, dan payroll. Project private, detail teknis tidak bisa diungkapkan.",
    tags: ["Laravel", "MySQL", "HRIS", "Private"],
    image: fluxHrImg,
    link: "#",
  },
```

- [ ] **Step 5: Verify the file compiles**

Run: `rtk npx vite build`

Expected: build succeeds with no import or syntax errors.

- [ ] **Step 6: Commit**

```bash
rtk git add src/data/projects.js
rtk git commit -m "data: add topProjects, new project entries, and Pacarku second image"
```

---

## Task 2: Create the ProjectCarousel Component

**Files:**
- Create: `src/components/ProjectCarousel.jsx`

- [ ] **Step 1: Write the carousel component**

Create `src/components/ProjectCarousel.jsx` with the following content:

```jsx
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProjectCarousel = ({ images, title }) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1 || isPaused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [images.length, isPaused, next]);

  if (images.length === 0) return null;

  return (
    <div
      className="relative w-full h-56 overflow-hidden bg-[#0D1117] group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${title} screenshot ${index + 1}`}
            className="w-full h-full flex-shrink-0 object-contain"
            loading="lazy"
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/80 focus:opacity-100 md:opacity-0 md:group-hover:opacity-100"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/80 focus:opacity-100 md:opacity-0 md:group-hover:opacity-100"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === current ? "bg-cyan-400" : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectCarousel;
```

- [ ] **Step 2: Verify the file compiles**

Run: `rtk npx vite build`

Expected: build succeeds.

- [ ] **Step 3: Commit**

```bash
rtk git add src/components/ProjectCarousel.jsx
rtk git commit -m "feat: add reusable project image carousel"
```

---

## Task 3: Update the Projects Component

**Files:**
- Modify: `src/components/Projects.jsx`

- [ ] **Step 1: Update imports**

Replace the existing imports at the top of `src/components/Projects.jsx` with:

```jsx
import { ArrowRight, Star } from "lucide-react";
import { projects, topProjects } from "../data/projects";
import ProjectCarousel from "./ProjectCarousel";
```

- [ ] **Step 2: Add a reusable ProjectCard helper**

Inside the `Projects` component, before the return statement, add this helper:

```jsx
const ProjectCard = ({ project, isTop = false }) => (
  <div
    className={`rounded-lg overflow-hidden flex flex-col transform transition-all duration-300 hover:-translate-y-1.5 ${
      isTop
        ? "bg-[#161B22]/90 border border-amber-500/40 hover:border-amber-400/80 shadow-lg shadow-amber-900/10 hover:shadow-amber-900/20"
        : "bg-[#161B22]/70 backdrop-blur-sm border border-gray-800 hover:border-white/40 hover:shadow-2xl hover:shadow-white/5"
    }`}
  >
    {project.images ? (
      <ProjectCarousel images={project.images} title={project.title} />
    ) : (
      <div className="w-full h-56 overflow-hidden bg-[#0D1117]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    )}

    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300">
          {project.title}
        </h3>
        {isTop && (
          <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2 py-1 rounded-full whitespace-nowrap">
            <Star className="w-3 h-3 fill-amber-300" />
            Top Project
          </span>
        )}
      </div>
      <p className="text-gray-400 flex-grow text-sm leading-relaxed">
        {project.description}
      </p>
      <div className="my-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`text-xs border px-3 py-1 rounded-full font-mono ${
              isTop
                ? "bg-amber-500/10 border-amber-500/30 text-amber-300"
                : "bg-gray-700/50 border-gray-600 text-cyan-300"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target={project.link !== "#" ? "_blank" : undefined}
        rel={project.link !== "#" ? "noopener noreferrer" : undefined}
        className="mt-auto text-cyan-400 font-semibold inline-flex items-center hover:text-white transition-colors duration-200"
      >
        {project.link !== "#" ? "Lihat Repository" : "Private Project"}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  </div>
);
```

- [ ] **Step 3: Add `group` class to the card wrapper for hover image scaling**

Because the helper uses `group-hover:scale-105`, make sure the outer div has `group`:

Update the outer div className in `ProjectCard` to include `group`:

```jsx
<div
  className={`group rounded-lg overflow-hidden flex flex-col transform transition-all duration-300 hover:-translate-y-1.5 ${
    isTop
      ? "bg-[#161B22]/90 border border-amber-500/40 hover:border-amber-400/80 shadow-lg shadow-amber-900/10 hover:shadow-amber-900/20"
      : "bg-[#161B22]/70 backdrop-blur-sm border border-gray-800 hover:border-white/40 hover:shadow-2xl hover:shadow-white/5"
  }`}
>
```

- [ ] **Step 4: Update the rendered JSX**

Replace the existing return statement with:

```jsx
return (
  <section id="projects" className="py-20">
    <h2 className="font-mono text-3xl font-bold text-white mb-12 text-center">
      <span className="text-cyan-400">~/</span>top-projects
      <span className="text-green-400">$</span> ls -la
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
      {topProjects.map((project, index) => (
        <ProjectCard key={index} project={project} isTop />
      ))}
    </div>

    <h2 className="font-mono text-3xl font-bold text-white mb-12 text-center">
      <span className="text-cyan-400">~/</span>projects
      <span className="text-green-400">$</span> ls -l
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </section>
);
```

- [ ] **Step 5: Verify the build**

Run: `rtk npx vite build`

Expected: build succeeds with no errors.

- [ ] **Step 6: Run the dev server and visually check**

Run: `rtk npm run dev`

Open the local URL and verify:
- Top Projects section appears with two cards.
- PacarKu card auto-cycles through two images; arrows appear on hover; dots are clickable.
- SPI card has a "Top Project" badge and amber accent styling.
- Regular grid shows 10 projects including Custodial Apps, LLM Router, and Flux HR.
- Flux HR and SPI show "Private Project" label.

- [ ] **Step 7: Commit**

```bash
rtk git add src/components/Projects.jsx
rtk git commit -m "feat: render top projects section with Pacarku carousel"
```

---

## Self-Review

### Spec Coverage
- [x] PacarKu auto-carousel → Task 2 + Task 3 helper.
- [x] PacarKu + SPI as Top Projects above grid → Task 3.
- [x] Custodial Apps, LLM Router, Flux HR added → Task 1.
- [x] Flux HR private link → Task 1 uses `#`.
- [x] Distinct premium styling for Top Projects → amber border/glow/badge in Task 3.

### Placeholder Scan
- No TBD/TODO.
- No vague "add validation" steps.
- Code blocks contain complete code.

### Type Consistency
- `ProjectCard` accepts `project` and `isTop` consistently.
- `project.images` array is used for carousel, `project.image` for static cards.
- `link === "#"` logic reused from existing component.
