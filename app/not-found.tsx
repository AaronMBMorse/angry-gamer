import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-black flex items-center justify-center overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-orange-500 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-yellow-500 rounded-full opacity-20 animate-pulse"></div>
      </div>

      {/* Floating Emojis */}
      <div className="absolute top-1/4 left-10 text-6xl animate-bounce">💥</div>
      <div className="absolute top-1/3 right-10 text-5xl animate-bounce delay-1000">🔥</div>
      <div className="absolute bottom-1/4 left-20 text-4xl animate-bounce delay-500">⚡</div>
      <div className="absolute bottom-1/3 right-20 text-5xl animate-bounce delay-700">💀</div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Error Message */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 mb-6 animate-pulse">
            404
          </h1>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            OOPS! YOU BROKE IT! 🔥
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Looks like you&apos;re so angry you broke the internet!
          </p>
        </div>

        {/* Funny Messages */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-600/20 mb-8">
          <div className="text-6xl mb-4">😤</div>
          <h3 className="text-2xl font-bold text-red-400 mb-4">
            RAGE LEVEL: MAXIMUM
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            This page doesn&apos;t exist, but don&apos;t worry - we have plenty of things you CAN break!
          </p>
          
          {/* Funny Disclaimers */}
          <div className="text-sm text-gray-400 space-y-2">
            <p>• This error is NOT covered under our &quot;Rage Damage&quot; warranty</p>
            <p>• &quot;I didn&apos;t mean to break the internet&quot; is not a valid excuse</p>
            <p>• Try refreshing or check if you&apos;re still connected to WiFi</p>
            <p>• If this keeps happening, maybe it&apos;s time to buy our Rage Keyboard</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link 
            href="/"
            className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/50"
          >
            🏠 GO HOME (SAFELY)
          </Link>
          <Link 
            href="/#products"
            className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300"
          >
            🛒 BUY SOMETHING TO BREAK
          </Link>
        </div>

        {/* Additional Funny Content */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Pro tip: Our products are designed to be broken, but our website isn&apos;t!
          </p>
          <div className="flex justify-center space-x-4 text-2xl">
            <span className="animate-bounce">⌨️</span>
            <span className="animate-bounce delay-100">🎮</span>
            <span className="animate-bounce delay-200">🖱️</span>
            <span className="animate-bounce delay-300">💥</span>
          </div>
        </div>
      </div>
    </div>
  )
}
