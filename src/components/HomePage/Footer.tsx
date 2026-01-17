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
    <footer className="bg-ps-dark text-ps-text-light mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 mb-8 items-start">
          {/* Address Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-ps-text-light">Address</h3>
            <div className="space-y-4 text-ps-text-light">
              <p className="flex items-start gap-3 text-lg">
                <MapPin size={22} className="flex-shrink-0 mt-0.5 text-ps-accent" />
                <span>ICIT Department<br />Gomal University, Dera Ismail Khan<br />Pakistan</span>
              </p>
              <p className="flex items-center gap-3 text-lg">
                <Phone size={20} className="text-ps-accent" />
                <span>03006084881</span>
              </p>
              <p className="flex items-center gap-3 text-lg">
                <Mail size={20} className="text-ps-accent" />
                <span className="text-ps-text-light">amsamansoor573@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-ps-text-light">Quick Links</h3>
            <ul className="space-y-3 text-ps-text-light text-lg">
              <li><a href="/" className="text-ps-text-light hover:text-ps-accent transition">Home</a></li>
              <li><a href="#projects" className="text-ps-text-light hover:text-ps-accent transition">Projects</a></li>
              <li><a href="#alumni" className="text-ps-text-light hover:text-ps-accent transition">Alumni</a></li>
              <li><a href="#updates" className="text-ps-text-light hover:text-ps-accent transition">Updates</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-ps-text-light">Contact Us</h3>
            <p className="text-ps-text-light mb-4 text-lg">Have questions or suggestions? We'd love to hear from you.</p>
            <p className="text-ps-text-light mb-2 text-lg">
              <a href="mailto:amsamansoor573@gmail.com" className="text-ps-accent underline hover:text-ps-accent/90 transition">
                amsamansoor573@gmail.com
              </a>
            </p>
            <p className="text-ps-text-light text-lg">Need support?</p>
            <p className="text-ps-text-light text-lg mt-2">
              <a href="tel:+923006084881" className="text-ps-accent underline hover:text-ps-accent/90 transition">03006084881</a>
            </p>
          </div>

          {/* Subscribe Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-ps-text-light">Subscribe Us</h3>
            <p className="text-ps-text-light mb-4 text-lg">Subscribe to our newsletter to get updates about new projects and announcements.</p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex rounded-full overflow-hidden">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 text-ps-text-dark focus:outline-none"
                />
                <button type="submit" className="px-6 py-3 bg-ps-accent text-ps-text-light font-semibold hover:bg-ps-accent/90 transition transform hover:scale-105">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-ps-text-light/20 pt-6 text-center text-ps-text-light/70">
          <p>&copy; 2026 ICIT Legacy Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
