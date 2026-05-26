import { allPosts } from "content-collections";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRenderer } from "@/components/MDXRenderer";

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
    <article className="max-w-3xl mx-auto py-10 px-4 prose prose-invert lg:prose-xl">
      <h1>{post.title}</h1>
      <p className="text-gray-500">{post.date}</p>
      <hr />
      <MDXRenderer code={post.mdx} />
    </article>
  );
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._meta.path,
  }));
}