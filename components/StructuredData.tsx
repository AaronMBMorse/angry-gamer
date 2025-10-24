import { siteConfig } from "../config/site"

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.urls.current,
    "logo": `${siteConfig.urls.current}/logo.png`,
    "description": siteConfig.description,
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": `${siteConfig.name} Team`
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.contact.phone,
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      siteConfig.links.discord,
      siteConfig.links.twitter,
      siteConfig.links.instagram,
      siteConfig.links.youtube,
      siteConfig.links.tiktok,
      siteConfig.links.twitch
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "url": siteConfig.urls.current,
    "description": siteConfig.description,
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteConfig.urls.shop}/products?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  }

  const storeSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": `${siteConfig.name} Store`,
    "url": siteConfig.urls.shop,
    "description": "Gaming equipment store specializing in rage-proof peripherals and safety equipment",
    "image": `${siteConfig.urls.shop}/opengraph-image`,
    "telephone": siteConfig.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Credit Card, PayPal, Bitcoin",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Rage Gear Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Rage Keyboard",
            "description": "Built to withstand your worst gaming moments"
          },
          "price": "49",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Fury Controller",
            "description": "Durable controller designed for throwing"
          },
          "price": "29",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Rage Punching Bag",
            "description": "Interactive punching bag that talks back"
          },
          "price": "299",
          "priceCurrency": "USD"
        }
      ]
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.urls.current
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": `${siteConfig.urls.shop}/products`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Community",
        "item": `${siteConfig.urls.current}/community`
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(storeSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  )
}
