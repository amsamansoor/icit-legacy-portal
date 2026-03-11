import React, { useState,useEffect } from 'react';
import { Plus, X } from 'lucide-react';

interface Session {
    sessionId: string;
    name: string;
    startYear: string;
    endYear: string;
}
const SessionTable: React.FC = () => {
    // Local States
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [sessionData, setSessionData] = useState({
        Name: '',
        startDate: '',
        endDate: ''
    });
    const [sessionsList, setSessionsList] = useState<Session[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSessionData(prev => ({ ...prev, [name]: value }));
    };

    const handleAddSession = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        try {
            const res = await fetch('/api/Admin/CreateSession', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(sessionData),
            });
            if (res.ok) {
                alert(`New Session "${sessionData.Name}" Created!`);
                setIsModalOpen(false);
                setSessionData({ Name: '', startDate: '', endDate: '' });
            }
        } catch (err) {
            console.error("Session API Error:", err);
            alert("Error creating session");
        } finally {
            setIsSending(false);
        }
    };

    const fetchSessions = async () => {
        try {
            const res = await fetch('/api/Admin/Sessions');
            const jsonResponse = await res.json(); // Ye pura object hai

            // Swagger ke mutabiq asal list jsonResponse.data mein hai
            if (jsonResponse.isSuccess && Array.isArray(jsonResponse.data)) {
                setSessionsList(jsonResponse.data);
            } else {
                setSessionsList([]);
            }
        } catch (err) {
            console.error("Sessions fetch error:", err);
            setSessionsList([]);
        }
    };
    useEffect(() => {
        fetchSessions(); // <--- Ye call karna zaroori hai
    }, []);
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Header with Add Button */}
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
                                  <th className="px-6 py-4">Start Year</th>
                                  <th className="px-6 py-4">End Year</th>
                              </tr>
                         </thead>
                         <tbody className="divide-y divide-gray-50">
                              {sessionsList.map((session) => (
                                  <tr key={session.sessionId} className="hover:bg-gray-50/80 transition-all">
                                     <td className="px-6 py-4 font-bold text-sm text-[#1E2124]">{session.sessionId}</td>
                                     <td className="px-6 py-4 text-xs font-semibold text-gray-600">{session.name}</td>
                                     <td className="px-6 py-4 text-xs font-mono text-gray-500">{session.startYear}</td>
                                     <td className="px-6 py-4 text-xs font-mono text-gray-500">{session.endYear}</td>
                                  </tr>
                                    ))}
                          </tbody>
                       </table>
                  </div>
             </div>
            {/* SESSION MODAL - Ab ye isi file ka hissa hai */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-[#1E2124]/40 backdrop-blur-md z-50 flex items-center justify-center p-6">
                   <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-xl p-10 space-y-8 animate-in slide-in-from-bottom-4 duration-300">
                  <div className="flex justify-between items-center">
                       <h3 className="text-2xl font-bold">Create Session</h3>
                       <button onClick={() => setIsModalOpen(false)}><X className="text-gray-400" /></button>
                  </div>
                    <form onSubmit={handleAddSession} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-gray-500 uppercase">Batch Name</label>
                            <input required name="Name" placeholder="e.g. BCS-F24" className="w-full bg-gray-50 border rounded-2xl py-4 px-6 outline-none font-bold text-sm" value={sessionData.Name} onChange={handleInputChange} />
                        </div>
                       <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                             <label className="text-[11px] font-bold text-gray-500 uppercase">Start Date</label>
                                <input required name="startDate" type="date" className="w-full bg-gray-50 border rounded-2xl py-4 px-4 outline-none font-bold text-sm" value={sessionData.startDate} onChange={handleInputChange} />
                            </div>
                           <div className="space-y-2">
                                <label className="text-[11px] font-bold text-gray-500 uppercase">End Date</label>
                               <input required name="endDate" type="date" className="w-full bg-gray-50 border rounded-2xl py-4 px-4 outline-none font-bold text-sm" value={sessionData.endDate} onChange={handleInputChange} />
                           </div>
                       </div>
                        <button disabled={isSending} type="submit" className="w-full py-4 bg-[#FF6B35] text-white rounded-2xl font-black uppercase tracking-widest">
                            {isSending ? "CREATING..." : "Create Session"}
                       </button>
                   </form>
                </div>
               </div>
            )}
        </div>
    );
};

export default SessionTable;