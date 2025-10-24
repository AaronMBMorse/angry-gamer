import Image from 'next/image'

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 mb-6">
            PRODUCTS
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-8 font-bold">
            Rage Gear & Safety Equipment 🛡️💥
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Everything you need to rage safely and destructively. 
            From keyboards to fire extinguishers - we&apos;ve got you covered!
          </p>
        </div>
      </section>

      {/* Destroyable Gaming Gear */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 mb-16">
            🎮 DESTROYABLE GAMING GEAR
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Rage Keyboard */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
              <div className="relative h-48 mb-6 bg-gray-700 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=300&fit=crop&crop=center"
                  alt="Rage Keyboard - Destroyable Gaming Keyboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                  RAGE READY
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">RAGE KEYBOARD</h3>
              <p className="text-gray-300 mb-6">
                Built to withstand your worst gaming moments. When you&apos;re done raging, 
                it&apos;ll still work (probably). Mechanical switches that can handle the abuse.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-3xl font-bold text-red-400">$49</span>
                <div className="text-sm text-gray-400">
                  <div>⭐ Durability: 8/10</div>
                  <div>💥 Rage Factor: 10/10</div>
                </div>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full">
                Add to Cart 💥
              </button>
            </div>

            {/* Fury Controller */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="relative h-48 mb-6 bg-gray-700 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop&crop=center"
                  alt="Fury Controller - Destroyable Gaming Controller"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded text-sm font-bold">
                  RAGE READY
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">FURY CONTROLLER</h3>
              <p className="text-gray-300 mb-6">
                Wireless controller designed for competitive rage. 
                Shock-resistant casing and reinforced buttons. 
                Perfect for throwing at walls!
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-3xl font-bold text-purple-400">$29</span>
                <div className="text-sm text-gray-400">
                  <div>⭐ Durability: 7/10</div>
                  <div>💥 Rage Factor: 9/10</div>
                </div>
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full">
                Add to Cart 💥
              </button>
            </div>

            {/* Chaos Mouse */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="relative h-48 mb-6 bg-gray-700 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop&crop=center"
                  alt="Chaos Mouse - Destroyable Gaming Mouse"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-orange-600 text-white px-2 py-1 rounded text-sm font-bold">
                  RAGE READY
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">CHAOS MOUSE</h3>
              <p className="text-gray-300 mb-6">
                High-precision gaming mouse with reinforced shell. 
                RGB lighting that gets brighter when you&apos;re angry. 
                Survives desk slams like a champ!
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-3xl font-bold text-orange-400">$19</span>
                <div className="text-sm text-gray-400">
                  <div>⭐ Durability: 6/10</div>
                  <div>💥 Rage Factor: 8/10</div>
                </div>
              </div>
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full">
                Add to Cart 💥
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Equipment */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-16">
            🛡️ SAFETY EQUIPMENT
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Fire Extinguisher */}
            <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
              <div className="relative h-40 mb-4 bg-gray-700 rounded-lg overflow-hidden">
                <Image
                  src="/assets/fire-extinguisher.jpg"
                  alt="Gaming Fire Extinguisher"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                  SAFETY
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">GAMING FIRE EXTINGUISHER</h3>
              <p className="text-gray-300 mb-4 text-sm">
                When your rage gets too hot, cool it down! 
                Compact fire extinguisher designed for gaming rooms.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-red-400">$89</span>
                <div className="text-xs text-gray-400">
                  <div>🔥 Fire Rating: A</div>
                  <div>⏱️ Duration: 10s</div>
                </div>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors w-full text-sm">
                Add to Cart 🚒
              </button>
            </div>

            {/* Safety Helmet */}
            <div className="bg-gradient-to-br from-yellow-800 to-orange-900 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20">
              <div className="relative h-40 mb-4 bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src="/assets/first-aid-kit.jpg"
                  alt="Gaming Safety Helmet"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-yellow-600 text-white px-2 py-1 rounded text-xs font-bold">
                  SAFETY
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">RAGE HELMET</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Protect your head from flying controllers! 
                Lightweight helmet with built-in RGB lighting.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-yellow-400">$45</span>
                <div className="text-xs text-gray-400">
                  <div>🛡️ Protection: High</div>
                  <div>💡 RGB: Yes</div>
                </div>
              </div>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg transition-colors w-full text-sm">
                Add to Cart 🪖
              </button>
            </div>

            {/* Safety Gloves */}
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="relative h-40 mb-4 bg-gray-700 rounded-lg overflow-hidden">
                <Image
                  src="/assets/safety-gloves.jpg"
                  alt="Gaming Safety Gloves"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                  SAFETY
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">RAGE GLOVES</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Reinforced gloves for when you need to punch something. 
                Maintains controller grip while protecting your hands.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-blue-400">$25</span>
                <div className="text-xs text-gray-400">
                  <div>👊 Protection: Medium</div>
                  <div>🎮 Grip: Enhanced</div>
                </div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors w-full text-sm">
                Add to Cart 🧤
              </button>
            </div>

            {/* First Aid Kit */}
            <div className="bg-gradient-to-br from-green-800 to-green-900 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="relative h-40 mb-4 bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src="/assets/safety-helmet.png"
                  alt="Gaming First Aid Kit"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">
                  SAFETY
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">RAGE FIRST AID</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Complete first aid kit for gaming injuries. 
                Includes bandages, ice packs, and emotional support.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-green-400">$35</span>
                <div className="text-xs text-gray-400">
                  <div>🏥 Medical: Complete</div>
                  <div>💊 Emotional: Included</div>
                </div>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors w-full text-sm">
                Add to Cart 🩹
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle Deals */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-16">
            🎁 BUNDLE DEALS
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Complete Rage Bundle */}
            <div className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-3xl font-bold text-white mb-4">🔥 COMPLETE RAGE BUNDLE</h3>
              <p className="text-purple-300 mb-6">Everything you need to rage safely and destructively!</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Rage Keyboard</span>
                  <span className="text-purple-400 font-bold">$49</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Fury Controller</span>
                  <span className="text-purple-400 font-bold">$29</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Chaos Mouse</span>
                  <span className="text-purple-400 font-bold">$19</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Fire Extinguisher</span>
                  <span className="text-purple-400 font-bold">$89</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Safety Helmet</span>
                  <span className="text-purple-400 font-bold">$45</span>
                </div>
                <div className="flex justify-between items-center border-t border-purple-500/30 pt-4">
                  <span className="text-white font-bold">Total Value</span>
                  <span className="text-gray-400 line-through">$231</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold text-xl">Bundle Price</span>
                  <span className="text-yellow-400 font-bold text-2xl">$179</span>
                </div>
              </div>
              
              <div className="bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm text-center mb-6">
                SAVE $52! (22% OFF)
              </div>
              
              <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl w-full">
                Get Complete Bundle 🛒
              </button>
            </div>

            {/* Safety First Bundle */}
            <div className="bg-gradient-to-br from-green-800 to-green-900 rounded-2xl p-8 border border-green-500/20">
              <h3 className="text-3xl font-bold text-white mb-4">🛡️ SAFETY FIRST BUNDLE</h3>
              <p className="text-green-300 mb-6">For responsible ragers who want to stay safe!</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Fire Extinguisher</span>
                  <span className="text-green-400 font-bold">$89</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Safety Helmet</span>
                  <span className="text-green-400 font-bold">$45</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Rage Gloves</span>
                  <span className="text-green-400 font-bold">$25</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">First Aid Kit</span>
                  <span className="text-green-400 font-bold">$35</span>
                </div>
                <div className="flex justify-between items-center border-t border-green-500/30 pt-4">
                  <span className="text-white font-bold">Total Value</span>
                  <span className="text-gray-400 line-through">$194</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold text-xl">Bundle Price</span>
                  <span className="text-yellow-400 font-bold text-2xl">$149</span>
                </div>
              </div>
              
              <div className="bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm text-center mb-6">
                SAVE $45! (23% OFF)
              </div>
              
              <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl w-full">
                Get Safety Bundle 🛡️
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Rage Responsibly? 🎮
            </h2>
            <p className="text-xl text-white mb-8">
              Whether you want to destroy things or stay safe while doing it, 
              we&apos;ve got everything you need for the ultimate gaming experience!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl">
                Shop Gaming Gear 🎮
              </button>
              <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl">
                Shop Safety Equipment 🛡️
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
