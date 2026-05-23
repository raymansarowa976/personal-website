'use client'
import { usePathname } from 'next/navigation'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function SiteChrome({ children }: { children?: React.ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <>
      {!isHome && <Navbar />}
      {children}
      {!isHome && <Footer />}
    </>
  )
}