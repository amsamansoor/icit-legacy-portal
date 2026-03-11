import { useState, useEffect } from 'react';
import React from 'react';
import { MoreVertical } from 'lucide-react';
interface Student {
    studentId: string;
    registrationNo: string;
    studentName: string;
    studentEmail: string;
    status: string;
}
interface Session {
    sessionId: string;
    name: string;
}

const StudentTable: React.FC = () => {
    const [sessions, setSessions] = useState<Session[]>([]);
    const [studentRecords, setStudentRecords] = useState<Student[]>([]);

    // Aapko yahan koi valid SessionId deni hogi jo aapke DB mein ho
    const fetchStudents = async (sessionId: string) => {
        try {
            // Swagger ke mutabiq url
            const url = `/api/Admin/students-by-session?SessionId=${sessionId}&StudentStatus=2`;
            const res = await fetch(url);
            const json = await res.json();

            if (json.isSuccess && Array.isArray(json.data)) {
                setStudentRecords(json.data);
            }
        } catch (err) {
            console.error("Error fetching students:", err);
        }
    };

    const handleVerify = async (studentId: string) => {
        const res = await fetch('/api/Admin/Student-Verify', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ studentId }) //
        });

        if (res.ok) {
            alert("Student verified successfully!");
            // Refresh the list
        }
    };

    useEffect(() => {
        const fetchAllSessions = async () => {
            const res = await fetch('/api/Admin/Sessions'); //
            const json = await res.json();
            if (json.isSuccess) setSessions(json.data);
        };
        fetchAllSessions();
    }, []);

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <select
                onChange={(e) => fetchStudents(e.target.value)}
                className="mb-4 p-2 border rounded"
            >
                <option value="">Select a Session</option>
                {sessions.map(s => (
                    <option key={s.sessionId} value={s.sessionId}>{s.name}</option>
                ))}
            </select>
            <h2 className="text-3xl font-bold text-[#1E2124]">Student Records</h2>

            <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-[#F8F9FB] border-b">
                        <tr className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                            <th className="px-6 py-4">ID</th>
                            <th className="px-6 py-4">Student Details</th>
                            <th className="px-6 py-4">CNIC</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {studentRecords.map((record) => (
                            <tr key={record.studentId} className="hover:bg-gray-50/80 transition-all">
                                <td className="px-6 py-4 font-bold text-gray-400">#{record.studentId}</td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-[#1E2124]">{record.studentName}</span>
                                        <span className="text-[10px] text-gray-400">{record.studentEmail}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-xs font-mono">{record.registrationNo}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${record.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                                        {record.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    {/*<button className="text-gray-400 hover:text-[#1E2124]"><MoreVertical size={18} /></button>*/}
                                    <button
                                        onClick={() => handleVerify(record.studentId)}
                                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-lg text-[10px] font-black transition-all shadow-sm"
                                    >
                                        VERIFY
                                    </button>
                                <button className="text-gray-400 hover:text-[#1E2124]">
                                    <MoreVertical size={18} />
                                </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentTable;