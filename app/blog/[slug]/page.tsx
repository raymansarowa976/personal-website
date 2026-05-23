import { allPosts } from "content-collections";
import { notFound } from "next/navigation";
import { MDXRenderer } from "@/components/MDXRenderer";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allPosts.find((p) => p._meta.path === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-10 px-4 prose lg:prose-xl">
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