import type { Metadata } from 'next'
import { books } from '@/lib/books'
import { BookCard } from '@/components/BookCard'
import { PageHeader } from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Bookshelf',
  description: 'Books Rayman Sarowa is reading, has read, or plans to read.',
}

export default function BookshelfPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-12">
      <PageHeader
        eyebrow="What I'm reading"
        title="Bookshelf"
        description="Technical books I'm working through, from databases and operating systems to compilers."
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </div>
    </div>
  )
}
