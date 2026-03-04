import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-[100] py-3">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* LOGO SECTION - Exact Path according to your Folder Structure */}
        <Link to="/" className="flex items-center gap-3 z-[110] flex-shrink-0" onClick={() => setIsOpen(false)}>
          <div className="logo-container">
            <img 
              src="/assets/heroImages/image.jpg" 
              alt="ICIT Legacy Logo" 
              className="object-contain"
              style={{ height: '90px', width: 'auto' }} 
            />
          </div>
          <span className="text-xl font-bold text-[#1E2124]">ICIT Legacy</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-10 font-medium text-gray-500 absolute left-1/2 -translate-x-1/2">
          <Link to="/" className="hover:text-[#FF6B35] transition-colors">Home</Link>
          <Link to="/about" className="hover:text-[#FF6B35] transition-colors">About</Link>
          <a href="#projects" className="hover:text-[#FF6B35] transition-colors">Projects</a>
          <a href="#features" className="hover:text-[#FF6B35] transition-colors">Features</a>
          <a href="#testimonials" className="hover:text-[#FF6B35] transition-colors">Testimonials</a>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          <Link 
            to="/login" 
            className="hidden lg:inline-flex px-5 py-2.5 bg-white border border-gray-200 text-[#1E2124] rounded-full font-bold text-sm transition-all duration-300 hover:bg-gray-50"
          >
            Login
          </Link>

          <Link 
            to="/signup" 
            className="hidden lg:inline-flex px-6 py-2.5 bg-[#FF6B35] text-white rounded-full font-bold text-sm transition-all duration-300 hover:bg-[#e85a24] hover:scale-105 shadow-md hover:shadow-lg text-center"
          >
            Sign Up
          </Link>

          {/* Hamburger Menu */}
          <button 
            className="lg:hidden z-[110] p-2 text-[#1E2124] hover:bg-gray-100 rounded-lg transition-colors" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-black/40 z-[105] transition-opacity ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setIsOpen(false)}>
          <div className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl p-8 transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"}`} onClick={(e) => e.stopPropagation()}>
            <nav className="flex flex-col">
              <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-bold text-[#1E2124] py-4 border-b border-gray-50">Home</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg font-bold text-[#1E2124] py-4 border-b border-gray-50">About</Link>
              <a href="#projects" onClick={() => setIsOpen(false)} className="text-lg font-bold text-[#1E2124] py-4 border-b border-gray-50">Projects</a>
              <a href="#features" onClick={() => setIsOpen(false)} className="text-lg font-bold text-[#1E2124] py-4 border-b border-gray-50">Features</a>
              <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-lg font-bold text-[#1E2124] py-4 border-b border-gray-50">Testimonials</a>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Link to="/login" onClick={() => setIsOpen(false)} className="bg-white border border-gray-200 text-[#1E2124] py-3 rounded-2xl font-bold text-center">
                  Login
                </Link>
                <Link to="/signup" onClick={() => setIsOpen(false)} className="bg-[#FF6B35] text-white py-3 rounded-2xl font-bold text-center">
                  Sign Up
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar