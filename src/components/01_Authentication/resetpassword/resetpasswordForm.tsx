import React, { useState } from 'react';
import { KeyRound, Eye, EyeOff, ArrowLeft } from 'lucide-react';

const ResetPassword = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-[420px] animate-in fade-in duration-700">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
              <KeyRound size={20} className="text-[#FF6B35]" />
            </div>
            {/* Font Style: Bold & Uppercase */}
            <h1 className="text-2xl font-black text-[#1E2124] tracking-widest uppercase">
              RESET PASSWORD
            </h1>
          </div>
          <p className="text-gray-400 text-[12px] mt-2 text-center font-bold uppercase tracking-tighter">
            Enter your credentials to update security
          </p>
        </div>

        {/* FORM SECTION */}
        <div className="space-y-4">
          
          {/* EMAIL FIELD - Updated to Gray */}
          <div className="relative">
            <input 
              type="email"
              placeholder="EMAIL ADDRESS"
              /* bg-gray-200 specifically used for high visibility */
              className="w-full bg-gray-200 border border-transparent p-4 rounded-2xl text-[#1E2124] text-xs font-bold focus:outline-none focus:border-[#FF6B35] focus:bg-white transition-all placeholder:text-gray-500 lowercase tracking-wider"
            />
          </div>

          {/* PASSWORD FIELD - Updated to Gray */}
          <div className="relative">
            <input 
              type={showPass ? "text" : "password"}
              placeholder="PASSWORD"
              className="w-full bg-gray-200 border border-transparent p-4 rounded-2xl text-[#1E2124] text-xs font-bold focus:outline-none focus:border-[#FF6B35] focus:bg-white transition-all placeholder:text-gray-500 uppercase tracking-wider"
            />
            <button 
              onClick={() => setShowPass(!showPass)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#FF6B35]"
            >
              {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="relative">
            <input 
              type={showConfirm ? "text" : "password"}
              placeholder="CONFIRM PASSWORD"
              className="w-full bg-gray-100 border border-transparent p-4 rounded-2xl text-[#1E2124] text-xs font-bold focus:outline-none focus:border-[#FF6B35] focus:bg-white transition-all placeholder:text-gray-500 uppercase tracking-wider"
            />
            <button 
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#FF6B35]"
            >
              {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {/* CODE FIELD */}
          <div className="relative flex items-center">
            <input 
              type="text"
              placeholder="CODE"
              className="w-full bg-gray-100 border border-transparent p-4 rounded-2xl text-[#1E2124] text-xs font-bold focus:outline-none focus:border-[#FF6B35] focus:bg-white transition-all placeholder:text-gray-500 uppercase tracking-wider"
            />
            <div className="absolute right-32 h-6 w-[1px] bg-gray-300"></div>
            <button className="absolute right-5 text-[#FF6B35] font-black text-[10px] uppercase tracking-widest hover:text-[#ff8357]">
              Send code
            </button>
          </div>

          {/* Action Button */}
          <button className="w-full bg-[#1E2124] text-white py-4 rounded-full text-[11px] font-black hover:bg-[#FF6B35] transition-all mt-6 shadow-xl uppercase tracking-[0.2em]">
            Update password
          </button>
          
        </div>

        {/* Back Button */}
        <div className="text-center mt-10">
          <button className="flex items-center justify-center gap-2 w-full text-gray-400 text-[10px] font-black uppercase tracking-widest hover:text-[#FF6B35] transition-all group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to login
          </button>
        </div>

      </div>
    </div>
  );
};

export default ResetPassword;