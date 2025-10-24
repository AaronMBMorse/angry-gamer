import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Angry Gamer - Destroy Your Rage in Style",
  description: "Premium destroyable gaming peripherals designed for angry gamers. From keyboards to controllers - break it, smash it, rage it!",
  openGraph: {
    title: "Angry Gamer - Destroyable Gaming Gear for Rage Moments",
    description: "Rage-proof gaming peripherals that can handle your worst gaming moments. Keyboards, controllers, and mice built to be destroyed!",
    url: "https://angry-gamer.vercel.app",
    siteName: "Angry Gamer",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Angry Gamer - Destroyable Gaming Gear",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angry Gamer - Destroyable Gaming Gear",
    description: "Rage-proof gaming peripherals that can handle your worst gaming moments!",
    images: ["/twitter-image"],
  },
  keywords: ["gaming", "peripherals", "keyboard", "controller", "mouse", "gaming gear", "angry gamer", "rage", "destroyable"],
  authors: [{ name: "Angry Gamer" }],
  creator: "Angry Gamer",
  publisher: "Angry Gamer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
