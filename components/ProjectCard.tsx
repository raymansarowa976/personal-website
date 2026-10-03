import { FaGithub } from 'react-icons/fa'
import { FiExternalLink, FiPlayCircle } from 'react-icons/fi'
import type { IconType } from 'react-icons'
import type { Project } from '@/lib/projects'
import { TechBadge } from '@/components/TechBadge'

function CardLink({ href, label, Icon }: { href: string; label: string; Icon: IconType }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/20 text-sm font-semibold text-slate-200 hover:border-white/50 hover:bg-white/10 hover:text-white transition-colors"
    >
      <Icon className="w-3.5 h-3.5" aria-hidden="true" />
      {label}
    </a>
  )
}

export function ProjectCard({ title, description, stack, githubUrl, websiteUrl, demoUrl, inProgress, deployingSoon, accent }: Project) {
  return (
    <article className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06] hover:-translate-y-0.5 overflow-hidden transition-all">
      {accent && (
        <div
          data-accent
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: accent }}
        />
      )}

      <div className="flex flex-col gap-4 p-6 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-xl font-semibold text-white tracking-tight leading-snug">{title}</h2>
          <div className="flex items-center gap-2 shrink-0">
            {inProgress && (
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-400 border border-amber-500/30">
                In Progress
              </span>
            )}
            {deployingSoon && (
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-sky-500/20 text-sky-400 border border-sky-500/30">
                Deploying Soon
              </span>
            )}
          </div>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed flex-1">{description}</p>

        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        {(githubUrl || websiteUrl || demoUrl) && (
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
            {githubUrl && <CardLink href={githubUrl} label="GitHub" Icon={FaGithub} />}
            {websiteUrl && <CardLink href={websiteUrl} label="Website" Icon={FiExternalLink} />}
            {demoUrl && <CardLink href={demoUrl} label="Live Demo" Icon={FiPlayCircle} />}
          </div>
        )}
      </div>
    </article>
  )
}
