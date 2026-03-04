import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import { 
  LayoutDashboard, Upload, CreditCard, FileText, 
  Search, Bell, ChevronDown, User, LogOut, Calendar, 
  Clock, FileSpreadsheet, FileCheck, Save, X, PlusCircle, Trash2, Edit3, CheckCircle2, AlertCircle
} from 'lucide-react';

// --- TYPES ---
interface StudentData { id: string; name: string; rollNo: string; department: string; }
interface FeeRecord { 
  id: number; 
  studentName: string; 
  rollNo: string; 
  amount: string; 
  challanNo: string; 
  status: 'Pending' | 'Verified' | 'Rejected'; 
  date: string;
}

const ClerkDashboard: React.FC = () => {
  // --- STATES ---
  const [activeView, setActiveView] = useState('overview');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [uploadedData, setUploadedData] = useState<StudentData[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- FEE VERIFICATION STATES ---
  const [feeRecords, setFeeRecords] = useState<FeeRecord[]>([
    { id: 1, studentName: "Zainab Rashid", rollNo: "BCS-F22-102", amount: "45,000", challanNo: "CH-9921", status: "Pending", date: "02 Mar 2026" },
    { id: 2, studentName: "Hamza Malik", rollNo: "BSE-F24-089", amount: "52,000", challanNo: "CH-8843", status: "Verified", date: "01 Mar 2026" },
    { id: 3, studentName: "Ali Raza", rollNo: "BAI-F23-015", amount: "48,500", challanNo: "CH-7712", status: "Pending", date: "04 Mar 2026" }
  ]);

  // --- MOCK DATA ---
  const pendingAdmissions = [
    { id: 1, name: "Zainab Rashid", rollNo: "BCS-F20-102", type: "Admission Form" },
    { id: 2, name: "Hamza Malik", rollNo: "BCS-F20-089", type: "Fee Challan" }
  ];

  const myName = "Ayesha Khan";
  const initials = "AK";

  // --- LIVE CLOCK ---
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  const formattedTime = currentTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  // --- HANDLERS ---
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsProcessing(true);
    
    setTimeout(() => {
      const dataToSave = [
        { id: '101', name: "Ayesha Khan", rollNo: "BSE-F21-010", department: "SE" },
        { id: '102', name: "Bilal Ahmed", rollNo: "BSE-F21-022", department: "SE" },
        { id: '103', name: "Sara Malik", rollNo: "BSE-F21-045", department: "AI" },
      ];
      setUploadedData(dataToSave);
      setIsProcessing(false);
    }, 1200);
  };

  const updateFeeStatus = (id: number, newStatus: 'Verified' | 'Rejected') => {
    setFeeRecords(feeRecords.map(record => 
      record.id === id ? { ...record, status: newStatus } : record
    ));
  };

  return (
    <div className="flex h-screen w-full bg-[#E7E9ED] overflow-hidden font-sans text-[#1E2124]">
      
      {/* SIDEBAR */}
      <aside className="w-80 bg-[#1E2124] text-white p-8 flex flex-col gap-8 flex-shrink-0 shadow-2xl">
        <div className="flex items-center gap-3 px-2 border-b border-gray-700 pb-6">
          <div className="w-10 h-10 bg-[#FF6B35] rounded-xl flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-orange-900/20">C</div>
          <span className="text-xl font-bold tracking-tight text-white">Clerk <span className="text-[#FF6B35]">Portal</span></span>
        </div>
        
        <nav className="space-y-2 flex-1">
          <button onClick={() => setActiveView('overview')} className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-bold transition-all ${activeView === 'overview' ? 'bg-[#FF6B35] text-white shadow-lg' : 'text-gray-400 hover:bg-gray-800'}`}>
            <LayoutDashboard size={20} /> Overview
          </button>
          <button onClick={() => setActiveView('fees')} className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-bold transition-all ${activeView === 'fees' ? 'bg-[#FF6B35] text-white shadow-lg' : 'text-gray-400 hover:bg-gray-800'}`}>
            <CreditCard size={20} /> Fee Verification
          </button>
          <button onClick={() => setActiveView('bulk')} className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-bold transition-all ${activeView === 'bulk' ? 'bg-[#FF6B35] text-white shadow-lg' : 'text-gray-400 hover:bg-gray-800'}`}>
            <Upload size={20} /> Bulk Import
          </button>
          <button onClick={() => setActiveView('records')} className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl font-bold transition-all ${activeView === 'records' ? 'bg-[#FF6B35] text-white shadow-lg' : 'text-gray-400 hover:bg-gray-800'}`}>
            <FileText size={20} /> Student Records
          </button>
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto p-10 bg-[#E7E9ED]">
        <div className="max-w-6xl mx-auto">
          
          {/* HEADER */}
          <header className="flex justify-between items-center mb-12">
            <div className="flex flex-col">
              <h1 className="text-2xl font-[950] text-[#1E2124] tracking-tight">Welcome Back, {myName}!</h1>
              <div className="flex items-center gap-3 text-[11px] font-bold text-gray-500 uppercase tracking-widest mt-1">
                 <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full shadow-sm">
                    <Calendar size={12} className="text-[#FF6B35]" />
                    <span>{formattedDate}</span>
                 </div>
                 <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full shadow-sm">
                    <Clock size={12} className="text-[#FF6B35]" />
                    <span className="tabular-nums text-[#1E2124]">{formattedTime}</span>
                 </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative bg-white p-3.5 rounded-2xl shadow-sm text-gray-500 cursor-pointer hover:bg-[#FF6B35] hover:text-white transition-all">
                <Bell size={22} /><span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
              </div>
              <div className="relative">
                <div onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center gap-3 bg-white p-2 pr-5 rounded-2xl shadow-sm border border-gray-100 cursor-pointer group transition-all">
                  <div className="w-11 h-11 bg-gradient-to-tr from-[#1E2124] to-[#3a3f44] rounded-xl flex items-center justify-center text-[#FF6B35] font-black text-lg shadow-md">{initials}</div>
                  <div className="hidden md:block text-left"><p className="text-[13px] font-black leading-none">{myName}</p><p className="text-[10px] text-gray-400 font-bold uppercase mt-1 text-xs">Senior Clerk</p></div>
                  <ChevronDown size={14} className={`text-gray-300 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                </div>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-4 w-56 bg-white rounded-3xl shadow-2xl border border-gray-100 p-2 z-50 animate-in fade-in zoom-in-95">
                    <button className="w-full flex items-center gap-3 px-4 py-3.5 text-sm font-bold text-gray-600 hover:bg-gray-50 rounded-2xl"><User size={18} className="text-[#FF6B35]"/> Profile Settings</button>
                    <button onClick={() => alert("Logged Out")} className="w-full flex items-center gap-3 px-4 py-3.5 text-sm font-bold text-red-500 hover:bg-red-50 rounded-2xl"><LogOut size={18}/> Logout</button>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* VIEW: OVERVIEW */}
          {activeView === 'overview' && (
             <div className="space-y-8 animate-in fade-in duration-500">
                <div className="flex items-center gap-5">
                   <div className="w-3 h-12 bg-gradient-to-b from-[#FF6B35] to-[#ff9b76] rounded-full shadow-lg shadow-orange-200"></div>
                   <h2 className="text-3xl font-[950] text-[#1E2124] tracking-tight">Administrative <span className="text-[#FF6B35]">Overview</span></h2>
                </div>
                <div className="grid grid-cols-3 gap-8 pt-4">
                   {['Pending Verification', 'Verified Today', 'Total Students'].map((label, i) => (
                     <div key={i} className="bg-white p-5 rounded-[3rem] shadow-sm border-l-[7px] border-l-[#FF6B35] hover:scale-[1.02] transition-transform cursor-default">
                        <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-1">{label}</p>
                        <h3 className="text-3xl font-[950] text-[#1E2124]">{i === 0 ? '42' : i === 1 ? '15' : '1,420'}</h3>
                     </div>
                   ))}
                </div>
                <div className="bg-white rounded-[3rem] shadow-sm border border-white overflow-hidden mt-10">
                  <div className="p-10 border-b flex justify-between items-center bg-white"><h3 className="font-[950] text-2xl tracking-tight">Recent Activity</h3></div>
                  <table className="w-full text-left">
                    <thead className="bg-[#F8F9FB] border-b text-[11px] font-[900] text-gray-400 uppercase tracking-widest">
                      <tr><th className="px-10 py-6">Student / Roll No</th><th className="px-10 py-6">Status</th><th className="px-10 py-6 text-center">Action</th></tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 font-bold">
                      {pendingAdmissions.map((std) => (
                        <tr key={std.id} className="hover:bg-gray-50/80 transition-all group">
                          <td className="px-10 py-6">
                            <p className="font-black text-[15px] group-hover:text-[#FF6B35] transition-colors">{std.name}</p>
                            <p className="text-xs text-gray-400">{std.rollNo}</p>
                          </td>
                          <td className="px-10 py-6 text-gray-600">{std.type}</td>
                          <td className="px-10 py-6 text-center"><button onClick={() => setActiveView('fees')} className="px-8 py-3 bg-[#1E2124] text-white rounded-2xl text-[11px] font-black hover:bg-[#FF6B35] transition-all">CHECK STATUS</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
             </div>
          )}

          {/* VIEW: FEE VERIFICATION (NEW REPLACEMENT) */}
          {activeView === 'fees' && (
            <div className="space-y-8 animate-in fade-in duration-500">
               <div className="flex items-center gap-5">
                  <div className="w-3 h-12 bg-[#FF6B35] rounded-full shadow-lg shadow-orange-200"></div>
                  <h2 className="text-3xl font-[950] text-[#1E2124]">Fee <span className="text-[#FF6B35]">Verification</span></h2>
               </div>

               <div className="bg-white rounded-[3rem] shadow-sm overflow-hidden border">
                  <table className="w-full text-left font-bold">
                    <thead className="bg-[#F8F9FB] border-b text-[11px] font-black text-gray-400 uppercase tracking-widest">
                      <tr><th className="px-10 py-6">Student Details</th><th className="px-10 py-6">Challan Info</th><th className="px-10 py-6">Status</th><th className="px-10 py-6 text-center">Verification</th></tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {feeRecords.map(f => (
                        <tr key={f.id} className="hover:bg-gray-50/50 transition-all">
                          <td className="px-10 py-6">
                            <p className="text-[#1E2124] font-black">{f.studentName}</p>
                            <p className="text-[10px] text-gray-400 uppercase">{f.rollNo}</p>
                          </td>
                          <td className="px-10 py-6">
                            <p className="text-[#FF6B35] text-lg leading-none">Rs. {f.amount}</p>
                            <p className="text-[10px] text-gray-400 font-black mt-1">ID: {f.challanNo}</p>
                          </td>
                          <td className="px-10 py-6">
                            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tight ${
                              f.status === 'Verified' ? 'bg-green-50 text-green-600' : 
                              f.status === 'Rejected' ? 'bg-red-50 text-red-600' : 'bg-orange-50 text-orange-600'
                            }`}>
                              {f.status}
                            </span>
                          </td>
                          <td className="px-10 py-6 text-center">
                            {f.status === 'Pending' ? (
                              <div className="flex items-center justify-center gap-2">
                                <button onClick={() => updateFeeStatus(f.id, 'Verified')} className="flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-xl text-[10px] font-black hover:bg-green-700 transition-all"><CheckCircle2 size={14}/> APPROVE</button>
                                <button onClick={() => updateFeeStatus(f.id, 'Rejected')} className="flex items-center gap-2 bg-gray-100 text-gray-500 px-5 py-2.5 rounded-xl text-[10px] font-black hover:bg-red-50 hover:text-red-600 transition-all">REJECT</button>
                              </div>
                            ) : (
                              <button className="text-gray-300 text-[10px] font-black cursor-not-allowed uppercase">Verified on {f.date}</button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
               </div>
            </div>
          )}

          {/* VIEW: BULK IMPORT */}
          {activeView === 'bulk' && (
            <div className="space-y-8 animate-in slide-in-from-bottom-6 duration-500">
               <div className="flex items-center gap-5">
                  <div className="w-3 h-12 bg-gradient-to-b from-[#FF6B35] to-[#ff9b76] rounded-full shadow-lg shadow-orange-200"></div>
                  <h2 className="text-3xl font-[950] text-[#1E2124] tracking-tight">Bulk Data <span className="text-[#FF6B35]">Import</span></h2>
               </div>
               
               <div className="bg-white p-12 rounded-[3.5rem] shadow-sm border-2 border-dashed border-gray-100 flex flex-col items-center text-center transition-all hover:border-[#FF6B35]/30">
                  {isProcessing ? (
                    <div className="flex flex-col items-center">
                       <div className="animate-spin w-12 h-12 border-[4px] border-[#FF6B35] border-t-transparent rounded-full mb-4"></div>
                       <p className="text-sm font-bold text-gray-400">Processing Document...</p>
                    </div>
                  ) : (
                  <>
                    <div className="w-24 h-24 bg-gray-50 rounded-[2rem] flex items-center justify-center mb-6 border border-gray-50">
                      <FileSpreadsheet className="text-gray-300" size={40} strokeWidth={1.5} />
                    </div>
                    <h4 className="text-xl font-bold mb-1 text-[#1E2124]">Upload Student Data</h4>
                    <p className="text-gray-400 font-medium mb-8 max-w-xs text-xs text-center leading-relaxed">Please select a formatted .csv or .xlsx file to sync records.</p>
                    <button onClick={() => fileInputRef.current?.click()} className="bg-[#1E2124] text-white px-10 py-4 rounded-2xl text-xs font-black tracking-widest hover:bg-[#FF6B35] hover:scale-105 transition-all shadow-xl shadow-gray-200">BROWSE FILES</button>
                    <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" accept=".csv, .xlsx" />
                  </>)}
               </div>

               {uploadedData.length > 0 && (
                 <div className="bg-white rounded-[3rem] shadow-sm border border-white overflow-hidden animate-in fade-in">
                    <div className="p-10 border-b flex justify-between items-center bg-[#F8F9FB]">
                       <h3 className="font-black text-lg">Parsed Records ({uploadedData.length})</h3>
                       <button className="bg-[#1E2124] text-white px-6 py-3 rounded-xl text-[10px] font-black flex items-center gap-2 hover:bg-green-600 transition-colors"><Save size={14} /> SYNC COMPLETED</button>
                    </div>
                    <table className="w-full text-left font-bold text-sm">
                      <thead className="bg-white text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        <tr><th className="px-10 py-5">Student Name</th><th className="px-10 py-5">Roll Number</th><th className="px-10 py-5">Department</th></tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {uploadedData.map(d => (
                          <tr key={d.id} className="hover:bg-gray-50/50 transition-colors">
                            <td className="px-10 py-5 font-black text-[#1E2124]">{d.name}</td>
                            <td className="px-10 py-5 text-gray-500 font-medium">{d.rollNo}</td>
                            <td className="px-10 py-5"><span className="text-[10px] font-black bg-orange-50 text-[#FF6B35] px-3 py-1 rounded-lg uppercase">{d.department}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                 </div>
               )}
            </div>
          )}

          {/* VIEW: STUDENT RECORDS */}
          {activeView === 'records' && (
            <div className="space-y-8 animate-in fade-in duration-500">
               <div className="flex items-center gap-5">
                  <div className="w-3 h-12 bg-gradient-to-b from-[#FF6B35] to-[#ff9b76] rounded-full shadow-lg shadow-orange-200"></div>
                  <h2 className="text-3xl font-[950] text-[#1E2124] tracking-tight">Student <span className="text-[#FF6B35]">Directory</span></h2>
               </div>
               <div className="bg-white p-12 rounded-[3rem] shadow-sm text-center border-2 border-dashed border-gray-100">
                  <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-8"><Search size={40} className="text-gray-200" /></div>
                  <h4 className="text-2xl font-black mb-2 text-[#1E2124] tracking-tight">Search Any Record</h4>
                  <p className="text-gray-400 font-bold text-sm">Enter roll number or name in the search bar to begin.</p>
               </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default ClerkDashboard;