import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Pre } from '../../components/Pre'
import * as clipboard from '../../lib/clipboard'

vi.mock('../../lib/clipboard')

describe('Pre component', () => {
  beforeEach(() => {
    vi.mocked(clipboard.copyToClipboard).mockResolvedValue(undefined)
  })

  describe('structure', () => {
    it('renders a pre element', () => {
      render(<Pre>const x = 1</Pre>)
      expect(document.querySelector('pre')).toBeTruthy()
    })

    it('renders children inside the pre element', () => {
      render(<Pre>const x = 1</Pre>)
      expect(document.querySelector('pre')?.textContent).toContain('const x = 1')
    })

    it('renders a copy button', () => {
      render(<Pre>const x = 1</Pre>)
      expect(screen.getByRole('button', { name: /copy/i })).toBeTruthy()
    })

    it('wraps everything in a relative-positioned container for button placement', () => {
      render(<Pre>some code</Pre>)
      const pre = document.querySelector('pre')!
      const wrapper = pre.parentElement!
      expect(wrapper.className).toContain('relative')
    })
  })

  describe('copy button receives correct code', () => {
    it('passes the trimmed text content of children to the clipboard', async () => {
      render(<Pre>{'const x = 1\n'}</Pre>)
      fireEvent.click(screen.getByRole('button'))
      await waitFor(() => {
        expect(vi.mocked(clipboard.copyToClipboard)).toHaveBeenCalledWith('const x = 1')
      })
    })

    it('extracts text from nested React elements', async () => {
      render(
        <Pre>
          <span><span>hello</span></span>
        </Pre>
      )
      fireEvent.click(screen.getByRole('button'))
      await waitFor(() => {
        expect(vi.mocked(clipboard.copyToClipboard)).toHaveBeenCalledWith('hello')
      })
    })
  })
})