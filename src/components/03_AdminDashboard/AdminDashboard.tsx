import React, { useState } from 'react';
import { 
  Users, UserCircle, Fingerprint, Edit, 
  UserPlus, Settings, Mail, ShieldCheck, 
  Shield, UploadCloud, ChevronDown, FileSpreadsheet, Plus, X, Calendar, BookOpen
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [activeView, setActiveView] = useState('bulk-upload'); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State for User Creation
  const [formData, setFormData] = useState({
    fullName: '',
    userName: '',
    email: '',
    password: '',
    role: 'Student'
  });

  // Form State for New Session Modal
  const [sessionData, setSessionData] = useState({
    batchName: '',
    startDate: '',
    endDate: '',
    department: ''
  });

  const studentList = [
    { 
        id: 1, name: "Wali Khan", fName: "Saif khan", rollNo: "BCS-F20-001", 
        cnic: "35201-1234567-1", city: "Lahore", feeStatus: "Paid", cgpa: "3.78"
    }
  ];

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Account created for ${formData.fullName}`);
    setFormData({ fullName: '', userName: '', email: '', password: '', role: 'Student' });
  };

  const handleAddSession = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`New Session Created: ${sessionData.batchName} (${sessionData.department})`);
    setIsModalOpen(false);
    setSessionData({ batchName: '', startDate: '', endDate: '', department: '' });
  };

  return (
    <div className="flex h-screen w-full bg-[#E7E9ED] overflow-hidden font-sans">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-80 bg-[#1E2124] text-white p-8 flex flex-col gap-8 flex-shrink-0">
        <div className="flex items-center gap-3 px-2 border-b border-gray-700 pb-6">
          <div className="w-10 h-10 bg-[#FF6B35] rounded-xl flex items-center justify-center font-bold shadow-lg shadow-orange-900/20">A</div>
          <span className="text-xl font-bold tracking-tight">Admin <span className="text-[#FF6B35]">Portal</span></span>
        </div>
        
        <nav className="space-y-2 flex-1 mt-4">
          <button onClick={() => setActiveView('list')} className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold transition-all ${activeView === 'list' ? 'bg-[#FF6B35] text-white' : 'text-gray-400 hover:bg-gray-800'}`}>
            <Users size={18} /> Class Directory
          </button>
          
          <button onClick={() => setActiveView('bulk-upload')} className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold transition-all ${activeView === 'bulk-upload' ? 'bg-[#FF6B35] text-white' : 'text-gray-400 hover:bg-gray-800'}`}>
            <UploadCloud size={18} /> Student Bulk Upload
          </button>

          <button onClick={() => setActiveView('create-account')} className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold transition-all ${activeView === 'create-account' ? 'bg-[#FF6B35] text-white' : 'text-gray-400 hover:bg-gray-800'}`}>
            <UserPlus size={18} /> Account Creation
          </button>
          
          <button onClick={() => setActiveView('manage-students')} className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold transition-all ${activeView === 'manage-students' ? 'bg-[#FF6B35] text-white' : 'text-gray-400 hover:bg-gray-800'}`}>
            <Settings size={18} /> Student Records
          </button>
        </nav>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 overflow-y-auto p-10">
        <div className="max-w-6xl mx-auto">
          
          {/* 1. CLASS DIRECTORY */}
          {activeView === 'list' && (
             <div className="space-y-8 animate-in fade-in duration-500">
                <h2 className="text-3xl font-black text-[#1E2124]">Class Directory</h2>
                <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-[#F8F9FB] border-b">
                      <tr className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        <th className="px-8 py-5">Student / Father Name</th>
                        <th className="px-8 py-5">Roll No & CNIC</th>
                        <th className="px-8 py-5 text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {studentList.map((std) => (
                        <tr key={std.id} className="hover:bg-gray-50/50 transition-all">
                          <td className="px-8 py-5">
                            <p className="font-bold text-[#1E2124]">{std.name}</p>
                            <p className="text-xs text-gray-400">{std.fName}</p>
                          </td>
                          <td className="px-8 py-5 font-bold">{std.rollNo}</td>
                          <td className="px-8 py-5 text-center">
                            <button className="px-4 py-2 bg-gray-100 rounded-lg text-xs font-bold">View</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
             </div>
          )}

          {/* 2. STUDENT BULK UPLOAD (Updated Header & Left Alignment) */}
          {activeView === 'bulk-upload' && (
            <div className="max-w-4xl mx-auto space-y-8 animate-in zoom-in-95 duration-300">
              
              {/* Header: Left Side Title, Right Side Button */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl  tracking-tighter text-[#1E2124]">Student Bulk Upload</h2>
                </div>
                
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 bg-[#1E2124] text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-[#FF6B35] transition-all active:scale-95"
                >
                  <Plus size={18} />
                  Add New Session
                </button>
              </div>

              <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 space-y-8">
                {/* Session Dropdown */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2 tracking-widest">Select Session</label>
                  <div className="relative">
                    <select className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-4 px-6 outline-none transition-all font-bold text-sm appearance-none cursor-pointer">
                      <option value="">-- Select Session --</option>
                      <option value="2020-2024">Batch 2020 - 2024 (Fall)</option>
                      <option value="2021-2025">Batch 2021 - 2025 (Spring)</option>
                      <option value="2022-2026">Batch 2022 - 2026 (Fall)</option>
                    </select>
                    <ChevronDown className="absolute right-6 top-4 text-gray-400" size={20} />
                  </div>
                </div>

                {/* File Upload Area */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2 tracking-widest">Upload Excel File</label>
                  <div className="relative group border-2 border-dashed border-gray-200 hover:border-[#FF6B35] rounded-[2rem] p-10 transition-all bg-gray-50/50 flex flex-col items-center justify-center cursor-pointer">
                    <input type="file" accept=".xlsx, .xls" className="absolute inset-0 opacity-0 cursor-pointer" />
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                       <FileSpreadsheet className="text-[#FF6B35]" size={32} />
                    </div>
                    <p className="text-gray-600 font-bold">Drag & Drop Excel file here or <span className="text-[#FF6B35]">click to select</span></p>
                  </div>
                </div>

                <div className="pt-4">
                  <button className="w-full py-5 bg-[#1E2124] hover:bg-[#FF6B35] text-white rounded-2xl font-black uppercase tracking-widest shadow-lg transition-all active:scale-[0.98]">
                    Upload Students
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 3. ACCOUNT CREATION */}
          {activeView === 'create-account' && (
            <div className="max-w-2xl mx-auto space-y-8 animate-in zoom-in-95 duration-300">
               <div className="text-center">
                  <h2 className="text-3xl font-black text-[#1E2124]">System Registration</h2>
               </div>
               <form onSubmit={handleCreateAccount} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 space-y-5">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Full Name</label>
                    <div className="relative">
                      <UserCircle className="absolute left-4 top-3.5 text-[#FF6B35]" size={18} />
                      <input required type="text" placeholder="e.g. Wali Khan" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-4 outline-none font-bold text-sm" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Username</label>
                      <div className="relative">
                        <Fingerprint className="absolute left-4 top-3.5 text-[#FF6B35]" size={18} />
                        <input required type="text" placeholder="username123" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-4 outline-none font-bold text-sm" value={formData.userName} onChange={(e) => setFormData({...formData, userName: e.target.value})} />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Role</label>
                      <div className="relative">
                        <Shield className="absolute left-4 top-3.5 text-[#FF6B35]" size={18} />
                        <select className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-4 outline-none font-bold text-sm appearance-none" value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} >
                          <option value="Student">Student</option>
                          <option value="Admin">Admin</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 text-[#FF6B35]" size={18} />
                      <input required type="email" placeholder="student@icit.com" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-4 outline-none font-bold text-sm" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Password</label>
                    <div className="relative">
                      <ShieldCheck className="absolute left-4 top-3.5 text-[#FF6B35]" size={18} />
                      <input required type="password" placeholder="••••••••" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-4 outline-none font-bold text-sm" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-4 bg-[#1E2124] hover:bg-[#FF6B35] text-white rounded-2xl font-black uppercase tracking-widest shadow-lg transition-all"> Register Account </button>
               </form>
            </div>
          )}

          {/* 4. MANAGE RECORDS */}
          {activeView === 'manage-students' && (
            <div className="space-y-8">
               <h2 className="text-3xl font-black text-[#1E2124]">Academic Management</h2>
               <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden text-sm">
                  <table className="w-full text-left">
                    <thead className="bg-[#F8F9FB] border-b text-gray-400 uppercase text-[10px] font-black">
                      <tr><th className="px-8 py-5">Student</th><th className="px-8 py-5">Fee Status</th><th className="px-8 py-5">Action</th></tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 font-bold">
                      {studentList.map(s => (
                        <tr key={s.id}>
                          <td className="px-8 py-5">{s.name}</td>
                          <td className="px-8 py-5"><span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-[10px]">{s.feeStatus}</span></td>
                          <td className="px-8 py-5"><Edit size={16} className="text-gray-400 cursor-pointer hover:text-black"/></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
               </div>
            </div>
          )}
        </div>
      </main>

      {/* --- ADD NEW SESSION MODAL (Same as Image) --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#1E2124]/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden">
            <div className="p-8 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-[#1E2124]">Add New Session</h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
                  <X size={20} className="text-gray-500" />
                </button>
              </div>

              <form onSubmit={handleAddSession} className="space-y-5">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2 tracking-widest">Batch Name (E.G., BCS-F24)</label>
                  <div className="relative">
                    <BookOpen className="absolute left-4 top-3.5 text-[#FF6B35]" size={18} />
                    <input required type="text" placeholder="Enter Batch Name" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-4 outline-none font-bold text-sm" value={sessionData.batchName} onChange={(e) => setSessionData({...sessionData, batchName: e.target.value})} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase ml-2 tracking-widest">Start Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-3.5 text-[#FF6B35]" size={18} />
                      <input required type="date" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-4 outline-none font-bold text-sm" value={sessionData.startDate} onChange={(e) => setSessionData({...sessionData, startDate: e.target.value})} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase ml-2 tracking-widest">End Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-3.5 text-[#FF6B35]" size={18} />
                      <input required type="date" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-4 outline-none font-bold text-sm" value={sessionData.endDate} onChange={(e) => setSessionData({...sessionData, endDate: e.target.value})} />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-black text-gray-400 uppercase ml-2 tracking-widest">Department</label>
                  <div className="relative">
                    <select required className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 px-6 outline-none font-bold text-sm appearance-none cursor-pointer" value={sessionData.department} onChange={(e) => setSessionData({...sessionData, department: e.target.value})} >
                      <option value="">-- Select Department --</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Software Engineering">Software Engineering</option>
                      <option value="Artificial Intelligence">Artificial Intelligence</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Cyber Security">Cyber Security</option>
                    </select>
                    <ChevronDown className="absolute right-6 top-3.5 text-gray-400" size={18} />
                  </div>
                </div>

                <button type="submit" className="w-full py-4 bg-[#1E2124] hover:bg-[#FF6B35] text-white rounded-2xl font-black uppercase tracking-widest shadow-lg transition-all mt-4">
                  Confirm & Create
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;