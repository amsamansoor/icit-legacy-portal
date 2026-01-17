import React from 'react'
import StudentDashboardComponent from '../components/StudentDashboard/studentSideBar'

const StudentDashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      {/* Hum yahan Navbar call nahi kar rahe kyunki Dashboard ka apna Sidebar hai */}
      <StudentDashboardComponent />
    </div>
  )
}

export default StudentDashboardPage