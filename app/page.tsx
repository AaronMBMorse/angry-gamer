export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-orange-500 rounded-full opacity-25 animate-ping"></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-yellow-500 rounded-full opacity-20 animate-pulse"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 mb-6 animate-pulse">
            ANGRY GAMER
          </h1>
          <p className="text-2xl md:text-4xl text-white mb-8 font-bold">
            DESTROY YOUR RAGE IN STYLE
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Premium destroyable items designed for gamers who need to unleash their fury. 
            From keyboards to controllers - break it, smash it, rage it!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/50">
              SHOP NOW
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300">
              WATCH DEMO
            </button>
          </div>
        </div>

        {/* Floating gaming elements */}
        <div className="absolute top-1/4 left-10 text-6xl animate-bounce">🎮</div>
        <div className="absolute top-1/3 right-10 text-5xl animate-bounce delay-1000">💥</div>
        <div className="absolute bottom-1/4 left-20 text-4xl animate-bounce delay-500">⚡</div>
        <div className="absolute bottom-1/3 right-20 text-5xl animate-bounce delay-700">🔥</div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-16">
            DESTRUCTION COLLECTION
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
              <div className="text-6xl mb-4 text-center">⌨️</div>
              <h3 className="text-2xl font-bold text-white mb-4">RAGE KEYBOARD</h3>
              <p className="text-gray-300 mb-6">
                Built to withstand your worst gaming moments. When you're done raging, 
                this keyboard will still be standing. (Probably. No guarantees though.)
              </p>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-red-400">$49</span>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                  SMASH IT
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="text-6xl mb-4 text-center">🎮</div>
              <h3 className="text-2xl font-bold text-white mb-4">FURY CONTROLLER</h3>
              <p className="text-gray-300 mb-6">
                Engineered for maximum destruction. Throw it, smash it, rage with it. 
                This controller was made for angry gamers. (Your mom will love it!)
              </p>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-purple-400">$29</span>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                  RAGE ON
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="text-6xl mb-4 text-center">🖱️</div>
              <h3 className="text-2xl font-bold text-white mb-4">CHAOS MOUSE</h3>
              <p className="text-gray-300 mb-6">
                Precision meets destruction. Click with fury, scroll with rage. 
                This mouse handles your anger like a pro. (Unlike your teammates.)
              </p>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-orange-400">$19</span>
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                  CLICK RAGE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Collection */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-16">
            BUDGET RAGE COLLECTION
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Perfect for students and budget-conscious gamers who still need to unleash their fury!
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {/* Budget Product 1 */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="text-4xl mb-3 text-center">⌨️</div>
              <h3 className="text-lg font-bold text-white mb-3">MINI RAGE KEYBOARD</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Compact keyboard for tight budgets. Small but mighty! 
                (Perfect for when you can't afford therapy.)
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-400">$15</span>
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-4 rounded-lg text-sm transition-colors">
                  BUY NOW
                </button>
              </div>
            </div>

            {/* Budget Product 2 */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="text-4xl mb-3 text-center">🎮</div>
              <h3 className="text-lg font-bold text-white mb-3">BASIC RAGE PAD</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Simple controller that can handle your basic rage needs. 
                (Your cat might be more durable though.)
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-400">$12</span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg text-sm transition-colors">
                  BUY NOW
                </button>
              </div>
            </div>

            {/* Budget Product 3 */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20">
              <div className="text-4xl mb-3 text-center">🖱️</div>
              <h3 className="text-lg font-bold text-white mb-3">CHEAP RAGE MOUSE</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Basic mouse for when you need to click with anger. 
                (Cheaper than breaking your laptop screen.)
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-yellow-400">$8</span>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-1 px-4 rounded-lg text-sm transition-colors">
                  BUY NOW
                </button>
              </div>
            </div>

            {/* Budget Product 4 */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="text-4xl mb-3 text-center">🎧</div>
              <h3 className="text-lg font-bold text-white mb-3">RAGE HEADPHONES</h3>
              <p className="text-gray-300 mb-4 text-sm">
                Affordable headphones for when you need to scream into the mic. 
                (Your neighbors will love these!)
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-pink-400">$25</span>
                <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-1 px-4 rounded-lg text-sm transition-colors">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>

          {/* Bundle Deal */}
          <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">🎉 COMPLETE BUDGET BUNDLE</h3>
            <p className="text-xl text-white mb-6">Get ALL 4 budget items for one low price!</p>
            <div className="flex justify-center items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-yellow-300">$45</span>
              <span className="text-2xl text-gray-300 line-through">$60</span>
              <span className="bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm">25% OFF</span>
            </div>
            <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl">
              GET THE BUNDLE
            </button>
          </div>
        </div>
      </section>

      {/* Streamer Collections */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-16">
            STREAMER COLLECTIONS
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Special collections designed for content creators who rage on camera. Perfect for viral moments!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Streamer Collection 1 */}
            <div className="bg-gradient-to-br from-purple-800 to-purple-900 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 border border-purple-500/20">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🎥</div>
                <h3 className="text-2xl font-bold text-white mb-2">VIRAL RAGE SET</h3>
                <p className="text-purple-300 text-sm font-semibold">Perfect for Twitch/YouTube</p>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Stream-Ready Keyboard</span>
                  <span className="text-purple-400 font-bold">$69</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Camera-Friendly Controller</span>
                  <span className="text-purple-400 font-bold">$45</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">RGB Rage Mouse</span>
                  <span className="text-purple-400 font-bold">$35</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Stream Mic Setup</span>
                  <span className="text-purple-400 font-bold">$55</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">$149</div>
                <div className="text-sm text-gray-400 line-through mb-4">$204</div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full">
                  GO VIRAL
                </button>
              </div>
            </div>

            {/* Streamer Collection 2 */}
            <div className="bg-gradient-to-br from-pink-800 to-pink-900 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/30 border border-pink-500/20">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🔥</div>
                <h3 className="text-2xl font-bold text-white mb-2">RAGE REACTOR SET</h3>
                <p className="text-pink-300 text-sm font-semibold">For Maximum Drama</p>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Explosive Keyboard</span>
                  <span className="text-pink-400 font-bold">$89</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Throwable Controller</span>
                  <span className="text-pink-400 font-bold">$59</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Smash-Proof Mouse</span>
                  <span className="text-pink-400 font-bold">$39</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Rage Headset Pro</span>
                  <span className="text-pink-400 font-bold">$79</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">$199</div>
                <div className="text-sm text-gray-400 line-through mb-4">$266</div>
                <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full">
                  CREATE CHAOS
                </button>
              </div>
            </div>

            {/* Streamer Collection 3 */}
            <div className="bg-gradient-to-br from-orange-800 to-red-900 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 border border-orange-500/20">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-2">LIGHTNING RAGE SET</h3>
                <p className="text-orange-300 text-sm font-semibold">Fast & Furious</p>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Speed Demon Keyboard</span>
                  <span className="text-orange-400 font-bold">$79</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Lightning Controller</span>
                  <span className="text-orange-400 font-bold">$49</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Turbo Mouse</span>
                  <span className="text-orange-400 font-bold">$29</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Speed Gaming Mat</span>
                  <span className="text-orange-400 font-bold">$25</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">$129</div>
                <div className="text-sm text-gray-400 line-through mb-4">$182</div>
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full">
                  SPEED RAGE
                </button>
              </div>
            </div>
          </div>

          {/* Streamer Benefits */}
          <div className="mt-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-3xl font-bold text-center text-white mb-8">🎬 STREAMER BENEFITS</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h4 className="text-xl font-bold text-white mb-2">Viral Potential</h4>
                <p className="text-gray-300">Designed to create shareable rage moments</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-xl font-bold text-white mb-2">Camera Ready</h4>
                <p className="text-gray-300">Products look great on stream and in thumbnails</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💎</div>
                <h4 className="text-xl font-bold text-white mb-2">Durability</h4>
                <p className="text-gray-300">Built to survive your most intense streaming sessions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-900/50 to-purple-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-16">
            WHY CHOOSE ANGRY GAMER?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-xl font-bold text-white mb-2">UNBREAKABLE</h3>
              <p className="text-gray-300">Built to survive your worst rage moments</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">LIGHTNING FAST</h3>
              <p className="text-gray-300">High-performance gaming technology</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="text-xl font-bold text-white mb-2">RAGE APPROVED</h3>
              <p className="text-gray-300">Tested by the angriest gamers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2">PRECISION</h3>
              <p className="text-gray-300">Perfect for competitive gaming</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rage Content Community */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-900/30 to-orange-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-16">
            SHARE YOUR RAGE
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Got epic rage moments? Share your destruction videos, rage stories, and angry gaming fails with our community!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Content Type 1 */}
            <div className="bg-gradient-to-br from-red-800/40 to-red-900/40 rounded-2xl p-8 border border-red-500/20 transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">📹</div>
                <h3 className="text-2xl font-bold text-white mb-2">RAGE VIDEOS</h3>
                <p className="text-red-300 text-sm font-semibold">Epic Destruction Moments</p>
              </div>
              <ul className="text-gray-300 space-y-3 mb-6">
                <li>• Smash your controller on camera</li>
                <li>• Keyboard destruction videos</li>
                <li>• Rage quit compilation clips</li>
                <li>• "Before and after" transformations</li>
                <li>• Creative destruction methods</li>
              </ul>
              <div className="text-center">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full">
                  UPLOAD VIDEO
                </button>
              </div>
            </div>

            {/* Content Type 2 */}
            <div className="bg-gradient-to-br from-purple-800/40 to-purple-900/40 rounded-2xl p-8 border border-purple-500/20 transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">📸</div>
                <h3 className="text-2xl font-bold text-white mb-2">RAGE PHOTOS</h3>
                <p className="text-purple-300 text-sm font-semibold">Destruction Evidence</p>
              </div>
              <ul className="text-gray-300 space-y-3 mb-6">
                <li>• Broken equipment photos</li>
                <li>• Wall damage from throws</li>
                <li>• Creative rage setups</li>
                <li>• "Rage face" selfies</li>
                <li>• Before/after comparisons</li>
              </ul>
              <div className="text-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full">
                  SHARE PHOTOS
                </button>
              </div>
            </div>

            {/* Content Type 3 */}
            <div className="bg-gradient-to-br from-orange-800/40 to-orange-900/40 rounded-2xl p-8 border border-orange-500/20 transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-bold text-white mb-2">RAGE STORIES</h3>
                <p className="text-orange-300 text-sm font-semibold">Epic Fail Tales</p>
              </div>
              <ul className="text-gray-300 space-y-3 mb-6">
                <li>• Worst gaming rage moments</li>
                <li>• Equipment destruction stories</li>
                <li>• Neighbor complaint tales</li>
                <li>• Mom's reaction stories</li>
                <li>• Creative rage excuses</li>
              </ul>
              <div className="text-center">
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full">
                  TELL YOUR STORY
                </button>
              </div>
            </div>
          </div>

          {/* Community Guidelines */}
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-600/20">
            <h3 className="text-3xl font-bold text-center text-white mb-8">🎯 COMMUNITY GUIDELINES</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-green-400 mb-4">✅ DO SHARE:</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Your own rage moments (not others')</li>
                  <li>• Creative destruction methods</li>
                  <li>• Funny rage stories and fails</li>
                  <li>• Product reviews and experiences</li>
                  <li>• Safe rage techniques (walls optional)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-red-400 mb-4">❌ DON'T SHARE:</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Harmful or dangerous content</li>
                  <li>• Other people's property damage</li>
                  <li>• Anything illegal or harmful</li>
                  <li>• Spam or unrelated content</li>
                  <li>• Your mom's credit card info</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Featured Content */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center text-white mb-8">🔥 FEATURED RAGE CONTENT</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-800/30 to-red-900/30 rounded-xl p-6 border border-red-500/20">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">🏆</div>
                  <h4 className="text-lg font-bold text-white">Rage Master of the Week</h4>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  "Destroyed 3 keyboards in one session. My record stands strong!"
                </p>
                <p className="text-red-400 text-sm font-bold">- KeyboardCrusher99</p>
              </div>

              <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 rounded-xl p-6 border border-purple-500/20">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">📈</div>
                  <h4 className="text-lg font-bold text-white">Most Viral Rage</h4>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  "My controller throw video got 2M views! Thanks Angry Gamer!"
                </p>
                <p className="text-purple-400 text-sm font-bold">- ViralRager</p>
              </div>

              <div className="bg-gradient-to-br from-orange-800/30 to-orange-900/30 rounded-xl p-6 border border-orange-500/20">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">💡</div>
                  <h4 className="text-lg font-bold text-white">Creative Destruction</h4>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  "Used my mouse as a stress ball. Surprisingly effective!"
                </p>
                <p className="text-orange-400 text-sm font-bold">- CreativeRager</p>
              </div>
            </div>
          </div>

          {/* Rewards Program */}
          <div className="mt-16 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-2xl p-8 border border-yellow-500/20">
            <h3 className="text-3xl font-bold text-center text-white mb-6">🎁 RAGE CONTRIBUTOR REWARDS</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">10</div>
                <p className="text-gray-300">Posts = 10% Discount</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">25</div>
                <p className="text-gray-300">Posts = Free Shipping</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">50</div>
                <p className="text-gray-300">Posts = Free Product</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">100</div>
                <p className="text-gray-300">Posts = Rage Legend Status</p>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-300 italic">
                *Rewards based on quality content, not just quantity. 
                We reserve the right to judge your rage levels! 🔥
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-16">
            WHAT GAMERS ARE SAYING
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Real reviews from real angry gamers who've put our products to the test!
          </p>
          
          {/* Main Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-red-800/30 to-red-900/30 rounded-2xl p-8 border border-red-500/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="text-gray-400 text-sm ml-2">5.0/5</span>
              </div>
              <p className="text-gray-300 mb-6 italic text-lg">
                "I've thrown this keyboard against the wall 47 times and it still works perfectly! My neighbors hate me but my gameplay is fire 🔥"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  R
                </div>
                <div>
                  <p className="text-white font-bold">RageMaster99</p>
                  <p className="text-gray-400 text-sm">Pro Gamer • 2.3M followers</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 rounded-2xl p-8 border border-purple-500/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="text-gray-400 text-sm ml-2">5.0/5</span>
              </div>
              <p className="text-gray-300 mb-6 italic text-lg">
                "Finally, a controller that can handle my competitive rage! Went viral when I smashed it on stream - 10/10 would rage again!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  F
                </div>
                <div>
                  <p className="text-white font-bold">FuryGamer</p>
                  <p className="text-gray-400 text-sm">Esports Pro • 1.8M followers</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-800/30 to-orange-900/30 rounded-2xl p-8 border border-orange-500/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="text-gray-400 text-sm ml-2">5.0/5</span>
              </div>
              <p className="text-gray-300 mb-6 italic text-lg">
                "This mouse survived my worst gaming session ever. My cat knocked it off the desk 20 times and it's still clicking like a champ!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  A
                </div>
                <div>
                  <p className="text-white font-bold">AngryAlex</p>
                  <p className="text-gray-400 text-sm">Streamer • 950K followers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-800/30 to-green-900/30 rounded-2xl p-8 border border-green-500/20">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="text-gray-400 text-sm ml-2">5.0/5</span>
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Bought the budget bundle for my little brother. He's been raging for 3 months straight and everything still works! Best $45 I ever spent."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  S
                </div>
                <div>
                  <p className="text-white font-bold">StudentGamer</p>
                  <p className="text-gray-400 text-sm">Budget Gamer</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-800/30 to-blue-900/30 rounded-2xl p-8 border border-blue-500/20">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="text-gray-400 text-sm ml-2">5.0/5</span>
              </div>
              <p className="text-gray-300 mb-6 italic">
                "The streamer collection is PERFECT! My rage moments get 10x more views now. Camera loves these products and so do my subscribers!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  T
                </div>
                <div>
                  <p className="text-white font-bold">TwitchRager</p>
                  <p className="text-gray-400 text-sm">Content Creator • 500K followers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-gradient-to-r from-red-600/20 to-purple-600/20 rounded-2xl p-8 border border-red-500/20">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-red-400 mb-2">50K+</div>
                <p className="text-gray-300">Happy Ragers</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">4.9/5</div>
                <p className="text-gray-300">Average Rating</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-400 mb-2">99%</div>
                <p className="text-gray-300">Satisfaction Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
                <p className="text-gray-300">Rage Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
            READY TO RAGE?
          </h2>
          <p className="text-xl text-white mb-12">
            Join thousands of angry gamers who trust Angry Gamer for their destruction needs
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl">
              START RAGING NOW
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300">
              VIEW COLLECTION
            </button>
          </div>
        </div>
      </section>

      {/* Funny Disclaimers */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-800 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-12">
            🚨 IMPORTANT DISCLAIMERS 🚨
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-900/30 to-red-800/30 rounded-2xl p-8 border border-red-500/20">
              <h3 className="text-2xl font-bold text-red-400 mb-4">⚠️ RETURN POLICY</h3>
              <ul className="text-gray-300 space-y-3">
                <li>• Broken products are NOT returnable (that's the whole point!)</li>
                <li>• If you break it, you bought it - no refunds for successful destruction</li>
                <li>• "I didn't mean to break it" is not a valid excuse</li>
                <li>• We only accept returns if products survive your rage (rare occurrence)</li>
                <li>• Damaged packaging due to rage is considered normal wear</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">🎯 WARRANTY INFO</h3>
              <ul className="text-gray-300 space-y-3">
                <li>• Warranty void if you throw it harder than intended</li>
                <li>• "Rage damage" is not covered (obviously)</li>
                <li>• If your mom finds broken pieces, that's on you</li>
                <li>• Neighbor complaints about noise are not our problem</li>
                <li>• We guarantee it will break... eventually</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/30 rounded-2xl p-8 border border-orange-500/20">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">🏠 HOME SAFETY</h3>
              <ul className="text-gray-300 space-y-3">
                <li>• Keep away from pets (they might catch your rage)</li>
                <li>• Not responsible for holes in walls</li>
                <li>• Parents' disappointment is not covered</li>
                <li>• May cause neighbors to call the police</li>
                <li>• Use responsibly (or don't, we don't judge)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 rounded-2xl p-8 border border-green-500/20">
              <h3 className="text-2xl font-bold text-green-400 mb-4">🎮 GAMING TIPS</h3>
              <ul className="text-gray-300 space-y-3">
                <li>• Best used when you're already losing</li>
                <li>• Perfect for blaming lag on equipment</li>
                <li>• Great excuse: "My controller is broken!"</li>
                <li>• Helps justify buying new gear every month</li>
                <li>• Makes losing feel more dramatic</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-gray-300 mb-4">
              <span className="text-red-400 font-bold">Disclaimer:</span> We are not responsible for your rage, 
              your neighbors' complaints, your mom's disappointment, or your cat's trauma. 
              You chose to be angry, we just gave you the tools! 😈
            </p>
            <p className="text-lg text-gray-400 italic">
              *Results may vary. Some products may actually survive your rage. 
              If this happens, congratulations - you're not angry enough! 🔥
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400 mb-4">
            ANGRY GAMER
          </h3>
          <p className="text-gray-400 mb-8">
            For gamers who rage hard and play harder
          </p>
          <div className="flex justify-center space-x-6 text-2xl">
            <span className="hover:text-red-400 cursor-pointer transition-colors">🎮</span>
            <span className="hover:text-purple-400 cursor-pointer transition-colors">💥</span>
            <span className="hover:text-orange-400 cursor-pointer transition-colors">🔥</span>
            <span className="hover:text-yellow-400 cursor-pointer transition-colors">⚡</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
