export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
            HELP CENTER
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-8 font-bold">
            We&apos;re Here to Help (Sort Of) 🤔
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Got questions? We&apos;ve got answers! Well, mostly sarcastic responses, 
            but hey, that&apos;s still help, right?
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-16">
            ❓ FREQUENTLY ASKED QUESTIONS
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* FAQ 1 */}
            <div className="bg-gradient-to-br from-blue-800/30 to-blue-900/30 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Q: My keyboard broke after I threw it at the wall. Is this normal?</h3>
              <p className="text-gray-300 mb-4">
                <span className="text-blue-300 font-bold">A:</span> Yes, that&apos;s exactly what it&apos;s designed for! 
                Congratulations on successful product usage. You&apos;ve achieved peak performance.
              </p>
              <div className="bg-blue-900/50 rounded-lg p-4">
                <p className="text-blue-300 text-sm font-bold">Pro Tip:</p>
                <p className="text-gray-300 text-sm">Try throwing it harder next time for maximum satisfaction!</p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Q: Can I return a broken product?</h3>
              <p className="text-gray-300 mb-4">
                <span className="text-purple-300 font-bold">A:</span> Only if it&apos;s broken in a way that&apos;s NOT rage-induced. 
                If you broke it on purpose, that&apos;s a feature, not a bug!
              </p>
              <div className="bg-purple-900/50 rounded-lg p-4">
                <p className="text-purple-300 text-sm font-bold">Return Policy:</p>
                <p className="text-gray-300 text-sm">We only accept returns if the product survives your rage. Rare occurrence!</p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="bg-gradient-to-br from-green-800/30 to-green-900/30 rounded-2xl p-8 border border-green-500/20">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Q: How long does shipping take?</h3>
              <p className="text-gray-300 mb-4">
                <span className="text-green-300 font-bold">A:</span> Usually 3-5 business days, but we can&apos;t guarantee 
                your patience will last that long. Consider ordering multiple products!
              </p>
              <div className="bg-green-900/50 rounded-lg p-4">
                <p className="text-green-300 text-sm font-bold">Express Option:</p>
                <p className="text-gray-300 text-sm">We offer &quot;Rage Express&quot; shipping for impatient customers!</p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="bg-gradient-to-br from-red-800/30 to-red-900/30 rounded-2xl p-8 border border-red-500/20">
              <h3 className="text-2xl font-bold text-red-400 mb-4">Q: My mom is mad that I broke another keyboard. Help?</h3>
              <p className="text-gray-300 mb-4">
                <span className="text-red-300 font-bold">A:</span> Tell her it&apos;s therapeutic! 
                Show her our therapeutic page. If that doesn&apos;t work, buy her a keyboard too.
              </p>
              <div className="bg-red-900/50 rounded-lg p-4">
                <p className="text-red-300 text-sm font-bold">Family Therapy:</p>
                <p className="text-gray-300 text-sm">Our products bring families together through shared destruction!</p>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="bg-gradient-to-br from-yellow-800/30 to-yellow-900/30 rounded-2xl p-8 border border-yellow-500/20">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Q: Do you have a customer service phone number?</h3>
              <p className="text-gray-300 mb-4">
                <span className="text-yellow-300 font-bold">A:</span> Yes, but it&apos;s mostly just us laughing at your problems. 
                Try Discord instead - our community is more helpful!
              </p>
              <div className="bg-yellow-900/50 rounded-lg p-4">
                <p className="text-yellow-300 text-sm font-bold">Best Support:</p>
                <p className="text-gray-300 text-sm">Our Discord community provides better help than our actual support team!</p>
              </div>
            </div>

            {/* FAQ 6 */}
            <div className="bg-gradient-to-br from-pink-800/30 to-pink-900/30 rounded-2xl p-8 border border-pink-500/20">
              <h3 className="text-2xl font-bold text-pink-400 mb-4">Q: Can I use your products for content creation?</h3>
              <p className="text-gray-300 mb-4">
                <span className="text-pink-300 font-bold">A:</span> Absolutely! Our products are perfect for viral content. 
                Just tag us and we might feature you on our social media!
              </p>
              <div className="bg-pink-900/50 rounded-lg p-4">
                <p className="text-pink-300 text-sm font-bold">Content Creator Bonus:</p>
                <p className="text-gray-300 text-sm">We offer special discounts for verified content creators!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-16">
            📞 CONTACT US
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Discord */}
            <div className="bg-gradient-to-br from-indigo-800/30 to-purple-900/30 rounded-2xl p-8 border border-indigo-500/20 text-center">
              <div className="text-6xl mb-6">🎮</div>
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">Discord</h3>
              <p className="text-gray-300 mb-6">Best way to get help! Our community is super helpful and we&apos;re always online.</p>
              <a 
                href="https://discord.gg/angrygamer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Join Discord
              </a>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-blue-800/30 to-blue-900/30 rounded-2xl p-8 border border-blue-500/20 text-center">
              <div className="text-6xl mb-6">📧</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Email</h3>
              <p className="text-gray-300 mb-6">We&apos;ll respond within 24-48 hours. Sometimes with actual help!</p>
              <a 
                href="mailto:support@angrygamer.com" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Email Us
              </a>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-pink-800/30 to-pink-900/30 rounded-2xl p-8 border border-pink-500/20 text-center">
              <div className="text-6xl mb-6">📱</div>
              <h3 className="text-2xl font-bold text-pink-400 mb-4">Social Media</h3>
              <p className="text-gray-300 mb-6">DM us on any platform! We&apos;re more responsive than our actual support team.</p>
              <a 
                href="https://twitter.com/angrygamer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-red-800 to-red-900 rounded-2xl p-12 border border-red-500/30">
            <h2 className="text-4xl font-bold text-white mb-6">
              🚨 EMERGENCY RAGE SUPPORT
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Having a rage emergency? Need to destroy something RIGHT NOW? 
              We&apos;ve got you covered!
            </p>
            <div className="bg-red-900/50 rounded-lg p-6 mb-8">
              <h3 className="text-red-300 font-bold mb-4">Emergency Hotline: 1-800-RAGE-NOW</h3>
              <p className="text-gray-300">
                Available 24/7 for rage emergencies. We&apos;ll overnight you a keyboard 
                if you&apos;re having a particularly bad day.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/products"
                className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Emergency Order 🚀
              </a>
              <a 
                href="/therapeutic"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300"
              >
                Rage Therapy 💆‍♂️
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Still Need Help? 🤷‍♂️
            </h2>
            <p className="text-xl text-white mb-8">
              If we couldn&apos;t help you here, try our Discord community. 
              They&apos;re usually more helpful than we are!
            </p>
            <a 
              href="https://discord.gg/angrygamer"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Join Discord Community 🎮
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
