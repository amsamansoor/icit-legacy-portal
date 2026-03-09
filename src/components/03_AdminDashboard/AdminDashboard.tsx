import React, { useState } from 'react';
import { 
  Users, UserCircle, Fingerprint, Edit, 
  UserPlus, Settings, Mail, ShieldCheck, 
  Shield, ChevronDown, Plus, X, Calendar, BookOpen, CheckCircle2, Clock
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [activeView, setActiveView] = useState('session-mgmt'); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- FORM STATES ---
  const [formData, setFormData] = useState({
    fullName: '', userName: '', email: '', password: '', role: ''
  });

  const [sessionData, setSessionData] = useState({
    batchName: '', startDate: '', endDate: '', department: ''
  });

  // --- DATA ---
  const sessionsList = [
    { sessionId: "S-2024-01", sessionName: "Fall 2024", startDate: "2024-09-01", endDate: "2025-01-15" },
    { sessionId: "S-2024-02", sessionName: "Spring 2024", startDate: "2024-02-10", endDate: "2025-06-20" },
    { sessionId: "S-2024-03", sessionName: "Fall 2024", startDate: "2024-09-01", endDate: "2025-05-15" },
    { sessionId: "S-2024-04", sessionName: "Spring 2024", startDate: "2024-02-10", endDate: "2025-06-20" },
    { sessionId: "S-2024-05", sessionName: "Fall 2024", startDate: "2024-09-01", endDate: "2025-04-15" },
    { sessionId: "S-2024-06", sessionName: "Spring 2024", startDate: "2024-02-10", endDate: "2024-06-20" }
  ];

  const studentRecords = [
    { studentId: "1", stdName: "Wali Khan", email: "wali@icit.com", cnic: "35201-1234567-1", registrationNo: "BCS-F20-001", status: "Active" },
    { studentId: "2", stdName: "Asad Rahim", email: "asad@icit.com", cnic: "35201-9876543-2", registrationNo: "BCS-F20-002", status: "Pending" },
    { studentId: "3", stdName: "Sajid Ali", email: "sajid@icit.com", cnic: "35201-5554443-3", registrationNo: "BCS-F20-003", status: "Active" },
    { studentId: "4", stdName: "Maria Khan", email: "maria@icit.com", cnic: "35201-2223331-4", registrationNo: "BCS-F20-004", status: "Inactive" },
    { studentId: "5", stdName: "Zainab Bibi", email: "zainab@icit.com", cnic: "35201-1112223-5", registrationNo: "BCS-F20-005", status: "Active" }
  ];

  const studentList = [
    { id: 1, name: "Wali Khan", fName: "Saif khan", rollNo: "BCS-F20-001" }
  ];

  // --- HANDLERS ---
  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Account created for ${formData.fullName} as ${formData.role}`);
    setFormData({ fullName: '', userName: '', email: '', password: '', role: '' });
  };

  const handleAddSession = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`New Session Created: ${sessionData.batchName}`);
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
          <button onClick={() => setActiveView('session-mgmt')} className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold transition-all ${activeView === 'session-mgmt' ? 'bg-[#FF6B35] text-white' : 'text-gray-400 hover:bg-gray-800'}`}>
            <BookOpen size={18} /> Session Management
          </button>
          <button onClick={() => setActiveView('list')} className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold transition-all ${activeView === 'list' ? 'bg-[#FF6B35] text-white' : 'text-gray-400 hover:bg-gray-800'}`}>
            <Users size={18} /> Class Directory
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
          
          {/* 1. SESSION MANAGEMENT */}
          {activeView === 'session-mgmt' && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight text-[#1E2124]">Session Management</h2>
                <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-[#1E2124] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#FF6B35] transition-all shadow-md">
                  <Plus size={16} /> Add New Session
                </button>
              </div>

              <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-[#F8F9FB] border-b">
                    <tr className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      <th className="px-6 py-4">Session ID</th>
                      <th className="px-6 py-4">Session Name</th>
                      <th className="px-6 py-4">Start Date</th>
                      <th className="px-6 py-4">End Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {sessionsList.map((session) => (
                      <tr key={session.sessionId} className="hover:bg-gray-50/80 transition-all">
                        <td className="px-6 py-4 font-bold text-sm text-[#1E2124]">{session.sessionId}</td>
                        <td className="px-6 py-4 text-xs font-semibold text-gray-600">{session.sessionName}</td>
                        <td className="px-6 py-4 text-xs font-mono text-gray-500">{session.startDate}</td>
                        <td className="px-6 py-4 text-xs font-mono text-gray-500">{session.endDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 2. CLASS DIRECTORY */}
          {activeView === 'list' && (
             <div className="space-y-8 animate-in fade-in duration-500">
                <h2 className="text-3xl font-bold text-[#1E2124]">Class Directory</h2>
                <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-[#F8F9FB] border-b">
                      <tr className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        <th className="px-8 py-5">Student / Father Name</th>
                        <th className="px-8 py-5">Roll No</th>
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

          {/* 3. ACCOUNT CREATION (Updated Role Dropdown) */}
          {activeView === 'create-account' && (
            <div className="max-w-2xl mx-auto space-y-8 animate-in zoom-in-95 duration-300">
               <div className="text-center">
                  <h2 className="text-3xl font-bold text-[#1E2124]">System Registration</h2>
               </div>
               <form onSubmit={handleCreateAccount} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 space-y-5">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-2">Full Name</label>
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
                      <label className="text-[10px] font-bold text-gray-400 uppercase ml-2">Role</label>
                      <div className="relative">
                        <Shield className="absolute left-4 top-3.5 text-[#FF6B35]" size={18} />
                        <select required className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-4 outline-none font-bold text-sm appearance-none" value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} >
                          <option value="" disabled hidden>Select Role</option>
                          <option value="Admin">Admin</option>
                          <option value="Clerk">Clerk</option>
                          <option value="Faculty">Faculty</option>
                          <option value="Student">Student</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-3.5 text-gray-400 pointer-events-none" size={18} />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-2">Email</label>
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

          {/* 4. STUDENT RECORDS */}
          {activeView === 'manage-students' && (
            <div className="space-y-8">
               <h2 className="text-3xl font-bold text-[#1E2124]">Student Records</h2>
               <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden text-sm">
                  <table className="w-full text-left">
                    <thead className="bg-[#F8F9FB] border-b text-gray-400 uppercase text-[10px] font-black">
                      <tr>
                        <th className="px-6 py-5">Student ID</th>
                        <th className="px-6 py-5">Std Name</th>
                        <th className="px-6 py-5">Email</th>
                        <th className="px-6 py-5">CNIC</th>
                        <th className="px-6 py-5">Registration No</th>
                        <th className="px-6 py-5">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 font-bold">
                      {studentRecords.map(s => (
                        <tr key={s.studentId} className="hover:bg-gray-50/50">
                          <td className="px-6 py-5">{s.studentId}</td>
                          <td className="px-6 py-5 text-[#1E2124]">{s.stdName}</td>
                          <td className="px-6 py-5 text-gray-500 font-medium">{s.email}</td>
                          <td className="px-6 py-5 font-mono text-xs">{s.cnic}</td>
                          <td className="px-6 py-5">{s.registrationNo}</td>
                          <td className="px-6 py-5">
                            <span className={`px-3 py-1 rounded-full text-[10px] ${s.status === 'Active' ? 'bg-green-100 text-green-600' : s.status === 'Pending' ? 'bg-amber-100 text-amber-600' : 'bg-red-100 text-red-600'}`}>
                              {s.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
               </div>
            </div>
          )}
        </div>
      </main>

      {/* --- SESSION MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#1E2124]/40 backdrop-blur-md z-50 flex items-center justify-center p-6">
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-xl p-10 space-y-8 animate-in slide-in-from-bottom-4 duration-300">
             <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold">Create Session</h3>
                <button onClick={() => setIsModalOpen(false)}><X className="text-gray-400"/></button>
             </div>
             <form onSubmit={handleAddSession} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-gray-500 uppercase">Batch Name</label>
                  <input required placeholder="e.g. BCS-F24" className="w-full bg-gray-50 border rounded-2xl py-4 px-6 outline-none font-bold text-sm" value={sessionData.batchName} onChange={(e) => setSessionData({...sessionData, batchName: e.target.value})} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-gray-500 uppercase">Start Date</label>
                    <input required type="date" className="w-full bg-gray-50 border rounded-2xl py-4 px-4 outline-none font-bold text-sm" value={sessionData.startDate} onChange={(e) => setSessionData({...sessionData, startDate: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-gray-500 uppercase">End Date</label>
                    <input required type="date" className="w-full bg-gray-50 border rounded-2xl py-4 px-4 outline-none font-bold text-sm" value={sessionData.endDate} onChange={(e) => setSessionData({...sessionData, endDate: e.target.value})} />
                  </div>
                </div>
                <button type="submit" className="w-full py-4 bg-[#FF6B35] text-white rounded-2xl font-black uppercase tracking-widest">Create Session</button>
             </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;