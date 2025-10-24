export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-blue-400 to-purple-400 mb-6">
            TERMS OF SERVICE
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-8 font-bold">
            The Fine Print (That Nobody Reads) 📜
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            By using our products, you agree to these terms. 
            Don&apos;t worry, we&apos;ll make it as entertaining as possible!
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Acceptance */}
              <div className="bg-gradient-to-br from-blue-800/30 to-blue-900/30 rounded-2xl p-8 border border-blue-500/20">
                <h2 className="text-3xl font-bold text-blue-400 mb-6">1. ACCEPTANCE OF TERMS</h2>
                <p className="text-gray-300 mb-4">
                  By purchasing our products, you acknowledge that you have read, understood, 
                  and agree to be bound by these terms. If you don&apos;t agree, 
                  well, you probably shouldn&apos;t have bought our stuff.
                </p>
                <div className="bg-blue-900/50 rounded-lg p-4">
                  <p className="text-blue-300 text-sm font-bold">Translation:</p>
                  <p className="text-gray-300 text-sm">You bought it, you&apos;re stuck with it!</p>
                </div>
              </div>

              {/* Product Usage */}
              <div className="bg-gradient-to-br from-green-800/30 to-green-900/30 rounded-2xl p-8 border border-green-500/20">
                <h2 className="text-3xl font-bold text-green-400 mb-6">2. PRODUCT USAGE</h2>
                <p className="text-gray-300 mb-4">
                  Our products are designed for rage-induced destruction. However, 
                  we are not responsible for any damage to your walls, monitors, 
                  or relationships caused by said destruction.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Use products at your own risk</li>
                  <li>• Don&apos;t blame us for your therapy bills</li>
                  <li>• Rage responsibly (if possible)</li>
                  <li>• Keep pets and small children away</li>
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div className="bg-gradient-to-br from-red-800/30 to-red-900/30 rounded-2xl p-8 border border-red-500/20">
                <h2 className="text-3xl font-bold text-red-400 mb-6">3. LIMITATION OF LIABILITY</h2>
                <p className="text-gray-300 mb-4">
                  We are not liable for any damages, injuries, or emotional trauma 
                  resulting from the use of our products. This includes but is not limited to:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Broken keyboards, mice, or controllers</li>
                  <li>• Damaged walls, monitors, or furniture</li>
                  <li>• Strained relationships with family members</li>
                  <li>• Increased therapy costs</li>
                  <li>• Loss of gaming privileges</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 rounded-2xl p-8 border border-purple-500/20">
                <h2 className="text-3xl font-bold text-purple-400 mb-6">4. INTELLECTUAL PROPERTY</h2>
                <p className="text-gray-300 mb-4">
                  All content, designs, and rage-inducing features are our property. 
                  Don&apos;t steal our ideas, or we&apos;ll get angry too!
                </p>
                <div className="bg-purple-900/50 rounded-lg p-4">
                  <p className="text-purple-300 text-sm font-bold">Fair Use:</p>
                  <p className="text-gray-300 text-sm">You can use our products in content creation, just tag us!</p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Payment Terms */}
              <div className="bg-gradient-to-br from-yellow-800/30 to-yellow-900/30 rounded-2xl p-8 border border-yellow-500/20">
                <h2 className="text-3xl font-bold text-yellow-400 mb-6">5. PAYMENT TERMS</h2>
                <p className="text-gray-300 mb-4">
                  Payment is due at the time of purchase. We accept all major credit cards, 
                  PayPal, and Bitcoin (because we&apos;re edgy like that).
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• No refunds for rage-induced damage</li>
                  <li>• All sales are final (mostly)</li>
                  <li>• We reserve the right to laugh at your payment methods</li>
                  <li>• Cryptocurrency accepted but not recommended</li>
                </ul>
              </div>

              {/* Shipping & Delivery */}
              <div className="bg-gradient-to-br from-orange-800/30 to-orange-900/30 rounded-2xl p-8 border border-orange-500/20">
                <h2 className="text-3xl font-bold text-orange-400 mb-6">6. SHIPPING & DELIVERY</h2>
                <p className="text-gray-300 mb-4">
                  We ship worldwide, but we can&apos;t guarantee your patience will last 
                  until delivery. Consider ordering multiple products!
                </p>
                <div className="bg-orange-900/50 rounded-lg p-4">
                  <p className="text-orange-300 text-sm font-bold">Shipping Times:</p>
                  <p className="text-gray-300 text-sm">3-5 business days (or until you rage at us)</p>
                </div>
              </div>

              {/* Termination */}
              <div className="bg-gradient-to-br from-pink-800/30 to-pink-900/30 rounded-2xl p-8 border border-pink-500/20">
                <h2 className="text-3xl font-bold text-pink-400 mb-6">7. TERMINATION</h2>
                <p className="text-gray-300 mb-4">
                  We reserve the right to terminate your account if you:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Use our products to hurt others</li>
                  <li>• Spam our support team</li>
                  <li>• Try to return products you clearly broke</li>
                  <li>• Complain about our sarcastic responses</li>
                </ul>
              </div>

              {/* Governing Law */}
              <div className="bg-gradient-to-br from-indigo-800/30 to-indigo-900/30 rounded-2xl p-8 border border-indigo-500/20">
                <h2 className="text-3xl font-bold text-indigo-400 mb-6">8. GOVERNING LAW</h2>
                <p className="text-gray-300 mb-4">
                  These terms are governed by the laws of the Internet, 
                  specifically the &quot;Don&apos;t Be a Jerk&quot; clause.
                </p>
                <div className="bg-indigo-900/50 rounded-lg p-4">
                  <p className="text-indigo-300 text-sm font-bold">Legal Jurisdiction:</p>
                  <p className="text-gray-300 text-sm">The Rage Zone, Internet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funny Disclaimers */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-16">
            😂 FUNNY DISCLAIMERS
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-800/30 to-red-900/30 rounded-2xl p-8 border border-red-500/20 text-center">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-red-400 mb-4">Legal Disclaimer</h3>
              <p className="text-gray-300 text-sm">
                These terms are legally binding, but we&apos;re not lawyers. 
                If you need real legal advice, consult an actual attorney!
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-800/30 to-blue-900/30 rounded-2xl p-8 border border-blue-500/20 text-center">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Sarcasm Disclaimer</h3>
              <p className="text-gray-300 text-sm">
                We&apos;re being sarcastic, but the terms are real. 
                Don&apos;t take everything we say seriously!
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-800/30 to-green-900/30 rounded-2xl p-8 border border-green-500/20 text-center">
              <div className="text-4xl mb-4">🤷‍♂️</div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Confusion Disclaimer</h3>
              <p className="text-gray-300 text-sm">
                If you&apos;re confused by these terms, join the club! 
                We&apos;re confused too, but we wrote them!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Questions About These Terms? 🤔
            </h2>
            <p className="text-xl text-white mb-8">
              If you have questions about these terms (and you probably do), 
              contact us! We&apos;ll try to explain them in plain English.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/help-center"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Contact Support 📞
              </a>
              <a 
                href="/products"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300"
              >
                Shop Products 💥
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
