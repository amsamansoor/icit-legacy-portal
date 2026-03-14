import React from "react";
import { Shield, BookOpen, UploadCloud } from "lucide-react";

// Aapka actual text data
const items = [
  { 
    icon: Shield, 
    title: "Secure Records", 
    text: "A UI designed to handle student data, fee status, and academic results in a structured way." 
  },
  { 
    icon: BookOpen, 
    title: "Semester Tracking", 
    text: "GPA/CGPA views from the 1st to the final semester, including progress indicators." 
  },
  { 
    icon: UploadCloud, 
    title: "FYP Submissions", 
    text: "A project submission workflow (UI-level) specifically for 8th-semester students." 
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* 1. NAVBAR */}
      <nav className="absolute top-0 left-0 w-full z-20 flex justify-between items-center px-10 py-6 text-white bg-transparent">
        <div className="flex items-center gap-2">
          <div className="bg-[#FF6B35] p-1 rounded text-lg">🎓</div>
          <span className="font-bold text-xl uppercase tracking-wider">ICIT Portal</span>
        </div>
        <ul className="hidden md:flex gap-8 text-sm font-semibold uppercase">
          <li className="hover:text-[#FF6B35] cursor-pointer transition-colors">Home</li>
          <li className="text-[#FF6B35] cursor-pointer">About</li>
          <li className="hover:text-[#FF6B35] cursor-pointer transition-colors">Course</li>
          <li className="hover:text-[#FF6B35] cursor-pointer transition-colors">Blog</li>
          <li className="hover:text-[#FF6B35] cursor-pointer transition-colors">Contact</li>
        </ul>
      </nav>

      {/* 2. HERO SECTION */}
      <div className="relative h-[60vh] w-full flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('/assets/heroImages/About.png')`, 
          }}
        >
          <div className="absolute inset-0 bg-slate-900/65"></div>
        </div>

        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          style={{ 
    WebkitTextStroke: "1px gray", // 1px thick orange stroke
    textShadow: "2px 2px 10px rgba(0,0,0,0.5)" // Thora shadow taake stroke saaf nazar aaye
  }}>
            Your Journey, Our Portal
          </h1>
        </div>
      </div>

      {/* 3. COURSES CONTENT SECTION */}
      <div className="max-w-[1100px] mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E2124]" style={{ 
    WebkitTextStroke: "1px #FF6B35", // 1px thick orange stroke
    textShadow: "2px 2px 10px rgba(0,0,0,0.5)" // Thora shadow taake stroke saaf nazar aaye
  }}>
          Portal Core Features
        </h2>
        <p className="mt-4 text-gray-500 text-base max-w-3xl mx-auto mb-16 leading-relaxed">
          The ICIT Legacy Portal is a modern university portal concept where a student's complete academic journey and final year project workflow can be managed on a single platform.
        </p>

        {/* 4. CARDS (Aapka text aur mera design color) */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <div 
                key={it.title} 
                className="p-10 rounded-2xl bg-[#FFF5F2] border border-[#FF6B35]/10 hover:bg-[#FFE8E0] transition-all duration-300 text-center group shadow-sm hover:shadow-md"
              >
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl font-bold text-[#1E2124] mb-4">{it.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {it.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* 5. FOOTER INFO CARD */}
        <div className="mt-24 p-10 py-2 font-bold rounded-[2rem] bg-[#1E2124] text-white flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
          {/* Accent decoration */}
          <div className="absolute top-0 left-0 w-2 h-2 bg-[#FF6B35]"></div>
          
          <div className="text-left">
            <p className="text-gray-400 mt-1">Gomal University Management System</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-mono">#F8F9FB</span>
            <span className="px-4 py-2 bg-[#FF6B35] rounded-lg text-sm font-bold shadow-lg shadow-[#FF6B35]/20">#FF6B35</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;