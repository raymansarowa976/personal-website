import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import PostPage, { generateStaticParams } from '../../app/blog/[slug]/page'

vi.mock('content-collections', () => ({
  allPosts: [
    {
      _meta: { path: 'hello-world' },
      title: 'Hello World',
      date: '2024-01-15',
      mdx: 'mock-mdx-bundle',
    },
    {
      _meta: { path: 'second-post' },
      title: 'Second Post',
      date: '2024-02-20',
      mdx: 'another-mdx-bundle',
    },
  ],
}))

vi.mock('next/navigation', () => ({
  notFound: vi.fn(() => { throw new Error('NOT_FOUND') }),
}))

vi.mock('../../components/MDXRenderer', () => ({
  MDXRenderer: ({ code }: { code: string }) => (
    <div data-testid="mdx-renderer" data-code={code} />
  ),
}))

describe('Blog post page', () => {
  describe('rendering a matched post', () => {
    it('renders the post title as h1', async () => {
      const element = await PostPage({ params: Promise.resolve({ slug: 'hello-world' }) })
      render(element)
      expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Hello World')
    })

    it('renders the post date', async () => {
      const element = await PostPage({ params: Promise.resolve({ slug: 'hello-world' }) })
      render(element)
      expect(screen.getByText('2024-01-15')).toBeTruthy()
    })

    it('passes the post mdx bundle to MDXRenderer', async () => {
      const element = await PostPage({ params: Promise.resolve({ slug: 'hello-world' }) })
      render(element)
      const renderer = screen.getByTestId('mdx-renderer')
      expect(renderer.getAttribute('data-code')).toBe('mock-mdx-bundle')
    })

    it('wraps the post content in an article element', async () => {
      const element = await PostPage({ params: Promise.resolve({ slug: 'hello-world' }) })
      render(element)
      expect(document.querySelector('article')).toBeTruthy()
    })

    it('renders the correct post when there are multiple posts', async () => {
      const element = await PostPage({ params: Promise.resolve({ slug: 'second-post' }) })
      render(element)
      expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Second Post')
    })
  })

  describe('not found behaviour', () => {
    it('calls notFound() when the slug does not match any post', async () => {
      const { notFound } = await import('next/navigation')
      await expect(
        PostPage({ params: Promise.resolve({ slug: 'does-not-exist' }) })
      ).rejects.toThrow('NOT_FOUND')
      expect(notFound).toHaveBeenCalled()
    })
  })

  describe('generateStaticParams', () => {
    it('returns one entry per post', async () => {
      const params = await generateStaticParams()
      expect(params).toHaveLength(2)
    })

    it('uses _meta.path as the slug for each entry', async () => {
      const params = await generateStaticParams()
      expect(params).toContainEqual({ slug: 'hello-world' })
      expect(params).toContainEqual({ slug: 'second-post' })
    })
  })
})