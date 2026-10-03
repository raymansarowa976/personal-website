'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/projects', label: 'Projects' },
]

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)
}

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#05050f]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="font-bold text-lg text-white tracking-tight">
          Rayman Sarowa
        </Link>
        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map(({ href, label }) => {
            const active = isActive(pathname, href)
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                    active ? 'bg-white text-slate-900' : 'text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
