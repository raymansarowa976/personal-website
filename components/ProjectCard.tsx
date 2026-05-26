import type { Project } from '@/lib/projects'
import { TechBadge } from '@/components/TechBadge'

export function ProjectCard({ title, description, stack, githubUrl, demoUrl, inProgress, accent }: Project) {
  return (
    <article className="flex flex-col rounded-xl border border-white/10 bg-white/5 hover:border-white/20 overflow-hidden transition-colors">
      {accent && (
        <div
          data-accent
          className="h-1 w-full shrink-0"
          style={{ backgroundColor: accent }}
        />
      )}

      <div className="flex flex-col gap-4 p-6 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-semibold text-white leading-snug">{title}</h2>
          {inProgress && (
            <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-400 border border-amber-500/30">
              In Progress
            </span>
          )}
        </div>

        <p className="text-slate-400 text-sm leading-relaxed flex-1">{description}</p>

        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        <div className="flex items-center gap-4 pt-1 border-t border-white/5">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-white transition-colors"
          >
            GitHub →
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </article>
  )
}