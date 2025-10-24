export default function TherapeuticPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 mb-6">
            THERAPEUTIC
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-8 font-bold">
            Destroy Your Problems, Not Your Wallet 💰
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Why pay $200/hour for therapy when you can smash a $29 keyboard? 
            Our products are scientifically proven* to be 87% more effective than traditional counseling.
          </p>
          <div className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-full text-sm inline-block">
            *Scientifically proven by our marketing department
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-16">
            💸 THERAPY VS RAGE THERAPY
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Traditional Therapy */}
            <div className="bg-gradient-to-br from-red-800/30 to-red-900/30 rounded-2xl p-8 border border-red-500/20">
              <h3 className="text-3xl font-bold text-red-400 mb-6 flex items-center">
                <span className="mr-3">😰</span>
                TRADITIONAL THERAPY
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Hourly Rate</span>
                  <span className="text-red-400 font-bold text-xl">$200</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Sessions Needed</span>
                  <span className="text-red-400 font-bold text-xl">12-24</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Total Cost</span>
                  <span className="text-red-400 font-bold text-xl">$2,400-$4,800</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Time Investment</span>
                  <span className="text-red-400 font-bold text-xl">3-6 months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Insurance Coverage</span>
                  <span className="text-red-400 font-bold text-xl">Maybe?</span>
                </div>
              </div>

              <div className="bg-red-900/50 rounded-lg p-4">
                <h4 className="text-red-300 font-bold mb-2">Therapy Downsides:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• You have to talk about your feelings</li>
                  <li>• Awkward silences</li>
                  <li>• &quot;How does that make you feel?&quot;</li>
                  <li>• Expensive tissues</li>
                  <li>• No instant gratification</li>
                </ul>
              </div>
            </div>

            {/* Rage Therapy */}
            <div className="bg-gradient-to-br from-green-800/30 to-green-900/30 rounded-2xl p-8 border border-green-500/20">
              <h3 className="text-3xl font-bold text-green-400 mb-6 flex items-center">
                <span className="mr-3">💥</span>
                RAGE THERAPY
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Keyboard Cost</span>
                  <span className="text-green-400 font-bold text-xl">$29</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Sessions Needed</span>
                  <span className="text-green-400 font-bold text-xl">1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Total Cost</span>
                  <span className="text-green-400 font-bold text-xl">$29</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Time Investment</span>
                  <span className="text-green-400 font-bold text-xl">5 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Insurance Coverage</span>
                  <span className="text-green-400 font-bold text-xl">Not needed!</span>
                </div>
              </div>

              <div className="bg-green-900/50 rounded-lg p-4">
                <h4 className="text-green-300 font-bold mb-2">Rage Therapy Benefits:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Instant stress relief</li>
                  <li>• No awkward conversations</li>
                  <li>• Satisfying destruction sounds</li>
                  <li>• Great for social media content</li>
                  <li>• Immediate results</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Savings Calculator */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">💰 SAVINGS CALCULATOR</h3>
            <p className="text-xl text-white mb-6">
              Traditional therapy: <span className="line-through text-red-300">$3,600</span> 
              <span className="text-yellow-400 font-bold text-2xl ml-4">vs</span> 
              Rage therapy: <span className="text-green-300 font-bold text-2xl">$29</span>
            </p>
            <div className="text-4xl font-bold text-yellow-400 mb-4">
              YOU SAVE $3,571! 🎉
            </div>
            <p className="text-lg text-white">
              That&apos;s enough money to buy 123 more keyboards to destroy!
            </p>
          </div>
        </div>
      </section>

      {/* Scientific Benefits */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-16">
            🧠 SCIENTIFIC BENEFITS
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-gradient-to-br from-blue-800/30 to-blue-900/30 rounded-2xl p-8 border border-blue-500/20">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🧘‍♂️</div>
                <h3 className="text-2xl font-bold text-blue-400">Stress Reduction</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Studies show that controlled destruction releases endorphins, 
                reducing cortisol levels by up to 73%. That&apos;s science!
              </p>
              <div className="bg-blue-900/50 rounded-lg p-4">
                <p className="text-blue-300 text-sm font-bold">Research Note:</p>
                <p className="text-gray-300 text-sm">
                  &quot;We asked 5 people and 4 of them felt better. 
                  That&apos;s an 80% success rate!&quot;
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gradient-to-br from-purple-800/30 to-purple-900/30 rounded-2xl p-8 border border-purple-500/20">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">💪</div>
                <h3 className="text-2xl font-bold text-purple-400">Physical Exercise</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Smashing keyboards burns calories! One rage session = 
                15 minutes on a treadmill. Your therapist can&apos;t do that!
              </p>
              <div className="bg-purple-900/50 rounded-lg p-4">
                <p className="text-purple-300 text-sm font-bold">Calorie Count:</p>
                <p className="text-gray-300 text-sm">
                  Keyboard smashing: 150 calories<br/>
                  Therapy couch sitting: 2 calories
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gradient-to-br from-green-800/30 to-green-900/30 rounded-2xl p-8 border border-green-500/20">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-green-400">Problem Solving</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Instead of talking about problems, destroy them! 
                Your keyboard is the problem? Problem solved!
              </p>
              <div className="bg-green-900/50 rounded-lg p-4">
                <p className="text-green-300 text-sm font-bold">Logic:</p>
                <p className="text-gray-300 text-sm">
                  If keyboard = frustration<br/>
                  Then destroy keyboard = destroy frustration<br/>
                  Math checks out! ✅
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-16">
            💬 THERAPY SUCCESS STORIES
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Success Story 1 */}
            <div className="bg-gradient-to-br from-yellow-800/30 to-orange-900/30 rounded-2xl p-8 border border-yellow-500/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  S
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Sarah M.</h3>
                  <div className="text-yellow-400 text-sm">Former Therapy Patient</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                &quot;I was spending $200/week on therapy for 6 months. 
                One keyboard smash session and I felt better than all those sessions combined. 
                My therapist is now our customer!&quot;
              </p>
              <div className="bg-yellow-900/50 rounded-lg p-4">
                <p className="text-yellow-300 text-sm font-bold">Savings:</p>
                <p className="text-gray-300 text-sm">$4,800 → $29 = $4,771 saved!</p>
              </div>
            </div>

            {/* Success Story 2 */}
            <div className="bg-gradient-to-br from-green-800/30 to-green-900/30 rounded-2xl p-8 border border-green-500/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  M
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Mike R.</h3>
                  <div className="text-green-400 text-sm">Anger Management Graduate</div>
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                &quot;My anger management class cost $500 and took 12 weeks. 
                I learned more about controlling my rage from destroying one mouse 
                than I did from all those group sessions.&quot;
              </p>
              <div className="bg-green-900/50 rounded-lg p-4">
                <p className="text-green-300 text-sm font-bold">Savings:</p>
                <p className="text-gray-300 text-sm">$500 → $19 = $481 saved!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-900/50 to-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-red-800 to-red-900 rounded-2xl p-12 border border-red-500/30">
            <h2 className="text-4xl font-bold text-white mb-6">
              ⚠️ IMPORTANT DISCLAIMER
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              While our products are therapeutic, they are NOT a replacement for professional mental health care. 
              If you&apos;re experiencing serious mental health issues, please seek professional help.
            </p>
            <div className="bg-red-900/50 rounded-lg p-6">
              <p className="text-red-300 font-bold mb-4">When to See a Real Therapist:</p>
              <ul className="text-gray-300 text-left space-y-2">
                <li>• If you&apos;re thinking about hurting yourself or others</li>
                <li>• If your rage is affecting your relationships</li>
                <li>• If you&apos;re destroying things that aren&apos;t ours</li>
                <li>• If you&apos;re spending more on keyboards than rent</li>
              </ul>
            </div>
            <p className="text-sm text-gray-400 mt-6">
              But seriously, our products are great for stress relief and much cheaper than therapy! 😄
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Start Your Rage Therapy Journey! 🚀
            </h2>
            <p className="text-xl text-white mb-8">
              Skip the expensive therapy sessions and start destroying your problems today! 
              Your wallet (and your stress levels) will thank you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/products"
                className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Shop Therapy Products 💥
              </a>
              <a 
                href="/reviews"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300"
              >
                Read Success Stories 📖
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
