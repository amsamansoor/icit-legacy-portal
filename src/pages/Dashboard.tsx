import React from 'react'
import { useAuth } from '../context/AuthContext'
import StudentView from './StudentView'
import AdminView from './AdminView'

const Dashboard: React.FC = () => {
  const { user } = useAuth()

  if (!user) return <div>Please login to view the dashboard.</div>

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      {user.role === 'admin' ? <AdminView /> : <StudentView />}
    </div>
  )
}

export default Dashboard
