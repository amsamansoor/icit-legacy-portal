import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const Navbar: React.FC = () => {
  const { user, logout } = useAuth()

  return (
    // Background White, Border Bottom, and Higher Padding for that spacious look
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 py-3">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* 1. LOGO SECTION (Exact Left Side) */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#1E2124] rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
            {/* Orange Sun-like Icon from Pic */}
            <div className="w-5 h-5 bg-[#FF6B35] rounded-full blur-[2px]"></div>
          </div>
          <span className="text-xl font-bold text-[#1E2124] tracking-tight">ICIT Legacy</span>
        </Link>

        {/* 2. NAV LINKS (Exact Center & Grey Color) */}
        <nav className="hidden lg:flex items-center gap-10 font-medium text-gray-500">
          <Link to="/" className="hover:text-[#1E2124] transition-colors">Home</Link>
          <a href="#projects" className="hover:text-[#1E2124] transition-colors">Projects</a>
          <a href="#alumni" className="hover:text-[#1E2124] transition-colors">Alumni</a>
          <a href="#updates" className="hover:text-[#1E2124] transition-colors">Updates</a>
        </nav>

        {/* 3. AUTH BUTTONS (Exact Right Side Orange Pill) */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-gray-700">{user.name}</span>
              <button 
                onClick={logout} 
                className="px-5 py-2 border border-gray-200 rounded-full text-sm font-bold text-gray-600 hover:bg-gray-50 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="px-8 py-3 bg-[#FF6B35] text-white rounded-full font-bold text-sm md:text-base shadow-lg shadow-orange-600/20 hover:bg-[#e85a20] transition-all transform hover:scale-105 whitespace-nowrap"
            >
              Login / Portal Access
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar