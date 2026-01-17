import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Role = 'student' | 'admin'

type User = {
  name: string
  role: Role
  batch?: string
  project?: string
}

type AuthContextValue = {
  user: User | null
  login: (user: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const raw = localStorage.getItem('icit_user')
      return raw ? JSON.parse(raw) : null
    } catch {
      return null
    }
  })
  const navigate = useNavigate()

  useEffect(() => {
    if (user) localStorage.setItem('icit_user', JSON.stringify(user))
    else localStorage.removeItem('icit_user')
  }, [user])

  const login = (u: User) => {
    setUser(u)
    navigate('/dashboard')
  }
  const logout = () => {
    setUser(null)
    navigate('/')
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
