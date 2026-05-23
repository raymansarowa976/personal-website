import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

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

import ProjectsPage from '../../app/projects/page'

describe('Projects page', () => {
  it('renders a top-level heading', () => {
    render(<ProjectsPage />)
    expect(screen.getByRole('heading', { level: 1 })).toBeTruthy()
  })

  it('communicates that content is coming soon', () => {
    render(<ProjectsPage />)
    expect(screen.getByText(/coming soon/i)).toBeTruthy()
  })

  it('includes a link back to the home page', () => {
    render(<ProjectsPage />)
    const homeLink = screen.getByRole('link', { name: /home/i })
    expect(homeLink.getAttribute('href')).toBe('/')
  })
})