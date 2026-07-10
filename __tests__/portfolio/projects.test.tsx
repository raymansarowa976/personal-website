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

import PortfolioPage from '../../app/portfolio/page'

describe('Portfolio page', () => {
  it('renders a top-level heading', () => {
    render(<PortfolioPage />)
    expect(screen.getByRole('heading', { level: 1 })).toBeTruthy()
  })

  it('renders the Subscription Intelligence project', () => {
    render(<PortfolioPage />)
    expect(screen.getByText(/subscription intelligence/i)).toBeTruthy()
  })

  it('renders the MASHER project', () => {
    render(<PortfolioPage />)
    expect(screen.getByText(/masher/i)).toBeTruthy()
  })

  it('renders the Space Traffic Control project', () => {
    render(<PortfolioPage />)
    expect(screen.getByText(/space traffic control/i)).toBeTruthy()
  })

  it('renders the block-lock project', () => {
    render(<PortfolioPage />)
    expect(screen.getByText(/block.lock/i)).toBeTruthy()
  })

  it('marks block-lock as in progress', () => {
    render(<PortfolioPage />)
    expect(screen.getByText(/in progress/i)).toBeTruthy()
  })

  it('renders a GitHub link for projects with a githubUrl', () => {
    render(<PortfolioPage />)
    const githubLinks = screen.getAllByRole('link', { name: /github/i })
    expect(githubLinks.length).toBe(2)
  })

  it('renders website links for projects with a websiteUrl', () => {
    render(<PortfolioPage />)
    const websiteLinks = screen.getAllByRole('link', { name: /website/i })
    expect(websiteLinks.length).toBe(2)
  })

  it('links subscription intelligence to subintel.ca', () => {
    render(<PortfolioPage />)
    const websiteLinks = screen.getAllByRole('link', { name: /website/i })
    const subintelLink = websiteLinks.find(link => link.getAttribute('href') === 'https://subintel.ca')
    expect(subintelLink).toBeTruthy()
  })
})