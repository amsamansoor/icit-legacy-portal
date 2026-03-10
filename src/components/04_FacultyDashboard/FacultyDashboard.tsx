import React, { useMemo, useState } from "react";
import { ClipboardList, Users, UploadCloud, Filter, Bell, ChevronDown, CheckCircle2, Clock, XCircle } from "lucide-react";
import ProgressBar from "../07_UI/ProgressBar";
import Pagination from "../07_UI/Pagination";

type Submission = {
  id: number;
  group: string;
  batch: string;
  title: string;
  status: "Pending" | "Reviewed" | "Revision";
  progress: number;
  submittedAt: string;
};

const FacultyDashboard: React.FC = () => {
  const [active, setActive] = useState<"submissions" | "groups" | "announcements">("submissions");
  const [filter, setFilter] = useState<"All" | Submission["status"]>("All");
  const [page, setPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const data: Submission[] = [
    { id: 1, group: "G-12", batch: "2021–2025", title: "ICIT Legacy Portal", status: "Pending", progress: 70, submittedAt: "2026-01-22" },
    { id: 2, group: "G-08", batch: "2021–2025", title: "Smart Attendance System", status: "Reviewed", progress: 100, submittedAt: "2026-01-15" },
    { id: 3, group: "G-03", batch: "2020–2024", title: "Library Automation", status: "Revision", progress: 82, submittedAt: "2026-01-09" },
    { id: 4, group: "G-19", batch: "2021–2025", title: "Hostel Management", status: "Pending", progress: 55, submittedAt: "2026-01-28" },
    { id: 5, group: "G-05", batch: "2020–2024", title: "Career Portal", status: "Reviewed", progress: 100, submittedAt: "2026-01-04" },
    { id: 6, group: "G-10", batch: "2021–2025", title: "E-Learning Analytics", status: "Pending", progress: 64, submittedAt: "2026-01-30" },
  ];

  const filtered = useMemo(() => {
    if (filter === "All") return data;
    return data.filter(d => d.status === filter);
  }, [filter]);

  const pageSize = 4;
  const totalPages = Math.ceil(filtered.length / pageSize);
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

  const statusPill = (s: Submission["status"]) => {
    const base = "px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1";
    if (s === "Reviewed") return <span className={`${base} bg-green-50 text-green-700`}><CheckCircle2 className="w-3.5 h-3.5" />Reviewed</span>;
    if (s === "Revision") return <span className={`${base} bg-yellow-50 text-yellow-700`}><Clock className="w-3.5 h-3.5" />Revision</span>;
    return <span className={`${base} bg-red-50 text-red-700`}><XCircle className="w-3.5 h-3.5" />Pending</span>;
  };

  return (
    <div className="flex h-screen w-full bg-[#E7E9ED] overflow-hidden">
      {/* Sidebar Updated by Ayesha */}
      <aside className="w-72 bg-[#1E2124] text-white p-6 flex flex-col gap-6">
        <div className="flex items-center gap-3">
          {/* Stylish 'F' Icon for Faculty */}
          <div className="w-10 h-10 rounded-xl bg-[#FF6B35] flex items-center justify-center shadow-lg shadow-orange-900/20">
             <span className="text-white font-black text-xl  tracking-tighter" style={{ fontFamily: 'serif' }}>
                F
              </span>
          </div>
          <div>
            <div className="font-bold text-lg tracking-tight">Faculty Panel</div>
            {/* ICIT line removed as requested */}
          </div>
        </div>

        <nav className="space-y-2">
          <button 
            onClick={() => setActive("submissions")} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition font-semibold ${active==="submissions" ? "bg-[#FF6B35] text-white" : "text-white/70 hover:bg-white/5"}`}
          >
            <ClipboardList className="w-5 h-5" /> Submissions
          </button>
          <button 
            onClick={() => setActive("groups")} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition font-semibold ${active==="groups" ? "bg-[#FF6B35] text-white" : "text-white/70 hover:bg-white/5"}`}
          >
            <Users className="w-5 h-5" /> Groups
          </button>
          <button 
            onClick={() => setActive("announcements")} 
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition font-semibold ${active==="announcements" ? "bg-[#FF6B35] text-white" : "text-white/70 hover:bg-white/5"}`}
          >
            <Bell className="w-5 h-5" /> Announcements
          </button>
        </nav>

        <div className="mt-auto p-4 rounded-2xl bg-white/5 border border-white/10">
          <div className="text-sm font-semibold text-[#FF6B35]">Quick Tip</div>
          <p className="mt-1 text-xs text-white/70 leading-relaxed">
            Manage your student groups and review FYP progress efficiently from this panel.
          </p>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            {/* New Professional Headings */}
            <h1 className="text-2xl font-extrabold text-[#1E2124] tracking-tight">Academic Overview</h1>
            <p className="text-gray-500 font-medium">Manage and track project milestones</p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(o => !o)}
                className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center gap-2 hover:bg-gray-50"
              >
                <Filter className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-bold text-[#1E2124]">Filter: {filter}</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl z-50 overflow-hidden">
                  {(["All","Pending","Reviewed","Revision"] as const).map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setFilter(opt as any); setPage(1); setDropdownOpen(false); }}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-orange-50 ${filter===opt ? "text-[#FF6B35] font-bold bg-orange-50/50" : "text-gray-600"}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="px-4 py-2.5 bg-[#FF6B35] text-white rounded-xl font-bold shadow-lg shadow-orange-200 hover:opacity-90 flex items-center gap-2 transition-all">
              <UploadCloud className="w-4 h-4" /> Post Notice
            </button>
          </div>
        </div>

        {/* Dynamic Content Sections */}
        {active === "submissions" && (
          <div className="mt-8 grid lg:grid-cols-2 gap-6 animate-in fade-in duration-500">
            {pageItems.map((s) => (
              <div key={s.id} className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-7 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[10px] font-black text-[#FF6B35] uppercase tracking-widest">{s.group} • Batch {s.batch}</div>
                    <div className="mt-1 text-lg font-bold text-[#1E2124]">{s.title}</div>
                  </div>
                  {statusPill(s.status)}
                </div>

                <div className="mt-6">
                  <ProgressBar value={s.progress} label="Completion" sublabel={`${s.progress}%`} />
                </div>

                <div className="mt-6 flex items-center justify-between border-t pt-5">
                  <div className="text-xs text-gray-400 font-medium">
                    Date: <span className="text-[#1E2124] font-bold">{s.submittedAt}</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-xl bg-[#1E2124] text-white text-xs font-bold hover:opacity-90 transition-opacity">Review</button>
                    <button className="px-4 py-2 rounded-xl bg-gray-50 text-gray-600 text-xs font-bold border border-gray-100 hover:bg-gray-100 transition-colors">Details</button>
                  </div>
                </div>
              </div>
            ))}

            <div className="lg:col-span-2 mt-4">
              <Pagination page={page} totalPages={totalPages} onChange={setPage} />
            </div>
          </div>
        )}

        {active === "groups" && (
          <div className="mt-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-xl font-bold text-[#1E2124]">Registered Project Groups</h2>
            <p className="mt-1 text-gray-500 text-sm font-medium">Detailed list of all students under your supervision</p>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {["G-12", "G-08", "G-03"].map((g) => (
                <div key={g} className="p-6 rounded-[2rem] bg-[#F8F9FB] border border-transparent hover:border-orange-200 hover:bg-white hover:shadow-sm transition-all group">
                  <div className="font-bold text-[#1E2124] text-lg group-hover:text-[#FF6B35]">{g}</div>
                  <div className="mt-2 text-xs font-bold text-gray-400 uppercase tracking-tighter">Active Members: 03</div>
                  <div className="mt-4 flex -space-x-3">
                    {["AK","HA","SM"].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-white border-2 border-[#F8F9FB] flex items-center justify-center text-xs font-black text-[#1E2124] shadow-sm">{i}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {active === "announcements" && (
          <div className="mt-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 animate-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-xl font-bold text-[#1E2124]">Notice Board</h2>
            <div className="mt-6 space-y-4">
              {[
                { t: "Final Proposal Deadline", d: "Kindly ensure all groups submit by Feb 10, 2026.", date: "Today" },
                { t: "Mid-Term Evaluation", d: "The evaluation schedule will be posted in March first week.", date: "Yesterday" },
              ].map((a) => (
                <div key={a.t} className="p-5 rounded-2xl bg-[#F8F9FB] border border-gray-100 flex justify-between items-center group hover:bg-white hover:shadow-md transition-all">
                  <div>
                    <div className="font-bold text-[#1E2124] group-hover:text-[#FF6B35]">{a.t}</div>
                    <div className="mt-1 text-sm text-gray-500">{a.d}</div>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase bg-white px-3 py-1 rounded-full shadow-sm">{a.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultyDashboard;