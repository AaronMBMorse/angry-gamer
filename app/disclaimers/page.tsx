import Link from 'next/link'

export default function DisclaimersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 mb-6">
            DISCLAIMERS
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-8 font-bold">
            The Fine Print (That Nobody Reads) 📜
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Because apparently we need to tell you not to do stupid things with our products. 
            Who knew? 🤷‍♂️
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Product Disclaimers */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-red-500/20">
              <h2 className="text-3xl font-bold text-red-400 mb-6 flex items-center">
                <span className="mr-3">⚠️</span>
                PRODUCT DISCLAIMERS
              </h2>
              
              <div className="space-y-6">
                <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                  <h3 className="text-xl font-bold text-red-300 mb-2">Rage Damage Policy</h3>
                  <p className="text-gray-300">
                    Our products are designed to be destroyed. If you break them, that&apos;s the whole point! 
                    Don&apos;t come crying to us when your keyboard is in pieces. We warned you.
                  </p>
                </div>

                <div className="bg-yellow-900/20 rounded-lg p-4 border border-yellow-500/30">
                  <h3 className="text-xl font-bold text-yellow-300 mb-2">Warranty Void If Angry</h3>
                  <p className="text-gray-300">
                    Using our products while angry automatically voids the warranty. 
                    We&apos;re not responsible for your rage-induced destruction. 
                    That&apos;s on you, buddy.
                  </p>
                </div>

                <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
                  <h3 className="text-xl font-bold text-purple-300 mb-2">No Returns on Broken Items</h3>
                  <p className="text-gray-300">
                    &quot;I didn&apos;t mean to break it&quot; is not a valid excuse. 
                    If it&apos;s broken, you probably meant to break it. 
                    No refunds for successful product usage.
                  </p>
                </div>
              </div>
            </div>

            {/* Safety Disclaimers */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-orange-500/20">
              <h2 className="text-3xl font-bold text-orange-400 mb-6 flex items-center">
                <span className="mr-3">🛡️</span>
                SAFETY WARNINGS
              </h2>
              
              <div className="space-y-6">
                <div className="bg-orange-900/20 rounded-lg p-4 border border-orange-500/30">
                  <h3 className="text-xl font-bold text-orange-300 mb-2">Home Safety</h3>
                  <p className="text-gray-300">
                    If your mom finds broken pieces, that&apos;s on you. 
                    We&apos;re not paying for new drywall or therapy sessions.
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                  <h3 className="text-xl font-bold text-green-300 mb-2">Neighbor Relations</h3>
                  <p className="text-gray-300">
                    Your neighbors&apos; complaints are not our problem. 
                    Soundproof your room or learn to rage quietly. 
                    We suggest both.
                  </p>
                </div>

                <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-500/30">
                  <h3 className="text-xl font-bold text-blue-300 mb-2">Pet Safety</h3>
                  <p className="text-gray-300">
                    Keep your pets away from rage sessions. 
                    We&apos;re not responsible for traumatized cats or confused dogs. 
                    They didn&apos;t sign up for this.
                  </p>
                </div>
              </div>
            </div>

            {/* Legal Disclaimers */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-3xl font-bold text-purple-400 mb-6 flex items-center">
                <span className="mr-3">⚖️</span>
                LEGAL STUFF
              </h2>
              
              <div className="space-y-6">
                <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-500/30">
                  <h3 className="text-xl font-bold text-purple-300 mb-2">Use at Your Own Risk</h3>
                  <p className="text-gray-300">
                    We&apos;re not responsible for broken furniture, damaged walls, 
                    or your roommate&apos;s therapy bills. Use responsibly (or don&apos;t, we don&apos;t judge).
                  </p>
                </div>

                <div className="bg-gray-900/20 rounded-lg p-4 border border-gray-500/30">
                  <h3 className="text-xl font-bold text-gray-300 mb-2">No Guarantees</h3>
                  <p className="text-gray-300">
                    We don&apos;t guarantee our products will survive your rage. 
                    In fact, we kind of hope they don&apos;t. 
                    That&apos;s the whole point of buying them.
                  </p>
                </div>

                <div className="bg-red-900/20 rounded-lg p-4 border border-red-500/30">
                  <h3 className="text-xl font-bold text-red-300 mb-2">Rage Not Included</h3>
                  <p className="text-gray-300">
                    Rage not included. You&apos;ll need to provide your own anger. 
                    We suggest playing competitive games or watching your team lose.
                  </p>
                </div>
              </div>
            </div>

            {/* Funny Disclaimers */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-pink-500/20">
              <h2 className="text-3xl font-bold text-pink-400 mb-6 flex items-center">
                <span className="mr-3">😄</span>
                FUNNY STUFF
              </h2>
              
              <div className="space-y-6">
                <div className="bg-pink-900/20 rounded-lg p-4 border border-pink-500/30">
                  <h3 className="text-xl font-bold text-pink-300 mb-2">Best Used When Losing</h3>
                  <p className="text-gray-300">
                    Our products work best when you&apos;re already losing. 
                    If you&apos;re winning, you probably don&apos;t need them.
                  </p>
                </div>

                <div className="bg-yellow-900/20 rounded-lg p-4 border border-yellow-500/30">
                  <h3 className="text-xl font-bold text-yellow-300 mb-2">Great Excuses</h3>
                  <p className="text-gray-300">
                    &quot;My controller is broken!&quot; is a perfectly valid excuse for losing. 
                    We&apos;ve got you covered on that front.
                  </p>
                </div>

                <div className="bg-green-900/20 rounded-lg p-4 border border-green-500/30">
                  <h3 className="text-xl font-bold text-green-300 mb-2">Therapy Recommended</h3>
                  <p className="text-gray-300">
                    If you&apos;re breaking this many things, maybe consider therapy. 
                    Or just buy more of our products. Your choice.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Still Want to Buy Our Stuff? 😈
              </h2>
              <p className="text-xl text-white mb-6">
                If you&apos;ve read all this and still want to rage with our products, 
                you&apos;re either very brave or very angry. We respect both.
              </p>
              <Link 
                href="/#products"
                className="inline-flex items-center bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <span className="mr-2">🛒</span>
                Shop Now (At Your Own Risk)
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
