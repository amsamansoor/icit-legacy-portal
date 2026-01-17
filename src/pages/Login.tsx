import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

const Login: React.FC = () => {
  const { login } = useAuth()
  const [name, setName] = useState('')
  const [role, setRole] = useState<'student' | 'admin'>('student')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    login({ name: name || (role === 'student' ? 'Student User' : 'Admin User'), role })
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-ps-text-dark">Login / Signup</h2>
      <form onSubmit={submit} className="space-y-5 p-8 rounded-2xl bg-ps-dark text-ps-text-light shadow-lg">
        <div>
          <label className="block text-sm mb-2 text-ps-text-light font-semibold">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 rounded-lg bg-ps-bg border border-ps-text-muted/20 text-ps-text-dark focus:outline-none focus:ring-2 focus:ring-ps-accent" />
        </div>
        <div>
          <label className="block text-sm mb-2 text-ps-text-light font-semibold">Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value as any)} className="w-full p-3 rounded-lg bg-ps-bg border border-ps-text-muted/20 text-ps-text-dark focus:outline-none focus:ring-2 focus:ring-ps-accent">
            <option value="student">Student</option>
            <option value="admin">Faculty / Admin</option>
          </select>
        </div>
        <div className="flex gap-3 pt-4">
          <button type="submit" className="px-6 py-3 bg-ps-accent text-white rounded-full font-semibold hover:bg-ps-accent/90 transition transform hover:scale-105">Continue</button>
        </div>
      </form>
    </div>
  )
}

export default Login
