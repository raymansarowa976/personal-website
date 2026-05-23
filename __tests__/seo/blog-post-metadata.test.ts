import { describe, it, expect, vi } from 'vitest'

vi.mock('content-collections', () => ({
  allPosts: [
    {
      _meta: { path: 'hello-world' },
      title: 'Hello World',
      summary: 'A summary of the hello world post.',
      date: '2024-01-15',
      mdx: 'mock-mdx-bundle',
    },
  ],
}))

vi.mock('next/navigation', () => ({
  notFound: vi.fn(() => { throw new Error('NOT_FOUND') }),
}))

vi.mock('../../components/MDXRenderer', () => ({
  MDXRenderer: () => null,
}))

import { generateMetadata } from '../../app/blog/[slug]/page'

describe('blog post generateMetadata', () => {
  describe('for a known post', () => {
    it('sets the page title to the post title', async () => {
      const meta = await generateMetadata({ params: Promise.resolve({ slug: 'hello-world' }) })
      expect(meta.title).toBe('Hello World')
    })

    it('sets description to the post summary', async () => {
      const meta = await generateMetadata({ params: Promise.resolve({ slug: 'hello-world' }) })
      expect(meta.description).toBe('A summary of the hello world post.')
    })

    it('sets og:title to the post title', async () => {
      const meta = await generateMetadata({ params: Promise.resolve({ slug: 'hello-world' }) })
      expect(meta.openGraph?.title).toBe('Hello World')
    })

    it('sets og:description to the post summary', async () => {
      const meta = await generateMetadata({ params: Promise.resolve({ slug: 'hello-world' }) })
      expect(meta.openGraph?.description).toBe('A summary of the hello world post.')
    })

    it('sets og:type to article', async () => {
      const meta = await generateMetadata({ params: Promise.resolve({ slug: 'hello-world' }) })
      expect(meta.openGraph?.type).toBe('article')
    })
  })

  describe('for an unknown slug', () => {
    it('returns an empty metadata object', async () => {
      const meta = await generateMetadata({ params: Promise.resolve({ slug: 'does-not-exist' }) })
      expect(meta).toEqual({})
    })
  })
})