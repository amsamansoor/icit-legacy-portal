import React from 'react'
// Address bilkul sahi hai aapka
import AdminViewComponent from '../components/FaculityDashboard/faculityDashboard' 

const AdminDashboard: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#E7E9ED]">
      {/* Humne yahan se Sidebar hata diya hai kyunke 
         aapka FacultyDashboard component khud Sidebar handle kar raha hai.
      */}
      <AdminViewComponent /> 
    </div>
  )
}

export default AdminDashboard