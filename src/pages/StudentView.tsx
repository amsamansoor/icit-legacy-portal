import React from 'react'
import { useAuth } from '../context/AuthContext'

const StudentView: React.FC = () => {
  const { user } = useAuth()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <aside className="p-6 rounded-2xl bg-ps-dark text-ps-text-light border-l-4 border-ps-accent shadow-lg">
        <h3 className="font-bold text-ps-text-light text-lg">{user?.name}</h3>
        <p className="text-ps-accent text-sm font-semibold">Role: Student</p>
        <p className="text-ps-text-muted text-sm">Batch: {user?.batch ?? '2023'}</p>
      </aside>
      <section className="md:col-span-2 space-y-4">
        <div className="p-6 rounded-2xl bg-ps-dark text-ps-text-light shadow-lg">
          <h4 className="font-semibold text-ps-text-light">Project Status</h4>
          <p className="text-ps-accent font-semibold mt-2">{user?.project ?? 'Under Review'}</p>
        </div>
        <div className="p-6 rounded-2xl bg-ps-dark text-ps-text-light shadow-lg">
          <h4 className="font-semibold text-ps-text-light">Documents</h4>
          <ul className="text-ps-text-muted list-disc list-inside space-y-1 mt-3">
            <li>Proposal.pdf</li>
            <li>FinalReport.docx</li>
            <li>Presentation.pptx</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default StudentView
