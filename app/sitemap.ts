import { MetadataRoute } from 'next'
import { areasData } from '@/lib/areas-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dsmgoldbuyers.com'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ]

  // Area pages
  const areaPages = areasData.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...areaPages]
}
