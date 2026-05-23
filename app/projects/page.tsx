import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects by Rayman Sarowa — coming soon.',
}

export default function ProjectsPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-16">
      <div className="text-center space-y-6 max-w-xl relative z-10">
        <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight">
          Projects
        </h1>
        <p className="text-xl text-slate-400">
          Coming soon — check back later.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-2.5 rounded-full border border-white/40 text-white font-semibold hover:border-white/70 hover:bg-white/10 transition-colors text-sm"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}