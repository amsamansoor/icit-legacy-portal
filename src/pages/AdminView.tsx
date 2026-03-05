import React from 'react'
// Address aapka bilkul sahi tha, hum ise import kar rahe hain
import AdminDashboardComponent from '../components/03_AdminDashboard/AdminDashboard'

/**
 * MAIN COMPONENT: AdminPage
 * Ye component aapki main screen ko render karega.
 */
const AdminPage: React.FC = () => {
    return (
        <div className="w-full h-screen bg-[#E7E9ED]">
            {/* Yahan humne AdminDashboard ka component call kiya hai.
          Iske andar sidebar aur forms pehle se maujood hain.
      */}
            <AdminDashboardComponent />
        </div>
    )
}

/**
 * CLERK VIEW:
 * Filhal ise alag rakha hai taake infinite loop na bane.
 */
export const ClerkPage: React.FC = () => {
    return (
        <div className="w-full h-screen bg-[#E7E9ED] flex items-center justify-center">
            <div className="text-center p-10 bg-white rounded-3xl shadow-xl">
                <h1 className="text-2xl font-black text-[#1E2124]">Clerk Dashboard</h1>
                <p className="text-gray-500 mt-2">Content for Clerk will be integrated here.</p>
            </div>
        </div>
    )
}

// Ye sab se zaroori line hai: Is file se AdminPage ko default export kar rahe hain
export default AdminPage;