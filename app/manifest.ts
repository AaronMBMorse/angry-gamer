import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Angry Gamer - Rage Gear & Safety Equipment for Gamers',
    short_name: 'Angry Gamer',
    description: 'The ultimate destination for angry gamers! Shop rage-proof keyboards, safety equipment, and interactive products that hit back.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#dc2626',
    orientation: 'portrait',
    scope: '/',
    lang: 'en-US',
    categories: ['games', 'shopping', 'entertainment'],
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      }
    ],
    screenshots: [
      {
        src: '/screenshot-desktop.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Angry Gamer Desktop View'
      },
      {
        src: '/screenshot-mobile.png',
        sizes: '390x844',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'Angry Gamer Mobile View'
      }
    ],
    shortcuts: [
      {
        name: 'Shop Products',
        short_name: 'Products',
        description: 'Browse our rage gear and safety equipment',
        url: '/products',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      },
      {
        name: 'Join Community',
        short_name: 'Community',
        description: 'Connect with fellow angry gamers',
        url: '/community',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      },
      {
        name: 'Get Angry',
        short_name: 'Rage',
        description: 'Learn rage techniques and triggers',
        url: '/get-angry',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    ]
  }
}
