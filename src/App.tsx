import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/HomePage/Navbar'
import Footer from './components/HomePage/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/signup'
import StudentView from './pages/StudentDashboard' 
import AdminView from './pages/AdminView'          
import './index.css'

// Ek chota component banaya hai jo layout handle karega
const AppLayout = () => {
  const location = useLocation();
  // Dashboard paths check karein
  const isDashboard = location.pathname === '/student-dashboard' || location.pathname === '/admin-view';

  return (
    <div className="min-h-screen bg-[#E7E9ED] text-navy flex flex-col">
      {/* Agar dashboard nahi hai to hi Navbar dikhao */}
      {!isDashboard && <Navbar />}
      
      <main className={`${isDashboard ? 'h-screen w-full' : 'container mx-auto px-4 py-8 pt-24 md:pt-20 flex-1'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/student-dashboard" element={<StudentView />} />
          <Route path="/admin-view" element={<AdminView />} />
        </Routes>
      </main>

      {!isDashboard && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App