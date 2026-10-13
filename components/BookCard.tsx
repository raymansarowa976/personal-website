import Image from 'next/image'
import { statusLabels, type Book, type BookStatus } from '@/lib/books'

const statusStyles: Record<BookStatus, string> = {
  'not-started': 'bg-slate-500/20 text-slate-300 border-slate-500/30',
  reading: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  completed: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
}

export function BookCard({ title, author, cover, status }: Book) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 hover:border-white/25 hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all">
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg bg-white/5 shadow-lg shadow-black/40">
        <Image
          src={cover}
          alt={`Cover of ${title}`}
          fill
          sizes="(min-width: 1024px) 260px, (min-width: 640px) 33vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <h2 className="text-base font-semibold text-white leading-snug">{title}</h2>
        <p className="text-sm text-slate-400 flex-1">{author}</p>
        <span
          data-status={status}
          className={`self-start px-2.5 py-1 rounded-full text-xs font-medium border ${statusStyles[status]}`}
        >
          {statusLabels[status]}
        </span>
      </div>
    </article>
  )
}
