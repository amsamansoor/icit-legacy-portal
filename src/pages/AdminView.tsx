import React, { useMemo, useState } from 'react'

type RecordItem = {
  id: number
  name: string
  batch: string
  project: string
}

const mock: RecordItem[] = [
  { id: 1, name: 'Aisha Khan', batch: '2023', project: 'Smart Attendance System' },
  { id: 2, name: 'Bilal Ahmed', batch: '2022', project: 'Blockchain Voting' },
  { id: 3, name: 'Hina Rizvi', batch: '2023', project: 'AI Grading Assistant' },
  { id: 4, name: 'Omar Farooq', batch: '2021', project: 'Campus Navigation AR' }
]

const AdminView: React.FC = () => {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return mock
    return mock.filter((r) => r.name.toLowerCase().includes(q) || r.project.toLowerCase().includes(q))
  }, [query])

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search students or projects" className="p-3 rounded-lg bg-ps-bg border border-ps-text-muted/20 text-ps-text-dark focus:outline-none focus:ring-2 focus:ring-ps-accent flex-1" />
      </div>
      <div className="overflow-x-auto rounded-2xl bg-ps-dark shadow-lg">
        <table className="w-full text-left text-ps-text-light">
          <thead>
            <tr className="bg-ps-accent/10 text-ps-text-light text-sm font-bold border-b border-ps-text-light/10">
              <th className="p-4">Name</th>
              <th className="p-4">Batch</th>
              <th className="p-4">Project</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r) => (
              <tr key={r.id} className="border-t border-ps-text-light/10 hover:bg-ps-accent/5 transition">
                <td className="p-4 text-ps-text-light">{r.name}</td>
                <td className="p-4 text-ps-accent font-semibold">{r.batch}</td>
                <td className="p-4 text-ps-text-muted">{r.project}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminView
