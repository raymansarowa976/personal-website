import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="bg-[#05050f]">
      <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg text-white">
          Rayman Sarowa
        </Link>
        <ul className="flex items-center gap-6">
          <li>
            <Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-sm text-slate-400 hover:text-white transition-colors">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}