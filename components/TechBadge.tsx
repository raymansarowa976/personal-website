import {
  SiDjango,
  SiPostgresql,
  SiRedis,
  SiHtmx,
  SiTailwindcss,
  SiPython,
  SiNextdotjs,
  SiNodedotjs,
  SiDocker,
  SiNginx,
  SiPandas,
  SiScikitlearn,
  SiSqlite,
  SiTypescript,
  SiPrisma,
  SiTurborepo,
  SiGooglechrome,
  SiDrizzle,
  SiZod,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

const iconMap: Record<string, IconType> = {
  'Django': SiDjango,
  'PostgreSQL': SiPostgresql,
  'Redis': SiRedis,
  'HTMX': SiHtmx,
  'Tailwind CSS': SiTailwindcss,
  'Python': SiPython,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  'Docker': SiDocker,
  'Nginx': SiNginx,
  'Pandas': SiPandas,
  'Scikit-Learn': SiScikitlearn,
  'SQLite': SiSqlite,
  'TypeScript': SiTypescript,
  'Prisma': SiPrisma,
  'Turborepo': SiTurborepo,
  'Chrome Extension MV3': SiGooglechrome,
  'Drizzle ORM': SiDrizzle,
  'Zod': SiZod,
}

export function TechBadge({ name }: { name: string }) {
  const Icon = iconMap[name]
  return (
    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-slate-300">
      {Icon && <Icon className="w-3 h-3 shrink-0" aria-hidden="true" />}
      {name}
    </span>
  )
}