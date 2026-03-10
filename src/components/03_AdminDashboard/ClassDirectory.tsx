import React from 'react';

const ClassDirectory: React.FC = () => {
    // Ye data aap baad mein API se fetch kar sakti hain
    const studentList = [
        { id: 1, name: "Wali Khan", fName: "Saif khan", rollNo: "BCS-F20-001" }
    ];

    return (
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
    );
};

export default ClassDirectory;