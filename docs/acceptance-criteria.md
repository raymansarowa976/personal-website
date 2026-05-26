#  Project Backlog & Acceptance Criteria

This document outlines the development milestones for the personal blog platform, built with Next.js, React, and Content Collections.

---

##  Milestone 1: The Core Engine (MVP)
*Goal: Successfully render a local MDX file on a live URL.*

### 1. Project Initialization & Infrastructure
**Description:** Set up the base Next.js project with TypeScript and Tailwind CSS.
**Acceptance Criteria:**
* [x] Initialize Next.js using the App Router.
* [x] Configure Tailwind CSS with the `@tailwindcss/typography` plugin.
* [x] Deploy a "Coming Soon" placeholder to Vercel to verify the CI/CD pipeline.

### 2. Content Pipeline with Content Collections
**Description:** Implement the transformation layer to turn MDX files into type-safe data.
**Acceptance Criteria:**
* [x] Define a `Post` schema in `content-collections.ts` (including title, date, and summary).
* [x] Create a `/content` directory with at least one sample `.mdx` file.
* [x] Successfully generate TypeScript types from the MDX frontmatter.

### 3. Dynamic Blog Routing
**Description:** Create individual post pages using dynamic segments.
**Acceptance Criteria:**
* [x] Implement `app/blog/[slug]/page.tsx` to fetch content based on the URL slug.
* [x] Use `generateStaticParams` for build-time static page generation.
* [x] Wrap MDX output in a Tailwind `prose` class for immediate readability.

---

##  Milestone 2: Developer Experience & UI
*Goal: Professional styling and technical reading features.*

### 4. Syntax Highlighting & Code Blocks
**Description:** Enhance the reading experience for technical code snippets.
**Acceptance Criteria:**
* [x] Integrate `rehype-pretty-code` into the content pipeline.
* [x] Apply a VS Code-compatible theme (e.g., Dracula or GitHub Dark).
* [x] Add a "Copy to Clipboard" button for all code blocks.

### 5. Global Navigation & Layout
**Description:** Build a cohesive UI connecting the home page and the blog.
**Acceptance Criteria:**
* [x] Create a `Navbar` with links to Home, Blog, and Projects.
* [x] Implement a `Footer` featuring GitHub and LinkedIn profiles.
* [x] Ensure the layout is fully responsive across mobile and desktop.

---

##  Milestone 3: Optimization & SEO
*Goal: High performance and search engine visibility.*

### 6. Image Optimization in MDX
**Description:** Ensure images are optimized for fast loading.
**Acceptance Criteria:**
* [x] Map standard Markdown `img` tags to the `next/image` component.
* [x] Support local images stored within the `/content` directory.
* [x] Enable automatic WebP conversion and resizing.

### 7. SEO & Meta Tags
**Description:** Optimize the site for discovery and social sharing.
**Acceptance Criteria:**
* [x] Implement dynamic metadata via the Next.js `generateMetadata` API.
* [x] Automatically generate a `sitemap.xml` using a Route Handler.
* [x] Add Open Graph (OG) tags for social media link previews.

---

##  Milestone 4: Professional Showcase
*Goal: Highlight specific software engineering and data science expertise.*

### 8. Project Portfolio Integration
**Description:** Display existing projects like Subscription Intelligence and the TA Management System.
**Acceptance Criteria:**
* [x] Create a project showcase section featuring tech stack badges (Next.js, Python, Java).
* [x] Link directly to GitHub repositories or live project demos.
* [x] Ensure project documentation matches the professional standards of the blog.
