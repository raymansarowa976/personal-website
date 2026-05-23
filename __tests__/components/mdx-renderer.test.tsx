import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import { MDXContent } from '@content-collections/mdx/react'
import { MDXRenderer } from '../../components/MDXRenderer'
import { MdxImage } from '@/components/MdxImage'

vi.mock('@content-collections/mdx/react', () => ({
  MDXContent: vi.fn(() => null),
}))

describe('MDXRenderer', () => {
  describe('component mappings', () => {
    it('maps img to MdxImage', () => {
      render(<MDXRenderer code="test-code" />)
      const { components } = vi.mocked(MDXContent).mock.calls[0][0]
      expect(components?.img).toBe(MdxImage)
    })

    it('passes the code prop through to MDXContent', () => {
      render(<MDXRenderer code="test-code" />)
      const { code } = vi.mocked(MDXContent).mock.calls[0][0]
      expect(code).toBe('test-code')
    })
  })
})