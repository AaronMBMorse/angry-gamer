export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400 mb-4">ANGRY GAMER</h3>
            <p className="text-gray-400 mb-6 text-lg">For gamers who rage hard and play harder. Join our community of angry gamers!</p>

            {/* Discord CTA */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-6 mb-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">🎮</div>
                <h4 className="text-xl font-bold text-white">Join Our Discord!</h4>
              </div>
              <p className="text-indigo-100 mb-4">Connect with fellow angry gamers, share your rage moments, and get exclusive deals!</p>
              <a
                href="https://discord.gg/angrygamer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-indigo-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="mr-2">🚀</span>
                Join Discord Server
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/products" className="text-gray-400 hover:text-red-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/reviews" className="text-gray-400 hover:text-red-400 transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="/community" className="text-gray-400 hover:text-red-400 transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="/disclaimers" className="text-gray-400 hover:text-red-400 transition-colors">
                  Disclaimers
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="/help-center" className="text-gray-400 hover:text-red-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/warranty" className="text-gray-400 hover:text-red-400 transition-colors">
                  Warranty Info
                </a>
              </li>
              <li>
                <a href="/returns" className="text-gray-400 hover:text-red-400 transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Contact */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Media */}
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg font-bold text-white mb-4">Follow Our Rage</h4>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com/angrygamer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-500 text-white p-3 rounded-full transition-colors"
                  title="Twitter"
                >
                  <span className="text-xl">🐦</span>
                </a>
                <a
                  href="https://instagram.com/angrygamer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-pink-500 text-white p-3 rounded-full transition-colors"
                  title="Instagram"
                >
                  <span className="text-xl">📸</span>
                </a>
                <a
                  href="https://youtube.com/angrygamer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-red-500 text-white p-3 rounded-full transition-colors"
                  title="YouTube"
                >
                  <span className="text-xl">📺</span>
                </a>
                <a href="https://tiktok.com/@angrygamer" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-black text-white p-3 rounded-full transition-colors" title="TikTok">
                  <span className="text-xl">🎵</span>
                </a>
                <a
                  href="https://twitch.tv/angrygamer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-purple-500 text-white p-3 rounded-full transition-colors"
                  title="Twitch"
                >
                  <span className="text-xl">🎮</span>
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-bold text-white mb-2">Rage Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">Get the latest rage gear updates!</p>
              <div className="flex">
                <input type="email" placeholder="your@email.com" className="bg-gray-800 text-white px-4 py-2 rounded-l-lg border border-gray-700 focus:outline-none focus:border-red-500" />
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-r-lg font-bold transition-colors">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Angry Gamer. All rights reserved. | Made with 💥 and lots of rage</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-red-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
