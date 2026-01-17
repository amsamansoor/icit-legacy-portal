import React, { useState } from 'react'
import { Users, Search, BookOpen, CreditCard, UserCircle, MapPin, Fingerprint, Calendar, Edit, ChevronLeft, CheckCircle, XCircle } from 'lucide-react'

const AdminDashboard: React.FC = () => {
  const [activeView, setActiveView] = useState('list'); 
  const [searchQuery, setSearchQuery] = useState('');

  // Data mein humne bas subjects add kiye hain design dikhane ke liye
  const studentList = [
    { 
        id: 1, name: "Amsa Mansoor", fName: "Mansoor Ahmed", rollNo: "BCS-F20-001", 
        cnic: "35201-1234567-1", city: "Lahore", dob: "12-05-2002", 
        gpa1: "3.85", gpa2: "3.70", feeStatus: "Paid",
        results: [
          { sem: "1st Semester", gpa: "3.85", subjects: ["Programming Fundamentals", "Calculus", "English"] },
          { sem: "2nd Semester", gpa: "3.70", subjects: ["OOP", "Discrete Structures", "Digital Logic"] }
        ]
    },
    { 
        id: 2, name: "Ali Raza", fName: "Raza Ali", rollNo: "BCS-F20-002", 
        cnic: "35201-7654321-2", city: "Faisalabad", dob: "20-08-2001", 
        gpa1: "3.20", gpa2: "3.40", feeStatus: "Pending",
        results: [
          { sem: "1st Semester", gpa: "3.20", subjects: ["Programming Fundamentals", "Calculus"] }
        ]
    },
  ];

  const filteredStudent = studentList.find(s => s.cnic === searchQuery || s.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="flex h-screen w-full bg-[#E7E9ED] overflow-hidden font-sans">
      
      {/* SIDEBAR (Wahi original aap wala) */}
      <aside className="w-80 bg-[#1E2124] text-white p-8 flex flex-col gap-8 flex-shrink-0">
        <div className="flex items-center gap-3 px-2 border-b border-gray-700 pb-6">
          <div className="w-10 h-10 bg-[#FF6B35] rounded-xl flex items-center justify-center font-bold shadow-lg shadow-orange-900/20">A</div>
          <span className="text-xl font-bold tracking-tight">Admin <span className="text-[#FF6B35]">Portal</span></span>
        </div>
        
        <div className="space-y-6">
          <div className="space-y-3 px-2">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Unique ID Search</label>
            <div className="relative group">
              <Search className="absolute left-3 top-3 text-gray-500 group-focus-within:text-[#FF6B35]" size={16} />
              <input 
                type="text" 
                placeholder="Enter CNIC or Name..." 
                className="w-full bg-[#2D3035] border border-gray-700 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-[#FF6B35] transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button 
              onClick={() => { if(filteredStudent) setActiveView('student-detail') }}
              className="w-full py-2.5 bg-[#FF6B35] hover:bg-orange-600 rounded-xl text-xs font-bold transition-all shadow-lg"
            >
              Search Database
            </button>
          </div>

          <nav className="space-y-1">
            <button onClick={() => {setActiveView('list'); setSearchQuery('')}} className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold transition-all ${activeView === 'list' ? 'bg-[#FF6B35] text-white' : 'text-gray-400 hover:bg-gray-800'}`}>
              <Users size={18} /> Class Directory
            </button>
          </nav>
        </div>
      </aside>

      {/* MAIN CONTENT (Wahi original aap wala) */}
      <main className="flex-1 overflow-y-auto p-10">
        <div className="max-w-6xl mx-auto">
          
          {/* 1. LIST VIEW */}
          {activeView === 'list' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="flex justify-between items-end">
                <div>
                  <h2 className="text-3xl font-black text-[#1E2124]">Class Directory</h2>
                  <p className="text-gray-500 font-medium italic">Department of Computer Science</p>
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
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
                          <p className="text-xs text-gray-400 font-medium">{std.fName}</p>
                        </td>
                        <td className="px-8 py-5">
                          <p className="text-sm font-bold text-[#FF6B35]">{std.rollNo}</p>
                          <p className="text-[10px] font-mono text-gray-500">{std.cnic}</p>
                        </td>
                        <td className="px-8 py-5 text-center">
                          <button 
                            onClick={() => { setSearchQuery(std.cnic); setActiveView('student-detail'); }}
                            className="px-4 py-2 bg-gray-100 hover:bg-[#1E2124] hover:text-white rounded-lg text-[10px] font-black uppercase transition-all"
                          >
                            View Record
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 2. STUDENT FULL PROFILE VIEW (UI Updated Inside) */}
          {activeView === 'student-detail' && filteredStudent && (
            <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
               <button onClick={() => setActiveView('list')} className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#FF6B35] transition-colors">
                  <ChevronLeft size={18}/> Back to Directory
               </button>
               
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Personal Sidebar (Aap wala design) */}
                  <div className="space-y-6">
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 text-center">
                        <div className="w-24 h-24 bg-orange-50 rounded-full mx-auto mb-4 flex items-center justify-center text-[#FF6B35]"><UserCircle size={60} /></div>
                        <h3 className="text-xl font-black text-[#1E2124]">{filteredStudent.name}</h3>
                        <p className="text-[#FF6B35] font-bold text-sm">{filteredStudent.rollNo}</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 space-y-4">
                      <DetailRow icon={<Fingerprint size={16}/>} label="CNIC" value={filteredStudent.cnic} />
                      <DetailRow icon={<UserCircle size={16}/>} label="Father Name" value={filteredStudent.fName} />
                      <DetailRow icon={<MapPin size={16}/>} label="City" value={filteredStudent.city} />
                    </div>
                  </div>

                  {/* Main Data Content */}
                  <div className="lg:col-span-2 space-y-8">
                    
                    {/* FEE STATUS (Updated to Student-style List) */}
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                      <h4 className="text-lg font-black text-[#1E2124] flex items-center gap-2 mb-6"><CreditCard className="text-[#FF6B35]" size={20}/> Fee Structure</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between p-4 bg-gray-50 rounded-2xl">
                          <span className="text-sm font-bold text-gray-500">Semester Tuition Fee</span>
                          <span className="text-sm font-black text-[#1E2124]">Rs. 45,000</span>
                        </div>
                        <div className={`flex justify-between items-center p-4 rounded-2xl border ${filteredStudent.feeStatus === 'Paid' ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
                          <span className="text-sm font-bold text-gray-700">Payment Status</span>
                          <span className={`text-xs font-black uppercase flex items-center gap-1 ${filteredStudent.feeStatus === 'Paid' ? 'text-green-600' : 'text-red-600'}`}>
                            {filteredStudent.feeStatus === 'Paid' ? <CheckCircle size={14}/> : <XCircle size={14}/>}
                            {filteredStudent.feeStatus}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* ACADEMIC RESULTS (Updated to Subject-wise cards) */}
                    <div className="space-y-6">
                      <h4 className="text-lg font-black text-[#1E2124] flex items-center gap-2 px-2"><BookOpen className="text-[#FF6B35]" size={20}/> Academic Performance</h4>
                      
                      {filteredStudent.results.map((semData, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                          <div className="flex justify-between items-center mb-6 border-b pb-4">
                            <h5 className="font-black text-[#FF6B35] text-xs uppercase tracking-widest">{semData.sem}</h5>
                            <span className="text-sm font-black text-[#1E2124]">GPA: {semData.gpa}</span>
                          </div>
                          <div className="space-y-4">
                            {semData.subjects.map((sub, i) => (
                              <div key={i} className="flex justify-between text-sm">
                                <span className="text-gray-600 font-medium">{sub}</span>
                                <span className="font-black text-[#1E2124]">A</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
               </div>
            </div>
          )}

          {/* Error State */}
          {activeView === 'student-detail' && !filteredStudent && (
             <div className="text-center py-20 bg-white rounded-[2.5rem] border-2 border-dashed border-gray-200 font-bold">
                Student Not Found
                <button onClick={() => setActiveView('list')} className="block mx-auto mt-4 text-[#FF6B35]">Back to list</button>
             </div>
          )}

        </div>
      </main>
    </div>
  )
}

// Sub-components (Aap wala design)
const DetailRow = ({ icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex items-center gap-4 group">
    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-[#FF6B35] transition-all">{icon}</div>
    <div>
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">{label}</p>
      <p className="text-sm font-bold text-[#1E2124]">{value}</p>
    </div>
  </div>
)

export default AdminDashboard;