import React from 'react'
import { Link } from 'react-router-dom'

const Hero: React.FC = () => {
    return (
        <section className="w-screen -ml-[calc((100vw-100%)/2)] relative overflow-hidden py-4">

            <div className="max-w-[1400px] mx-4 md:mx-auto bg-ps-dark rounded-[2.5rem] relative overflow-hidden shadow-2xl">

                {/* Background Overlay (Image effect jo humne discuss kiya tha) */}
                <div
                    className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: "url('/it-relatedBgImage.jpg')",
                        backgroundSize: 'cover',
                        mixBlendMode: 'overlay'
                    }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-br from-ps-accent/10 via-transparent to-ps-accent/5"></div>

                <div className="relative z-10 min-h-[500px] md:min-h-[600px] py-16 px-8 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16">

                    <div className="max-w-2xl flex-shrink-0">
                        {/* 1. ICIT Legacy ka color Orange (ps-accent) kiya */}
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-ps-text-light leading-tight">
                            Next-Gen <br />
                            <span className="text-ps-accent">ICIT Legacy</span> Portal
                        </h1>

                        <p className="text-ps-text-muted mb-8 text-lg leading-relaxed">
                            Centralized access to projects, alumni records and departmental archives — secure, searchable, and future-ready.
                        </p>

                        <div className="flex gap-4">
                            {/* Explore Projects Button */}
                            <Link
                                to="#projects"
                                className="px-8 py-4 bg-ps-accent text-white rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-orange-600 hover:text-white shadow-lg shadow-ps-accent/20 text-center"
                            >
                                Explore Projects
                            </Link>

                            {/* Login / Signup Button */}
                            <Link
                                to="/login"
                                className="px-8 py-4 bg-ps-accent text-white rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:bg-orange-600 hover:text-white shadow-lg shadow-ps-accent/20 text-center"
                            >
                                Login / Signup
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1 w-full flex justify-end">
                        <img
                            src="/assets/heroImages/icit-heroImage.jpg"
                            alt="ICIT Portal"
                            className="w-full max-w-2xl h-96 md:h-[450px] rounded-[2rem] object-cover shadow-2xl border border-white/5 transition-transform duration-500 hover:scale-[1.02]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero