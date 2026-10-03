import type { Metadata } from 'next'
import { projects } from '@/lib/projects'
import { ProjectCard } from '@/components/ProjectCard'
import { PageHeader } from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A showcase of projects by Rayman Sarowa.',
}

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-12">
      <PageHeader
        eyebrow="Things I've built"
        title="Projects"
        description="A mix of school projects and things I've built on my own time."
      />
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 md:mx-auto">
          {projects.slice(3).map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}
