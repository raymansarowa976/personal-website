import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import BlogPage from '../../app/blog/page'

vi.mock('content-collections', () => ({
  allPosts: [
    {
      _meta: { path: 'hello-world' },
      title: 'Hello World',
      summary: 'My first post summary.',
      date: '2024-01-15',
    },
    {
      _meta: { path: 'second-post' },
      title: 'Second Post',
      summary: 'Another post summary.',
      date: '2024-02-20',
    },
  ],
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

describe('Blog listing page', () => {
  describe('structure', () => {
    it('does not render its own main landmark (the root layout provides it)', () => {
      render(<BlogPage />)
      expect(screen.queryByRole('main')).toBeNull()
    })

    it('renders the page heading', () => {
      render(<BlogPage />)
      expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Blog')
    })
  })

  describe('post list', () => {
    it('renders an article element for each post', () => {
      render(<BlogPage />)
      expect(screen.getAllByRole('article')).toHaveLength(2)
    })

    it('links each post title to /blog/[slug], newest first', () => {
      render(<BlogPage />)
      const links = screen.getAllByRole('link')
      const slugLinks = links.filter((l) => l.getAttribute('href')?.startsWith('/blog/'))
      expect(slugLinks[0].getAttribute('href')).toBe('/blog/second-post')
      expect(slugLinks[1].getAttribute('href')).toBe('/blog/hello-world')
    })

    it('shows the title of each post as the link text', () => {
      render(<BlogPage />)
      expect(screen.getByRole('link', { name: 'Hello World' })).toBeTruthy()
      expect(screen.getByRole('link', { name: 'Second Post' })).toBeTruthy()
    })

    it('renders each post title as an h2', () => {
      render(<BlogPage />)
      const headings = screen.getAllByRole('heading', { level: 2 })
      expect(headings.map((h) => h.textContent)).toEqual(['Second Post', 'Hello World'])
    })

    it('shows the summary of each post', () => {
      render(<BlogPage />)
      expect(screen.getByText('My first post summary.')).toBeTruthy()
      expect(screen.getByText('Another post summary.')).toBeTruthy()
    })

    it('shows the formatted date of each post', () => {
      render(<BlogPage />)
      expect(screen.getByText('January 15, 2024')).toBeTruthy()
      expect(screen.getByText('February 20, 2024')).toBeTruthy()
    })

    it('renders the date in a time element with a machine-readable dateTime', () => {
      render(<BlogPage />)
      const times = Array.from(document.querySelectorAll('time'))
      expect(times.map((t) => t.getAttribute('datetime'))).toEqual(['2024-02-20', '2024-01-15'])
    })
  })
})