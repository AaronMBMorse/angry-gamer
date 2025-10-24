'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Angry Gamer Error:', error)
  }, [error])

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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl animate-spin">🌪️</div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Error Message */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 mb-6 animate-pulse">
            ERROR
          </h1>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            SOMETHING WENT BOOM! 💥
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Looks like you&apos;re so angry you broke our website!
          </p>
        </div>

        {/* Error Details */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-600/20 mb-8">
          <div className="text-6xl mb-4">😡</div>
          <h3 className="text-2xl font-bold text-red-400 mb-4">
            RAGE LEVEL: CRITICAL
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            Our servers couldn&apos;t handle your rage! Don&apos;t worry, this happens to the best of us.
          </p>
          
          {/* Error Code Display */}
          <div className="bg-black/50 rounded-lg p-4 mb-6 font-mono text-sm text-gray-400">
            <div className="text-red-400 mb-2">Error Code: RAGE_OVERFLOW</div>
            <div className="text-yellow-400 mb-2">Status: Server needs therapy</div>
            <div className="text-green-400">Suggestion: Try our Rage Controller instead</div>
          </div>
          
          {/* Funny Disclaimers */}
          <div className="text-sm text-gray-400 space-y-2">
            <p>• This error is covered under our &quot;Rage Damage&quot; warranty</p>
            <p>• &quot;I didn&apos;t mean to break the server&quot; is totally valid here</p>
            <p>• Our developers are probably crying in the corner</p>
            <p>• At least you didn&apos;t break your keyboard this time!</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={reset}
            className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-bold py-4 px-8 rounded-lg text-xl transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/50"
          >
            🔄 TRY AGAIN (CALMLY)
          </button>
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
            Remember: It&apos;s not a bug, it&apos;s a feature! (Just like our products)
          </p>
          <div className="flex justify-center space-x-4 text-2xl">
            <span className="animate-bounce">💻</span>
            <span className="animate-bounce delay-100">🔧</span>
            <span className="animate-bounce delay-200">💥</span>
            <span className="animate-bounce delay-300">😅</span>
          </div>
        </div>

        {/* Debug Info (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 bg-red-900/20 border border-red-500/30 rounded-lg p-4">
            <h4 className="text-red-400 font-bold mb-2">Debug Info (Development Only):</h4>
            <pre className="text-xs text-gray-300 overflow-auto">
              {error.message}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}
