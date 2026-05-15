import { allPosts } from "content-collections";
import { notFound } from "next/navigation";

// 1. Make the function async
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  
  // 2. Await the params object
  const { slug } = await params;

  // 3. Find the post using the unwrapped slug
  const post = allPosts.find((p) => p._meta.path === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-10 px-4 prose lg:prose-xl">
      <h1>{post.title}</h1>
      <p className="text-gray-500">{post.date}</p>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._meta.path,
  }));
}