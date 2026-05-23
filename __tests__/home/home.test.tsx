import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../../app/page'

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

describe('Home page', () => {
  describe('identity', () => {
    it('renders a top-level heading', () => {
      render(<Home />)
      expect(screen.getByRole('heading', { level: 1 })).toBeTruthy()
    })
  })

  describe('navigation links', () => {
    it('links to the blog at /blog', () => {
      render(<Home />)
      const links = screen.getAllByRole('link')
      const blogLink = links.find((l) => l.getAttribute('href') === '/blog')
      expect(blogLink).toBeTruthy()
    })

    it('links to projects at /projects', () => {
      render(<Home />)
      const links = screen.getAllByRole('link')
      const projectsLink = links.find((l) => l.getAttribute('href') === '/projects')
      expect(projectsLink).toBeTruthy()
    })
  })

  describe('social links', () => {
    it('has a GitHub link that points to github.com', () => {
      render(<Home />)
      const link = screen.getByRole('link', { name: /github/i })
      expect(link.getAttribute('href')).toContain('github.com')
    })

    it('opens the GitHub link in a new tab', () => {
      render(<Home />)
      const link = screen.getByRole('link', { name: /github/i })
      expect(link.getAttribute('target')).toBe('_blank')
    })

    it('has rel="noopener noreferrer" on the GitHub link', () => {
      render(<Home />)
      const link = screen.getByRole('link', { name: /github/i })
      expect(link.getAttribute('rel')).toContain('noopener')
      expect(link.getAttribute('rel')).toContain('noreferrer')
    })

    it('has a LinkedIn link that points to linkedin.com', () => {
      render(<Home />)
      const link = screen.getByRole('link', { name: /linkedin/i })
      expect(link.getAttribute('href')).toContain('linkedin.com')
    })

    it('opens the LinkedIn link in a new tab', () => {
      render(<Home />)
      const link = screen.getByRole('link', { name: /linkedin/i })
      expect(link.getAttribute('target')).toBe('_blank')
    })

    it('has an email mailto link', () => {
      render(<Home />)
      const link = screen.getByRole('link', { name: /email/i })
      expect(link.getAttribute('href')).toMatch(/^mailto:/)
    })
  })
})