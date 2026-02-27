import React from "react";
import { CheckCircle2, Shield, BookOpen, UploadCloud } from "lucide-react";

const items = [
  { icon: Shield, title: "Secure Records", text: "A UI designed to handle student data, fee status, and academic results in a structured way." },
  { icon: BookOpen, title: "Semester Tracking", text: "GPA/CGPA views from the 1st to the final semester, including progress indicators." },
  { icon: UploadCloud, title: "FYP Submissions", text:"A project submission workflow (UI-level) specifically for 8th-semester students." },
  { icon: CheckCircle2, title: "Modern UX", text: "Sidebar, tabs, dropdowns, pagination, responsive layout, clean theme." },
];

const About: React.FC = () => {
  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">
        <br />
        <h1 className="text-3xl md:text-4xl font-bold  text-[#0c0b0b]">About ICIT Legacy Portal</h1>
         <br />
        <p className="mt-3 text-gray-600 leading-relaxed">
          
        The ICIT Legacy Portal is a modern university portal concept where a student's complete academic journey (GPA/CGPA, fee dues, profile, batch/session) and final year project submission workflow can be managed on a single platform.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.title} className="p-6 rounded-2xl bg-[#F8F9FB] border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#FF6B35]" />
                </div>
                <h3 className="mt-4 font-semibold text-[#1E2124]">{it.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{it.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-[#1E2124] text-white">
          <div className="text-lg font-semibold">Theme</div>
          <p className="mt-2 text-white/80">
            Base: <span className="font-semibold">Gray + White</span> | Accent: <span className="font-semibold">Warm Orange</span> (CTA/Highlights)
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-sm">#F8F9FB</span>
            <span className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-sm">#E7E9ED</span>
            <span className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-sm">#1E2124</span>
            <span className="px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-sm">#FF6B35</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
