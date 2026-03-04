import * as React from 'react'
import {
    Users, UserCircle, Fingerprint, UserPlus, Settings, Mail, ShieldCheck, Shield
} from '../Icons'

const AdminDashboard: React.FC = () => {
    const [activeView, setActiveView] = React.useState('list');
    const [isSending, setIsSending] = React.useState(false);

    const [formData, setFormData] = React.useState({
        fullName: '',
        userName: '',
        email: '',
        password: '',
        role: 'Student'
    });

    const studentList = [
        {
            id: 1, name: "Amsa Mansoor", fName: "Mansoor Ahmed", rollNo: "BCS-F20-001",
            cnic: "35201-1234567-1", city: "Lahore", dob: "12-05-2002",
            gpa1: "3.85", gpa2: "3.70", feeStatus: "Paid", cgpa: "3.78",
            results: [
                { sem: "1st Semester", gpa: "3.85", subjects: ["Programming Fundamentals", "Calculus", "English"] },
                { sem: "2nd Semester", gpa: "3.70", subjects: ["OOP", "Discrete Structures", "Digital Logic"] }
            ]
        }
    ];

    const handleCreateAccount = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);

        const apiUrl = '/api/Account/Account';

        // ✅ FINAL ATTEMPT: FLAT structure + PascalCase + Numeric Role
        // image_a0b2f9.png ke mutabiq backend ko ye fields direct chahiye
        const payload = {
            FullName: formData.fullName,
            UserName: formData.userName,
            Email: formData.email,
            Password: formData.password,
            Role: formData.role === 'Admin' ? 1 : 2
        };

        try {
            console.log('Final Payload Sending:', payload);

            const res = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload),
            });

            const responseData = await res.json().catch(() => ({ message: "Server Error" }));

            if (!res.ok) {
                console.error('Backend Response:', responseData);
                throw new Error(JSON.stringify(responseData));
            }

            alert("Account Created Successfully");
            setFormData({ fullName: '', userName: '', email: '', password: '', role: 'Student' });
        } catch (err) {
            const message = err instanceof Error ? err.message : String(err);
            alert(`Failed: ${message}`);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="flex h-screen w-full bg-[#E7E9ED] overflow-hidden font-sans">
            <aside className="w-80 bg-[#1E2124] text-white p-8 flex flex-col gap-8 flex-shrink-0">
                <div className="flex items-center gap-3 px-2 border-b border-gray-700 pb-6">
                    <div className="w-10 h-10 bg-[#FF6B35] rounded-xl flex items-center justify-center font-bold shadow-lg shadow-orange-900/20">A</div>
                    <span className="text-xl font-bold tracking-tight">Admin <span className="text-[#FF6B35]">Portal</span></span>
                </div>

                <div className="space-y-6 flex-1">
                    <nav className="space-y-1 mt-4">
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
                </div>
            </aside>

            <main className="flex-1 overflow-y-auto p-10">
                <div className="max-w-6xl mx-auto">
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
                                                    <button onClick={() => setActiveView('student-detail')} className="px-4 py-2 bg-gray-100 rounded-lg text-xs font-bold">View</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {activeView === 'create-account' && (
                        <div className="max-w-2xl mx-auto space-y-8 animate-in zoom-in-95 duration-300">
                            <div className="text-center">
                                <h2 className="text-3xl font-black text-[#1E2124]">System Registration</h2>
                                <p className="text-gray-500 font-medium">Register users for ICIT Legacy Portal</p>
                            </div>

                            <form onSubmit={handleCreateAccount} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 space-y-5">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Full Name</label>
                                    <div className="relative">
                                        <UserCircle className="absolute left-4 top-3.5 text-[#FF6B35]" size={18} />
                                        <input
                                            required
                                            type="text"
                                            placeholder="Enter Full Name"
                                            className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-4 outline-none transition-all font-bold text-sm"
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Username</label>
                                        <div className="relative">
                                            <Fingerprint className="absolute left-4 top-3.5 text-[#FF6B35]" size={18} />
                                            <input
                                                required
                                                type="text"
                                                placeholder="UserName"
                                                className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-4 outline-none transition-all font-bold text-sm"
                                                value={formData.userName}
                                                onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Role</label>
                                        <div className="relative">
                                            <Shield className="absolute left-4 top-3.5 text-[#FF6B35]" size={18} />
                                            <select
                                                className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-4 outline-none transition-all font-bold text-sm appearance-none"
                                                value={formData.role}
                                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                            >
                                                <option value="Student">Student</option>
                                                <option value="Admin">Admin</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-3.5 text-[#FF6B35]" size={18} />
                                        <input
                                            required
                                            type="email"
                                            placeholder="......@gmail.com"
                                            className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-4 outline-none transition-all font-bold text-sm"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Password</label>
                                    <div className="relative">
                                        <ShieldCheck className="absolute left-4 top-3.5 text-[#FF6B35]" size={18} />
                                        <input
                                            required
                                            type="text"
                                            placeholder="Password@123"
                                            className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-4 outline-none transition-all font-bold text-sm"
                                            value={formData.password}
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <button
                                    disabled={isSending}
                                    type="submit"
                                    className="w-full py-4 bg-[#1E2124] hover:bg-[#FF6B35] text-white rounded-2xl font-black uppercase tracking-widest shadow-lg transition-all"
                                >
                                    {isSending ? "CREATING..." : "REGISTER ACCOUNT"}
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}

export default AdminDashboard;