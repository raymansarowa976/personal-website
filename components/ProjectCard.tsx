import type { Project } from '@/lib/projects'

export function ProjectCard({ title, description, stack, githubUrl, demoUrl, inProgress }: Project) {
  return (
    <article className="flex flex-col gap-4 p-6 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 transition-colors">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        {inProgress && (
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-400 border border-amber-500/30">
            In Progress
          </span>
        )}
      </div>
      <p className="text-slate-400 text-sm leading-relaxed flex-1">{description}</p>

      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-1">
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
    </article>
  )
}