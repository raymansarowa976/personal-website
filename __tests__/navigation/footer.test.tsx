import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from '../../components/Footer'

/**
 * Tests for AC2: Footer with GitHub and LinkedIn links
 * Tests for AC3: Responsive layout markers
 *
 * Imports from `components/Footer.tsx` (not yet created) — will fail in red state.
 */

describe('Footer', () => {
  describe('semantic structure', () => {
    it('renders a contentinfo landmark (footer element)', () => {
      render(<Footer />)
      expect(screen.getByRole('contentinfo')).toBeDefined()
    })
  })

  describe('GitHub link', () => {
    it('renders a link to a GitHub profile', () => {
      render(<Footer />)
      const link = screen.getByRole('link', { name: /github/i })
      expect(link.getAttribute('href')).toContain('github.com')
    })

    it('opens in a new tab', () => {
      render(<Footer />)
      const link = screen.getByRole('link', { name: /github/i })
      expect(link.getAttribute('target')).toBe('_blank')
    })

    it('has rel="noopener noreferrer" for security', () => {
      render(<Footer />)
      const link = screen.getByRole('link', { name: /github/i })
      expect(link.getAttribute('rel')).toContain('noopener')
      expect(link.getAttribute('rel')).toContain('noreferrer')
    })
  })

  describe('LinkedIn link', () => {
    it('renders a link to a LinkedIn profile', () => {
      render(<Footer />)
      const link = screen.getByRole('link', { name: /linkedin/i })
      expect(link.getAttribute('href')).toContain('linkedin.com')
    })

    it('opens in a new tab', () => {
      render(<Footer />)
      const link = screen.getByRole('link', { name: /linkedin/i })
      expect(link.getAttribute('target')).toBe('_blank')
    })

    it('has rel="noopener noreferrer" for security', () => {
      render(<Footer />)
      const link = screen.getByRole('link', { name: /linkedin/i })
      expect(link.getAttribute('rel')).toContain('noopener')
      expect(link.getAttribute('rel')).toContain('noreferrer')
    })
  })

  describe('responsiveness', () => {
    it('footer container uses a flex layout to support responsive stacking', () => {
      render(<Footer />)
      const footer = screen.getByRole('contentinfo')
      expect(footer.innerHTML).toMatch(/flex/)
    })
  })
})