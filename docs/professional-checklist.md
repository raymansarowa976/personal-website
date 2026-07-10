# Personal Website Requirements & Recommendations Checklist

A streamlined roadmap for building a high-impact, professional developer portfolio website.

## Phase 1: Core Requirements (Non-Negotiable)
These elements form the foundational baseline of a professional, functional software engineering portfolio.

### 1. Above the Fold & Introduction
- [ ] **Clear Professional Headline:** Your name, exact title/role, and institutional affiliation or location (e.g., *Software Engineering Student at UBC Okanagan*). *(Currently the h1 just says "About Me" — name/title/location live only in the body paragraph.)*
- [ ] **Three-Second Hook:** A visitor must immediately understand your primary engineering focus upon loading the page. *(The intro is a dense biographical paragraph, not a focused hook.)*
- [ ] **No Vague Taglines:** Avoid generic phrases; use clear, direct, and searchable terms. *("About Me" is generic.)*

### 2. High-Impact Project Showcase
- [x] **Curated Selection:** 2 to 4 high-quality, full-stack or data-intensive applications (prioritize depth over quantity). *(4 projects: block-lock, Subscription Intelligence, MASHER, Space Traffic Control.)*
- [ ] **Problem & Solution Context:** A brief explanation of *why* the project exists and *what* specific problem it solves. *(Descriptions are feature/tech lists, not framed as problem → solution.)*
- [x] **Explicit Tech Stack Badges:** Visible tags showing the specific languages, frameworks, and databases used (e.g., `Next.js`, `Django`, `PostgreSQL`). *(`TechBadge` component renders the `stack` array on every card.)*
- [x] **Actionable Call-to-Actions (CTAs):** Direct, working links to live application deployments and public GitHub source code repositories. *(GitHub/Website links wired per project.)*

### 3. Technical Skills Inventory
- [ ] **Categorized Breakdown:** Logically grouped tech stack (e.g., Languages, Frameworks, Developer Tools, Databases) to enable rapid scanning by recruiters. *(No standalone skills section exists — only per-project badges.)*
- [ ] **Honest Proficiency:** Only list technologies you can comfortably talk through or whiteboard in a technical interview. *(N/A until a skills section exists.)*

### 4. Background & Navigation
- [ ] **Concise "About Me":** A 1-2 paragraph professional summary highlighting your technical journey, engineering philosophies, and what drives your work. *(Current bio is casual/run-on and doesn't touch philosophy or what drives your work — worth a rewrite.)*
- [x] **Frictionless Contact & Links:** Accessible links to your LinkedIn, GitHub, and a professional email address. *(Present on both the homepage and the footer.)*
- [x] **Responsive Design:** Seamless layout transitions, text scaling, and menu navigation optimized for mobile, tablet, and desktop viewports. *(Tailwind responsive classes used throughout — nav, hero text, project grid.)*

---

## Phase 2: Recommended Enhancements (The Differentiators)
Features that elevate your site from a static resume mirror into an interactive architectural showcase.

### 1. Deep Technical Context
- [ ] **System Architecture Diagrams:** Visual mapping of data flows, automated pipelines, or infrastructure setups to demonstrate authentic system design knowledge.
- [ ] **Deep-Dive Case Studies:** Written breakdowns detailing specific technical challenges encountered during project execution, how you benchmarked solutions, and the architectural trade-offs made. *(Removed along with the blog section.)*

### 2. Professional Polish
- [ ] **Print-Ready Resume Download:** A clean, accessible link to download a matching PDF version of your resume.
- [ ] **Custom Domain Name:** A professional domain (e.g., `.dev`, `.com`, or `.io`) that matches your name or professional handle. *(`rsarowa.com` is hardcoded into metadata/sitemap, but my last note on it has the domain as unregistered — worth confirming it's actually live.)*
- [ ] **Lightweight Dark/Light Mode:** A clean, accessible theme toggle that respects system preferences or provides an intuitive user override. *(Site is dark-only; no toggle.)*

### 3. Performance & SEO Baseline
- [x] **Semantic HTML & Accessibility:** Use of proper HTML5 tags (`<main>`, `<section>`, `<nav>`) and compliant ARIA labels. *(`<main>`, `<nav>`, `<footer>` all in use; a full ARIA audit hasn't been done.)*
- [x] **Fast Asset Loading:** Optimized image formats, lazy loading, and minimal client-side bundles for lightning-fast page transitions. *(`next/image` + `next/font` in place.)*
- [ ] **Metadata Configuration:** Correctly configured meta tags, page titles, and Open Graph (OG) fields for clean link previews when shared. *(Title/description/OG type are set, but there's no `og:image` or Twitter card yet — link previews will look bare.)*
