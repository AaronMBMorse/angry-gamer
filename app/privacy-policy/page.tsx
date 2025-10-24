export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 mb-6">
            PRIVACY POLICY
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-8 font-bold">
            We&apos;re Watching You (Not Really) 👀
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Your privacy is important to us, but not as important as making 
            sure you don&apos;t break our products in stupid ways.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Information We Collect */}
              <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 rounded-2xl p-8 border border-purple-500/20">
                <h2 className="text-3xl font-bold text-purple-400 mb-6">1. INFORMATION WE COLLECT</h2>
                <p className="text-gray-300 mb-4">
                  We collect information about you because we&apos;re nosy like that. 
                  Here&apos;s what we gather:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Your name, email, and shipping address</li>
                  <li>• Your rage patterns and destruction preferences</li>
                  <li>• How many keyboards you&apos;ve broken this month</li>
                  <li>• Your Discord username (if you join our server)</li>
                  <li>• Screenshots of your epic rage moments</li>
                </ul>
                <div className="bg-purple-900/50 rounded-lg p-4 mt-4">
                  <p className="text-purple-300 text-sm font-bold">Why We Collect This:</p>
                  <p className="text-gray-300 text-sm">To send you more products to break, obviously!</p>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="bg-gradient-to-br from-pink-800/30 to-pink-900/30 rounded-2xl p-8 border border-pink-500/20">
                <h2 className="text-3xl font-bold text-pink-400 mb-6">2. HOW WE USE YOUR INFO</h2>
                <p className="text-gray-300 mb-4">
                  We use your information for various purposes, most of them legitimate:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• To process your orders and ship products</li>
                  <li>• To send you marketing emails (you can unsubscribe)</li>
                  <li>• To track your rage patterns for research</li>
                  <li>• To feature you in our &quot;Epic Rage Moments&quot; compilation</li>
                  <li>• To laugh at your destruction videos</li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div className="bg-gradient-to-br from-red-800/30 to-red-900/30 rounded-2xl p-8 border border-red-500/20">
                <h2 className="text-3xl font-bold text-red-400 mb-6">3. INFORMATION SHARING</h2>
                <p className="text-gray-300 mb-4">
                  We don&apos;t sell your personal information to third parties. 
                  We&apos;re not that evil! However, we might share:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Your rage videos with our community (with permission)</li>
                  <li>• Your destruction stats with our analytics team</li>
                  <li>• Your complaints with our therapy fund</li>
                  <li>• Your success stories with potential customers</li>
                </ul>
                <div className="bg-red-900/50 rounded-lg p-4 mt-4">
                  <p className="text-red-300 text-sm font-bold">Exception:</p>
                  <p className="text-gray-300 text-sm">We might share your info if legally required or if you&apos;re being a jerk.</p>
                </div>
              </div>

              {/* Data Security */}
              <div className="bg-gradient-to-br from-blue-800/30 to-blue-900/30 rounded-2xl p-8 border border-blue-500/20">
                <h2 className="text-3xl font-bold text-blue-400 mb-6">4. DATA SECURITY</h2>
                <p className="text-gray-300 mb-4">
                  We protect your information using industry-standard security measures. 
                  Your data is safer with us than your keyboards are!
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• SSL encryption for all data transmission</li>
                  <li>• Secure servers that don&apos;t rage quit</li>
                  <li>• Regular security updates (unlike your games)</li>
                  <li>• Password protection (use strong passwords!)</li>
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Cookies */}
              <div className="bg-gradient-to-br from-yellow-800/30 to-yellow-900/30 rounded-2xl p-8 border border-yellow-500/20">
                <h2 className="text-3xl font-bold text-yellow-400 mb-6">5. COOKIES</h2>
                <p className="text-gray-300 mb-4">
                  We use cookies to enhance your experience. Not the edible kind, 
                  unfortunately. We use:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Essential cookies (to make the site work)</li>
                  <li>• Analytics cookies (to see how you rage)</li>
                  <li>• Marketing cookies (to show you relevant ads)</li>
                  <li>• Preference cookies (to remember your settings)</li>
                </ul>
                <div className="bg-yellow-900/50 rounded-lg p-4 mt-4">
                  <p className="text-yellow-300 text-sm font-bold">Cookie Control:</p>
                  <p className="text-gray-300 text-sm">You can disable cookies, but the site might break!</p>
                </div>
              </div>

              {/* Third-Party Services */}
              <div className="bg-gradient-to-br from-green-800/30 to-green-900/30 rounded-2xl p-8 border border-green-500/20">
                <h2 className="text-3xl font-bold text-green-400 mb-6">6. THIRD-PARTY SERVICES</h2>
                <p className="text-gray-300 mb-4">
                  We use third-party services that might collect your information:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Payment processors (Stripe, PayPal)</li>
                  <li>• Shipping companies (UPS, FedEx)</li>
                  <li>• Email services (Mailchimp)</li>
                  <li>• Analytics (Google Analytics)</li>
                  <li>• Social media platforms (Discord, Twitter)</li>
                </ul>
              </div>

              {/* Your Rights */}
              <div className="bg-gradient-to-br from-orange-800/30 to-orange-900/30 rounded-2xl p-8 border border-orange-500/20">
                <h2 className="text-3xl font-bold text-orange-400 mb-6">7. YOUR RIGHTS</h2>
                <p className="text-gray-300 mb-4">
                  You have certain rights regarding your personal information:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Right to access your data</li>
                  <li>• Right to correct inaccurate information</li>
                  <li>• Right to delete your account</li>
                  <li>• Right to opt-out of marketing emails</li>
                  <li>• Right to data portability</li>
                </ul>
                <div className="bg-orange-900/50 rounded-lg p-4 mt-4">
                  <p className="text-orange-300 text-sm font-bold">How to Exercise:</p>
                  <p className="text-gray-300 text-sm">Contact us! We&apos;ll help you exercise your rights.</p>
                </div>
              </div>

              {/* Children&apos;s Privacy */}
              <div className="bg-gradient-to-br from-indigo-800/30 to-indigo-900/30 rounded-2xl p-8 border border-indigo-500/20">
                <h2 className="text-3xl font-bold text-indigo-400 mb-6">8. CHILDREN&apos;S PRIVACY</h2>
                <p className="text-gray-300 mb-4">
                  Our products are not intended for children under 13. 
                  If you&apos;re under 13, ask your parents before buying our stuff!
                </p>
                <div className="bg-indigo-900/50 rounded-lg p-4">
                  <p className="text-indigo-300 text-sm font-bold">Parental Note:</p>
                  <p className="text-gray-300 text-sm">Our products might be therapeutic for your angry teenager!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Tips */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-16">
            🔒 PRIVACY TIPS
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-800/30 to-green-900/30 rounded-2xl p-8 border border-green-500/20 text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-green-400 mb-4">Protect Your Data</h3>
              <p className="text-gray-300 text-sm">
                Use strong passwords, enable two-factor authentication, 
                and don&apos;t share your login credentials with anyone!
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-800/30 to-blue-900/30 rounded-2xl p-8 border border-blue-500/20 text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Email Privacy</h3>
              <p className="text-gray-300 text-sm">
                You can unsubscribe from our emails anytime. 
                We won&apos;t be offended (much)!
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 rounded-2xl p-8 border border-purple-500/20 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Contact Us</h3>
              <p className="text-gray-300 text-sm">
                Have privacy concerns? Contact us! 
                We&apos;ll address them seriously (for once).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Statistics */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-16">
            📊 PRIVACY STATS
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-green-400 mb-4">100%</div>
              <div className="text-xl text-white font-bold">Data Encrypted</div>
              <div className="text-gray-400">Your info is safe with us</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-400 mb-4">0</div>
              <div className="text-xl text-white font-bold">Data Breaches</div>
              <div className="text-gray-400">We&apos;ve never been hacked</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-purple-400 mb-4">24/7</div>
              <div className="text-xl text-white font-bold">Monitoring</div>
              <div className="text-gray-400">We watch our systems constantly</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-pink-400 mb-4">99.9%</div>
              <div className="text-xl text-white font-bold">Uptime</div>
              <div className="text-gray-400">Our servers rarely rage quit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Privacy Questions */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Privacy Questions? 🤔
            </h2>
            <p className="text-xl text-white mb-8">
              If you have questions about our privacy practices (and you probably do), 
              contact us! We&apos;ll be serious about privacy (for once).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/help-center"
                className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Contact Support 📞
              </a>
              <a 
                href="/terms-of-service"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300"
              >
                Read Terms 📜
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
