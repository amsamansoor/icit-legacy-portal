import React from 'react'

type Update = {
  id: number
  title: string
  student: string
  batch: string
  excerpt?: string
}

const sample: Update[] = [
  { id: 1, title: 'Smart Attendance System', student: 'Aisha Khan', batch: '2023' , excerpt:'IoT-based attendance with QR fallback.'},
  { id: 2, title: 'Blockchain Voting', student: 'Bilal Ahmed', batch: '2022', excerpt:'Immutable voting for student unions.'},
  { id: 3, title: 'AI Grading Assistant', student: 'Hina Rizvi', batch: '2023', excerpt:'Assistive grading using ML.'},
  { id: 4, title: 'Campus Navigation AR', student: 'Omar Farooq', batch: '2021', excerpt:'AR wayfinding for new students.'}
]

const UpdatesGrid: React.FC = () => {
  return (
    /* Gap ko mobile par thoda kam kiya (gap-4) aur desktop par (md:gap-6) */
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" aria-live="polite">
      {sample.map((u) => (
        /* Mobile par padding p-5 ki hai takay screen space bache */
        <article 
          key={u.id} 
          className="p-5 md:p-6 rounded-2xl bg-ps-dark text-ps-text-light shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/5 hover:border-ps-accent/30"
        >
          {/* Heading mobile par thodi choti (text-base) aur desktop par (md:text-lg) */}
          <h3 className="font-bold text-ps-text-light text-base md:text-lg mb-2 leading-tight">
            {u.title}
          </h3>
          
          <p className="text-ps-accent text-xs md:text-sm font-semibold tracking-wide uppercase">
            by {u.student} • <span className="text-ps-text-muted">Batch {u.batch}</span>
          </p>
          
          <p className="text-ps-text-muted text-sm mt-3 line-clamp-2">
            {u.excerpt}
          </p>
        </article>
      ))}
    </div>
  )
}

export default UpdatesGrid