import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MdxImage } from '../../components/MdxImage'

vi.mock('next/image', () => ({
  default: ({
    src,
    alt,
    fill,
    sizes,
    className,
  }: {
    src: string
    alt: string
    fill?: boolean
    sizes?: string
    className?: string
  }) => (
    <img
      src={String(src)}
      alt={alt ?? ''}
      data-fill={String(!!fill)}
      data-sizes={sizes ?? ''}
      className={className}
    />
  ),
}))

describe('MdxImage', () => {
  describe('rendering', () => {
    it('renders an image element', () => {
      render(<MdxImage src="/content/images/test.png" alt="test" />)
      expect(screen.getByRole('img')).toBeTruthy()
    })

    it('passes alt text to the image', () => {
      render(<MdxImage src="/content/images/test.png" alt="A mountain view" />)
      expect(screen.getByAltText('A mountain view')).toBeTruthy()
    })

    it('defaults alt to an empty string when not provided', () => {
      render(<MdxImage src="/content/images/test.png" />)
      expect(screen.getByRole('img', { hidden: true })).toBeTruthy()
    })
  })

  describe('next/image integration', () => {
    it('uses fill layout for responsive sizing', () => {
      render(<MdxImage src="/content/images/test.png" alt="test" />)
      expect(screen.getByRole('img').getAttribute('data-fill')).toBe('true')
    })

    it('provides a sizes hint for responsive images', () => {
      render(<MdxImage src="/content/images/test.png" alt="test" />)
      expect(screen.getByRole('img').getAttribute('data-sizes')).toBeTruthy()
    })
  })

  describe('layout container', () => {
    it('wraps the image in a positioned container required by fill layout', () => {
      render(<MdxImage src="/content/images/test.png" alt="test" />)
      const img = screen.getByRole('img')
      const wrapper = img.parentElement!
      const isRelative =
        wrapper.style.position === 'relative' ||
        wrapper.className.includes('relative')
      expect(isRelative).toBe(true)
    })
  })

  describe('local content paths', () => {
    it('passes through absolute paths unchanged', () => {
      render(<MdxImage src="/content/images/test.png" alt="test" />)
      expect(screen.getByRole('img').getAttribute('src')).toBe('/content/images/test.png')
    })

    it('prefixes relative paths with a leading slash', () => {
      render(<MdxImage src="content/images/test.png" alt="test" />)
      expect(screen.getByRole('img').getAttribute('src')).toBe('/content/images/test.png')
    })
  })
})