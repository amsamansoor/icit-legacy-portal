import React from "react";
import ProgressBar from "../UI/ProgressBar";

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "BSCS (Batch 2020–2024)",
    text: "ICIT Legacy Portal ne meri academic history aur fee status ko ek hi jagah organize kar diya. Dashboard simple, fast aur professional hai.",
    score: 92,
  },
  {
    name: "Hamza Ali",
    role: "Supervisor",
    text: "FYP submissions track karna aur groups manage karna kaafi easy ho gaya. Clean UI ki wajah se students bhi quickly adapt kar lete hain.",
    score: 88,
  },
  {
    name: "Sara Malik",
    role: "Admin Office",
    text: "Student search, fee due flags aur semester-wise record ek click par mil jata hai. Proper pagination aur filters kaafi helpful hain.",
    score: 90,
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((t) => (
        <div key={t.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#1E2124] flex items-center justify-center text-white font-bold">
              {t.name.split(" ").map(s => s[0]).slice(0,2).join("")}
            </div>
            <div>
              <div className="font-semibold text-[#1E2124]">{t.name}</div>
              <div className="text-sm text-gray-500">{t.role}</div>
            </div>
          </div>

          <p className="mt-4 text-gray-600 leading-relaxed">{t.text}</p>

          <div className="mt-5">
            <ProgressBar value={t.score} label="Satisfaction" sublabel={`${t.score}%`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
