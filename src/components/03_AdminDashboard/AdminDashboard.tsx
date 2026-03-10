import React, { useState } from 'react';
import { 
  Users, 
  UserPlus, Settings,  
   X, BookOpen,
  Menu
} from 'lucide-react';
import AccountForm from './AccountForm';
import SessionTable from './SessionTable';
import ClassDirectory from './ClassDirectory';
import StudentTable from './StudentTable';
const AdminDashboard: React.FC = () => {
    const [activeView, setActiveView] = useState('session-mgmt'); // Changed from 'bulk-upload' to a valid view
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <div className="flex h-screen w-full bg-[#E7E9ED] overflow-hidden font-sans">

            {/* --- MOBILE OVERLAY (Point 3) --- */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[45] lg:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Toggle */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden fixed top-6 right-6 z-[60] p-3 bg-[#FF6B35] text-white rounded-xl shadow-lg"
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* --- SIDEBAR --- */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-80 bg-[#1E2124] text-white p-8 flex flex-col gap-8 transition-transform duration-300 lg:static lg:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center gap-3 px-2 border-b border-gray-700 pb-6">
                    <div className="w-10 h-10 bg-[#FF6B35] rounded-xl flex items-center justify-center font-bold shadow-lg shadow-orange-900/20">A</div>
                    <span className="text-xl font-bold tracking-tight">Admin <span className="text-[#FF6B35]">Portal</span></span>
                </div>

                <nav className="space-y-2 flex-1 mt-4">
                    <button onClick={() => { setActiveView('session-mgmt'); setIsMobileMenuOpen(false); }} className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold transition-all ${activeView === 'session-mgmt' ? 'bg-[#FF6B35] text-white' : 'text-gray-400 hover:bg-gray-800'}`}>
                        <BookOpen size={18} /> Session Management
                    </button>
                    <button onClick={() => { setActiveView('list'); setIsMobileMenuOpen(false); }} className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold transition-all ${activeView === 'list' ? 'bg-[#FF6B35] text-white' : 'text-gray-400 hover:bg-gray-800'}`}>
                        <Users size={18} /> Class Directory
                    </button>
                    <button onClick={() => { setActiveView('create-account'); setIsMobileMenuOpen(false); }} className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold transition-all ${activeView === 'create-account' ? 'bg-[#FF6B35] text-white' : 'text-gray-400 hover:bg-gray-800'}`}>
                        <UserPlus size={18} /> Account Creation
                    </button>
                    <button onClick={() => { setActiveView('manage-students'); setIsMobileMenuOpen(false); }} className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold transition-all ${activeView === 'manage-students' ? 'bg-[#FF6B35] text-white' : 'text-gray-400 hover:bg-gray-800'}`}>
                        <Settings size={18} /> Student Records
                    </button>
                </nav>
            </aside>

            {/* --- MAIN CONTENT --- */}
            <main className="flex-1 overflow-y-auto p-10">
                <div className="max-w-6xl mx-auto">

                    {/* 1. SESSION MANAGEMENT */}
                    {activeView === 'session-mgmt' && <SessionTable />}
                    {/* 2. CLASS DIRECTORY */}
                    {activeView === 'list' && <ClassDirectory />}
                    {/* 3. ACCOUNT CREATION (Updated with name attributes) */}
                    {activeView === 'create-account' && <AccountForm />}
                    {/* 4. STUDENT RECORDS */}
                    {activeView === 'manage-students' && <StudentTable />}
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;