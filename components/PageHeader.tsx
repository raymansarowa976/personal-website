export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <header className="space-y-3">
      <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">{eyebrow}</p>
      <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight">{title}</h1>
      <div className="h-1 w-16 rounded-full bg-white/60" />
      {description && <p className="pt-2 text-lg text-slate-300 leading-relaxed max-w-2xl">{description}</p>}
    </header>
  )
}
