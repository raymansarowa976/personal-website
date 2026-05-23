import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import { render, screen, waitFor, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CopyButton } from '../../components/CopyButton'

/**
 * Tests for AC3: "Copy to Clipboard" button for all code blocks
 *
 * These tests import from `components/CopyButton.tsx` (not yet created),
 * so they will fail in red state.
 */

describe('CopyButton component', () => {
  let writeTextMock: ReturnType<typeof vi.fn>

  beforeEach(() => {
    writeTextMock = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: writeTextMock },
      writable: true,
      configurable: true,
    })
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  describe('initial render', () => {
    it('renders a button element', () => {
      render(<CopyButton code="const x = 1" />)
      expect(screen.getByRole('button')).toBeDefined()
    })

    it('displays "Copy" as the initial label', () => {
      render(<CopyButton code="const x = 1" />)
      expect(screen.getByRole('button').textContent).toMatch(/copy/i)
    })

    it('has an accessible aria-label', () => {
      render(<CopyButton code="const x = 1" />)
      const btn = screen.getByRole('button')
      expect(btn.getAttribute('aria-label')).toBeTruthy()
    })
  })

  describe('clipboard interaction', () => {
    it('writes the provided code string to the clipboard on click', async () => {
      const user = userEvent.setup()
      render(<CopyButton code="const hello = 'world'" />)

      await user.click(screen.getByRole('button'))

      expect(writeTextMock).toHaveBeenCalledOnce()
      expect(writeTextMock).toHaveBeenCalledWith("const hello = 'world'")
    })

    it('shows "Copied!" feedback immediately after clicking', async () => {
      const user = userEvent.setup()
      render(<CopyButton code="const x = 1" />)

      await user.click(screen.getByRole('button'))

      expect(screen.getByRole('button').textContent).toMatch(/copied/i)
    })

    it('reverts the label back to "Copy" after the timeout', async () => {
      vi.useFakeTimers()
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime.bind(vi) })

      render(<CopyButton code="const x = 1" />)
      await user.click(screen.getByRole('button'))

      expect(screen.getByRole('button').textContent).toMatch(/copied/i)

      await act(async () => {
        vi.advanceTimersByTime(3000)
      })

      expect(screen.getByRole('button').textContent).toMatch(/^copy$/i)
    })
  })

  describe('multi-copy behaviour', () => {
    it('resets the timer if clicked again while showing "Copied!"', async () => {
      vi.useFakeTimers()
      const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime.bind(vi) })

      render(<CopyButton code="const x = 1" />)

      await user.click(screen.getByRole('button'))
      expect(screen.getByRole('button').textContent).toMatch(/copied/i)

      await act(async () => { vi.advanceTimersByTime(1500) })
      await user.click(screen.getByRole('button'))

      await act(async () => { vi.advanceTimersByTime(1500) })
      expect(screen.getByRole('button').textContent).toMatch(/copied/i)

      await act(async () => { vi.advanceTimersByTime(1500) })
      expect(screen.getByRole('button').textContent).toMatch(/^copy$/i)
    })
  })
})