import React from 'react'
import SignupForm from '../components/Authentication/signup/signupForm'

const Signup: React.FC = () => {
  return (
    // Is div ki wajah se background white rahega aur Navbar top par show hogi
    <div className="min-h-screen w-full flex items-center justify-center bg-[#E7E9ED] px-6 py-20">
       <SignupForm />
    </div>
  )
}

export default Signup