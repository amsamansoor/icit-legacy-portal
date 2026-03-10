import React, { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock } from 'lucide-react' 
import toast from 'react-hot-toast'

const Login: React.FC = () => {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    toast.loading("Logging you in...", { id: 'login-toast' });

    try {
      await login({ name: email.split('@')[0], role: 'student' });
      toast.success('Welcome Back! Login Successful.', {
        id: 'login-toast',
        icon: '👋',
        style: { borderRadius: '10px', background: '#333', color: '#fff' },
      });
    } catch (error) {
      toast.error('Login Failed!', { id: 'login-toast' });
    }
  }

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#E7E9ED] p-4 overflow-hidden font-sans">
      
      {/* Card width barha di (max-w-[450px]) aur vertical padding kam kar di (py-6) */}
      <div className="w-full max-w-[450px] bg-[#1E2124] px-8 md:px-10 py-6 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/5 animate-in fade-in zoom-in duration-500 relative">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Login</h2>
          <div className="w-full border-t border-white/5 mb-2"></div>
          <p className="text-gray-500 text-[12px] uppercase tracking-widest font-medium">Welcome to Portal</p>
        </div>

        <form onSubmit={submit} className="space-y-4" autoComplete="off">
          
          {/* EMAIL FIELD */}
          <div className="relative group">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#FF6B35] transition-colors">
              <Mail size={18} />
            </div>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address" 
              className="w-full pl-14 pr-6 py-3.5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#FF6B35] focus:bg-white/10 transition-all text-sm text-white placeholder:text-gray-600 outline-none"
              required
            />
          </div>

          {/* PASSWORD FIELD */}
          <div className="relative group">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#FF6B35] transition-colors">
              <Lock size={18} />
            </div>
            <input 
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password" 
              className="w-full pl-14 pr-12 py-3.5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#FF6B35] focus:bg-white/10 transition-all text-sm text-white placeholder:text-gray-600 outline-none"
              required
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-600 hover:text-[#FF6B35] transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* FORGOT PASSWORD - Line attached (no offset) */}
          <div className="flex justify-end px-1">
            <Link to="/reset-password" title="Reset Password" className="text-[12px] font-bold text-[#FF6B35] hover:text-[#ff8554] transition-colors underline decoration-1">
              Forgot Password
            </Link>
          </div>

          {/* TERMS CHECKBOX */}
          <div className="flex items-center gap-3 px-2">
            <input type="checkbox" className="w-4 h-4 accent-[#FF6B35] bg-transparent border-white/10 rounded cursor-pointer" id="terms" required />
            <label htmlFor="terms" className="text-[10px] text-gray-500 cursor-pointer uppercase tracking-tighter">
              I agree to the Terms & Policy
            </label>
          </div>

          {/* LOGIN BUTTON */}
          <button 
            type="submit" 
            className="w-full py-3.5 bg-[#FF6B35] text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] hover:bg-[#e85a24] shadow-lg shadow-orange-900/20 transition-all transform active:scale-[0.97]"
          >
            Continue
          </button>
        </form>

        {/* SIGNUP LINK */}
        <div className="mt-6 text-center border-t border-white/5 pt-4">
          <p className="text-gray-500 text-xs font-medium uppercase tracking-widest">
            New here? <Link to="/signup" className="text-[#FF6B35] font-bold ml-1 hover:underline">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login