import React, { useState } from "react";
import { Mail, Phone, Contact, CalendarRange, Pencil, Save } from "lucide-react";
import ProgressBar from "../components/UI/ProgressBar";

const StudentProfile: React.FC = () => {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Amsa Mansoor",
    rollNo: "BCS-F20-001",
    batch: "2020–2024",
    email: "amsa@gmail.com",
    phone: "+92 300 1234567",
    cnic: "35201-XXXXXXX-1",
    cgpa: 3.78,
    feePaidPercent: 75,
  });

  const on = (k: keyof typeof profile, v: string) => setProfile(p => ({ ...p, [k]: v } as any));

  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#1E2124]">Student Profile</h1>
            <p className="mt-1 text-gray-600">Batch/session, contact info, CGPA & fee summary</p>
          </div>

          <button
            onClick={() => setEditing(e => !e)}
            className={`px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 shadow-sm
              ${editing ? "bg-[#1E2124] text-white" : "bg-[#FF6B35] text-white hover:bg-[#e85a24]"}`}
          >
            {editing ? <Save className="w-4 h-4" /> : <Pencil className="w-4 h-4" />}
            {editing ? "Save (UI)" : "Edit"}
          </button>
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          {/* Left Card */}
          <div className="lg:col-span-1 p-6 rounded-2xl bg-[#F8F9FB] border border-gray-100">
            <div className="w-14 h-14 rounded-2xl bg-[#1E2124] text-white flex items-center justify-center font-extrabold text-lg">
              {profile.name.split(" ").map(s => s[0]).slice(0,2).join("")}
            </div>
            <div className="mt-4 font-bold text-[#1E2124] text-xl">{profile.name}</div>
            <div className="mt-1 text-gray-600">{profile.rollNo}</div>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-700">
                <CalendarRange className="w-4 h-4 text-gray-500" />
                <span>Batch: <span className="font-semibold">{profile.batch}</span></span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-4 h-4 text-gray-500" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="w-4 h-4 text-gray-500" />
                <span>{profile.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Contact className="w-4 h-4 text-gray-500" />
                <span>{profile.cnic}</span>
              </div>
            </div>
          </div>

          {/* Right Form + Summary */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-gray-100">
              <h2 className="font-bold text-[#1E2124]">Profile Details</h2>

              <div className="mt-5 grid md:grid-cols-2 gap-4">
                {[
                  { k: "name", label: "Full Name" },
                  { k: "rollNo", label: "Roll No" },
                  { k: "batch", label: "Batch (From–To)" },
                  { k: "email", label: "Email" },
                  { k: "phone", label: "Mobile" },
                  { k: "cnic", label: "CNIC" },
                ].map((f) => (
                  <div key={f.k} className="space-y-2">
                    <div className="text-sm font-semibold text-gray-700">{f.label}</div>
                    <input
                      value={(profile as any)[f.k]}
                      onChange={(e) => on(f.k as any, e.target.value)}
                      disabled={!editing}
                      className={`w-full px-4 py-3 rounded-xl border outline-none transition
                        ${editing ? "bg-white border-gray-200 focus:border-[#FF6B35]" : "bg-gray-50 border-gray-100 text-gray-500"}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-100">
              <h2 className="font-bold text-[#1E2124]">Academic & Fee Summary</h2>

              <div className="mt-5 grid md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-[#F8F9FB] border border-gray-100">
                  <div className="text-sm text-gray-600">Current CGPA</div>
                  <div className="mt-1 text-3xl font-extrabold text-[#1E2124]">{profile.cgpa.toFixed(2)}</div>
                  <div className="mt-4">
                    <ProgressBar value={(profile.cgpa / 4) * 100} label="CGPA Progress" sublabel="out of 4.00" />
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#F8F9FB] border border-gray-100">
                  <div className="text-sm text-gray-600">Fee Status</div>
                  <div className="mt-1 text-3xl font-extrabold text-[#1E2124]">{profile.feePaidPercent}%</div>
                  <div className="mt-4">
                    <ProgressBar value={profile.feePaidPercent} label="Paid" sublabel="overall" />
                  </div>
                  <div className="mt-3 text-sm text-gray-600">
                    Note: Backend connect karke per-semester vouchers/dues show kar sakte hain.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
