import { describe, it, expect } from 'vitest'
import { formatDate } from '../../lib/date'

describe('formatDate', () => {
  it('formats a YYYY-MM-DD date as a long US date', () => {
    expect(formatDate('2026-05-31')).toBe('May 31, 2026')
  })

  it('does not shift the day at the start of a month', () => {
    expect(formatDate('2026-09-01')).toBe('September 1, 2026')
  })
})
