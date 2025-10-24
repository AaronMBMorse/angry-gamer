'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-black/90 backdrop-blur-md border-b border-red-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">ANGRY GAMER</div>
            <div className="text-xl">🎮</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-white hover:text-red-400 transition-colors font-medium">
              Products
            </Link>
            <Link href="/reviews" className="text-white hover:text-red-400 transition-colors font-medium">
              Reviews
            </Link>
            <Link href="/therapeutic" className="text-white hover:text-red-400 transition-colors font-medium">
              Therapy
            </Link>
            <Link href="/community" className="text-white hover:text-red-400 transition-colors font-medium">
              Community
            </Link>
            <Link href="/disclaimers" className="text-white hover:text-red-400 transition-colors font-medium">
              Disclaimers
            </Link>

            {/* CTA Button */}
            <Link
              href="/products"
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Shop Now 💥
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-red-400 transition-colors p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md rounded-lg mt-2 border border-red-500/20">
              <Link href="/products" className="block px-3 py-2 text-white hover:text-red-400 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Products
              </Link>
              <Link href="/reviews" className="block px-3 py-2 text-white hover:text-red-400 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Reviews
              </Link>
              <Link href="/therapeutic" className="block px-3 py-2 text-white hover:text-red-400 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Therapy
              </Link>
              <Link href="/community" className="block px-3 py-2 text-white hover:text-red-400 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Community
              </Link>
              <Link href="/disclaimers" className="block px-3 py-2 text-white hover:text-red-400 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>
                Disclaimers
              </Link>
              <Link
                href="/products"
                className="block px-3 py-2 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-bold rounded-lg transition-all duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop Now 💥
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
