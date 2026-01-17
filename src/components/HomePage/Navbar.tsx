import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-[100] py-3">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* 1. LOGO (Left Side) */}
        <Link to="/" className="flex items-center gap-3 z-[110] flex-shrink-0">
          <div className="w-10 h-10 bg-[#1E2124] rounded-full flex items-center justify-center">
            <div className="w-5 h-5 bg-[#FF6B35] rounded-full blur-[2px]"></div>
          </div>
          <span className="text-xl font-bold text-[#1E2124]">ICIT Legacy</span>
        </Link>

        {/* 2. DESKTOP NAV (Center - Desktop par center karne ke liye) */}
        <nav className="hidden lg:flex items-center gap-10 font-medium text-gray-500 absolute left-1/2 -translate-x-1/2">
          <Link to="/" className="hover:text-[#FF6B35] transition-colors">Home</Link>
          <a href="#projects" className="hover:text-[#FF6B35] transition-colors">Projects</a>
          <a href="#alumni" className="hover:text-[#FF6B35] transition-colors">Alumni</a>
          <a href="#updates" className="hover:text-[#FF6B35] transition-colors">Updates</a>
        </nav>

        {/* 3. RIGHT SIDE (Login Button & Mobile Icon) */}
        <div className="flex items-center gap-4">
          {/* Desktop Login Button - Fixed Hover Text Color */}
          <Link 
            to="/login" 
            className="hidden lg:block px-6 py-2.5 bg-[#FF6B35] text-white rounded-full font-bold text-sm transition-all duration-300 hover:bg-[#e85a24] hover:text-white hover:scale-105 shadow-md hover:shadow-lg text-center"
          >
            Login / Signup
          </Link>

          {/* Hamburger Icon (Mobile) */}
          <button 
            className="lg:hidden z-[110] p-2 text-[#1E2124] hover:bg-gray-100 rounded-lg transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* 4. MOBILE DROPDOWN (Pehle wala logic) */}
        <div className={`absolute top-full left-0 right-0 bg-white shadow-2xl border-b border-gray-100 transition-all duration-300 ease-in-out lg:hidden 
          ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-4 opacity-0 invisible pointer-events-none'}`}>
            <nav className="flex flex-col py-6 px-10 gap-1">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-bold text-[#1E2124] py-4 border-b border-gray-50">Home</Link>
              <a href="#projects" onClick={() => setIsOpen(false)} className="text-lg font-bold text-[#1E2124] py-4 border-b border-gray-50">Projects</a>
              <a href="#alumni" onClick={() => setIsOpen(false)} className="text-lg font-bold text-[#1E2124] py-4 border-b border-gray-50">Alumni</a>
              <a href="#updates" onClick={() => setIsOpen(false)} className="text-lg font-bold text-[#1E2124] py-4 border-b border-gray-50">Updates</a>
              <Link to="/login" onClick={() => setIsOpen(false)} className="mt-6 bg-[#FF6B35] text-white py-4 rounded-2xl font-bold text-center text-lg">
                Login / Portal Access
              </Link>
            </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar