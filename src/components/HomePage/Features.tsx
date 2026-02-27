import React from 'react'
import { Database, Archive, Users } from 'lucide-react'

const Features: React.FC = () => {
  const items = [
    { title: 'Centralized Data', desc: 'Unified student records and project metadata.', icon: <Database size={24} /> },
    { title: 'Project Archives', desc: 'Searchable final year projects and assets.', icon: <Archive size={24} /> },
    { title: 'Alumni Tracking', desc: 'Keep in touch with alumni and career paths.', icon: <Users size={24} /> }
  ]

  return (
    /* py-8 add kiya takay sections ke darmiyan gap rahay */
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8">
      {items.map((it) => (
        <div 
          key={it.title} 
          /* Mobile par items-center aur text-center kiya hai, md: (desktop) par items-start aur text-left */
          className="p-8 rounded-[2rem] bg-ps-dark text-ps-text-light shadow-lg flex flex-col items-center text-center md:items-start md:text-left gap-4 hover:shadow-2xl transition-all duration-300 border border-white/5 hover:border-ps-accent/20"
        >
          {/* Icon container ko thoda prominent kiya */}
          <div className="p-4 rounded-2xl bg-ps-accent/10 text-ps-accent flex items-center justify-center">
            {it.icon}
          </div>
          
          <h4 className="text-xl font-bold text-ps-text-light tracking-tight">
            {it.title}
          </h4>
          
          <p className="text-ps-text-muted text-sm leading-relaxed md:max-w-xs">
            {it.desc}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Features