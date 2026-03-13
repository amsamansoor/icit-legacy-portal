import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  { name: "Ayesha Khan", role: "BSCS (Batch 2020–2024)", text: "“ICIT Legacy Portal organized my academic history and fee status all in one place.”" },
  { name: "Hamza Ali", role: "Supervisor", text: "“Tracking FYP submissions and managing groups has become quite easy with this UI.”" },
  { name: "Sara Malik", role: "Admin Office", text: "“Student search and fee due flags are available in just one click. Very helpful.”" },
  { name: "Zain Ahmed", role: "Developer", text: "“The integration of modern tools makes the portal extremely responsive.”" },
  { name: "Fatima Noor", role: "Student", text: "“Best experience for project submissions and tracking CGPA.”" },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold tracking-[0.2em] uppercase text-gray-800">Testimonials</h2>
          <div className="w-16 h-1 bg-[#FF6B35] mx-auto mt-2"></div>
        </div>

        <div className="relative px-12">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            navigation={{
              nextEl: ".button-next",
              prevEl: ".button-prev",
            }}
            breakpoints={{
              768: { slidesPerView: 3 }, // Isse side slides (Ayesha/Zain) nazar aayengi
            }}
            // '!overflow-visible' circle ko katne se rokta hai
            // 'pt-10' upar extra jagah deta hai taake circle scale ho sake
            className="testimonial-swiper !overflow-visible pt-10"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name}>
                {({ isActive }) => (
                  <div className={`flex flex-col items-center text-center transition-all duration-500 ${isActive ? 'scale-110 opacity-100' : 'scale-90 opacity-40'}`}>
                    
                    {/* Circle Section */}
                    <div className="relative mb-8">
                      {/* Shadow background */}
                      <div className="absolute inset-0 bg-gray-400/20 rounded-full translate-x-3 translate-y-1 -z-10"></div>
                      
                      {/* Main Initials Circle */}
                      <div className="w-28 h-28 rounded-full bg-[#1E2124] border-[6px] border-white shadow-xl flex items-center justify-center text-white text-3xl font-bold">
                        {t.name.split(" ").map(s => s[0]).join("").toUpperCase()}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mb-4">
                      <h3 className="font-bold text-xl text-[#1E2124]">{t.name}</h3>
                      <p className="text-[10px] text-[#FF6B35] font-bold uppercase tracking-widest mt-1">{t.role}</p>
                    </div>

                    <p className="text-gray-500 italic text-sm leading-relaxed max-w-[250px]">
                      {t.text}
                    </p>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrows */}
          <button className="button-prev absolute left-0 top-1/2 -translate-y-1/2 z-30 text-[#FF6B35] hover:scale-125 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button className="button-next absolute right-0 top-1/2 -translate-y-1/2 z-30 text-[#FF6B35] hover:scale-125 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;