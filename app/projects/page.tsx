import type { Metadata } from 'next'
import { projects } from '@/lib/projects'
import { ProjectCard } from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A showcase of projects by Rayman Sarowa.',
}

export default function ProjectsPage() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-white">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:w-2/3 md:mx-auto">
        {projects.slice(3).map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}