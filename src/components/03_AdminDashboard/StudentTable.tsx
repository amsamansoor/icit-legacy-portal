import React from 'react';
import { MoreVertical} from 'lucide-react';

const StudentTable: React.FC = () => {
    const studentRecords = [
        { studentId: "1", stdName: "Wali Khan", email: "wali@icit.com", cnic: "35201-1234567-1", registrationNo: "BCS-F20-001", status: "Active" },
        { studentId: "2", stdName: "Asad Rahim", email: "asad@icit.com", cnic: "35201-9876543-2", registrationNo: "BCS-F20-002", status: "Pending" },
        { studentId: "3", stdName: "Sajid Ali", email: "sajid@icit.com", cnic: "35201-5554443-3", registrationNo: "BCS-F20-003", status: "Active" },
        { studentId: "4", stdName: "Maria Khan", email: "maria@icit.com", cnic: "35201-2223331-4", registrationNo: "BCS-F20-004", status: "Inactive" },
        { studentId: "5", stdName: "Zainab Bibi", email: "zainab@icit.com", cnic: "35201-1112223-5", registrationNo: "BCS-F20-005", status: "Active" }
    ];

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
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
                                        <span className="font-bold text-[#1E2124]">{record.stdName}</span>
                                        <span className="text-[10px] text-gray-400">{record.email}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-xs font-mono">{record.cnic}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${record.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                                        {record.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="text-gray-400 hover:text-[#1E2124]"><MoreVertical size={18} /></button>
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