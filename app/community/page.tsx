export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-red-900 to-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-red-400 to-pink-400 mb-6">
            COMMUNITY
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-8 font-bold">
            Join the Rage Revolution! 🔥
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Connect with fellow angry gamers, share your epic rage moments, 
            and be part of the most destructive community on the internet!
          </p>
        </div>
      </section>

      {/* Discord CTA */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              🎮 JOIN OUR DISCORD
            </h2>
            <p className="text-2xl text-indigo-100 mb-8">
              Where the real rage happens! Connect with 50,000+ angry gamers
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-white mb-2">Rage Chat</h3>
                <p className="text-indigo-100">Share your latest destruction moments</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold text-white mb-2">Competitions</h3>
                <p className="text-indigo-100">Monthly rage tournaments and challenges</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-xl font-bold text-white mb-2">Exclusive Deals</h3>
                <p className="text-indigo-100">Member-only discounts and early access</p>
              </div>
            </div>
            <a 
              href="https://discord.gg/angrygamer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-indigo-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <span className="mr-3">🚀</span>
              Join Discord Server
            </a>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-16">
            📊 COMMUNITY STATS
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-purple-400 mb-4">50K+</div>
              <div className="text-xl text-white font-bold">Discord Members</div>
              <div className="text-gray-400">And growing daily!</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-red-400 mb-4">2.3M</div>
              <div className="text-xl text-white font-bold">Keyboards Destroyed</div>
              <div className="text-gray-400">Community total</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-400 mb-4">847</div>
              <div className="text-xl text-white font-bold">Rage Videos</div>
              <div className="text-gray-400">Posted this month</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-green-400 mb-4">99.7%</div>
              <div className="text-xl text-white font-bold">Satisfaction Rate</div>
              <div className="text-gray-400">The 0.3% are still confused</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Community Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-16">
            🔥 FEATURED RAGE MOMENTS
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Rage Moment 1 */}
            <div className="bg-gradient-to-br from-red-800/30 to-red-900/30 rounded-2xl p-8 border border-red-500/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  R
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">RageMaster99</h3>
                  <div className="text-red-400 text-sm">2.3M views</div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg h-48 mb-4 flex items-center justify-center">
                <div className="text-6xl">🎮</div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                &quot;Just destroyed my 50th keyboard this year! 
                The sound of plastic shattering is music to my ears. 
                #RageGoals #KeyboardCrusher&quot;
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-4 text-gray-400">
                  <span>👍 47K</span>
                  <span>💬 2.3K</span>
                  <span>🔄 8.7K</span>
                </div>
                <div className="text-red-400 font-bold">🔥 TRENDING</div>
              </div>
            </div>

            {/* Rage Moment 2 */}
            <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 rounded-2xl p-8 border border-purple-500/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  S
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">StreamRager</h3>
                  <div className="text-purple-400 text-sm">1.8M views</div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg h-48 mb-4 flex items-center justify-center">
                <div className="text-6xl">⌨️</div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                &quot;Live stream rage moment! My controller throw got me 10K new followers. 
                Thanks Angry Gamer for making content creation so easy!&quot;
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-4 text-gray-400">
                  <span>👍 32K</span>
                  <span>💬 1.8K</span>
                  <span>🔄 5.2K</span>
                </div>
                <div className="text-purple-400 font-bold">⭐ FEATURED</div>
              </div>
            </div>

            {/* Rage Moment 3 */}
            <div className="bg-gradient-to-br from-orange-800/30 to-orange-900/30 rounded-2xl p-8 border border-orange-500/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  M
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">MomOfRager</h3>
                  <div className="text-orange-400 text-sm">956K views</div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg h-48 mb-4 flex items-center justify-center">
                <div className="text-6xl">🖱️</div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                &quot;My son&apos;s rage session saved our living room furniture! 
                He&apos;s been much happier since discovering your products. 
                Thank you!&quot;
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-4 text-gray-400">
                  <span>👍 18K</span>
                  <span>💬 892</span>
                  <span>🔄 3.1K</span>
                </div>
                <div className="text-orange-400 font-bold">💝 HEARTWARMING</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Challenges */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-16">
            🏆 MONTHLY CHALLENGES
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Challenge 1 */}
            <div className="bg-gradient-to-br from-yellow-800/30 to-orange-900/30 rounded-2xl p-8 border border-yellow-500/20">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">🥇</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Rage Master Challenge</h3>
                  <div className="text-yellow-400">Prize: $500 Gift Card</div>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Destroy the most keyboards in one month and win big! 
                Current leader: KeyboardCrusher99 with 47 keyboards destroyed.
              </p>
              <div className="bg-yellow-900/50 rounded-lg p-4 mb-6">
                <h4 className="text-yellow-300 font-bold mb-2">Rules:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Must use our products</li>
                  <li>• Video proof required</li>
                  <li>• No fake destruction</li>
                  <li>• Must be rage-induced</li>
                </ul>
              </div>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full">
                Join Challenge 🎯
              </button>
            </div>

            {/* Challenge 2 */}
            <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">🎬</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Viral Rage Video</h3>
                  <div className="text-purple-400">Prize: Featured on our homepage</div>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Create the most entertaining rage video this month! 
                Winner gets featured on our homepage and social media.
              </p>
              <div className="bg-purple-900/50 rounded-lg p-4 mb-6">
                <h4 className="text-purple-300 font-bold mb-2">Requirements:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Must be creative and funny</li>
                  <li>• Use our products</li>
                  <li>• Under 60 seconds</li>
                  <li>• Safe for all audiences</li>
                </ul>
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full">
                Submit Video 📹
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-16">
            📋 COMMUNITY GUIDELINES
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Do's */}
            <div className="bg-gradient-to-br from-green-800/30 to-green-900/30 rounded-2xl p-8 border border-green-500/20">
              <h3 className="text-3xl font-bold text-green-400 mb-6 flex items-center">
                <span className="mr-3">✅</span>
                DO&apos;S
              </h3>
              <ul className="text-gray-300 space-y-4">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Share your rage moments and destruction videos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Support fellow community members</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Use our products responsibly (ish)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Have fun and be creative</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Tag us in your content for a chance to be featured</span>
                </li>
              </ul>
            </div>

            {/* Don'ts */}
            <div className="bg-gradient-to-br from-red-800/30 to-red-900/30 rounded-2xl p-8 border border-red-500/20">
              <h3 className="text-3xl font-bold text-red-400 mb-6 flex items-center">
                <span className="mr-3">❌</span>
                DON&apos;TS
              </h3>
              <ul className="text-gray-300 space-y-4">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Don&apos;t destroy other people&apos;s property</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Don&apos;t be mean to other community members</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Don&apos;t spam or post irrelevant content</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Don&apos;t fake destruction videos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Don&apos;t blame us for your therapy bills</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-16">
            📱 FOLLOW THE RAGE
          </h2>
          
          <div className="grid md:grid-cols-5 gap-8">
            <a 
              href="https://twitter.com/angrygamer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-blue-500 text-white p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              <div className="text-4xl mb-4">🐦</div>
              <h3 className="text-xl font-bold mb-2">Twitter</h3>
              <p className="text-gray-400 text-sm">Daily rage updates</p>
            </a>
            <a 
              href="https://instagram.com/angrygamer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-pink-500 text-white p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-bold mb-2">Instagram</h3>
              <p className="text-gray-400 text-sm">Rage photos & stories</p>
            </a>
            <a 
              href="https://youtube.com/angrygamer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-red-500 text-white p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              <div className="text-4xl mb-4">📺</div>
              <h3 className="text-xl font-bold mb-2">YouTube</h3>
              <p className="text-gray-400 text-sm">Rage compilation videos</p>
            </a>
            <a 
              href="https://tiktok.com/@angrygamer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-black text-white p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-bold mb-2">TikTok</h3>
              <p className="text-gray-400 text-sm">Short rage clips</p>
            </a>
            <a 
              href="https://twitch.tv/angrygamer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-purple-500 text-white p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-2">Twitch</h3>
              <p className="text-gray-400 text-sm">Live rage streams</p>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-red-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join the Rage Revolution? 🔥
            </h2>
            <p className="text-xl text-white mb-8">
              Connect with thousands of angry gamers, share your rage moments, 
              and be part of the most destructive community on the internet!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://discord.gg/angrygamer"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Join Discord 🚀
              </a>
              <a 
                href="/products"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300"
              >
                Shop Rage Gear 💥
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
