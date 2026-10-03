import { allPosts } from "content-collections";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { MDXRenderer } from "@/components/MDXRenderer";
import { formatDate } from "@/lib/date";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = allPosts.find((p) => p._meta.path === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allPosts.find((p) => p._meta.path === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 md:py-16">
      <Link href="/blog" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">
        ← All posts
      </Link>
      <header className="mt-8 space-y-3">
        <time dateTime={post.date} className="block text-sm font-semibold uppercase tracking-widest text-slate-400">
          {formatDate(post.date)}
        </time>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">{post.title}</h1>
        <div className="h-1 w-16 rounded-full bg-white/60" />
      </header>
      <div className="mt-10 rounded-2xl border border-white/10 bg-[#05050f]/80 p-6 sm:p-10 prose prose-invert prose-lg max-w-none prose-p:text-slate-300 prose-p:leading-relaxed prose-li:text-slate-300 prose-headings:text-white prose-headings:tracking-tight prose-strong:text-white prose-a:text-white prose-a:decoration-white/40 hover:prose-a:decoration-white">
        <MDXRenderer code={post.mdx} />
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._meta.path,
  }));
}