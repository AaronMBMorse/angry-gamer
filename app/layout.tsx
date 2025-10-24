import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import StructuredData from "../components/StructuredData"
import { siteConfig } from "../config/site"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: siteConfig.theme.primaryColor },
    { media: "(prefers-color-scheme: dark)", color: siteConfig.theme.primaryColor },
  ],
}

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - Rage Gear & Safety Equipment for Gamers`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: `${siteConfig.name} Team`, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL(siteConfig.urls.current),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.urls.current,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Rage Gear & Safety Equipment for Gamers`,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Rage Gear & Safety Equipment for Gamers`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Rage Gear & Safety Equipment for Gamers`,
    description: siteConfig.description,
    images: ["/twitter-image"],
    creator: siteConfig.social.twitter,
    site: siteConfig.social.twitter,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: siteConfig.seo.verification,
  category: "gaming",
  classification: "Gaming Equipment Store",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": siteConfig.name,
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": siteConfig.theme.primaryColor,
    "msapplication-config": "/browserconfig.xml",
    "theme-color": siteConfig.theme.primaryColor,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
