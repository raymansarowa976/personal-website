import { describe, it, expect, vi } from 'vitest'

vi.mock('next/font/google', () => ({
  Geist: () => ({ variable: '--font-geist-sans', className: '' }),
  Geist_Mono: () => ({ variable: '--font-geist-mono', className: '' }),
}))

vi.mock('@/components/SiteChrome', () => ({ SiteChrome: () => null }))
vi.mock('@/components/StarfieldBackground', () => ({ StarfieldBackground: () => null }))
vi.mock('@/components/CometTrail', () => ({ CometTrail: () => null }))

import { metadata } from '../../app/layout'

describe('layout metadata', () => {
  describe('title', () => {
    it('has a default title', () => {
      expect((metadata.title as { default: string }).default).toBeTruthy()
    })

    it('has a template that includes %s for page-specific titles', () => {
      expect((metadata.title as { template: string }).template).toContain('%s')
    })
  })

  describe('description', () => {
    it('has a site-level description', () => {
      expect(metadata.description).toBeTruthy()
    })
  })

  describe('metadataBase', () => {
    it('is set to an absolute URL', () => {
      expect(metadata.metadataBase).toBeInstanceOf(URL)
    })
  })

  describe('Open Graph', () => {
    it('has an og:title', () => {
      expect(metadata.openGraph?.title).toBeTruthy()
    })

    it('has an og:description', () => {
      expect(metadata.openGraph?.description).toBeTruthy()
    })

    it('has og:type set to website', () => {
      expect(metadata.openGraph?.type).toBe('website')
    })
  })
})