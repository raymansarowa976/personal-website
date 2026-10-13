import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import BookshelfPage from '../../app/bookshelf/page'
import { books } from '../../lib/books'

describe('Bookshelf page', () => {
  it('renders a top-level heading', () => {
    render(<BookshelfPage />)
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Bookshelf')
  })

  it('does not render its own main landmark (the root layout provides it)', () => {
    render(<BookshelfPage />)
    expect(screen.queryByRole('main')).toBeNull()
  })

  it('renders a card for every book', () => {
    render(<BookshelfPage />)
    expect(screen.getAllByRole('article')).toHaveLength(books.length)
  })

  it('renders a cover image for every book', () => {
    render(<BookshelfPage />)
    expect(screen.getAllByRole('img', { name: /cover of/i })).toHaveLength(books.length)
  })

  it('renders Designing Data-Intensive Applications', () => {
    render(<BookshelfPage />)
    expect(screen.getByText(/designing data-intensive applications/i)).toBeTruthy()
  })

  it('renders Crafting Interpreters', () => {
    render(<BookshelfPage />)
    expect(screen.getByText(/crafting interpreters/i)).toBeTruthy()
  })

  it('does not include interview prep books', () => {
    render(<BookshelfPage />)
    expect(screen.queryByText(/interview/i)).toBeNull()
  })
})
