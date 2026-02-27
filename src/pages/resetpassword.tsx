import React from 'react';
// 1. Check karein ke path bilkul sahi ho
import LoginForm from '../components/Authentication/resetpassword/resetpasswordForm'; 

const ResetPasswordPage = () => {
  return (
    // 2. "page-wrapper" ki jagah Tailwind classes use karein taake design nazar aaye
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default ResetPasswordPage;