export interface Project {
  title: string
  description: string
  stack: string[]
  githubUrl?: string
  websiteUrl?: string
  demoUrl?: string
  inProgress?: boolean
  deployingSoon?: boolean
  accent?: string
}

export const projects: Project[] = [
  {
    title: 'block-lock',
    description:
      'High-performance B2C productivity ecosystem combining a Next.js web dashboard and a Manifest V3 browser extension to dynamically block and limit distracting websites based on custom schedules. Features a Redis-backed cache-first sync engine, AI-assisted scheduling via natural language input, and semantic domain classification using pgvector.',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Redis', 'Auth.js', 'Zod', 'Turborepo', 'Chrome Extension MV3'],
    websiteUrl: 'https://blocklock.app',
    inProgress: true,
    accent: '#7c3aed',
  },
  {
    title: 'Subscription Intelligence',
    description:
      'Multi-tenant financial tracking platform integrating Gmail OAuth2 to automate receipt ingestion. Features an async background pipeline (Huey + Redis) for mailbox scanning and AI-assisted parsing to extract merchant, price, and renewal cadence from unstructured email.',
    stack: ['Django', 'PostgreSQL', 'Redis', 'HTMX', 'Tailwind CSS', 'Python'],
    websiteUrl: 'https://subintel.ca',
    accent: '#16a34a',
  },
  {
    title: 'MASHER — TA Allocation System',
    description:
      'Full-stack TA allocation system with role-based access control for students, instructors, admins, and TAs. Architected a scalable PostgreSQL schema for complex many-to-many relationships and deployed via an Nginx reverse proxy with GitHub Actions CI/CD in a Dockerized environment.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Drizzle ORM', 'Docker', 'Nginx'],
    githubUrl: 'https://github.com/raymansarowa976/TA-Allocation-MASHER',
    accent: '#2563eb',
  },
  {
    title: 'Space Traffic Control — NASA Analytics',
    description:
      'Automated ETL pipeline extracting and sanitising Near-Earth Object data from NASA\'s NeoWs REST API. Applied K-Means clustering to classify asteroids into hazard profiles based on kinetic energy, orbital velocity, and miss-distance.',
    stack: ['Python', 'Pandas', 'Scikit-Learn', 'SciPy', 'SQLite'],
    githubUrl: 'https://github.com/raymansarowa976/space-traffic-control',
    accent: '#d97706',
  },
]