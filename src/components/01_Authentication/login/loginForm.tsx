import React, { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { Link } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react' 
import toast from 'react-hot-toast' // Import the toast

const Login: React.FC = () => {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  // Sahi Submit Function
  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // 1. Button click hote hi pehla message
    toast.loading("Logging you in...", { id: 'login-toast' });

    try {
      // 2. Login Logic
      await login({ name: email.split('@')[0], role: 'student' });
      
      // 3. Success Message
      toast.success('Welcome Back! Login Successful.', {
        id: 'login-toast', // Purane loading toast ko replace kar dega
        icon: '👋',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });

    } catch (error) {
      // 4. Error Message
      toast.error('Login Failed! Please check your credentials.', {
        id: 'login-toast',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#E7E9ED] px-6 py-20">
      <div className="w-full max-w-[460px] bg-[#1E2124] p-10 md:p-14 rounded-[3rem] shadow-2xl relative z-10">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-white mb-2">Login</h2>
          <p className="text-gray-400 text-sm">Enter your details to continue</p>
        </div>

        <form onSubmit={submit} className="space-y-6" autoComplete="off">
          <div className="space-y-2">
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#FF6B35] focus:bg-white/10 transition-all text-white placeholder:text-gray-600 outline-none"
              required
            />
          </div>

          <div className="space-y-2">
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" 
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#FF6B35] focus:bg-white/10 transition-all text-white placeholder:text-gray-600 outline-none"
                required
              />
              <div className="text-right mt-2">
                <Link to="/reset-password" style={{ color: '#FF6B00', fontSize: '14px', textDecoration: 'underline' }}>
                  Forgot Password
                </Link>
              </div>
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-[40px] text-gray-500 hover:text-gray-300 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-start gap-3 px-1">
            <input type="checkbox" className="mt-1 w-4 h-4 accent-[#FF6B35]" id="terms" required />
            <label htmlFor="terms" className="text-[11px] leading-snug text-gray-400">
              Agree to Privacy Policy and Terms of service.
            </label>
          </div>

          <button 
            type="submit" 
            className="w-full py-4 mt-2 bg-[#FF6B35] text-white rounded-2xl font-bold text-lg hover:bg-[#e85a24] transition-all transform active:scale-95"
          >
            Continue
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Don't have an account? <Link to="/signup" className="text-[#FF6B35] font-bold ml-1 hover:underline">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login