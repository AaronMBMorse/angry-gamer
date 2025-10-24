export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 mb-6">
            WARRANTY
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-8 font-bold">
            Our Warranty (That Covers Nothing) 📋
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Think you&apos;re covered? Think again! Our warranty is designed to be 
            as confusing as your gaming setup.
          </p>
        </div>
      </section>

      {/* Warranty Coverage */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-16">
            🛡️ WHAT&apos;S COVERED
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Covered */}
            <div className="bg-gradient-to-br from-green-800/30 to-green-900/30 rounded-2xl p-8 border border-green-500/20">
              <h3 className="text-3xl font-bold text-green-400 mb-6 flex items-center">
                <span className="mr-3">✅</span>
                WARRANTY COVERS:
              </h3>
              <ul className="text-gray-300 space-y-4">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Manufacturing defects (if you can prove it)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Products that arrive DOA (Dead on Arrival)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Normal wear and tear (not rage-induced)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Products that break from normal use</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Items that survive your rage (rare!)</span>
                </li>
              </ul>
            </div>

            {/* Not Covered */}
            <div className="bg-gradient-to-br from-red-800/30 to-red-900/30 rounded-2xl p-8 border border-red-500/20">
              <h3 className="text-3xl font-bold text-red-400 mb-6 flex items-center">
                <span className="mr-3">❌</span>
                WARRANTY DOESN&apos;T COVER:
              </h3>
              <ul className="text-gray-300 space-y-4">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Rage-induced damage (that&apos;s the point!)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Products thrown at walls, monitors, or people</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Water damage (from tears or rage sweat)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Damage from &quot;accidental&quot; destruction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Products used for content creation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Terms */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-16">
            📜 WARRANTY TERMS
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Duration */}
            <div className="bg-gradient-to-br from-blue-800/30 to-blue-900/30 rounded-2xl p-8 border border-blue-500/20 text-center">
              <div className="text-6xl mb-6">⏰</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Duration</h3>
              <p className="text-gray-300 mb-6">1 year from purchase date, but only if you don&apos;t rage with it.</p>
              <div className="bg-blue-900/50 rounded-lg p-4">
                <p className="text-blue-300 text-sm font-bold">Fine Print:</p>
                <p className="text-gray-300 text-sm">Warranty void if product shows signs of rage damage!</p>
              </div>
            </div>

            {/* Process */}
            <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 rounded-2xl p-8 border border-purple-500/20 text-center">
              <div className="text-6xl mb-6">📋</div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Process</h3>
              <p className="text-gray-300 mb-6">Contact us, prove it&apos;s not rage damage, wait for approval.</p>
              <div className="bg-purple-900/50 rounded-lg p-4">
                <p className="text-purple-300 text-sm font-bold">Approval Rate:</p>
                <p className="text-gray-300 text-sm">12% of claims are approved!</p>
              </div>
            </div>

            {/* Replacement */}
            <div className="bg-gradient-to-br from-green-800/30 to-green-900/30 rounded-2xl p-8 border border-green-500/20 text-center">
              <div className="text-6xl mb-6">🔄</div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">Replacement</h3>
              <p className="text-gray-300 mb-6">We&apos;ll replace it with the same model (if we believe you).</p>
              <div className="bg-green-900/50 rounded-lg p-4">
                <p className="text-green-300 text-sm font-bold">Timeline:</p>
                <p className="text-gray-300 text-sm">2-4 weeks for replacement!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Stories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-16">
            😂 WARRANTY CLAIMS
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Claim 1 */}
            <div className="bg-gradient-to-br from-yellow-800/30 to-orange-900/30 rounded-2xl p-8 border border-yellow-500/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  M
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Mike R.</h3>
                  <div className="text-yellow-400 text-sm">Status: DENIED</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                &quot;My keyboard stopped working after I spilled coffee on it during a rage session. 
                This should be covered under warranty!&quot;
              </p>
              <div className="bg-yellow-900/50 rounded-lg p-4">
                <p className="text-yellow-300 text-sm font-bold">Our Response:</p>
                <p className="text-gray-300 text-sm">
                  &quot;Sir, liquid damage is not covered. Also, we can see the rage marks on your desk. 
                  Warranty void due to misuse.&quot;
                </p>
              </div>
            </div>

            {/* Claim 2 */}
            <div className="bg-gradient-to-br from-green-800/30 to-green-900/30 rounded-2xl p-8 border border-green-500/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  L
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Lisa K.</h3>
                  <div className="text-green-400 text-sm">Status: APPROVED</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                &quot;My mouse stopped working after 2 weeks of normal use. 
                I&apos;ve never been angry at it, I promise!&quot;
              </p>
              <div className="bg-green-900/50 rounded-lg p-4">
                <p className="text-green-300 text-sm font-bold">Our Response:</p>
                <p className="text-gray-300 text-sm">
                  &quot;We believe you! Your Discord history shows you&apos;re a calm gamer. 
                  Replacement on the way!&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Statistics */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-16">
            📊 WARRANTY STATS
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-red-400 mb-4">88%</div>
              <div className="text-xl text-white font-bold">Claims Denied</div>
              <div className="text-gray-400">Mostly rage-related</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-green-400 mb-4">12%</div>
              <div className="text-xl text-white font-bold">Claims Approved</div>
              <div className="text-gray-400">Legitimate issues only</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-400 mb-4">3.2</div>
              <div className="text-xl text-white font-bold">Average Days</div>
              <div className="text-gray-400">To process claims</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-yellow-400 mb-4">95%</div>
              <div className="text-xl text-white font-bold">Customer Satisfaction</div>
              <div className="text-gray-400">With our warranty process</div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Tips */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-16">
            💡 WARRANTY TIPS
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* How to Keep Warranty */}
            <div className="bg-gradient-to-br from-green-800/30 to-green-900/30 rounded-2xl p-8 border border-green-500/20">
              <h3 className="text-3xl font-bold text-green-400 mb-6 flex items-center">
                <span className="mr-3">✅</span>
                HOW TO KEEP YOUR WARRANTY:
              </h3>
              <ul className="text-gray-300 space-y-4">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Don&apos;t rage with your products (impossible, we know)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Keep your receipt and original packaging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Use products for their intended purpose only</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Don&apos;t modify or disassemble products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Register your warranty within 30 days</span>
                </li>
              </ul>
            </div>

            {/* How to Void Warranty */}
            <div className="bg-gradient-to-br from-red-800/30 to-red-900/30 rounded-2xl p-8 border border-red-500/20">
              <h3 className="text-3xl font-bold text-red-400 mb-6 flex items-center">
                <span className="mr-3">❌</span>
                HOW TO VOID YOUR WARRANTY:
              </h3>
              <ul className="text-gray-300 space-y-4">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Throw products at walls, monitors, or people</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Spill liquids on products during rage sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Use products for content creation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Modify products to &quot;make them better&quot;</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Lie about how the product broke</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Warranty Help? 🛡️
            </h2>
            <p className="text-xl text-white mb-8">
              If you think you have a legitimate warranty claim, 
              contact us! But remember, we can tell if you&apos;re lying!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/help-center"
                className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Contact Support 📞
              </a>
              <a 
                href="/products"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300"
              >
                Shop More 💥
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
