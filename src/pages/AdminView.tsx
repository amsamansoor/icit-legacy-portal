import React from 'react'
// Address bilkul sahi hai aapka
import AdminDashboard from '../components/03_AdminDashboard/AdminDashboard' 

const AdminPage: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#E7E9ED]">
      {/* Humne yahan se Sidebar hata diya hai kyunke 
         aapka FacultyDashboard component khud Sidebar handle kar raha hai.
      */}
      <AdminDashboard/> 
    </div>
  )
}
//import StudentContext from '../context/StudentContext' 

const ClerkDashboard: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#E7E9ED]">
      {/* Humne yahan se Sidebar hata diya hai kyunke 
         aapka FacultyDashboard component khud Sidebar handle kar raha hai.
      */}
   <ClerkDashboard /> 
    </div>
  )
}
export default AdminPage;
