import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react' 

const Login: React.FC = () => {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    login({ name: email.split('@')[0], role: 'student' })
  }

  return (
    /* Humne 'fixed inset-0' hata diya hai aur 'pt-24' (Padding Top) add ki hai taake content Navbar ke niche na dabe */
    <div className="min-h-screen w-full flex items-center justify-center bg-[#E7E9ED] px-6 py-20">
      
      {/* Login Card */}
      <div className="w-full max-w-[460px] bg-[#1E2124] p-10 md:p-14 rounded-[3rem] shadow-2xl relative z-10">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-white mb-2">Login</h2>
          <p className="text-gray-400 text-sm">Enter your details to continue</p>
        </div>

        <form onSubmit={submit} className="space-y-6" autoComplete="off">
          <input className="hidden" type="text" name="fake-email" />
          <input className="hidden" type="password" name="fake-password" />
          
          {/* Email Input */}
          <div className="space-y-2">
            <input 
              type="email"
              name="user-email-unique"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              autoComplete="new-password"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#FF6B35] focus:bg-white/10 transition-all text-white placeholder:text-gray-600 outline-none"
              required
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                name="user-pass-unique"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" 
                autoComplete="new-password"
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#FF6B35] focus:bg-white/10 transition-all text-white placeholder:text-gray-600 outline-none"
                required
              />
              
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Checkbox Section */}
          <div className="flex items-start gap-3 px-1">
            <input 
              type="checkbox" 
              className="mt-1 w-4 h-4 accent-[#FF6B35] border-gray-600 rounded cursor-pointer" 
              id="terms" 
              required
            />
            <label htmlFor="terms" className="text-[11px] leading-snug text-gray-400 cursor-pointer">
              By checking the box and tapping continue, you acknowledge that you have read the 
              <span className="text-white font-semibold cursor-pointer hover:underline"> privacy Policy </span> 
              and agree to the <span className="text-white font-semibold cursor-pointer hover:underline"> Terms of service</span>.
            </label>
          </div>

          <button 
            type="submit" 
            className="w-full py-4 mt-2 bg-[#FF6B35] text-white rounded-2xl font-bold text-lg shadow-lg shadow-orange-900/20 hover:bg-[#e85a24] transition-all transform active:scale-95"
          >
            Continue
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Don't have an account? 
            <Link to="/signup" className="text-[#FF6B35] font-bold ml-1 hover:underline">Signup</Link>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Login