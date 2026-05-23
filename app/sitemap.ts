import { allPosts } from 'content-collections'
import type { MetadataRoute } from 'next'

const BASE_URL = 'https://raymansarowa.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const postEntries = allPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post._meta.path}`,
    lastModified: new Date(post.date),
  }))

  return [
    { url: `${BASE_URL}/`, lastModified: new Date() },
    { url: `${BASE_URL}/blog`, lastModified: new Date() },
    ...postEntries,
  ]
}