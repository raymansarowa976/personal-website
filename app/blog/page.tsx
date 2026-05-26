import { allPosts } from "content-collections";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">My Blog</h1>
      <div>
        {allPosts.map((post) => (
          <article key={post._meta.path} className="py-3 border-b border-slate-800 last:border-0">
            <div className="flex items-center justify-between gap-6">
              <Link
                href={`/blog/${post._meta.path}`}
                className="underline decoration-slate-500 hover:decoration-white transition-colors"
              >
                {post.title}
              </Link>
              <time className="text-sm text-slate-500 shrink-0">{post.date}</time>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}