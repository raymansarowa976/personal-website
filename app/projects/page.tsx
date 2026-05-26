import type { Metadata } from 'next'
import { projects } from '@/lib/projects'
import { ProjectCard } from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A showcase of projects by Rayman Sarowa.',
}

export default function ProjectsPage() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-white">Projects</h1>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </main>
  )
}