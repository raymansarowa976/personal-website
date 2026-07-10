import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SiteChrome } from '../../components/SiteChrome'

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}))

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

import { usePathname } from 'next/navigation'

describe('SiteChrome', () => {
  describe('on the home page (/)', () => {
    beforeEach(() => {
      vi.mocked(usePathname).mockReturnValue('/')
    })

    it('does not render the navbar', () => {
      render(<SiteChrome />)
      expect(screen.queryByRole('navigation')).toBeNull()
    })

    it('does not render the footer', () => {
      render(<SiteChrome />)
      expect(screen.queryByRole('contentinfo')).toBeNull()
    })
  })

  describe('on other pages', () => {
    beforeEach(() => {
      vi.mocked(usePathname).mockReturnValue('/projects')
    })

    it('renders the navbar', () => {
      render(<SiteChrome />)
      expect(screen.getByRole('navigation')).toBeTruthy()
    })

    it('renders the footer', () => {
      render(<SiteChrome />)
      expect(screen.getByRole('contentinfo')).toBeTruthy()
    })
  })
})