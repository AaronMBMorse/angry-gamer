export default function GetAngryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 mb-6">
            GET ANGRY
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-8 font-bold">
            Master the Art of Rage! 🔥
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Learn the ancient art of controlled rage. Transform your anger into power, 
            your frustration into fuel, and your rage into legendary gaming moments!
          </p>
        </div>
      </section>

      {/* Rage Levels */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-16">
            🎯 RAGE LEVELS
          </h2>
          
          <div className="grid md:grid-cols-5 gap-6">
            {/* Level 1 */}
            <div className="bg-gradient-to-br from-green-800/30 to-green-900/30 rounded-2xl p-6 border border-green-500/20 text-center">
              <div className="text-4xl mb-4">😤</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Level 1: Annoyed</h3>
              <p className="text-gray-300 text-sm mb-4">Mild irritation. Still playable.</p>
              <div className="bg-green-900/50 rounded-lg p-3">
                <p className="text-green-300 text-xs font-bold">Symptoms:</p>
                <p className="text-gray-300 text-xs">Eye twitching, heavy breathing</p>
              </div>
            </div>

            {/* Level 2 */}
            <div className="bg-gradient-to-br from-yellow-800/30 to-yellow-900/30 rounded-2xl p-6 border border-yellow-500/20 text-center">
              <div className="text-4xl mb-4">😠</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Level 2: Frustrated</h3>
              <p className="text-gray-300 text-sm mb-4">Getting heated. Performance dropping.</p>
              <div className="bg-yellow-900/50 rounded-lg p-3">
                <p className="text-yellow-300 text-xs font-bold">Symptoms:</p>
                <p className="text-gray-300 text-xs">Clenched fists, muttered curses</p>
              </div>
            </div>

            {/* Level 3 */}
            <div className="bg-gradient-to-br from-orange-800/30 to-orange-900/30 rounded-2xl p-6 border border-orange-500/20 text-center">
              <div className="text-4xl mb-4">🤬</div>
              <h3 className="text-xl font-bold text-orange-400 mb-3">Level 3: Angry</h3>
              <p className="text-gray-300 text-sm mb-4">Full rage mode. Time to break stuff!</p>
              <div className="bg-orange-900/50 rounded-lg p-3">
                <p className="text-orange-300 text-xs font-bold">Symptoms:</p>
                <p className="text-gray-300 text-xs">Yelling, throwing controllers</p>
              </div>
            </div>

            {/* Level 4 */}
            <div className="bg-gradient-to-br from-red-800/30 to-red-900/30 rounded-2xl p-6 border border-red-500/20 text-center">
              <div className="text-4xl mb-4">💥</div>
              <h3 className="text-xl font-bold text-red-400 mb-3">Level 4: Raging</h3>
              <p className="text-gray-300 text-sm mb-4">Peak performance. Everything breaks!</p>
              <div className="bg-red-900/50 rounded-lg p-3">
                <p className="text-red-300 text-xs font-bold">Symptoms:</p>
                <p className="text-gray-300 text-xs">Keyboard smashing, monitor punching</p>
              </div>
            </div>

            {/* Level 5 */}
            <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 rounded-2xl p-6 border border-purple-500/20 text-center">
              <div className="text-4xl mb-4">👹</div>
              <h3 className="text-xl font-bold text-purple-400 mb-3">Level 5: Legendary</h3>
              <p className="text-gray-300 text-sm mb-4">Mythical rage. Room destruction!</p>
              <div className="bg-purple-900/50 rounded-lg p-3">
                <p className="text-purple-300 text-xs font-bold">Symptoms:</p>
                <p className="text-gray-300 text-xs">Furniture flying, neighbors calling cops</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rage Techniques */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-16">
            🥋 RAGE TECHNIQUES
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Breathing Techniques */}
            <div className="bg-gradient-to-br from-blue-800/30 to-blue-900/30 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-3xl font-bold text-blue-400 mb-6 flex items-center">
                <span className="mr-3">🫁</span>
                BREATHING TECHNIQUES
              </h3>
              <div className="space-y-4">
                <div className="bg-blue-900/50 rounded-lg p-4">
                  <h4 className="text-blue-300 font-bold mb-2">The Rage Breath</h4>
                  <p className="text-gray-300 text-sm">Inhale for 4 seconds, hold for 4, exhale for 8. Repeat until calm or more angry.</p>
                </div>
                <div className="bg-blue-900/50 rounded-lg p-4">
                  <h4 className="text-blue-300 font-bold mb-2">The Scream Technique</h4>
                  <p className="text-gray-300 text-sm">Let out a primal scream into a pillow. Your neighbors will thank you.</p>
                </div>
                <div className="bg-blue-900/50 rounded-lg p-4">
                  <h4 className="text-blue-300 font-bold mb-2">The Countdown</h4>
                  <p className="text-gray-300 text-sm">Count backwards from 10. If you reach 0 and still angry, start breaking stuff!</p>
                </div>
              </div>
            </div>

            {/* Physical Techniques */}
            <div className="bg-gradient-to-br from-red-800/30 to-red-900/30 rounded-2xl p-8 border border-red-500/20">
              <h3 className="text-3xl font-bold text-red-400 mb-6 flex items-center">
                <span className="mr-3">💪</span>
                PHYSICAL TECHNIQUES
              </h3>
              <div className="space-y-4">
                <div className="bg-red-900/50 rounded-lg p-4">
                  <h4 className="text-red-300 font-bold mb-2">The Controller Slam</h4>
                  <p className="text-gray-300 text-sm">Slam your controller into a pillow. Satisfying but safe!</p>
                </div>
                <div className="bg-red-900/50 rounded-lg p-4">
                  <h4 className="text-red-300 font-bold mb-2">The Desk Pound</h4>
                  <p className="text-gray-300 text-sm">Pound your desk with your fists. Great for stress relief!</p>
                </div>
                <div className="bg-red-900/50 rounded-lg p-4">
                  <h4 className="text-red-300 font-bold mb-2">The Keyboard Smash</h4>
                  <p className="text-gray-300 text-sm">Smash your keyboard repeatedly. Our keyboards are designed for this!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rage Triggers */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-red-500 mb-16">
            ⚡ RAGE TRIGGERS
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Gaming Triggers */}
            <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
                <span className="mr-3">🎮</span>
                GAMING TRIGGERS
              </h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>Lag spikes at critical moments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>Teammates who don&apos;t know what they&apos;re doing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>Boss fights with impossible mechanics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>Random critical hits from enemies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3">•</span>
                  <span>Losing by 1 point in competitive matches</span>
                </li>
              </ul>
            </div>

            {/* Life Triggers */}
            <div className="bg-gradient-to-br from-orange-800/30 to-orange-900/30 rounded-2xl p-8 border border-orange-500/20">
              <h3 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
                <span className="mr-3">🏠</span>
                LIFE TRIGGERS
              </h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3">•</span>
                  <span>Slow internet when you need it most</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3">•</span>
                  <span>Parents interrupting your gaming sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3">•</span>
                  <span>Work/school stress bleeding into game time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3">•</span>
                  <span>Bills and responsibilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-400 mr-3">•</span>
                  <span>People who don&apos;t understand gaming</span>
                </li>
              </ul>
            </div>

            {/* Technical Triggers */}
            <div className="bg-gradient-to-br from-red-800/30 to-red-900/30 rounded-2xl p-8 border border-red-500/20">
              <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                <span className="mr-3">💻</span>
                TECHNICAL TRIGGERS
              </h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Blue screen of death during raids</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Controllers disconnecting mid-game</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Games crashing after hours of progress</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Overheating computers shutting down</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Windows updates at the worst times</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Things That Will Make You SUPER ANGRY */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500 mb-16">
            🔥 THINGS THAT WILL MAKE YOU SUPER ANGRY
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Internet Issues */}
            <div className="bg-gradient-to-br from-red-800/40 to-red-900/40 rounded-2xl p-6 border border-red-500/30 transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🌐</div>
              <h3 className="text-xl font-bold text-red-400 mb-4 text-center">Internet Nightmares</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• &quot;Your connection is unstable&quot; messages</li>
                <li>• Download speeds slower than dial-up</li>
                <li>• WiFi password that&apos;s 47 characters long</li>
                <li>• &quot;Please restart your router&quot; every 5 minutes</li>
                <li>• Data caps that reset at 3 AM</li>
                <li>• Neighbors stealing your WiFi</li>
                <li>• ISP customer service that doesn&apos;t exist</li>
              </ul>
            </div>

            {/* Gaming Disasters */}
            <div className="bg-gradient-to-br from-purple-800/40 to-purple-900/40 rounded-2xl p-6 border border-purple-500/30 transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🎮</div>
              <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">Gaming Disasters</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Teammates who play with their feet</li>
                <li>• Bosses with 15 phases and no checkpoints</li>
                <li>• &quot;Just one more game&quot; that lasts 6 hours</li>
                <li>• Random loot boxes that give you nothing</li>
                <li>• Games that auto-save right before you die</li>
                <li>• Tutorials that skip important controls</li>
                <li>• &quot;Easy&quot; difficulty that&apos;s actually impossible</li>
              </ul>
            </div>

            {/* Tech Failures */}
            <div className="bg-gradient-to-br from-blue-800/40 to-blue-900/40 rounded-2xl p-6 border border-blue-500/30 transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">💻</div>
              <h3 className="text-xl font-bold text-blue-400 mb-4 text-center">Tech Failures</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• USB ports that only work upside down</li>
                <li>• Printers that print blank pages</li>
                <li>• Software updates that break everything</li>
                <li>• Passwords that expire every 30 seconds</li>
                <li>• Error messages in ancient hieroglyphics</li>
                <li>• Computers that restart during presentations</li>
                <li>• &quot;Have you tried turning it off and on?&quot;</li>
              </ul>
            </div>

            {/* Social Media Hell */}
            <div className="bg-gradient-to-br from-pink-800/40 to-pink-900/40 rounded-2xl p-6 border border-pink-500/30 transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">📱</div>
              <h3 className="text-xl font-bold text-pink-400 mb-4 text-center">Social Media Hell</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• &quot;You&apos;ve been logged out for security&quot;</li>
                <li>• Captcha that asks you to identify traffic lights</li>
                <li>• &quot;Your post violates community guidelines&quot;</li>
                <li>• Algorithm that shows you ads for everything</li>
                <li>• &quot;Trending&quot; topics that nobody cares about</li>
                <li>• Notifications for things you don&apos;t follow</li>
                <li>• &quot;Something went wrong. Try again.&quot;</li>
              </ul>
            </div>

            {/* Work/School Nightmares */}
            <div className="bg-gradient-to-br from-yellow-800/40 to-yellow-900/40 rounded-2xl p-6 border border-yellow-500/30 transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">💼</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-4 text-center">Work/School Nightmares</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Group projects with people who don&apos;t contribute</li>
                <li>• Meetings that could have been emails</li>
                <li>• Deadlines that move up by 2 weeks</li>
                <li>• &quot;Just a quick 5-minute task&quot; that takes 3 hours</li>
                <li>• Bosses who don&apos;t understand technology</li>
                <li>• &quot;We&apos;re like a family here&quot; companies</li>
                <li>• Performance reviews that are actually roast sessions</li>
              </ul>
            </div>

            {/* Daily Life Annoyances */}
            <div className="bg-gradient-to-br from-green-800/40 to-green-900/40 rounded-2xl p-6 border border-green-500/30 transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">😤</div>
              <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Daily Life Annoyances</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• People who don&apos;t use turn signals</li>
                <li>• Slow walkers in the fast lane</li>
                <li>• &quot;No problem&quot; when you say thank you</li>
                <li>• Elevators that stop at every floor</li>
                <li>• People who chew with their mouths open</li>
                <li>• &quot;It&apos;s not that hard&quot; comments</li>
                <li>• Weather that&apos;s always wrong</li>
              </ul>
            </div>
          </div>

          {/* Rage Level Indicator */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-red-800 to-red-900 rounded-2xl p-8 border border-red-500/30">
              <h3 className="text-3xl font-bold text-red-400 mb-6">🔥 RAGE LEVEL CHECKER 🔥</h3>
              <p className="text-xl text-gray-300 mb-6">
                How many of these things made you angry just reading them?
              </p>
              <div className="grid md:grid-cols-5 gap-4">
                <div className="bg-red-900/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-red-400">0-5</div>
                  <div className="text-gray-300 text-sm">You&apos;re a zen master</div>
                </div>
                <div className="bg-orange-900/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-400">6-10</div>
                  <div className="text-gray-300 text-sm">Mildly irritated</div>
                </div>
                <div className="bg-yellow-900/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400">11-15</div>
                  <div className="text-gray-300 text-sm">Getting heated</div>
                </div>
                <div className="bg-red-900/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-red-400">16-20</div>
                  <div className="text-gray-300 text-sm">Full rage mode</div>
                </div>
                <div className="bg-purple-900/50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400">21+</div>
                  <div className="text-gray-300 text-sm">Legendary rage!</div>
                </div>
              </div>
              <div className="mt-6">
                <p className="text-gray-400 text-sm">
                  If you&apos;re in the 16+ range, you definitely need our rage gear! 💥
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rage Products */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-16">
            🛒 RAGE ESSENTIALS
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Essential Gear */}
            <div className="bg-gradient-to-br from-red-800/30 to-red-900/30 rounded-2xl p-8 border border-red-500/20">
              <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                <span className="mr-3">🎯</span>
                ESSENTIAL GEAR
              </h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Rage-proof keyboards (our specialty!)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Durable controllers for throwing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Stress balls for squeezing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Punching bags for full-body rage</span>
                </li>
              </ul>
              <div className="mt-6">
                <a 
                  href="/products"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full block text-center"
                >
                  Shop Rage Gear 💥
                </a>
              </div>
            </div>

            {/* Safety Equipment */}
            <div className="bg-gradient-to-br from-yellow-800/30 to-yellow-900/30 rounded-2xl p-8 border border-yellow-500/20">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
                <span className="mr-3">🛡️</span>
                SAFETY EQUIPMENT
              </h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3">•</span>
                  <span>Fire extinguishers (for when things get heated)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3">•</span>
                  <span>Safety helmets (protect your head!)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3">•</span>
                  <span>First aid kits (for minor injuries)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-3">•</span>
                  <span>Safety gloves (protect your hands)</span>
                </li>
              </ul>
              <div className="mt-6">
                <a 
                  href="/products#safety"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full block text-center"
                >
                  Shop Safety Gear 🛡️
                </a>
              </div>
            </div>

            {/* Budget Options */}
            <div className="bg-gradient-to-br from-green-800/30 to-green-900/30 rounded-2xl p-8 border border-green-500/20">
              <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
                <span className="mr-3">💰</span>
                BUDGET OPTIONS
              </h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Cheap keyboards for smashing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Basic controllers for throwing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Simple stress relief toys</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Affordable rage accessories</span>
                </li>
              </ul>
              <div className="mt-6">
                <a 
                  href="/products#budget"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full block text-center"
                >
                  Shop Budget Gear 💰
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rage Mastery Tips */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-16">
            🎓 RAGE MASTERY TIPS
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Do's */}
            <div className="bg-gradient-to-br from-green-800/30 to-green-900/30 rounded-2xl p-8 border border-green-500/20">
              <h3 className="text-3xl font-bold text-green-400 mb-6 flex items-center">
                <span className="mr-3">✅</span>
                RAGE DO&apos;S
              </h3>
              <ul className="text-gray-300 space-y-4">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Channel rage into better performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Use our products for safe destruction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Take breaks when rage gets too intense</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Share your rage moments with our community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">•</span>
                  <span>Use rage as motivation to improve</span>
                </li>
              </ul>
            </div>

            {/* Don'ts */}
            <div className="bg-gradient-to-br from-red-800/30 to-red-900/30 rounded-2xl p-8 border border-red-500/20">
              <h3 className="text-3xl font-bold text-red-400 mb-6 flex items-center">
                <span className="mr-3">❌</span>
                RAGE DON&apos;TS
              </h3>
              <ul className="text-gray-300 space-y-4">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Don&apos;t break other people&apos;s stuff</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Don&apos;t hurt yourself or others</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Don&apos;t let rage control your life</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Don&apos;t blame others for your rage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3">•</span>
                  <span>Don&apos;t rage without proper safety equipment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rage Statistics */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-16">
            📊 RAGE STATS
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-red-400 mb-4">2.3M</div>
              <div className="text-xl text-white font-bold">Keyboards Destroyed</div>
              <div className="text-gray-400">By our community this year</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-orange-400 mb-4">847K</div>
              <div className="text-xl text-white font-bold">Rage Videos Posted</div>
              <div className="text-gray-400">Epic destruction moments</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-yellow-400 mb-4">99.7%</div>
              <div className="text-xl text-white font-bold">Satisfaction Rate</div>
              <div className="text-gray-400">Customers love our rage gear</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-green-400 mb-4">50K+</div>
              <div className="text-xl text-white font-bold">Rage Masters</div>
              <div className="text-gray-400">Trained in our Discord</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Master Your Rage? 🔥
            </h2>
            <p className="text-xl text-white mb-8">
              Join thousands of angry gamers who have learned to channel their rage 
              into legendary gaming moments. Your journey to rage mastery starts now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/products"
                className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Shop Rage Gear 💥
              </a>
              <a 
                href="/community"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300"
              >
                Join Community 🎮
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
