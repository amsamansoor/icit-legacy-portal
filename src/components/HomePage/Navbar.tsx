import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const Navbar: React.FC = () => {
  const { user, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-[100] py-3">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 z-[110]">
          <div className="w-10 h-10 bg-[#1E2124] rounded-full flex items-center justify-center">
            <div className="w-5 h-5 bg-[#FF6B35] rounded-full blur-[2px]"></div>
          </div>
          <span className="text-xl font-bold text-[#1E2124]">ICIT Legacy</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-10 font-medium text-gray-500">
          <Link to="/" className="hover:text-[#FF6B35] transition-colors">Home</Link>
          <a href="#projects" className="hover:text-[#FF6B35] transition-colors">Projects</a>
          <a href="#alumni" className="hover:text-[#FF6B35] transition-colors">Alumni</a>
          <a href="#updates" className="hover:text-[#FF6B35] transition-colors">Updates</a>
        </nav>

        {/* MOBILE ICON */}
        <button className="lg:hidden z-[110] p-2 text-[#1E2124]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
          )}
        </button>

        {/* --- MOBILE DROPDOWN MENU --- */}
        {/* 'inset-0' ko hata kar 'top-full' kiya taake ye navbar ke niche se shuru ho aur height auto rahe */}
        <div className={`absolute top-full left-0 right-0 bg-white shadow-2xl border-b border-gray-100 transition-all duration-300 ease-in-out z-[105] lg:hidden 
          ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-4 opacity-0 invisible pointer-events-none'}`}>
            
            <nav className="flex flex-col py-6 px-10 gap-1">
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)} 
                className="text-lg font-bold text-[#1E2124] active:text-[#FF6B35] py-4 border-b border-gray-50"
              >
                Home
              </Link>
              <a 
                href="#projects" 
                onClick={() => setIsOpen(false)} 
                className="text-lg font-bold text-[#1E2124] active:text-[#FF6B35] py-4 border-b border-gray-50"
              >
                Projects
              </a>
              <a 
                href="#alumni" 
                onClick={() => setIsOpen(false)} 
                className="text-lg font-bold text-[#1E2124] active:text-[#FF6B35] py-4 border-b border-gray-50"
              >
                Alumni
              </a>
              <a 
                href="#updates" 
                onClick={() => setIsOpen(false)} 
                className="text-lg font-bold text-[#1E2124] active:text-[#FF6B35] py-4 border-b border-gray-50"
              >
                Updates
              </a>
              
              <div className="mt-6">
                {!user ? (
                  <Link 
                    to="/login" 
                    onClick={() => setIsOpen(false)} 
                    className="w-full block text-center bg-[#FF6B35] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-orange-100"
                  >
                    Login / Portal Access
                  </Link>
                ) : (
                  <button 
                    onClick={() => { logout(); setIsOpen(false); }} 
                    className="w-full text-red-500 font-bold py-4 border border-red-500/10 bg-red-50 rounded-2xl"
                  >
                    Logout
                  </button>
                )}
              </div>
            </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar