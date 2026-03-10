import React, { useState } from 'react';
import { Fingerprint,UserCircle,Shield, Mail, ShieldCheck, ChevronDown } from 'lucide-react';

const AccountForm: React.FC = () => {
    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '', userName: '', email: '', password: '', role: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCreateAccount = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);
        const roleMapping: Record<string, number> = { 'Admin': 1, 'Clerk': 2, 'Faculty': 3, 'Student': 4 };
        const roleId = roleMapping[formData.role] || 4;

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
                setFormData({ fullName: '', userName: '', email: '', password: '', role: '' });
            }
        } catch (err) {
            console.error("Create Account API Error:", err);
            alert("Error creating account");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-in zoom-in-95 duration-300">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-[#1E2124]">System Registration</h2>
            </div>
            <form onSubmit={handleCreateAccount} className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 space-y-5">
                {/* Aapka registration form ka sara JSX bilkul same wahi copy paste karein jo AdminDashboard mein tha */}
                <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase ml-2">Full Name</label>
                    <div className="relative">
                        <UserCircle className="absolute left-4 top-3.5 text-[#FF6B35]" size={18} />
                        <input required name="fullName" type="text" placeholder="e.g. Wali Khan" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-4 outline-none font-bold text-sm" value={formData.fullName} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Username</label>
                        <div className="relative">
                            <Fingerprint className="absolute left-4 top-3.5 text-[#FF6B35]" size={18} />
                            <input required name="userName" type="text" placeholder="username123" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-4 outline-none font-bold text-sm" value={formData.userName} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-gray-400 uppercase ml-2">Role</label>
                        <div className="relative">
                            <Shield className="absolute left-4 top-3.5 text-[#FF6B35]" size={18} />
                            <select required name="role" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-4 outline-none font-bold text-sm appearance-none" value={formData.role} onChange={handleInputChange} >
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
                        <input required name="email" type="email" placeholder="student@icit.com" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-4 outline-none font-bold text-sm" value={formData.email} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Password</label>
                    <div className="relative">
                        <ShieldCheck className="absolute left-4 top-3.5 text-[#FF6B35]" size={18} />
                        <input required name="password" type="password" placeholder="••••••••" className="w-full bg-gray-50 border-2 border-transparent focus:border-[#FF6B35] rounded-2xl py-3 pl-12 pr-4 outline-none font-bold text-sm" value={formData.password} onChange={handleInputChange} />
                    </div>
                </div>
                <button disabled={isSending} type="submit" className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest transition-all ${isSending ? 'bg-gray-400' : 'bg-[#1E2124] hover:bg-[#FF6B35] text-white shadow-lg'}`}>{isSending ? "CREATING..." : "REGISTER ACCOUNT"}</button>
            </form>
        </div>
    );
};

export default AccountForm;