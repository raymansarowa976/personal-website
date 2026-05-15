import { allPosts } from "content-collections";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">My Blog</h1>
      <div className="space-y-6">
        {allPosts.map((post) => (
          <article key={post._meta.path} className="border-b pb-4">
            <Link href={`/blog/${post._meta.path}`}>
              <h2 className="text-2xl font-semibold hover:underline">{post.title}</h2>
            </Link>
            <p className="text-gray-600">{post.summary}</p>
            <time className="text-sm text-gray-400">{post.date}</time>
          </article>
        ))}
      </div>
    </main>
  );
}