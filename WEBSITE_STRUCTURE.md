# 🌐 Angry Gamer Website Structure

## Two-Website Architecture

### 🏠 **Landing Page** - `angrygamer.store`
**Purpose**: Marketing, community, content, and brand awareness

**Features**:
- ✅ Community page (`/community`)
- ✅ Reviews page (`/reviews`) 
- ✅ Therapeutic page (`/therapeutic`)
- ✅ Get Angry page (`/get-angry`)
- ✅ Help center, disclaimers, legal pages
- ✅ Blog content and rage triggers
- ✅ Social media integration
- ✅ Newsletter signup

**Target Audience**: 
- New visitors discovering the brand
- Community members
- Content consumers
- Social media traffic

---

### 🛒 **Shop** - `shop.angrygamer.store`
**Purpose**: E-commerce, product sales, transactions

**Features**:
- ✅ Product catalog (`/products`)
- ✅ Shopping cart and checkout
- ✅ Order management
- ✅ Payment processing
- ✅ Inventory management
- ✅ Customer accounts
- ✅ Order tracking

**Target Audience**:
- Ready-to-buy customers
- Returning customers
- Product researchers
- Direct purchase traffic

---

## 🔗 **Cross-Website Navigation**

### From Landing → Shop:
- **"Shop Now"** buttons → `shop.angrygamer.store`
- **Product links** → `shop.angrygamer.store/products`
- **"Buy" CTAs** → `shop.angrygamer.store`

### From Shop → Landing:
- **"Community"** → `angrygamer.store/community`
- **"Reviews"** → `angrygamer.store/reviews`
- **"About"** → `angrygamer.store`

---

## 📊 **SEO Strategy**

### Landing Page SEO:
- **Primary Keywords**: "angry gamer", "rage therapy", "gaming community"
- **Content Focus**: Community, reviews, therapeutic content
- **Social Signals**: Discord, social media integration
- **Content Marketing**: Blog posts, rage triggers, community features

### Shop SEO:
- **Primary Keywords**: "gaming keyboards", "rage gear", "gaming safety equipment"
- **Product Focus**: E-commerce, product reviews, shopping
- **Conversion Focus**: Product pages, checkout optimization
- **Technical SEO**: Product schema, shopping feeds

---

## 🎯 **Configuration Management**

### Centralized Config (`/config/site.ts`):
```typescript
urls: {
  landing: "https://angrygamer.store",        // Marketing site
  shop: "https://shop.angrygamer.store",      // E-commerce site
  current: "https://angrygamer.store",        // Current site (landing)
}
```

### Website-Specific Features:
```typescript
websites: {
  landing: {
    purpose: "marketing",
    features: ["community", "reviews", "therapeutic", "get-angry"],
  },
  shop: {
    purpose: "ecommerce", 
    features: ["products", "cart", "checkout", "orders"],
  },
}
```

---

## 🚀 **Benefits of This Structure**

### ✅ **Separation of Concerns**:
- Marketing content doesn't interfere with e-commerce
- Different optimization strategies for each site
- Cleaner user experience for each purpose

### ✅ **SEO Advantages**:
- Landing page can focus on content and community keywords
- Shop can focus on product and commercial keywords
- Reduced keyword cannibalization
- Better conversion tracking

### ✅ **Technical Benefits**:
- Independent deployments
- Different caching strategies
- Separate analytics tracking
- Easier maintenance and updates

### ✅ **User Experience**:
- Clear purpose for each site
- Optimized flows for different user intents
- Better conversion rates
- Reduced bounce rates

---

## 📈 **Traffic Flow Strategy**

### **Discovery Flow**:
1. **Social Media** → Landing Page
2. **Search (brand)** → Landing Page  
3. **Search (products)** → Shop
4. **Direct (brand)** → Landing Page
5. **Direct (shop)** → Shop

### **Conversion Flow**:
1. **Landing Page** → Learn about brand
2. **Community** → Build trust
3. **Reviews** → Social proof
4. **Shop** → Purchase products

---

## 🔧 **Implementation Status**

### ✅ **Completed**:
- Centralized configuration system
- URL structure defined
- Cross-website navigation setup
- SEO metadata configured
- Structured data implemented

### 🚧 **Next Steps**:
- Deploy landing page to `angrygamer.store`
- Deploy shop to `shop.angrygamer.store`
- Set up cross-domain analytics
- Implement cross-website tracking
- Configure CDN for both sites

---

**Last Updated**: ${new Date().toISOString()}
**Status**: ✅ Configuration Complete, Ready for Deployment
