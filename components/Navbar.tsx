import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          Rayman Sarowa
        </Link>
        <ul className="flex items-center gap-6">
          <li>
            <Link href="/" className="text-sm hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-sm hover:underline">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-sm hover:underline">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}