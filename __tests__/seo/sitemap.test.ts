import { describe, it, expect } from 'vitest'

import sitemap from '../../app/sitemap'

describe('sitemap', () => {
  it('returns an array of URL entries', () => {
    expect(Array.isArray(sitemap())).toBe(true)
  })

  it('includes the home page', () => {
    const urls = sitemap().map((e) => e.url)
    expect(urls.some((u) => u.endsWith('/')|| u.match(/^https?:\/\/[^/]+$/))).toBe(true)
  })

  it('includes the projects page', () => {
    const urls = sitemap().map((e) => e.url)
    expect(urls.some((u) => u.endsWith('/projects'))).toBe(true)
  })

  it('every entry has a url', () => {
    sitemap().forEach((entry) => {
      expect(typeof entry.url).toBe('string')
      expect(entry.url.length).toBeGreaterThan(0)
    })
  })

  it('every entry has a lastModified date', () => {
    sitemap().forEach((entry) => {
      expect(entry.lastModified).toBeTruthy()
    })
  })
})
