import React, { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, Mail, Lock, ArrowRight, ChevronLeft, ShieldCheck } from 'lucide-react' 
import toast from 'react-hot-toast'

const Login: React.FC = () => {
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showForm, setShowForm] = useState(false)
  
  const [view, setView] = useState<'login' | 'forgot' | 'reset'>('login')

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    toast.loading("Logging you in...", { id: 'login-toast' });
    try {
      await login({ name: email.split('@')[0], role: 'student' });
      toast.success('Welcome Back!', { id: 'login-toast' });
    } catch (error) {
      toast.error('Login Failed!', { id: 'login-toast' });
    }
  }

  return (
    <div className="h-screen w-full flex overflow-hidden font-sans relative bg-black">
      
      {/* 1. BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
       style={{ backgroundImage: "url('./assets/heroImages/im2.jpeg" }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </div>

      {/* 2. LEFT SIDE CONTENT */}
      <div className="relative w-1/2 h-full flex flex-col justify-center px-12 lg:px-24 text-white z-10">
        <div className="flex flex-col">
          
    {/* MAIN HEADING - Aik hi line mein flow ke sath */}
<h1 className="text-4xl lg:text-4xl font-serif uppercase tracking-tight text-white">
  Welcome 
  {/* 'ml-3' sirf thora sa space dene ke liye hai takay words jude na lagein */}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#f98e64] ml-3">
    Back
  </span>
</h1>

<p className="text-gray-300 text-sm max-w-sm mt-6 leading-relaxed font-light italic opacity-70">
  "Please login using your personal information to stay connected with us." 
</p>
          
          
        </div>

        {!showForm && (
          <button 
            onClick={() => { setShowForm(true); setView('login'); }}
            // Small Login Button
            className="w-fit mt-6 flex items-center gap-2 px-6 py-2.5 bg-[#FF6B35] text-white rounded-full font-bold uppercase tracking-widest text-[9px] hover:bg-[#e85a24] hover:shadow-[0_0_20px_rgba(255,107,53,0.4)] transition-all transform hover:-translate-y-1"
          >
            Login <ArrowRight size={12} />
          </button>
        )}
      </div>

      {/* 3. RIGHT SIDE: FORM SECTION */}
      <div className="w-1/2 h-full flex items-center justify-center p-4 relative z-10">
        {showForm ? (
          <div className="w-full max-w-[370px] bg-black/30 backdrop-blur-xl p-7 rounded-[2.5rem] border border-white/10 shadow-2xl animate-in fade-in zoom-in duration-500 overflow-hidden">
            
            {view === 'login' && (
              <div className="flex flex-col">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-black text-white uppercase tracking-tight">Login</h2>
                  <p className="text-gray-400 text-[9px] uppercase tracking-[0.2em] mt-2">Secure Authentication</p>
                </div>

                <form onSubmit={submit} className="space-y-3">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input type="email" placeholder="Email Address" className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white text-xs focus:outline-none focus:border-[#FF6B35] focus:bg-white/10 transition-all" required />
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full pl-11 pr-10 py-3.5 bg-white/5 border border-white/10 rounded-2xl text-white text-xs focus:outline-none focus:border-[#FF6B35] focus:bg-white/10 transition-all" required />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  <div className="flex justify-end pr-1">
                    <button type="button" onClick={() => setView('forgot')} className="text-[9px] font-bold text-[#FF6B35] uppercase hover:text-white transition-colors">Forgot Password</button>
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-[#FF6B35] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#e85a24] shadow-lg transition-all active:scale-95">Sign In</button>
                </form>
              </div>
            )}

            {view === 'forgot' && (
              <div className="flex flex-col">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold text-white uppercase tracking-tight">Forgot Password</h2>
                  <div className="w-full h-[1px] bg-white/10 my-3"></div>
                  <p className="text-gray-400 text-[10px] px-2 leading-relaxed italic">Enter your verified email address to receive a reset link.</p>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); setView('reset'); }} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FF6B35]" size={16} />
                    <input type="email" placeholder="Verification Email" className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-full text-white text-xs focus:outline-none focus:border-[#FF6B35]" required />
                  </div>
                  <button type="submit" className="w-full py-3.5 bg-[#FF6B35] text-white rounded-full font-black text-[10px] uppercase tracking-widest">Request Link</button>
                </form>
                <button onClick={() => setView('login')} className="mt-5 text-center text-gray-500 text-[9px] uppercase font-bold flex items-center justify-center gap-1 hover:text-white transition-colors">
                  <ChevronLeft size={12} /> Return to login
                </button>
              </div>
            )}

            {view === 'reset' && (
              <div className="flex flex-col">
                <div className="text-center mb-4">
                  <h2 className="text-xl font-black text-white uppercase tracking-tight">Reset Password</h2>
                  <div className="w-full h-[1px] bg-white/10 my-2"></div>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); toast.success("Updated!"); setView('login'); }} className="space-y-2.5">
                  <div>
                    <div className="relative">
                      <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                      <input type="text" placeholder="Enter OTP Code" className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-[11px] focus:border-[#FF6B35] outline-none" />
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                      <input type="password" placeholder="New Password" className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-[11px] focus:border-[#FF6B35] outline-none" required />
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
                      <input type="password" placeholder="Confirm Password" className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-[11px] focus:border-[#FF6B35] outline-none" required />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-3 bg-[#FF6B35] text-white rounded-xl font-black text-[10px] uppercase tracking-widest mt-2 hover:bg-[#e85a24]">Reset</button>
                </form>
              </div>
            )}

            <div className="mt-6 pt-5 border-t border-white/5 text-center">
              <p className="text-gray-500 text-[9px] uppercase tracking-widest">
                New to ICIT? <Link to="/signup" className="text-[#FF6B35] font-black ml-1 hover:underline">Create Account</Link>
              </p>
              <button onClick={() => {setShowForm(false); setView('login');}} className="mt-4 text-[8px] text-gray-600 uppercase tracking-tighter hover:text-white transition-colors">
                ← Close Authentication Panel
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center animate-pulse">
            <p className="text-white/30 uppercase tracking-[0.5em] text-[9px] font-bold">System Online · Waiting for Access</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Login