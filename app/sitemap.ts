import type { MetadataRoute } from 'next'

const BASE_URL = 'https://rsarowa.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/`, lastModified: new Date() },
    { url: `${BASE_URL}/portfolio`, lastModified: new Date() },
  ]
}
