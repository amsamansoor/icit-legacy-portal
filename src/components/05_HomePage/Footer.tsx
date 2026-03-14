import React, { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer: React.FC = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Subscribed with ${email}`)
    setEmail('')
  }

  return (
    // 'relative' aur 'overflow-hidden' zaroori hai background image ko control karne ke liye
    <footer className="relative bg-[#1E2124] text-white mt-16 overflow-hidden">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/heroImages/Footer.jpg" // Yahan apni image ka path dein
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-60" // Opacity halke rakhi hai taake text nazar aaye
        />
        {/* Dark Gradient Overlay - Yeh text ko wazay (clear) karega */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E2124]/90 via-[#1E2124]/80 to-[#1E2124]"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 mb-12 text-center md:text-left">
          
          {/* Address Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#FF6B35]">Address</h3>
            <div className="space-y-4 text-gray-300">
              <p className="flex flex-col md:flex-row items-center md:items-start gap-3 text-base md:text-lg">
                <MapPin size={22} className="flex-shrink-0 text-[#FF6B35]" />
                <span>ICIT Department<br />Gomal University, DIK<br />Pakistan</span>
              </p>
              <p className="flex flex-col md:flex-row items-center md:items-start gap-3 text-base md:text-lg">
                <Phone size={20} className="text-[#FF6B35]" />
                <span>03006084881</span>
              </p>
              <p className="flex flex-col md:flex-row items-center md:items-start gap-3 text-base md:text-lg overflow-hidden">
                <Mail size={20} className="text-[#FF6B35]" />
                <span className="break-all text-sm md:text-base">amsamansoor573@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#FF6B35]">Quick Links</h3>
            <ul className="space-y-3 text-base md:text-lg text-gray-300">
              <li><a href="/" className="hover:text-[#FF6B35] transition">Home</a></li>
              <li><a href="#about" className="hover:text-[#FF6B35] transition">About</a></li>
              <li><a href="#projects" className="hover:text-[#FF6B35] transition">Projects</a></li>
              <li><a href="#features" className="hover:text-[#FF6B35] transition">Features</a></li>
              <li><a href="#testimonials" className="hover:text-[#FF6B35] transition">Testimonials</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#FF6B35]">Contact Us</h3>
            <p className="mb-4 text-base md:text-lg text-gray-300 leading-relaxed">Have questions? We'd love to hear from you.</p>
            <div className="space-y-2">
               <a href="mailto:amsamansoor573@gmail.com" className="block text-[#FF6B35] hover:underline transition break-all text-sm md:text-base">
                amsamansoor573@gmail.com
              </a>
              <a href="tel:+923006084881" className="block text-[#FF6B35] hover:underline transition font-semibold">03006084881</a>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#FF6B35]">Subscribe</h3>
            <p className="mb-6 text-base md:text-lg text-gray-300 leading-relaxed">Stay updated with our latest project archives.</p>
            <form onSubmit={handleSubscribe} className="w-full max-w-sm">
              <div className="flex flex-col sm:flex-row rounded-xl overflow-hidden border border-white/10 focus-within:border-[#FF6B35]/50 transition bg-[#1E2124]/50 backdrop-blur-md">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-5 py-3 bg-transparent text-white focus:outline-none placeholder:text-gray-500"
                />
                <button type="submit" className="px-6 py-3 bg-[#FF6B35] text-white font-bold hover:bg-orange-600 transition">
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm md:text-base text-gray-500">
            &copy; {new Date().getFullYear()} ICIT Legacy Portal. Gomal University.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer