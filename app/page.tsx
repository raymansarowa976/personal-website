import Image from 'next/image'
import Link from 'next/link'
import { SocialLinks } from '@/components/SocialLinks'

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex justify-center px-4 py-12 md:py-16">
      <div className="max-w-5xl w-full relative z-10 flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
        <figure className="shrink-0 mx-auto md:mx-0 w-48 md:w-56">
          <Image
            src="/profile.jpg"
            alt="Photo of Rayman Sarowa"
            width={900}
            height={1200}
            loading="eager"
            sizes="(min-width: 768px) 14rem, 12rem"
            className="w-full h-auto rounded-2xl object-cover ring-1 ring-white/20 shadow-2xl"
          />
          <figcaption className="mt-4 text-center space-y-1">
            <p className="text-lg font-semibold text-white">Rayman Sarowa</p>
            <p className="text-sm text-slate-400">B.Sc. Computer Science, UBC Okanagan</p>
            <p className="text-sm text-slate-400">Kelowna, BC</p>
          </figcaption>
        </figure>
        <div className="space-y-8 max-w-2xl">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
              Hello reader
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight">
              About Me
            </h1>
            <div className="h-1 w-16 rounded-full bg-white/60" />
          </div>
          <div className="space-y-5 text-lg text-slate-300 leading-relaxed">
            <p>
              My name is <span className="font-semibold text-white">Rayman Sarowa</span>. I grew up in the city of Kelowna, which is
              located in the Canadian province of British Columbia. There, I went to the University of British Columbia Okanagan and
              received a Bachelor&apos;s degree in Computer Science.
            </p>
            <p>
              During my degree, I learned a lot of interesting things, such as how to develop software in a team, along with computer
              science theory. My favourite class was software engineering, with parallel computing as a close second. One of the reasons
              I found these classes so enjoyable was that they taught practical applications while also giving more insight into how
              software development and computer science work.
            </p>
            <p>
              My reason for creating this website is to write a public-facing blog and to show some of the projects I&apos;ve worked on,
              both in school and on my own time. Apart from programming, I also enjoy reading novels and manga, and playing horror games.
            </p>
          </div>
          <div className="flex items-center gap-4 pt-2">
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
          <SocialLinks className="pt-2" size="lg" />
        </div>
      </div>
    </div>
  )
}
