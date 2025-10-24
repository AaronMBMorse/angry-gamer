import { Metadata } from 'next'
import { siteConfig } from '../config/site'

export const metadata: Metadata = {
  title: {
    default: 'Angry Gamer - Rage Gear & Safety Equipment for Gamers',
    template: '%s | Angry Gamer'
  },
  description: 'The ultimate destination for angry gamers! Shop rage-proof keyboards, safety equipment, and interactive products that hit back. Join our community of 50,000+ rage masters.',
  keywords: [
    'gaming gear',
    'rage equipment',
    'gaming safety',
    'destroyable keyboards',
    'gaming community',
    'rage therapy',
    'gaming accessories',
    'angry gamer',
    'gaming products',
    'rage gear',
    'gaming safety equipment',
    'interactive gaming products',
    'gaming filming equipment',
    'blue light glasses',
    'gaming fire extinguisher',
    'rage punching bag',
    'gaming robot',
    'rage simulator'
  ],
  authors: [{ name: 'Angry Gamer Team' }],
  creator: 'Angry Gamer',
  publisher: 'Angry Gamer',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.urls.current),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.urls.current,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Rage Gear & Safety Equipment for Gamers`,
    description: siteConfig.description,
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Angry Gamer - Rage Gear & Safety Equipment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - Rage Gear & Safety Equipment for Gamers`,
    description: siteConfig.description,
    images: ['/twitter-image.jpg'],
    creator: siteConfig.social.twitter,
    site: siteConfig.social.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with your actual Google verification code
    yandex: 'your-yandex-verification-code', // Replace with your actual Yandex verification code
    yahoo: 'your-yahoo-verification-code', // Replace with your actual Yahoo verification code
  },
  category: 'gaming',
}
