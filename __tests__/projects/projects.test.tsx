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

  it('renders the Subscription Intelligence project', () => {
    render(<ProjectsPage />)
    expect(screen.getByText(/subscription intelligence/i)).toBeTruthy()
  })

  it('renders the MASHER project', () => {
    render(<ProjectsPage />)
    expect(screen.getByText(/masher/i)).toBeTruthy()
  })

  it('renders the Space Traffic Control project', () => {
    render(<ProjectsPage />)
    expect(screen.getByText(/space traffic control/i)).toBeTruthy()
  })

  it('renders the block-lock project', () => {
    render(<ProjectsPage />)
    expect(screen.getByText(/block.lock/i)).toBeTruthy()
  })

  it('marks block-lock as in progress', () => {
    render(<ProjectsPage />)
    expect(screen.getByText(/in progress/i)).toBeTruthy()
  })

  it('renders a GitHub link for projects with a githubUrl', () => {
    render(<ProjectsPage />)
    const githubLinks = screen.getAllByRole('link', { name: /github/i })
    expect(githubLinks.length).toBe(3)
  })

  it('renders a website link for block-lock', () => {
    render(<ProjectsPage />)
    const websiteLink = screen.getByRole('link', { name: /website/i })
    expect(websiteLink.getAttribute('href')).toBe('https://blocklock.app')
  })

  it('marks subscription intelligence as deploying soon', () => {
    render(<ProjectsPage />)
    expect(screen.getByText(/deploying soon/i)).toBeTruthy()
  })
})