import { MetadataRoute } from 'next'
import { siteConfig } from '../config/site'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.urls.current
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/temp/',
          '/test/',
        ],
      },
      // Google-specific rules
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/temp/',
          '/test/',
        ],
      },
      // Bing-specific rules
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/temp/',
          '/test/',
        ],
      },
      // Yandex-specific rules
      {
        userAgent: 'YandexBot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/temp/',
          '/test/',
        ],
      },
      // DuckDuckGo-specific rules
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/temp/',
          '/test/',
        ],
      },
      // Baidu-specific rules
      {
        userAgent: 'Baiduspider',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/temp/',
          '/test/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
