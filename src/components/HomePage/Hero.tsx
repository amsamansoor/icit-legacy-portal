import React from 'react'
import { Link } from 'react-router-dom'

const Hero: React.FC = () => {
    return (
        <section className="w-screen -ml-[calc((100vw-100%)/2)] relative overflow-hidden py-2 md:py-4">

            <div className="max-w-[1400px] mx-4 md:mx-auto bg-[#1E2124] rounded-[1.5rem] md:rounded-[2.5rem] relative overflow-hidden shadow-2xl">

                {/* --- AAPKA MATLOOBA BACKGROUND (Same as Last Image) --- */}
                {/* 1. Global Network Image Layer */}
                <div
                    className="absolute inset-0 z-0 opacity-40 pointer-events-none"
                    style={{
                        // Yahan aap wahi connectivity wali image use karein
                        backgroundImage: "url('https://img.freepik.com/free-vector/global-network-connection-background-abstract-technology-dots-lines-digital-futuristic-design-vector-illustration_1150-55171.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'right center',
                        mixBlendMode: 'screen'
                    }}
                ></div>

                {/* 2. Gradient Overlay for Depth (Takay text saaf nazar aaye) */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E2124] via-[#1E2124]/80 to-transparent z-1"></div>
                
                {/* 3. Subtle Glow Effect */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF6B35]/10 blur-[120px] rounded-full"></div>

                <div className="relative z-10 min-h-fit md:min-h-[600px] py-12 md:py-20 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16">

                    <div className="max-w-2xl flex-shrink-0 text-center md:text-left">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-6 text-white leading-tight">
                            ICIT Digital Legacy <br />
                            <span className="text-[#FF6B35]">& FYP Portal</span>
                        </h1>

                        <p className="text-gray-400 mb-10 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                            Empowering the next generation of IT professionals with a centralized hub for project archives and alumni connectivity.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Link
                                to="#projects"
                                className="px-8 py-4 bg-[#FF6B35] text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-orange-600 shadow-lg shadow-orange-500/20 text-center"
                            >
                                Explore Projects
                            </Link>

                            <Link
                                to="/learn-more"
                                className="px-8 py-4 border-2 border-white/20 text-white rounded-full font-bold text-lg transition-all duration-300 hover:bg-white/10 text-center"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Right side par agar aap mazeed koi graphic dikhana chahein */}
                    <div className="hidden lg:flex flex-1 justify-end items-center">
                         {/* Yahan aap koi 3D icon ya floating card bhi laga sakti hain */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero