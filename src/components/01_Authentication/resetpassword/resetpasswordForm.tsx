import React, { useState } from 'react';
import { Mail, Lock, ShieldCheck } from 'lucide-react';

const PasswordWorkflow = () => {
  // Screen switch karne ke liye state
  const [step, setStep] = useState('forgot'); // 'forgot' ya 'reset'

  return (
    /* BACKGROUND: Light gray-blue contrast ke liye */
    <div className="min-h-screen w-full bg-[#F3F6F9] flex items-center justify-center p-6 font-sans">
      
      {/* MAIN CONTAINER: Square with soft corners */}
      <div className="w-full max-w-[420px] bg-[#1E2124] p-8 rounded-3xl shadow-[0_10px_25px_rgba(0,0,0,0.05)] border border-white animate-in fade-in duration-500">
        
        {step === 'forgot' ? (
          /* --- FORGOT PASSWORD SCREEN --- */
          <div className="animate-in slide-in-from-left-4 duration-500">
            <div className="text-center mb-10">
              <h1 className="text-2xl font-bold text-white mb-2 tracking-tight uppercase">
                Forgot Password
              </h1>
              <br />
              <hr />
              <br />
              <p className="text-gray-400 text-[13px] font-medium leading-relaxed">
                Enter your email to receive a password reset link.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-gray-400 ml-1 uppercase tracking-widest">
                  Email Address
                </label>
                <div className="relative flex items-center">
                  <div className="absolute left-5 text-[#FF6B35]">
                    <Mail size={18} />
                  </div>
                  <input 
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-[#F8FAFC] border border-gray-100 p-4 pl-14 rounded-full text-sm font-bold text-[#1E2124] focus:outline-none focus:border-[#FF6B35] focus:bg-white transition-all placeholder:text--300"
                  />
                </div>
              </div>

              <button 
                onClick={() => setStep('reset')}
                className="w-full bg-[#FF6B35] text-white py-4 rounded-full text-[10px] font-times new roman hover:bg-[#E85A2A] transition-all mt-4 shadow-lg shadow-orange-0 uppercase tracking-widest active:scale-[0.98]"
              >
                Send Reset Link
              </button>
            </div>
          </div>
        ) : (
          /* --- RESET PASSWORD SCREEN (AS PER YOUR IMAGE) --- */
          <div className="animate-in slide-in-from-right-4 duration-500">
            <div className="text-center mb-8 border-b border-gray-100 pb-4">
              <h1 className="text-xl font-bold text-[#d8e1ea] tracking-tight">
                Reset Password
              </h1>
            </div>
            
            <p className="text-gray-400 text-[12px] text-center mb-8">
              Please enter your new password below.
            </p>

            <div className="space-y-5">
              {/* OTP CODE FIELD */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold  text-gray-400 ml-1">OTP Code</label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-gray-400 border-r pr-3 border-gray-100">
                    <ShieldCheck size={16} />
                  </div>
                  <input 
                    type="text"
                    placeholder="Enter OTP Code"
                    className="w-full bg-white border border-gray-200 p-3 pl-14 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] transition-all"
                  />
                </div>
              </div>

              {/* NEW PASSWORD FIELD */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-gray-400 ml-1">New Password </label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-gray-400 border-r pr-3 border-gray-100">
                    <Lock size={16} />
                  </div>
                  <input 
                    type="password"
                    placeholder="••••••••••"
                    className="w-full bg-white border border-gray-200 p-3 pl-14 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] transition-all"
                  />
                </div>
              </div>

              {/* CONFIRM PASSWORD FIELD */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-gray-400 ml-1">Confirm Password</label>
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-gray-400 border-r pr-3 border-gray-100">
                    <Lock size={16} />
                  </div>
                  <input 
                    type="password"
                    placeholder="••••••••••"
                    className="w-full bg-white border border-gray-200 p-3 pl-14 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] transition-all"
                  />
                </div>
              </div>

              <button className="w-full bg-[#FF6B35] text-white
               py-3.5 rounded-lg text-[13px] font-bold hover:bg-[#E85A2A] transition-all mt-4 uppercase tracking-wider">
                Reset 
              </button>
            </div>
          </div>
        )}

     
        </div>

      </div>
  
  );
};

export default PasswordWorkflow;