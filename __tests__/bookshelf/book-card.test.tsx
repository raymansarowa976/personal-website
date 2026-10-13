import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BookCard } from '../../components/BookCard'

const baseBook = {
  title: 'My Book',
  author: 'Some Author',
  cover: '/books/my-book.jpg',
  status: 'not-started' as const,
}

describe('BookCard', () => {
  it('renders the book title', () => {
    render(<BookCard {...baseBook} />)
    expect(screen.getByText('My Book')).toBeTruthy()
  })

  it('renders the author', () => {
    render(<BookCard {...baseBook} />)
    expect(screen.getByText('Some Author')).toBeTruthy()
  })

  it('renders the cover image with descriptive alt text', () => {
    render(<BookCard {...baseBook} />)
    expect(screen.getByRole('img', { name: /cover of my book/i })).toBeTruthy()
  })

  it.each([
    ['not-started', 'Not Started'],
    ['reading', 'Reading'],
    ['completed', 'Completed'],
  ] as const)('renders the %s status as "%s"', (status, label) => {
    render(<BookCard {...baseBook} status={status} />)
    expect(screen.getByText(label)).toBeTruthy()
  })
})
