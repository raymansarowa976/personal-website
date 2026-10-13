export type BookStatus = 'not-started' | 'reading' | 'completed'

export interface Book {
  title: string
  author: string
  cover: string
  status: BookStatus
}

export const statusLabels: Record<BookStatus, string> = {
  'not-started': 'Not Started',
  reading: 'Reading',
  completed: 'Completed',
}

export const books: Book[] = [
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    cover: '/books/ddia.jpg',
    status: 'reading',
  },
  {
    title: 'Database Internals',
    author: 'Alex Petrov',
    cover: '/books/database-internals.jpg',
    status: 'not-started',
  },
  {
    title: 'Operating Systems: Three Easy Pieces',
    author: 'Remzi H. Arpaci-Dusseau & Andrea C. Arpaci-Dusseau',
    cover: '/books/ostep.jpg',
    status: 'not-started',
  },
  {
    title: 'Computer Networking: A Top-Down Approach',
    author: 'James F. Kurose & Keith W. Ross',
    cover: '/books/computer-networking.jpg',
    status: 'not-started',
  },
  {
    title: 'Engineering a Compiler (2nd ed.)',
    author: 'Keith D. Cooper & Linda Torczon',
    cover: '/books/engineering-a-compiler.jpg',
    status: 'not-started',
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    cover: '/books/crafting-interpreters.jpg',
    status: 'not-started',
  },
  {
    title: 'The Linux Command Line',
    author: 'William Shotts',
    cover: '/books/linux-command-line.jpg',
    status: 'not-started',
  },
  {
    title: 'Understanding and Using C Pointers',
    author: 'Richard Reese',
    cover: '/books/c-pointers.jpg',
    status: 'not-started',
  },
]
