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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" aria-live="polite">
      {sample.map((u) => (
        <article key={u.id} className="p-6 rounded-2xl bg-ps-dark text-ps-text-light shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="font-semibold text-ps-text-light mb-2">{u.title}</h3>
          <p className="text-ps-accent text-sm font-medium">by {u.student} • Batch {u.batch}</p>
          <p className="text-ps-text-muted text-sm mt-3">{u.excerpt}</p>
        </article>
      ))}
    </div>
  )
}

export default UpdatesGrid
