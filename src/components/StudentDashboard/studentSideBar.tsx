import React, { useState } from 'react'
import { User, Edit3, Settings, LogOut, LayoutDashboard, Camera, BookOpen, Lock, Shield, Bell } from 'lucide-react'
import ProgressBar from '../UI/ProgressBar'
import Pagination from '../UI/Pagination'

const StudentDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [feePage, setFeePage] = useState(1);

  const studentData = {
    name: "Amsa Mansoor",
    handle: "@amsa",
    email: "amsa@gmail.com",
    rollNo: "BCS-F20-001",
    cnic: "35201-XXXXXXX-1",
    session: "2020-2024",
    mobile: "+92 300 1234567"
  }

  const feeRecords = [
    { sem: "1st Semester", voucher: "V-2021-01", amount: "45,000", status: "Paid" },
    { sem: "2nd Semester", voucher: "V-2021-02", amount: "45,000", status: "Paid" },
    { sem: "3rd Semester", voucher: "V-2022-01", amount: "48,000", status: "Paid" },
    { sem: "4th Semester", voucher: "V-2022-02", amount: "48,000", status: "Pending" },
    { sem: "5th Semester", voucher: "V-2023-01", amount: "52,000", status: "Paid" },
    { sem: "6th Semester", voucher: "V-2023-02", amount: "52,000", status: "Paid" },
    { sem: "7th Semester", voucher: "V-2024-01", amount: "55,000", status: "Pending" },
    { sem: "8th Semester", voucher: "V-2024-02", amount: "55,000", status: "Pending" },
  ];

  const academicResults = [
    {
      semester: "1st Semester",
      gpa: "3.85",
      cgpa: "3.85",
      grade: "A",
      subjects: [
        { name: "Introduction to ICT", marks: "88", gp: "4.0" },
        { name: "Programming Fundamentals", marks: "82", gp: "3.7" },
        { name: "English Composition", marks: "85", gp: "4.0" }
      ]
    },
    {
      semester: "2nd Semester",
      gpa: "3.70",
      cgpa: "3.78",
      grade: "A-",
      subjects: [
        { name: "Object Oriented Programming", marks: "78", gp: "3.7" },
        { name: "Digital Logic Design", marks: "85", gp: "4.0" },
        { name: "Calculus", marks: "72", gp: "3.3" }
      ]
    }
  ];

  const feePageSize = 4;
  const totalFeePages = Math.ceil(feeRecords.length / feePageSize);
  const feeSlice = feeRecords.slice((feePage - 1) * feePageSize, feePage * feePageSize);
  const paidCount = feeRecords.filter(f => f.status === "Paid").length;
  const feePaidPercent = Math.round((paidCount / feeRecords.length) * 100);

  const latestCgpa = Number(academicResults[academicResults.length - 1]?.cgpa ?? "0");
  const cgpaPercent = Math.round((latestCgpa / 4) * 100);

  return (
    <div className="flex h-screen w-full bg-[#E7E9ED] overflow-hidden">

      {/* SIDEBAR */}
      <aside className="w-72 bg-[#F8F9FB] border-r border-gray-200 flex flex-col justify-between py-8 px-6 flex-shrink-0">
        <div className="space-y-8">
          <div className="flex items-center gap-2 px-2 text-[#1E2124]">
            <div className="w-8 h-8 bg-[#FF6B35] rounded-lg flex items-center justify-center shadow-lg shadow-orange-200">
              <LayoutDashboard size={18} className="text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">Dashboard</span>
          </div>

          <nav className="space-y-2">
            {[
              { id: 'profile', label: 'Profile', icon: <User size={20} /> },
              { id: 'edit', label: 'Edit Profile', icon: <Edit3 size={20} /> },
              { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-semibold transition-all ${activeTab === item.id
                    ? 'bg-white text-[#FF6B35] shadow-sm'
                    : 'text-gray-500 hover:bg-gray-100/50'
                  }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-gray-200 flex items-center gap-3 px-2">
          <div className="w-10 h-10 rounded-full bg-[#1E2124] flex items-center justify-center text-white overflow-hidden shadow-sm">
            <User size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-[#1E2124] truncate">{studentData.name}</h4>
            <p className="text-xs text-gray-500 truncate">{studentData.handle}</p>
          </div>
          <button className="text-gray-400 hover:text-red-500 transition-colors">
            <LogOut size={18} />
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 overflow-y-auto p-8 md:p-12 scroll-smooth">
        <div className="max-w-5xl mx-auto space-y-10">

          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* LEFT PROFILE CARD */}
            <div className="w-full lg:w-[350px] sticky top-0">
              <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100">
                <div className="h-24 bg-[#1E2124]"></div>
                <div className="px-8 pb-8 -mt-12 text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-28 h-28 rounded-full border-4 border-white bg-gray-100 overflow-hidden mx-auto flex items-center justify-center shadow-md">
                      <User size={50} className="text-gray-400" />
                    </div>
                    <button className="absolute bottom-2 right-0 p-2 bg-[#FF6B35] text-white rounded-full shadow-lg border-2 border-white">
                      <Camera size={14} />
                    </button>
                  </div>
                  <h2 className="text-xl font-bold text-[#1E2124]">{studentData.name}</h2>
                  <p className="text-[#FF6B35] text-sm font-medium">{studentData.handle}</p>
                  <button className="mt-6 w-full py-3 bg-[#FF6B35] text-white rounded-2xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-orange-200">
                    Update Photo
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT AREA */}
            <div className="flex-1 w-full">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-gray-100 min-h-[500px]">

                {/* 1. PROFILE TAB */}
                {activeTab === 'profile' && (
                  <div className="space-y-12 animate-in fade-in duration-500">
                    <div>
                      <h3 className="text-xl font-extrabold text-[#1E2124] border-b pb-4 mb-6">Departmental Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InfoItem label="Roll Number" value={studentData.rollNo} />
                        <InfoItem label="Session" value={studentData.session} />
                        <InfoItem label="CNIC" value={studentData.cnic} />
                        <InfoItem label="Email" value={studentData.email} />
                        <InfoItem label="Mobile" value={studentData.mobile} />
                      </div>
                        <Pagination page={feePage} totalPages={totalFeePages} onChange={setFeePage} />
                    </div>

                    <div>
                      <h3 className="text-xl font-extrabold text-[#1E2124] border-b pb-4 mb-6">Fee Clearance Status</h3>
                      <div className="grid md:grid-cols-2 gap-5 mb-6">
                        <div className="p-5 rounded-2xl bg-[#F8F9FB] border border-gray-100">
                          <div className="text-sm text-gray-600">Overall Fee Paid</div>
                          <div className="mt-2"><ProgressBar value={feePaidPercent} label="Paid" sublabel={`${feePaidPercent}%`} /></div>
                        </div>
                        <div className="p-5 rounded-2xl bg-[#F8F9FB] border border-gray-100">
                          <div className="text-sm text-gray-600">CGPA Progress</div>
                          <div className="mt-2"><ProgressBar value={cgpaPercent} label="CGPA" sublabel={`${latestCgpa.toFixed(2)} / 4.00`} /></div>
                        </div>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-separate border-spacing-y-2">
                          <tbody>
                            {feeSlice.map((fee, index) => (
                              <tr key={index} className="bg-[#F8F9FB] group hover:bg-gray-50 transition-all">
                                <td className="py-4 pl-4 rounded-l-2xl text-sm font-bold text-[#1E2124]">{fee.sem}</td>
                                <td className="py-4 text-sm text-gray-500 font-mono">{fee.voucher}</td>
                                <td className="py-4 text-sm font-bold text-[#1E2124]">Rs. {fee.amount}</td>
                                <td className="py-4 pr-4 rounded-r-2xl">
                                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${fee.status === 'Paid' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                                    }`}>
                                    {fee.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* ACADEMIC RESULTS (YE MISSING THA AAPKE CODE MEIN) */}
                    <div>
                      <h3 className="text-xl font-extrabold text-[#1E2124] border-b pb-4 mb-6">Academic Transcript</h3>
                      <div className="space-y-6">
                        {academicResults.map((res, index) => (
                          <div key={index} className="bg-[#F8F9FB] rounded-[2rem] overflow-hidden border border-gray-100">
                            <div className="p-6 bg-white flex flex-wrap justify-between items-center gap-4 border-b border-gray-50">
                              <div className="flex items-center gap-3">
                                <div className="p-2 bg-orange-50 rounded-xl text-[#FF6B35]"><BookOpen size={20} /></div>
                                <h4 className="font-bold text-[#1E2124]">{res.semester}</h4>
                              </div>
                              <div className="flex gap-8">
                                <div className="text-center">
                                  <p className="text-[10px] font-bold text-gray-400 uppercase">GPA</p>
                                  <p className="text-sm font-black text-[#FF6B35]">{res.gpa}</p>
                                </div>
                                <div className="text-center border-l pl-8">
                                  <p className="text-[10px] font-bold text-gray-400 uppercase">Grade</p>
                                  <p className="text-sm font-black text-green-600">{res.grade}</p>
                                </div>
                              </div>
                            </div>
                            <div className="p-6 space-y-3">
                              {res.subjects.map((sub, sIdx) => (
                                <div key={sIdx} className="flex justify-between items-center text-sm">
                                  <span className="text-gray-600 font-medium">{sub.name}</span>
                                  <div className="flex gap-10">
                                    <span className="text-gray-400 text-xs tracking-tight">Marks: <b className="text-[#1E2124]">{sub.marks}</b></span>
                                    <span className="text-[#FF6B35] font-bold w-6 text-right">{sub.gp}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl font-extrabold text-[#1E2124] border-b pb-4 mb-6">Biography</h3>
                    <div className="p-8 bg-[#F8F9FB] rounded-[2rem] border border-dashed border-gray-200 text-sm text-gray-500 italic">
                      No biography added yet. Update your profile to tell us about your academic interests!
                    </div>
                  </div>
                )}

                {/* 2. EDIT PROFILE TAB */}
                {activeTab === 'edit' && (
                  <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
                    <h3 className="text-xl font-extrabold text-[#1E2124] border-b pb-4">Edit Profile</h3>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Full Name</label>
                          <input type="text" defaultValue={studentData.name} className="w-full px-6 py-4 bg-[#F8F9FB] border border-gray-100 rounded-2xl focus:outline-none focus:border-[#FF6B35]" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Mobile Number</label>
                          <input type="text" defaultValue={studentData.mobile} className="w-full px-6 py-4 bg-[#F8F9FB] border border-gray-100 rounded-2xl focus:outline-none focus:border-[#FF6B35]" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">Bio / Description</label>
                        <textarea rows={4} placeholder="Write about yourself..." className="w-full px-6 py-4 bg-[#F8F9FB] border border-gray-100 rounded-2xl focus:outline-none focus:border-[#FF6B35]"></textarea>
                      </div>
                      <button className="w-full py-4 bg-[#FF6B35] text-white rounded-2xl font-bold shadow-lg shadow-orange-200">Save Changes</button>
                    </div>
                  </div>
                )}

                {/* 3. SETTINGS TAB */}
                {activeTab === 'settings' && (
                  <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
                    <h3 className="text-xl font-extrabold text-[#1E2124] border-b pb-4">Account Settings</h3>
                    <div className="space-y-4">
                      <SettingItem icon={<Lock size={20} />} title="Change Password" desc="Update your security" />
                      <SettingItem icon={<Shield size={20} />} title="Privacy" desc="Manage visibility" />
                      <SettingItem icon={<Bell size={20} />} title="Notifications" desc="Manage alerts" />
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}

const InfoItem = ({ label, value }: { label: string, value: string }) => (
  <div className="p-5 bg-[#F8F9FB] rounded-2xl border border-transparent hover:border-[#FF6B35]/10 hover:bg-white hover:shadow-sm transition-all group">
    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 group-hover:text-[#FF6B35] transition-colors">{label}</p>
    <p className="text-sm font-bold text-[#1E2124]">{value}</p>
  </div>
)

const SettingItem = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="p-6 bg-[#F8F9FB] rounded-[2rem] flex items-center justify-between group hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100">
    <div className="flex items-center gap-4">
      <div className="p-3 bg-white rounded-xl text-gray-400 group-hover:text-[#FF6B35] shadow-sm">{icon}</div>
      <div>
        <h5 className="font-bold text-[#1E2124] text-sm">{title}</h5>
        <p className="text-xs text-gray-400">{desc}</p>
      </div>
    </div>
    <button className="px-4 py-2 text-[10px] font-bold text-[#FF6B35] uppercase bg-orange-50 rounded-lg">Manage</button>
  </div>
)

export default StudentDashboard