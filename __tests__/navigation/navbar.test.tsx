import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navbar } from '../../components/Navbar'

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
 * Tests for AC1: Navbar with links to Home and Projects
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
    it('contains a link to the home page (/)', () => {
      render(<Navbar />)
      const link = screen.getByRole('link', { name: /home/i })
      expect(link.getAttribute('href')).toBe('/')
    })

    it('contains a link to projects (/projects)', () => {
      render(<Navbar />)
      const link = screen.getByRole('link', { name: /projects/i })
      expect(link.getAttribute('href')).toBe('/projects')
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