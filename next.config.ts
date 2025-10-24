import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // App Router is now stable in Next.js 13+, no need for experimental flag
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
