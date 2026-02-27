import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast'; // --- TOASTER IMPORT ---
import Navbar from './components/HomePage/Navbar';
import Loader from './components/Loader/Loader';
import Footer from './components/HomePage/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Resetpassword from './components/Authentication/resetpassword/resetpasswordForm';
import Signup from './pages/signup';
import StudentView from './pages/StudentDashboard';
import AdminView from './pages/AdminView';
import SupervisorView from './pages/SupervisorDashboard';
import StudentProfile from './pages/StudentProfile';
import './index.css';

const AppLayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Maine timing thori kam kar di hai (1 sec)
    return () => clearTimeout(timer);
  }, [location]);

  const dashboardRoutes = ['/student-dashboard', '/admin-view', '/supervisor-dashboard', '/reset-password'];
  const isDashboard = dashboardRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-[#e2e3e5] flex flex-col">
      {/* --- TOASTER CONTAINER --- */}
      {/* Isay Loader ke upar rakha hai taake notifications hamesha nazar ayein */}

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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<Resetpassword />} />
        
          <Route path="/student-dashboard" element={<StudentView />} />
          <Route path="/admin-view" element={<AdminView />} />
          <Route path="/supervisor-dashboard" element={<SupervisorView />} />
          <Route path="/student-profile" element={<StudentProfile />} />
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