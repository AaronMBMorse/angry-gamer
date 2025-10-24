export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 mb-6">
            RETURNS
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-8 font-bold">
            Our Return Policy (That Nobody Reads) 📜
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Want to return something? Good luck! Our return policy is designed 
            to be as confusing as your gaming skills.
          </p>
        </div>
      </section>

      {/* Return Policy */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 mb-16">
            📋 RETURN POLICY
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* What We Accept */}
            <div className="bg-gradient-to-br from-green-800/30 to-green-900/30 rounded-2xl p-8 border border-green-500/20">
              <h3 className="text-3xl font-bold text-green-400 mb-6 flex items-center">
                <span className="mr-3">✅</span>
                WE ACCEPT RETURNS FOR:
              </h3>
              <ul className="text-gray-300 space-y-4">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Products that arrive broken (not by you)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Wrong items sent (our mistake)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Products that survive your rage (rare!)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Items you ordered by accident</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Products that are still in original packaging</span>
                </li>
              </ul>
            </div>

            {/* What We Don't Accept */}
            <div className="bg-gradient-to-br from-red-800/30 to-red-900/30 rounded-2xl p-8 border border-red-500/20">
              <h3 className="text-3xl font-bold text-red-400 mb-6 flex items-center">
                <span className="mr-3">❌</span>
                WE DON&apos;T ACCEPT RETURNS FOR:
              </h3>
              <ul className="text-gray-300 space-y-4">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Products you broke on purpose (that&apos;s the point!)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Items destroyed in rage sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>&quot;I didn&apos;t mean to break it&quot; excuses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Products used for content creation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Items that have been thrown at walls</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Return Process */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-16">
            🔄 HOW TO RETURN
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-blue-800/30 to-blue-900/30 rounded-2xl p-8 border border-blue-500/20 text-center">
              <div className="text-6xl mb-6">1️⃣</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Contact Us</h3>
              <p className="text-gray-300 mb-6">Email us with your order number and reason for return. Be honest!</p>
              <div className="bg-blue-900/50 rounded-lg p-4">
                <p className="text-blue-300 text-sm font-bold">Pro Tip:</p>
                <p className="text-gray-300 text-sm">Don&apos;t lie about how it broke. We can tell!</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 rounded-2xl p-8 border border-purple-500/20 text-center">
              <div className="text-6xl mb-6">2️⃣</div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Get Approval</h3>
              <p className="text-gray-300 mb-6">We&apos;ll review your request and decide if we believe your story.</p>
              <div className="bg-purple-900/50 rounded-lg p-4">
                <p className="text-purple-300 text-sm font-bold">Review Process:</p>
                <p className="text-gray-300 text-sm">We check your Discord activity for rage patterns!</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-green-800/30 to-green-900/30 rounded-2xl p-8 border border-green-500/20 text-center">
              <div className="text-6xl mb-6">3️⃣</div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">Pack It Up</h3>
              <p className="text-gray-300 mb-6">Put the item in a box. If it&apos;s broken, use lots of bubble wrap!</p>
              <div className="bg-green-900/50 rounded-lg p-4">
                <p className="text-green-300 text-sm font-bold">Packing Tip:</p>
                <p className="text-gray-300 text-sm">Include a note explaining what happened!</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-gradient-to-br from-orange-800/30 to-orange-900/30 rounded-2xl p-8 border border-orange-500/20 text-center">
              <div className="text-6xl mb-6">4️⃣</div>
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Ship It Back</h3>
              <p className="text-gray-300 mb-6">Send it back to us. We&apos;ll process your refund (maybe).</p>
              <div className="bg-orange-900/50 rounded-lg p-4">
                <p className="text-orange-300 text-sm font-bold">Timeline:</p>
                <p className="text-gray-300 text-sm">Refunds processed within 5-10 business days!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Return Stories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-16">
            😂 RETURN STORIES
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Story 1 */}
            <div className="bg-gradient-to-br from-yellow-800/30 to-orange-900/30 rounded-2xl p-8 border border-yellow-500/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  J
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">John D.</h3>
                  <div className="text-yellow-400 text-sm">Return Status: DENIED</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                &quot;I want to return this keyboard because it broke when I threw it at my monitor. 
                The description said it was durable!&quot;
              </p>
              <div className="bg-yellow-900/50 rounded-lg p-4">
                <p className="text-yellow-300 text-sm font-bold">Our Response:</p>
                <p className="text-gray-300 text-sm">
                  &quot;Sir, &apos;durable&apos; doesn&apos;t mean &apos;indestructible&apos;. 
                  Also, throwing things at monitors is not covered under warranty.&quot;
                </p>
              </div>
            </div>

            {/* Story 2 */}
            <div className="bg-gradient-to-br from-green-800/30 to-green-900/30 rounded-2xl p-8 border border-green-500/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  S
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Sarah M.</h3>
                  <div className="text-green-400 text-sm">Return Status: APPROVED</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                &quot;I ordered a keyboard but received a fire extinguisher. 
                I&apos;m not sure how this happened, but I&apos;d like to return it.&quot;
              </p>
              <div className="bg-green-900/50 rounded-lg p-4">
                <p className="text-green-300 text-sm font-bold">Our Response:</p>
                <p className="text-gray-300 text-sm">
                  &quot;You ordered the Complete Rage Bundle! The fire extinguisher is included. 
                  But sure, we&apos;ll take it back if you don&apos;t want it.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Return Statistics */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-16">
            📊 RETURN STATS
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-red-400 mb-4">87%</div>
              <div className="text-xl text-white font-bold">Returns Denied</div>
              <div className="text-gray-400">Mostly rage-related damage</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-green-400 mb-4">13%</div>
              <div className="text-xl text-white font-bold">Returns Approved</div>
              <div className="text-gray-400">Legitimate issues only</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-400 mb-4">2.3</div>
              <div className="text-xl text-white font-bold">Average Days</div>
              <div className="text-gray-400">To process returns</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-yellow-400 mb-4">99%</div>
              <div className="text-xl text-white font-bold">Customer Satisfaction</div>
              <div className="text-gray-400">With our return policy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need to Return Something? 🤷‍♂️
            </h2>
            <p className="text-xl text-white mb-8">
              Good luck! But seriously, if you have a legitimate return, 
              we&apos;ll help you out. Just don&apos;t lie about how it broke!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/help-center"
                className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Contact Support 📞
              </a>
              <a 
                href="/products"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300"
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
