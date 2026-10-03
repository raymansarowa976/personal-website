import { allPosts } from "content-collections";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { formatDate } from "@/lib/date";

export default function BlogPage() {
  const sortedPosts = [...allPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-16 space-y-12">
      <PageHeader
        eyebrow="Writing"
        title="Blog"
        description="Thoughts on stuff, things I'm learning, and whatever else is going on in my mind."
      />
      <div className="space-y-4">
        {sortedPosts.map((post) => (
          <article
            key={post._meta.path}
            className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/25 hover:bg-white/[0.06]"
          >
            <time dateTime={post.date} className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              {formatDate(post.date)}
            </time>
            <h2 className="mt-2 text-xl font-semibold text-white">
              <Link href={`/blog/${post._meta.path}`} className="after:absolute after:inset-0">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-slate-400 leading-relaxed">{post.summary}</p>
            <p aria-hidden="true" className="mt-4 text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
              Read post →
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
