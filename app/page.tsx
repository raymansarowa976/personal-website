import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-16">
      <div className="text-center space-y-8 max-w-2xl relative z-10">
        <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight">
          About Me
        </h1>
        <p className="text-xl text-slate-300 leading-relaxed">
          Hello, My name is Rayman Sarowa. I grew up in the city of Kelowna which is located in British Columbia. Here, I went to UBCO and recieved a Bsc in Computer Science and learned a lot of interesting things. I created this website so I could post stuff I wanted and also show some of the projects I&apos;ve worked on.
        </p>
        <div className="flex items-center justify-center gap-4 pt-2">
          <Link
            href="/blog"
            className="px-6 py-2.5 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors text-sm"
          >
            Blog
          </Link>
          <Link
            href="/projects"
            className="px-6 py-2.5 rounded-full border border-white/40 text-white font-semibold hover:border-white/70 hover:bg-white/10 transition-colors text-sm"
          >
            Projects
          </Link>
        </div>
        <div className="flex items-center justify-center gap-6 pt-4">
          <a
            href="https://github.com/raymansarowa976"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rayman-sarowa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href="mailto:raymansarowa1@gmail.com"
            className="text-slate-400 hover:text-white transition-colors text-sm"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  )
}