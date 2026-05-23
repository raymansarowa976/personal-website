import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import { render, screen, act, fireEvent, waitFor } from '@testing-library/react'
import { CopyButton } from '../../components/CopyButton'
import * as clipboard from '../../lib/clipboard'

vi.mock('../../lib/clipboard')

/**
 * Tests for AC3: "Copy to Clipboard" button for all code blocks.
 *
 * Clipboard calls are mocked at the module level via vi.mock so tests are not
 * coupled to jsdom's (non-configurable) navigator.clipboard implementation.
 */

describe('CopyButton component', () => {
  let copyMock: ReturnType<typeof vi.fn>

  beforeEach(() => {
    copyMock = vi.mocked(clipboard.copyToClipboard)
    copyMock.mockResolvedValue(undefined)
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
      expect(screen.getByRole('button').getAttribute('aria-label')).toBeTruthy()
    })
  })

  describe('clipboard interaction', () => {
    it('writes the provided code string to the clipboard on click', async () => {
      render(<CopyButton code="const hello = 'world'" />)
      fireEvent.click(screen.getByRole('button'))

      await waitFor(() => {
        expect(copyMock).toHaveBeenCalledOnce()
        expect(copyMock).toHaveBeenCalledWith("const hello = 'world'")
      })
    })

    it('shows "Copied!" feedback immediately after clicking', async () => {
      render(<CopyButton code="const x = 1" />)
      fireEvent.click(screen.getByRole('button'))

      await waitFor(() => {
        expect(screen.getByRole('button').textContent).toMatch(/copied/i)
      })
    })

    it('reverts the label back to "Copy" after the timeout', async () => {
      vi.useFakeTimers()
      render(<CopyButton code="const x = 1" />)

      fireEvent.click(screen.getByRole('button'))
      // Flush the async handleCopy so setCopied(true) runs before we advance timers
      await act(async () => { await Promise.resolve() })

      expect(screen.getByRole('button').textContent).toMatch(/copied/i)

      act(() => { vi.advanceTimersByTime(3000) })

      expect(screen.getByRole('button').textContent).toMatch(/^copy$/i)
    })
  })

  describe('multi-copy behaviour', () => {
    it('resets the timer if clicked again while showing "Copied!"', async () => {
      vi.useFakeTimers()
      render(<CopyButton code="const x = 1" />)

      // First click — timer A starts (fires at t=2000)
      fireEvent.click(screen.getByRole('button'))
      await act(async () => { await Promise.resolve() })
      expect(screen.getByRole('button').textContent).toMatch(/copied/i)

      // Advance 1500 ms — timer A has not fired yet
      act(() => { vi.advanceTimersByTime(1500) })

      // Second click — clears timer A, starts timer B (fires at t=3500)
      fireEvent.click(screen.getByRole('button'))
      await act(async () => { await Promise.resolve() })

      // Advance another 1500 ms (t=3000) — timer B not yet fired
      act(() => { vi.advanceTimersByTime(1500) })
      expect(screen.getByRole('button').textContent).toMatch(/copied/i)

      // Advance another 1500 ms (t=4500) — timer B fired at t=3500
      act(() => { vi.advanceTimersByTime(1500) })
      expect(screen.getByRole('button').textContent).toMatch(/^copy$/i)
    })
  })
})