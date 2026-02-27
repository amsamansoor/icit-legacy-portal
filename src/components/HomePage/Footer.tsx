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
    <footer className="bg-ps-dark text-ps-text-light mt-16 border-t border-white/5">
      <div className="container mx-auto px-6 py-12">
        {/* Mobile par text-center aur desktop par text-left (md:text-left) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 mb-12 text-center md:text-left">
          
          {/* Address Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl md:text-2xl font-bold mb-5 text-ps-accent">Address</h3>
            <div className="space-y-4 text-ps-text-light/90">
              <p className="flex flex-col md:flex-row items-center md:items-start gap-3 text-base md:text-lg">
                <MapPin size={22} className="flex-shrink-0 text-ps-accent" />
                <span>ICIT Department<br />Gomal University, DIK<br />Pakistan</span>
              </p>
              <p className="flex flex-col md:flex-row items-center md:items-start gap-3 text-base md:text-lg">
                <Phone size={20} className="text-ps-accent" />
                <span>03006084881</span>
              </p>
              <p className="flex flex-col md:flex-row items-center md:items-start gap-3 text-base md:text-lg overflow-hidden">
                <Mail size={20} className="text-ps-accent" />
                <span className="break-all">amsamansoor573@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-5 text-ps-accent">Quick Links</h3>
            <ul className="space-y-3 text-base md:text-lg">
              <li><a href="/" className="hover:text-ps-accent transition">Home</a></li>
              <li><a href="#projects" className="hover:text-ps-accent transition">About</a></li>
              <li><a href="#alumni" className="hover:text-ps-accent transition">Projects</a></li>
              <li><a href="#updates" className="hover:text-ps-accent transition">Features</a></li>
              <li><a href="#updates" className="hover:text-ps-accent transition">Testimonials</a></li>
              
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-5 text-ps-accent">Contact Us</h3>
            <p className="mb-4 text-base md:text-lg">Have questions? We'd love to hear from you.</p>
            <div className="space-y-2">
               <a href="mailto:amsamansoor573@gmail.com" className="block text-ps-accent underline hover:opacity-80 transition break-all">
                amsamansoor573@gmail.com
              </a>
              <a href="tel:+923006084881" className="block text-ps-accent underline hover:opacity-80 transition">03006084881</a>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl md:text-2xl font-bold mb-5 text-ps-accent">Subscribe</h3>
            <p className="mb-6 text-base md:text-lg">Stay updated with our latest project archives.</p>
            <form onSubmit={handleSubscribe} className="w-full max-w-sm">
              {/* Mobile par flex-col kiya hai takay button niche aa jaye agar jagah kam ho */}
              <div className="flex flex-col sm:flex-row rounded-2xl sm:rounded-full overflow-hidden border border-white/10 group focus-within:border-ps-accent/50 transition">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-5 py-3 bg-white/5 text-white focus:outline-none placeholder:text-gray-500"
                />
                <button type="submit" className="px-6 py-3 bg-ps-accent text-white font-bold hover:bg-orange-600 transition">
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm md:text-base text-ps-text-light/50">
            &copy; {new Date().getFullYear()} ICIT Legacy Portal. Gomal University.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer