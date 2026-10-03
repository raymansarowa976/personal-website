import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageHeader } from '../../components/PageHeader'

describe('PageHeader', () => {
  it('renders the title as an h1', () => {
    render(<PageHeader eyebrow="Writing" title="Blog" />)
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Blog')
  })

  it('renders the eyebrow text', () => {
    render(<PageHeader eyebrow="Writing" title="Blog" />)
    expect(screen.getByText('Writing')).toBeTruthy()
  })

  it('renders the description when provided', () => {
    render(<PageHeader eyebrow="Writing" title="Blog" description="Some thoughts." />)
    expect(screen.getByText('Some thoughts.')).toBeTruthy()
  })

  it('omits the description when not provided', () => {
    const { container } = render(<PageHeader eyebrow="Writing" title="Blog" />)
    expect(container.querySelectorAll('p')).toHaveLength(1)
  })
})
