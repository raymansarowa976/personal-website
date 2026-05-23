import { describe, it, expect, vi } from 'vitest'

vi.mock('content-collections', () => ({
  allPosts: [
    { _meta: { path: 'hello-world' }, date: '2024-01-15' },
    { _meta: { path: 'second-post' }, date: '2024-02-20' },
  ],
}))

import sitemap from '../../app/sitemap'

describe('sitemap', () => {
  it('returns an array of URL entries', () => {
    expect(Array.isArray(sitemap())).toBe(true)
  })

  it('includes the home page', () => {
    const urls = sitemap().map((e) => e.url)
    expect(urls.some((u) => u.endsWith('/')|| u.match(/^https?:\/\/[^/]+$/))).toBe(true)
  })

  it('includes the blog listing page', () => {
    const urls = sitemap().map((e) => e.url)
    expect(urls.some((u) => u.endsWith('/blog'))).toBe(true)
  })

  it('includes one entry per post', () => {
    const urls = sitemap().map((e) => e.url)
    expect(urls.some((u) => u.includes('hello-world'))).toBe(true)
    expect(urls.some((u) => u.includes('second-post'))).toBe(true)
  })

  it('every entry has a url', () => {
    sitemap().forEach((entry) => {
      expect(typeof entry.url).toBe('string')
      expect(entry.url.length).toBeGreaterThan(0)
    })
  })

  it('post entries have a lastModified date derived from the post date', () => {
    const entries = sitemap()
    const hw = entries.find((e) => e.url.includes('hello-world'))!
    expect(hw.lastModified).toBeTruthy()
    expect(new Date(hw.lastModified as string).getFullYear()).toBe(2024)
  })
})