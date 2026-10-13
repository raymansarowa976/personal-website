import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { usePathname } from 'next/navigation'
import { Navbar } from '../../components/Navbar'

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(() => '/blog'),
}))

// next/link renders as a router-aware anchor; replace with a plain <a> for jsdom
vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string
    children: React.ReactNode
    [key: string]: unknown
  }) => <a href={String(href)} {...props}>{children}</a>,
}))

/**
 * Tests for AC1: Navbar with a home link (the site name), Blog, Projects, and Bookshelf
 * Tests for AC3: Responsive layout markers
 *
 * Imports from `components/Navbar.tsx` (not yet created) — will fail in red state.
 */

describe('Navbar', () => {
  describe('semantic structure', () => {
    it('renders a navigation landmark', () => {
      render(<Navbar />)
      expect(screen.getByRole('navigation')).toBeDefined()
    })
  })

  describe('required links', () => {
    it('links the site name to the home page (/)', () => {
      render(<Navbar />)
      const link = screen.getByRole('link', { name: /rayman sarowa/i })
      expect(link.getAttribute('href')).toBe('/')
    })

    it('does not render a separate Home link', () => {
      render(<Navbar />)
      expect(screen.queryByRole('link', { name: /^home$/i })).toBeNull()
    })

    it('contains a link to the blog (/blog)', () => {
      render(<Navbar />)
      const link = screen.getByRole('link', { name: /blog/i })
      expect(link.getAttribute('href')).toBe('/blog')
    })

    it('contains a link to projects (/projects)', () => {
      render(<Navbar />)
      const link = screen.getByRole('link', { name: /projects/i })
      expect(link.getAttribute('href')).toBe('/projects')
    })

    it('contains a link to the bookshelf (/bookshelf)', () => {
      render(<Navbar />)
      const link = screen.getByRole('link', { name: /bookshelf/i })
      expect(link.getAttribute('href')).toBe('/bookshelf')
    })
  })

  describe('active link', () => {
    it('marks the link for the current page with aria-current', () => {
      vi.mocked(usePathname).mockReturnValue('/projects')
      render(<Navbar />)
      expect(screen.getByRole('link', { name: /projects/i }).getAttribute('aria-current')).toBe('page')
      expect(screen.getByRole('link', { name: /blog/i }).getAttribute('aria-current')).toBeNull()
    })

    it('keeps Blog active on an individual post page', () => {
      vi.mocked(usePathname).mockReturnValue('/blog/first-post')
      render(<Navbar />)
      expect(screen.getByRole('link', { name: /blog/i }).getAttribute('aria-current')).toBe('page')
    })

    it('marks no link active on the home page', () => {
      vi.mocked(usePathname).mockReturnValue('/')
      render(<Navbar />)
      const active = screen.getAllByRole('link').filter((l) => l.getAttribute('aria-current') === 'page')
      expect(active).toHaveLength(0)
    })

    it('marks only one link as active', () => {
      vi.mocked(usePathname).mockReturnValue('/projects')
      render(<Navbar />)
      const active = screen.getAllByRole('link').filter((l) => l.getAttribute('aria-current') === 'page')
      expect(active).toHaveLength(1)
    })
  })

  describe('responsiveness', () => {
    it('nav links list uses a flex container to support responsive layout', () => {
      render(<Navbar />)
      // The list wrapping the nav links should use Tailwind flex so items
      // reflow correctly across breakpoints.
      const nav = screen.getByRole('navigation')
      expect(nav.innerHTML).toMatch(/flex/)
    })
  })
})