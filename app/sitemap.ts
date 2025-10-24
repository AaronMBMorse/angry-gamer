import { MetadataRoute } from 'next'
import { siteConfig } from '../config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.urls.current
  const now = new Date()
  
  return [
    // Main Pages - High Priority for All Search Engines
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/community`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/get-angry`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/therapeutic`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    
    // Support Pages - Medium Priority
    {
      url: `${baseUrl}/help-center`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/warranty`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/returns`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimers`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    
    // Legal Pages - Lower Priority but Important for Trust
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    
  ]
}
