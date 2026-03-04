import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, ChevronRight, ChevronLeft } from 'lucide-react'

const SignupForm: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  
  const [role, setRole] = useState<'student' | 'faculty'>('student');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [cnic, setCnic] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [mobile, setMobile] = useState('');
  const [session, setSession] = useState('');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'faculty') {
      console.log("Faculty Registered:", { name, email });
      // UPDATE: App.tsx ke mutabiq sahi address
      navigate('/admin-view'); 
    } else {
      setStep(2); 
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Student Registered:", { name, rollNo });
    // UPDATE: App.tsx ke mutabiq sahi address
    navigate('/student-dashboard'); 
  };

  return (
    <div className="w-full max-w-[500px] bg-[#1E2124] p-8 md:p-12 rounded-[3rem] shadow-2xl relative z-10 mx-auto transition-all duration-500">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-white mb-2">
          {step === 1 ? 'Join ICIT Legacy' : 'Student Registration'}
        </h2>
        <p className="text-gray-400 text-sm">
          {step === 1 ? 'Step 1: Account Credentials' : 'Step 2: Departmental Details'}
        </p>
      </div>

      {step === 1 ? (
        <form onSubmit={handleNext} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-2 ml-1">SELECT ROLE</label>
            <div className="flex gap-4">
              <button 
                type="button"
                onClick={() => setRole('student')}
                className={`flex-1 py-3 rounded-xl font-bold transition-all ${role === 'student' ? 'bg-[#FF6B35] text-white shadow-lg' : 'bg-white/5 text-gray-400 border border-white/10'}`}
              >
                Student
              </button>
              <button 
                type="button"
                onClick={() => setRole('faculty')}
                className={`flex-1 py-3 rounded-xl font-bold transition-all ${role === 'faculty' ? 'bg-[#FF6B35] text-white shadow-lg' : 'bg-white/5 text-gray-400 border border-white/10'}`}
              >
                Faculty
              </button>
            </div>
          </div>

          <input type="text" placeholder="User Name" value={name} onChange={(e)=>setName(e.target.value)} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-[#FF6B35]" required />
          <input type="email" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-[#FF6B35]" required />
          
          <div className="relative">
            <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-[#FF6B35]" required />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500">
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-[#FF6B35]" required />

          <button type="submit" className="w-full py-4 bg-[#FF6B35] text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#e85a24] transition-all">
            {role === 'student' ? 'Next: Student Details' : 'Complete Signup'}
            <ChevronRight size={20} />
          </button>
        </form>
      ) : (
        <form onSubmit={handleFinalSubmit} className="space-y-4">
          <input type="text" placeholder="CNIC" value={cnic} onChange={(e)=>setCnic(e.target.value)} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-[#FF6B35]" required />
          <input type="text" placeholder="Roll Number" value={rollNo} onChange={(e)=>setRollNo(e.target.value)} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-[#FF6B35]" required />
          <input type="text" placeholder="Mobile Number" value={mobile} onChange={(e)=>setMobile(e.target.value)} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-[#FF6B35]" required />
          <input type="text" placeholder="Session" value={session} onChange={(e)=>setSession(e.target.value)} className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:border-[#FF6B35]" required />

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={() => setStep(1)} className="flex-1 py-4 bg-white/5 text-white rounded-2xl font-bold flex items-center justify-center gap-2 border border-white/10">
              <ChevronLeft size={20} /> Back
            </button>
            <button type="submit" className="flex-[2] py-4 bg-[#FF6B35] text-white rounded-2xl font-bold text-lg hover:bg-[#e85a24]">
              Finish Registration
            </button>
          </div>
        </form>
      )}

      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm">
          Already have an account? <Link to="/login" className="text-[#FF6B35] font-bold ml-1 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default SignupForm