import React from "react";
import { LayoutDashboard, ShieldCheck, GraduationCap, UserCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Student Dashboard",
    desc: "Semester-wise GPA/CGPA, fee dues, notifications and profile management.",
    icon: LayoutDashboard,
    to: "/student-dashboard",
  },
  {
    title: "Admin Dashboard",
    desc: "Student search, fee status flags, records overview, pagination & actions.",
    icon: ShieldCheck,
    to: "/admin-view",
  },
  {
    title: "Supervisor Dashboard",
    desc: "FYP groups, submissions, reviews, deadlines and evaluation workflow.",
    icon: GraduationCap,
    to: "/supervisor-dashboard",
  },
  {
    title: "Student Profile",
    desc: "Batch/session, roll no, CNIC, contacts, fee + academic summary card.",
    icon: UserCircle2,
    to: "/student-profile",
  },
];

const PortalHighlights: React.FC = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {cards.map((c) => {
        const Icon = c.icon;
        return (
          <Link
            key={c.title}
            to={c.to}
            className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition"
          >
            <div className="w-11 h-11 rounded-xl bg-[#E7E9ED] flex items-center justify-center group-hover:bg-[#FF6B35]/10 transition">
              <Icon className="w-5 h-5 text-[#1E2124] group-hover:text-[#FF6B35] transition" />
            </div>
            <h3 className="mt-4 font-semibold text-[#1E2124]">{c.title}</h3>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">{c.desc}</p>
            <div className="mt-4 text-sm font-semibold text-[#FF6B35]">Open →</div>
          </Link>
        );
      })}
    </div>
  );
};

export default PortalHighlights;
