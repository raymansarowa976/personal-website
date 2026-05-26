# My Personal Website - Technology Stack

Welcome to the documentation for the technology stack powering this personal blog. This document outlines the core technologies, libraries, and deployment infrastructure used in this repository.

---

## Core Technologies

| Technology | Purpose | Version / Notes |
| :--- | :--- | :--- |
| **Next.js** | Framework | v14+ (App Router) |
| **React.js** | UI Library | v18+ |
| **Tailwind CSS** | Styling | v3+ or v4+ |
| **Content Collections** | Content Handling | Modern replacement for Contentlayer |
| **MDX** | Post Authoring | Markdown with React components |

---

## Key Packages & Dependencies

### Content Management & Markdown Processing
* **`@content-collections/core`** & **`@content-collections/next`**: Handles type-safe content management directly from the file system.
* **`rehype-pretty-code`**: Provides beautiful, VS Code-like syntax highlighting inside MDX files.
* **`@tailwindcss/typography`**: Provides elegant default styles for typographic elements (headings, paragraphs, lists) on the blog pages.

---

## Deployment

The project is configured for seamless deployment on **Vercel**, which features native, zero-config support for Next.js features (such as the App Router and Server Components) and automatic builds on every Git push.

---

## Project Structure

```text
my-blog/
├── app/                # Next.js App Router (pages and layouts)
├── content/            # .mdx blog posts
├── components/         # Reusable React components
├── public/             # Static assets
├── content-collections.ts # Collection schemas and configurations
└── tailwind.config.js  # Tailwind typography and theme configurations
