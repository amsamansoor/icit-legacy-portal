import React, { useState } from 'react';
import {
    Users, UserCircle, Fingerprint, Edit,
    UserPlus, Settings, Mail, ShieldCheck,
    Shield, UploadCloud, ChevronDown, FileSpreadsheet, Plus, X, BookOpen, Menu
} from 'lucide-react';

const AdminDashboard: React.FC = () => {
    const [activeView, setActiveView] = useState('bulk-upload');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Form States
    const [formData, setFormData] = useState({
        fullName: '', userName: '', email: '', password: '', role: 'Student'
    });

    const [sessionData, setSessionData] = useState({
        batchName: '', startDate: '', endDate: '', department: ''
    });

    // Student List
    const studentList = [
        {
            id: 1, name: "Wali Khan", fName: "Saif khan", rollNo: "BCS-F20-001",
            cnic: "35201-1234567-1", city: "Lahore", feeStatus: "Paid", cgpa: "3.78"
        }
    ];

    const handleCreateAccount = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);
        // Role Mapping: Admin=1, Clerk=2, Faculty=3, Student=4
        const roleId = formData.role === 'Admin' ? 1 : formData.role === 'Clerk' ? 2 : formData.role === 'Faculty' ? 3 : 4;


        console.log("Sending Data to Backend:", {
            FullName: formData.fullName,
            UserName: formData.userName,
            Email: formData.email,
            Password: formData.password,
            Role: roleId
        });

        try {
            const res = await fetch('/api/Account/Account', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    FullName: formData.fullName,
                    UserName: formData.userName,
                    Email: formData.email,
                    Password: formData.password,
                    Role: roleId
                }),
            });
            if (res.ok) {
                alert("Account Created Successfully");
                setFormData({ fullName: '', userName: '', email: '', password: '', role: 'Student' });
            }
        } catch (err) {
            alert("Error creating account");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="flex h-screen w-full bg-[#E7E9ED] overflow-hidden font-sans relative">

            {/* Mobile Toggle */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden absolute top-4 right-4 z-50 p-2 bg-[#1E2124] text-white rounded-lg">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar */}
            <aside className={`${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative z-40 w-80 h-full bg-[#1E2124] text-white p-8 flex flex-col gap-8 transition-transform duration-300 ease-in-out flex-shrink-0`}>
                <div className="flex items-center gap-3 px-2 border-b border-gray-700 pb-6">
                    <div className="w-10 h-10 bg-[#FF6B35] rounded-xl flex items-center justify-center font-bold shadow-lg">A</div>
                    <span className="text-xl font-bold tracking-tight">Admin <span className="text-[#FF6B35]">Portal</span></span>
                </div>
                <nav className="space-y-2 flex-1 mt-4">
                    <button onClick={() => { setActiveView('list'); setIsMobileMenuOpen(false); }} className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold transition-all ${activeView === 'list' ? 'bg-[#FF6B35] text-white' : 'text-gray-400 hover:bg-gray-800'}`}><Users size={18} /> Class Directory</button>
                    <button onClick={() => { setActiveView('bulk-upload'); setIsMobileMenuOpen(false); }} className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold transition-all ${activeView === 'bulk-upload' ? 'bg-[#FF6B35] text-white' : 'text-gray-400 hover:bg-gray-800'}`}><UploadCloud size={18} /> Student Bulk Upload</button>
                    <button onClick={() => { setActiveView('create-account'); setIsMobileMenuOpen(false); }} className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold transition-all ${activeView === 'create-account' ? 'bg-[#FF6B35] text-white' : 'text-gray-400 hover:bg-gray-800'}`}><UserPlus size={18} /> Account Creation</button>
                    <button onClick={() => { setActiveView('manage-students'); setIsMobileMenuOpen(false); }} className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold transition-all ${activeView === 'manage-students' ? 'bg-[#FF6B35] text-white' : 'text-gray-400 hover:bg-gray-800'}`}><Settings size={18} /> Student Records</button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-6 md:p-10">
                <div className="max-w-6xl mx-auto">

                    {/* 1. CLASS DIRECTORY */}
                    {activeView === 'list' && (
                        <div className="space-y-8 animate-in fade-in duration-500">
                            <h2 className="text-3xl font-black text-[#1E2124]">Class Directory</h2>
                            <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[600px]">
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
                                                <td className="px-8 py-5"><p className="font-bold text-[#1E2124]">{std.name}</p><p className="text-xs text-gray-400">{std.fName}</p></td>
                                                <td className="px-8 py-5 font-bold">{std.rollNo}</td>
                                                <td className="px-8 py-5 text-center"><button className="px-4 py-2 bg-gray-100 rounded-lg text-xs font-bold">View</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* 2. STUDENT BULK UPLOAD */}
                    {activeView === 'bulk-upload' && (
                        <div className="max-w-4xl mx-auto space-y-8">
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                <h2 className="text-3xl tracking-tighter text-[#1E2124]">Student Bulk Upload</h2>
                                <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 bg-[#1E2124] text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-[#FF6B35]"><Plus size={18} /> Add New Session</button>
                            </div>
                            <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100 space-y-8">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-gray-400 uppercase ml-2 tracking-widest">Select Session</label>
                                    <div className="relative">
                                        <select className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-4 px-6 outline-none font-bold text-sm appearance-none cursor-pointer">
                                            <option value="">-- Select Session --</option>
                                            <option value="2020-2024">Batch 2020 - 2024 (Fall)</option>
                                        </select>
                                        <ChevronDown className="absolute right-6 top-4 text-gray-400" size={20} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase ml-2 tracking-widest">Upload Excel File</label>
                                    <div className="relative group border-2 border-dashed border-gray-200 hover:border-[#FF6B35] rounded-[2rem] p-6 md:p-10 bg-gray-50/50 flex flex-col items-center justify-center cursor-pointer text-center">
                                        <input type="file" accept=".xlsx, .xls" className="absolute inset-0 opacity-0 cursor-pointer" />
                                        <FileSpreadsheet className="text-[#FF6B35] mb-4" size={32} />
                                        <p className="text-gray-600 font-bold">Drag & Drop Excel file here or <span className="text-[#FF6B35]">click to select</span></p>
                                    </div>
                                </div>
                                <button className="w-full py-5 bg-[#1E2124] hover:bg-[#FF6B35] text-white rounded-2xl font-black uppercase tracking-widest transition-all">Upload Students</button>
                            </div>
                        </div>
                    )}

                    {/* 3. ACCOUNT CREATION (With Correct Placeholders) */}
                    {activeView === 'create-account' && (
                        <div className="max-w-2xl mx-auto space-y-8">
                            <h2 className="text-3xl font-black text-[#1E2124] text-center">System Registration</h2>
                            <form onSubmit={handleCreateAccount} className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100 space-y-5">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Full Name</label>
                                    <div className="relative">
                                        <UserCircle className="absolute left-4 top-3.5 text-[#FF6B35]" size={18} />
                                        <input required type="text" placeholder="e.g. Wali Khan" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-4 outline-none font-bold text-sm" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Username</label>
                                        <div className="relative"><Fingerprint className="absolute left-4 top-3.5 text-[#FF6B35]" size={18} /><input required type="text" placeholder="username123" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-4 outline-none font-bold text-sm" value={formData.userName} onChange={(e) => setFormData({ ...formData, userName: e.target.value })} /></div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Role</label>
                                        <div className="relative"><Shield className="absolute left-4 top-3.5 text-[#FF6B35]" size={18} /><select className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-10 outline-none font-bold text-sm appearance-none cursor-pointer" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })}><option value="Student">Student</option><option value="Faculty">Faculty</option><option value="Clerk">Clerk</option><option value="Admin">Admin</option></select><ChevronDown className="absolute right-4 top-3.5 text-gray-400" size={18} /></div>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Email</label>
                                    <div className="relative"><Mail className="absolute left-4 top-3.5 text-[#FF6B35]" size={18} /><input required type="email" placeholder="student@icit.com" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-4 outline-none font-bold text-sm" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} /></div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Password</label>
                                    <div className="relative"><ShieldCheck className="absolute left-4 top-3.5 text-[#FF6B35]" size={18} /><input required type="password" placeholder="••••••••" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-4 outline-none font-bold text-sm" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} /></div>
                                </div>
                                <button disabled={isSending} type="submit" className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest transition-all ${isSending ? 'bg-gray-400' : 'bg-[#1E2124] hover:bg-[#FF6B35] text-white shadow-lg'}`}>{isSending ? "CREATING..." : "REGISTER ACCOUNT"}</button>
                            </form>
                        </div>
                    )}

                    {/* 4. STUDENT RECORDS (Fixed Section) */}
                    {activeView === 'manage-students' && (
                        <div className="space-y-8 animate-in fade-in duration-500">
                            <h2 className="text-3xl font-black text-[#1E2124]">Academic Management</h2>
                            <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-[600px]">
                                    <thead className="bg-[#F8F9FB] border-b text-gray-400 uppercase text-[10px] font-black">
                                        <tr><th className="px-8 py-5">Student</th><th className="px-8 py-5">Fee Status</th><th className="px-8 py-5">Action</th></tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50 font-bold">
                                        {studentList.map(s => (
                                            <tr key={s.id} className="hover:bg-gray-50/50 transition-all">
                                                <td className="px-8 py-5">{s.name}</td>
                                                <td className="px-8 py-5"><span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-[10px]">{s.feeStatus}</span></td>
                                                <td className="px-8 py-5"><Edit size={16} className="text-gray-400 cursor-pointer hover:text-black" /></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-[#1E2124]/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
                    <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl p-8 space-y-6 relative">
                        <button onClick={() => setIsModalOpen(false)} className="absolute right-6 top-6 p-2 bg-gray-100 rounded-xl"><X size={20} /></button>
                        <h3 className="text-2xl font-black text-[#1E2124]">Add New Session</h3>
                        <div className="space-y-1">
                            <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Batch Name</label>
                            <div className="relative"><BookOpen className="absolute left-4 top-3.5 text-[#FF6B35]" size={18} /><input required type="text" placeholder="Enter Batch Name" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-4 outline-none font-bold text-sm" value={sessionData.batchName} onChange={(e) => setSessionData({ ...sessionData, batchName: e.target.value })} /></div>
                        </div>
                        <button onClick={() => setIsModalOpen(false)} className="w-full py-4 bg-[#1E2124] text-white rounded-2xl font-black uppercase tracking-widest mt-4">Confirm & Create</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;