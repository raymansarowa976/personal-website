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
    it('renders a main landmark', () => {
      render(<BlogPage />)
      expect(screen.getByRole('main')).toBeTruthy()
    })

    it('renders the page heading', () => {
      render(<BlogPage />)
      expect(screen.getByRole('heading', { level: 1 })).toBeTruthy()
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

    it('shows the date of each post', () => {
      render(<BlogPage />)
      expect(screen.getByText('2024-01-15')).toBeTruthy()
      expect(screen.getByText('2024-02-20')).toBeTruthy()
    })

    it('renders the date in a time element', () => {
      render(<BlogPage />)
      const times = document.querySelectorAll('time')
      expect(times).toHaveLength(2)
    })
  })
})