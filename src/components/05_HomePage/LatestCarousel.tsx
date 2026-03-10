import React from 'react'
import { Info, BookOpen, UserCheck, Layout, Database, Clock } from 'lucide-react'

// 1. Data array ko file ke andar define karna zaroori hai takay 'Cannot find name updates' wala error khatam ho
const updatesData = [
  { id: 1, icon: <Info size={20} />, title: 'Dept. Announcement', subtitle: '28.12.2024', isDark: true },
  { id: 2, icon: <BookOpen size={20} />, title: 'Curriculum Report', subtitle: 'Cert. Reg10', isDark: true },
  { id: 3, icon: <Database size={20} />, title: 'Student Portal', subtitle: 'Check Records', isDark: true, image: '/assets/thumb1.jpg' },
  { id: 4, icon: <Layout size={20} />, title: 'Explore Projects', subtitle: '05 March', isDark: false, image: '/assets/thumb2.jpg' },
  { id: 5, icon: <UserCheck size={20} />, title: 'Alumni Tracking', subtitle: 'Active Now', isDark: true, image: '/assets/thumb3.jpg' },
  { id: 6, icon: <Clock size={20} />, title: 'Project Archive', subtitle: 'Updated', isDark: false, image: '/assets/thumb4.jpg' },
]

const LatestCarousel: React.FC = () => {
  return (
    <section className="max-w-[1400px] mx-auto py-12 px-4 md:px-12 bg-[#E7E9ED] overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1E2124] text-center md:text-left">
        Latest Updates
      </h2>

      {/* Responsive Grid/Carousel Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {updatesData.map((item) => (
          <div 
            key={item.id}
            className={`relative p-6 rounded-[2rem] min-h-[180px] flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
              ${item.isDark ? 'bg-[#1E2124]' : 'bg-white shadow-sm border border-gray-200'}`}
          >
            <div className="flex justify-between items-start">
              <div className="p-2 bg-orange-500/10 text-orange-500 rounded-lg">
                {item.icon}
              </div>
              {item.image && (
                <div className="w-14 h-14 rounded-2xl overflow-hidden border border-gray-500/10 shadow-inner">
                    <img 
                        src={item.image} 
                        alt="" 
                        className="w-full h-full object-cover" 
                        onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/150/orange/white?text=ICIT" }} 
                    />
                </div>
              )}
            </div>

            <div className="mt-6">
              <h3 className={`text-lg font-bold leading-tight mb-1 ${item.isDark ? 'text-white' : 'text-[#1E2124]'}`}>
                {item.title}
              </h3>
              <p className={`text-sm font-medium opacity-70 ${item.isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LatestCarousel