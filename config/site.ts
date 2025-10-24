export const siteConfig = {
  name: "Angry Gamer",
  description: "The ultimate destination for angry gamers! Shop rage-proof keyboards, safety equipment, filming gear, and interactive products that hit back. Join 50,000+ rage masters in our community.",
  
  // Website URLs
  urls: {
    landing: "https://angrygamer.store",        // Marketing/landing page
    shop: "https://shop.angrygamer.store",      // E-commerce store
    current: "https://angrygamer.store",        // Current site (landing page)
  },
  
  // Legacy URL for backward compatibility
  url: "https://angrygamer.store",
  ogImage: "https://angrygamer.store/opengraph-image",
  links: {
    // Social Media
    twitter: "https://twitter.com/angrygamer",
    instagram: "https://instagram.com/angrygamer",
    youtube: "https://youtube.com/angrygamer",
    tiktok: "https://tiktok.com/@angrygamer",
    twitch: "https://twitch.tv/angrygamer",
    discord: "https://discord.gg/angrygamer",
    
    // Website Navigation
    shop: "https://shop.angrygamer.store",
    landing: "https://angrygamer.store",
    products: "https://shop.angrygamer.store/products",
    community: "https://angrygamer.store/community",
    reviews: "https://angrygamer.store/reviews",
    therapeutic: "https://angrygamer.store/therapeutic",
  },
  contact: {
    phone: "+1-800-RAGE-NOW",
    email: "support@angrygamer.store",           // General support
    shopEmail: "orders@shop.angrygamer.store",   // Shop-specific orders
    marketingEmail: "hello@angrygamer.store",    // Marketing inquiries
  },
  social: {
    twitter: "@angrygamer",
    instagram: "@angrygamer",
    youtube: "Angry Gamer",
    tiktok: "@angrygamer",
    twitch: "angrygamer",
  },
  seo: {
    keywords: [
      // Primary keywords
      "angry gamer", "rage gear", "gaming rage equipment", "destroyable gaming keyboards",
      "gaming safety equipment", "rage therapy gaming", "gaming community",
      
      // Product keywords
      "rage keyboard", "fury controller", "chaos mouse", "gaming fire extinguisher",
      "safety helmet gaming", "rage gloves", "blue light glasses gaming",
      "rage punching bag", "gaming robot", "rage simulator",
      
      // Category keywords
      "gaming peripherals", "gaming accessories", "interactive gaming products",
      "filming equipment gaming", "gaming safety gear", "rage therapy",
      
      // Long-tail keywords
      "products that make you angry", "gaming equipment that hits back",
      "rage proof gaming gear", "destroyable gaming peripherals",
      "gaming safety equipment for rage", "interactive rage products",
      
      // Brand keywords
      "angry gamer store", "angry gamer products", "angry gamer community",
      "angry gamer reviews", "angry gamer therapy"
    ] as string[],
    verification: {
      google: "your-google-verification-code", // Replace with actual code
      yandex: "your-yandex-verification-code", // Replace with actual code
      yahoo: "your-yahoo-verification-code", // Replace with actual code
      bing: "your-bing-verification-code", // Replace with actual code
    },
  },
  
  // Website-specific configurations
  websites: {
    landing: {
      name: "Angry Gamer Landing",
      description: "The ultimate destination for angry gamers! Discover rage-proof keyboards, safety equipment, and interactive products.",
      purpose: "marketing",
      features: ["community", "reviews", "therapeutic", "get-angry"],
    },
    shop: {
      name: "Angry Gamer Shop",
      description: "Shop rage-proof keyboards, safety equipment, filming gear, and interactive products that hit back.",
      purpose: "ecommerce",
      features: ["products", "cart", "checkout", "orders"],
    },
  },
  
  theme: {
    primaryColor: "#dc2626",
    secondaryColor: "#991b1b",
  },
} as const

export type SiteConfig = typeof siteConfig
