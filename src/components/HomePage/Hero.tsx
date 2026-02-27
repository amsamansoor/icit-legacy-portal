

import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../../assets/heroImages/icit-heroImage2.jpg'

const Hero: React.FC = () => {
  const bgRef = useRef<HTMLDivElement | null>(null)

  // Parallax effect logic
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY * 0.25
      if (bgRef.current) bgRef.current.style.transform = `translateY(${y}px)`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="w-screen -ml-[calc((100vw-100%)/2)] relative overflow-hidden py-2 md:py-4 font-sans">
      <div className="max-w-[1400px] mx-4 md:mx-auto bg-[#1E2124] rounded-[1.5rem] md:rounded-[2.5rem] relative overflow-hidden shadow-2xl">

        {/* Background Parallax Image */}
        <div
          ref={bgRef}
          className="absolute inset-0 z-0 opacity-35 pointer-events-none will-change-transform"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E2124] via-[#1E2124]/80 to-transparent z-[1]" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF6B35]/10 blur-[120px] rounded-full z-[2]" />

        <div className="relative z-10 min-h-fit md:min-h-[560px] py-12 md:py-16 px-8 md:px-14 flex flex-col justify-center">
          
          {/* Main Content Wrapper - Changed to max-w-none to let paragraph spread */}
          <div className="w-full max-w-none">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
              University Academic + FYP Portal (UI Prototype)
            </div>

            {/* Heading: Non-italic, Shadow added, Slightly smaller size */}
            <h1 
              className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight uppercase"
              style={{ textShadow: '4px 4px 15px rgba(0,0,0,0.6)' }}
            >
              ICIT <span className="text-[#FF6B35]">LEGACY</span> PORTAL
            </h1>

            {/* Paragraph: Full width, spread across the page, clean typography */}
            <p className="mt-6 text-white/80 text-lg md:text-xl leading-[1.8] font-light font-Montserrat w-full max-w-none tracking-wide">
              A premium academic management hub tailored for excellence. From real-time GPA tracking and financial overviews 
              to a streamlined Final Year Project (FYP) ecosystem, we provide the tools you need to navigate your senior 
              years with precision and ease across the entire academic landscape of our university.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/login"
                className="px-8 py-3 rounded-2xl bg-[#FF6B35] text-white font-bold shadow-lg hover:bg-[#e85a24] transition-all hover:scale-105 text-center"
              >
                Portal Access
              </Link>

              <a
                href="#projects"
                className="px-8 py-3 rounded-2xl bg-white/5 text-white font-bold border border-white/10 hover:bg-white/10 transition-all text-center backdrop-blur-sm"
              >
                View Featured FYPs
              </a>
            </div>

            {/* Stats: Restored to original small boxes layout */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
              {[
                { k: "Students", v: "10k+" },
                { k: "Semesters", v: "8" },
                { k: "Dashboards", v: "3" },
                { k: "FYP Status", v: "Submit" },
              ].map((s) => (
                <div key={s.k} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-white font-extrabold text-xl">{s.v}</div>
                  <div className="text-white/60 text-xs uppercase tracking-wider">{s.k}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero