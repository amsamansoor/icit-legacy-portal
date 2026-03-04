import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast'; 
import Navbar from './components/05_HomePage/Navbar';
import Loader from './components/06_Loader/Loader';
import Footer from './components/05_HomePage/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Resetpassword from './components/01_Authentication/resetpassword/resetpasswordForm';
import Signup from './pages/signup';
import StudentView from './pages/StudentDashboard';
import AdminView from './pages/AdminView';
import Clerkview from './pages/ClerkDashboard';

// --- Faculty Dashboard Updated Import ---
import FacultyDashboard from './components/04_FacultyDashboard/FacultyDashboard';

import './index.css';

const AppLayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); 
    return () => clearTimeout(timer);
  }, [location]);

  // Dashboard routes list including faculty
  const dashboardRoutes = [
    '/student-dashboard', 
    '/admin-view', 
    '/faculty-dashboard', 
    '/clerk-dashboard', 
    '/reset-password'
  ];
  const isDashboard = dashboardRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-[#e2e3e5] flex flex-col">
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
            borderRadius: '8px',
          },
          success: {
            iconTheme: {
              primary: '#FF6B00',
              secondary: '#fff',
            },
          },
        }} 
      />

      {loading && <Loader />}

      {!isDashboard && <Navbar />}

      <main className={`${isDashboard ? 'h-screen w-full' : 'container mx-auto px-4 py-8 pt-24 md:pt-20 flex-1'}`}>
        <Routes>
          {/* Main Website Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<Resetpassword />} />
        
          {/* Dashboard Routes */}
          <Route path="/student-dashboard" element={<StudentView />} />
          <Route path="/admin-view" element={<AdminView />} />
          
          {/* Faculty Dashboard Route */}
          <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
          
          <Route path="/clerk-dashboard" element={<Clerkview />} />
        </Routes>
      </main>

      {!isDashboard && <Footer />}
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      
        <AppLayout />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;