import React, { useMemo, useState } from "react";
import { ClipboardList, Users, UploadCloud, Filter, Bell, ChevronDown, CheckCircle2, Clock, XCircle } from "lucide-react";
import ProgressBar from "../UI/ProgressBar";
import Pagination from "../UI/Pagination";

type Submission = {
  id: number;
  group: string;
  batch: string;
  title: string;
  status: "Pending" | "Reviewed" | "Revision";
  progress: number;
  submittedAt: string;
};

const SupervisorDashboard: React.FC = () => {
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
      {/* Sidebar */}
      <aside className="w-72 bg-[#1E2124] text-white p-6 flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold">Supervisor Panel</div>
            <div className="text-xs text-white/60">ICIT Legacy Portal</div>
          </div>
        </div>

        <nav className="space-y-2">
          <button onClick={() => setActive("submissions")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${active==="submissions" ? "bg-white/10" : "hover:bg-white/5"}`}>
            <ClipboardList className="w-5 h-5" /> Submissions
          </button>
          <button onClick={() => setActive("groups")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${active==="groups" ? "bg-white/10" : "hover:bg-white/5"}`}>
            <Users className="w-5 h-5" /> Groups
          </button>
          <button onClick={() => setActive("announcements")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${active==="announcements" ? "bg-white/10" : "hover:bg-white/5"}`}>
            <Bell className="w-5 h-5" /> Announcements
          </button>
        </nav>

        <div className="mt-auto p-4 rounded-2xl bg-white/5 border border-white/10">
          <div className="text-sm font-semibold">Quick Tip</div>
          <p className="mt-1 text-xs text-white/70 leading-relaxed">
            Filter se status choose karein, phir review actions add karne ke liye backend connect kar sakte hain.
          </p>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#1E2124]">Supervisor Dashboard</h1>
            <p className="text-gray-600">FYP submissions & groups overview (UI prototype)</p>
          </div>

          {/* Dropdown filter */}
          <div className="flex items-center gap-3">
            <div className="relative" onMouseLeave={() => setDropdownOpen(false)}>
              <button
                onClick={() => setDropdownOpen(o => !o)}
                className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center gap-2 hover:bg-gray-50"
              >
                <Filter className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-semibold text-[#1E2124]">Status: {filter}</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden">
                  {(["All","Pending","Reviewed","Revision"] as const).map((opt) => (
                    <button
                      key={opt}
                      onClick={() => { setFilter(opt as any); setPage(1); setDropdownOpen(false); }}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-50 ${filter===opt ? "bg-gray-50 font-semibold" : ""}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="px-4 py-2.5 bg-[#FF6B35] text-white rounded-xl font-semibold shadow-sm hover:bg-[#e85a24] flex items-center gap-2">
              <UploadCloud className="w-4 h-4" /> New Notice
            </button>
          </div>
        </div>

        {/* Content */}
        {active === "submissions" && (
          <div className="mt-6 grid lg:grid-cols-2 gap-6">
            {pageItems.map((s) => (
              <div key={s.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm text-gray-500">{s.group} • Batch {s.batch}</div>
                    <div className="mt-1 font-semibold text-[#1E2124]">{s.title}</div>
                  </div>
                  {statusPill(s.status)}
                </div>

                <div className="mt-5">
                  <ProgressBar value={s.progress} label="Progress" sublabel={`${s.progress}%`} />
                </div>

                <div className="mt-4 text-sm text-gray-500">
                  Submitted: <span className="font-semibold text-gray-700">{s.submittedAt}</span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <button className="px-4 py-2 rounded-xl bg-[#1E2124] text-white text-sm font-semibold hover:opacity-90">Open</button>
                  <button className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm font-semibold hover:bg-gray-50">Mark Reviewed</button>
                  <button className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm font-semibold hover:bg-gray-50">Request Revision</button>
                </div>
              </div>
            ))}

            <div className="lg:col-span-2">
              <Pagination page={page} totalPages={totalPages} onChange={setPage} />
            </div>
          </div>
        )}

        {active === "groups" && (
          <div className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-bold text-[#1E2124]">Groups</h2>
            <p className="mt-1 text-gray-600 text-sm">Yahan aap groups list + members + supervisor assignments show kar sakte hain.</p>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {["G-12", "G-08", "G-03"].map((g) => (
                <div key={g} className="p-5 rounded-2xl bg-[#F8F9FB] border border-gray-100">
                  <div className="font-semibold text-[#1E2124]">{g}</div>
                  <div className="mt-2 text-sm text-gray-600">Members: 3</div>
                  <div className="mt-3 flex -space-x-2">
                    {["AK","HA","SM"].map((i) => (
                      <div key={i} className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs font-bold text-[#1E2124]">{i}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {active === "announcements" && (
          <div className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-bold text-[#1E2124]">Announcements</h2>
            <div className="mt-4 space-y-3">
              {[
                { t: "Proposal Deadline", d: "Feb 10, 2026 tak proposal submit karein." },
                { t: "Mid Evaluation", d: "March first week mein evaluation schedule hoga." },
              ].map((a) => (
                <div key={a.t} className="p-4 rounded-2xl bg-[#F8F9FB] border border-gray-100">
                  <div className="font-semibold text-[#1E2124]">{a.t}</div>
                  <div className="mt-1 text-sm text-gray-600">{a.d}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupervisorDashboard;
