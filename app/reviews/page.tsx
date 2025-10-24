export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 mb-6">
            REVIEWS
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-8 font-bold">
            What Our "Lovely" Customers Say 😈
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Real reviews from real angry gamers who&apos;ve put our products to the test. 
            Some are helpful, some are hilarious, and some make us question humanity.
          </p>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-16">
            🌟 FEATURED REVIEWS
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Review 1 - The Classic */}
            <div className="bg-gradient-to-br from-red-800/30 to-red-900/30 rounded-2xl p-8 border border-red-500/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  K
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">KeyboardCrusher99</h3>
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                &quot;Finally! A keyboard that can handle my rage! I&apos;ve broken 47 keyboards this year, 
                but this one lasted a whole 3 days before I smashed it. That&apos;s a new record! 
                My mom is so proud.&quot;
              </p>
              <div className="bg-red-900/50 rounded-lg p-4">
                <p className="text-red-300 text-sm font-bold">Our Response:</p>
                <p className="text-gray-300 text-sm">
                  &quot;Congratulations on your new personal best! We&apos;re sending you a certificate 
                  of achievement and a coupon for therapy.&quot;
                </p>
              </div>
            </div>

            {/* Review 2 - The Confused One */}
            <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 rounded-2xl p-8 border border-purple-500/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  S
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">SmoothBrainGamer</h3>
                  <div className="flex text-yellow-400">
                    ⭐⭐
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                &quot;I don&apos;t understand why my keyboard stopped working after I threw it at the wall. 
                The description said it was &apos;durable&apos; but it broke on the first throw. 
                False advertising!&quot;
              </p>
              <div className="bg-purple-900/50 rounded-lg p-4">
                <p className="text-purple-300 text-sm font-bold">Our Response:</p>
                <p className="text-gray-300 text-sm">
                  &quot;Sir, &apos;durable&apos; doesn&apos;t mean &apos;indestructible&apos;. 
                  Even tanks have limits. Please read the manual next time.&quot;
                </p>
              </div>
            </div>

            {/* Review 3 - The Parent */}
            <div className="bg-gradient-to-br from-orange-800/30 to-orange-900/30 rounded-2xl p-8 border border-orange-500/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  M
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">MomOfRager</h3>
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                &quot;My 16-year-old son has been much happier since buying your products. 
                Instead of breaking MY things, he breaks HIS things. 
                Best purchase ever!&quot;
              </p>
              <div className="bg-orange-900/50 rounded-lg p-4">
                <p className="text-orange-300 text-sm font-bold">Our Response:</p>
                <p className="text-gray-300 text-sm">
                  &quot;You&apos;re welcome! We&apos;re basically family therapists at this point. 
                  Happy to help preserve your furniture!&quot;
                </p>
              </div>
            </div>

            {/* Review 4 - The Streamer */}
            <div className="bg-gradient-to-br from-blue-800/30 to-blue-900/30 rounded-2xl p-8 border border-blue-500/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  V
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">ViralRager</h3>
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                &quot;My controller throw video got 2M views! Thanks to your products, 
                I can rage on camera without worrying about breaking expensive gear. 
                My subscribers love the content!&quot;
              </p>
              <div className="bg-blue-900/50 rounded-lg p-4">
                <p className="text-blue-300 text-sm font-bold">Our Response:</p>
                <p className="text-gray-300 text-sm">
                  &quot;You&apos;re welcome! We&apos;re basically content creators now. 
                  Send us a cut of those ad revenues!&quot;
                </p>
              </div>
            </div>

            {/* Review 5 - The Delusional One */}
            <div className="bg-gradient-to-br from-green-800/30 to-green-900/30 rounded-2xl p-8 border border-green-500/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  P
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">ProGamer2024</h3>
                  <div className="flex text-yellow-400">
                    ⭐
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                &quot;This mouse is terrible! I&apos;m losing every game now. 
                It&apos;s definitely the mouse&apos;s fault, not my skill level. 
                I&apos;m a professional gamer, you know!&quot;
              </p>
              <div className="bg-green-900/50 rounded-lg p-4">
                <p className="text-green-300 text-sm font-bold">Our Response:</p>
                <p className="text-gray-300 text-sm">
                  &quot;Sir, we checked your stats. You&apos;re ranked #2,847,392. 
                  Maybe try practicing instead of blaming the hardware?&quot;
                </p>
              </div>
            </div>

            {/* Review 6 - The Creative One */}
            <div className="bg-gradient-to-br from-pink-800/30 to-pink-900/30 rounded-2xl p-8 border border-pink-500/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  C
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">CreativeRager</h3>
                  <div className="flex text-yellow-400">
                    ⭐⭐⭐⭐
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                &quot;Used my mouse as a stress ball during a particularly frustrating match. 
                Surprisingly effective! The RGB lighting even changes color based on my stress level. 
                Revolutionary!&quot;
              </p>
              <div className="bg-pink-900/50 rounded-lg p-4">
                <p className="text-pink-300 text-sm font-bold">Our Response:</p>
                <p className="text-gray-300 text-sm">
                  &quot;That&apos;s... not how it&apos;s supposed to work, but we&apos;re impressed 
                  by your creativity! Maybe we should add that to the features list.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worst Reviews Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 mb-16">
            🤡 WORST REVIEWS EVER
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Worst Review 1 */}
            <div className="bg-gradient-to-br from-red-900/50 to-black/50 rounded-2xl p-8 border border-red-500/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  ?
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">AnonymousRager</h3>
                  <div className="flex text-red-400">
                    ⭐
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                &quot;I ordered a keyboard but received a fire extinguisher. 
                Customer service said it was an &apos;upgrade&apos;. 
                How am I supposed to type with this?!&quot;
              </p>
              <div className="bg-red-800/50 rounded-lg p-4">
                <p className="text-red-300 text-sm font-bold">Our Response:</p>
                <p className="text-gray-300 text-sm">
                  &quot;Sir, you ordered the &apos;Complete Rage Bundle&apos;. 
                  The fire extinguisher is for when you inevitably set something on fire. 
                  You&apos;re welcome!&quot;
                </p>
              </div>
            </div>

            {/* Worst Review 2 */}
            <div className="bg-gradient-to-br from-red-900/50 to-black/50 rounded-2xl p-8 border border-red-500/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-800 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  !
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">KarenGamer</h3>
                  <div className="flex text-red-400">
                    ⭐
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                &quot;I want to speak to your manager! This keyboard doesn&apos;t work with my 
                Windows 95 computer. Your website said it was &apos;compatible&apos;. 
                This is false advertising!&quot;
              </p>
              <div className="bg-red-800/50 rounded-lg p-4">
                <p className="text-red-300 text-sm font-bold">Our Response:</p>
                <p className="text-gray-300 text-sm">
                  &quot;Ma&apos;am, Windows 95 was released in 1995. 
                  We&apos;re not responsible for your ancient technology. 
                  Maybe try upgrading to Windows 98?&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-16">
            📊 REVIEW STATS
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-yellow-400 mb-4">4.2</div>
              <div className="text-xl text-white font-bold">Average Rating</div>
              <div className="text-gray-400">(Mostly 5 stars, some 1 stars from confused people)</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-red-400 mb-4">2,847</div>
              <div className="text-xl text-white font-bold">Keyboards Destroyed</div>
              <div className="text-gray-400">(And counting...)</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-purple-400 mb-4">47</div>
              <div className="text-xl text-white font-bold">Therapy Sessions</div>
              <div className="text-gray-400">(Recommended by customers)</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-green-400 mb-4">99%</div>
              <div className="text-xl text-white font-bold">Customer Satisfaction</div>
              <div className="text-gray-400">(The 1% are still confused about what we sell)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join the Rage? 🔥
            </h2>
            <p className="text-xl text-white mb-8">
              Don&apos;t just read about our products - experience them yourself! 
              Join thousands of satisfied (and slightly unhinged) customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/products"
                className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Shop Now 💥
              </a>
              <a 
                href="/disclaimers"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300"
              >
                Read Disclaimers 📜
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
