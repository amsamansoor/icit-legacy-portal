import React from 'react'
import { Info, BookOpen, UserCheck, Layout, Database, Clock } from 'lucide-react'

const updatesData = [
  { 
    id: 1, 
    icon: <Info size={20} />, 
    title: 'Dept. Announcement', 
    subtitle: '28.12.2024', 
    isDark: true,
    bgImage: '/assets/heroImages/DeptAnnouncement.jpg' 
  },
  { 
    id: 2, 
    icon: <BookOpen size={20} />, 
    title: 'Curriculum Report', 
    subtitle: 'Cert. Reg10', 
    isDark: true,
    bgImage: '/assets/heroImages/CurriculumReport.jpg'
  },
  { 
    id: 3, 
    icon: <Database size={20} />, 
    title: 'Student Portal', 
    subtitle: 'Check Records', 
    isDark: true, 
    bgImage: '/assets/heroImages/StudentPortal.jpg'
  },
  { 
    id: 4, 
    icon: <Layout size={20} />, 
    title: 'Explore Projects', 
    subtitle: '05 March', 
    isDark: true, 
    bgImage: '/assets/heroImages/ExploreProject.jpg' 
  },
  { 
    id: 5, 
    icon: <UserCheck size={20} />, 
    title: 'Alumni Tracking', 
    subtitle: 'Active Now', 
    isDark: true, 
    bgImage: '/assets/heroImages/AlumniTracking.jpg'
  },
  { 
    id: 6, 
    icon: <Clock size={20} />, 
    title: 'Project Archive', 
    subtitle: 'Updated', 
    isDark: true, 
    bgImage: '/assets/heroImages/ProjectArchieve.jpg'
  },
]

const LatestCarousel: React.FC = () => {
  return (
    <section className="max-w-[1400px] mx-auto py-12 px-4 md:px-12 bg-[#E7E9ED] overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1E2124] text-center md:text-left">
        Latest Updates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {updatesData.map((item) => (
          <div 
            key={item.id}
            className={`relative p-8 rounded-[2rem] min-h-[200px] flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group`}
          >
            {/* 1. Background Image Layer */}
            {item.bgImage && (
              <div 
                className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${item.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            )}

            {/* 2. Overlay Layer (Contrast ke liye) */}
            <div className={`absolute inset-0 z-10 transition-colors ${
              item.isDark ? 'bg-black/60 group-hover:bg-black/50' : 'bg-white/70 group-hover:bg-white/60'
            }`} />

            {/* 3. Content Layer (Z-index high rakha hai takay text upar rahe) */}
            <div className="relative z-20 flex flex-col h-full justify-between">
              <div className="p-3 w-fit bg-orange-500/20 text-orange-500 rounded-xl">
                {item.icon}
              </div>

              <div className="mt-8">
                <h3 className={`text-xl font-bold leading-tight mb-1 ${item.isDark ? 'text-white' : 'text-[#1E2124]'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm font-medium ${item.isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {item.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LatestCarousel