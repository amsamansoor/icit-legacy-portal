import React from 'react'
import { Database, Archive, Users } from 'lucide-react'

const Features: React.FC = () => {
  const items = [
    { title: 'Centralized Data', desc: 'Unified student records and project metadata.', icon: <Database /> },
    { title: 'Project Archives', desc: 'Searchable final year projects and assets.', icon: <Archive /> },
    { title: 'Alumni Tracking', desc: 'Keep in touch with alumni and career paths.', icon: <Users /> }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {items.map((it) => (
        <div key={it.title} className="p-6 rounded-2xl bg-ps-dark text-ps-text-light shadow-lg flex flex-col items-start gap-4 hover:shadow-xl transition-shadow">
          <div className="p-3 rounded-lg bg-ps-accent/20 text-ps-accent">{it.icon}</div>
          <h4 className="font-semibold text-ps-text-light">{it.title}</h4>
          <p className="text-ps-text-muted text-sm">{it.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default Features
