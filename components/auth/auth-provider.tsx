"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type User = {
  id: string
  name: string
  email: string
  avatar?: string
  bio?: string
  role: "user" | "designer" | "merchant"
  createdAt: string
  designs?: number
  followers?: number
  following?: number
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  updateProfile: (data: Partial<User>) => Promise<boolean>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // 模拟从本地存储加载用户
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  // 模拟登录功能
  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // 模拟API调用延迟
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // 简单验证 - 实际应用中应该调用API
      if (email && password.length >= 6) {
        // 模拟用户数据
        const mockUser: User = {
          id: "user-" + Math.random().toString(36).substr(2, 9),
          name: email.split("@")[0],
          email,
          role: "user",
          createdAt: new Date().toISOString(),
          designs: 0,
          followers: 0,
          following: 0,
        }

        setUser(mockUser)
        localStorage.setItem("user", JSON.stringify(mockUser))
        return true
      }
      return false
    } catch (error) {
      console.error("Login error:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  // 模拟注册功能
  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true)
    try {
      // 模拟API调用延迟
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // 简单验证 - 实际应用中应该调用API
      if (name && email && password.length >= 6) {
        // 模拟用户数据
        const mockUser: User = {
          id: "user-" + Math.random().toString(36).substr(2, 9),
          name,
          email,
          role: "user",
          createdAt: new Date().toISOString(),
          designs: 0,
          followers: 0,
          following: 0,
        }

        setUser(mockUser)
        localStorage.setItem("user", JSON.stringify(mockUser))
        return true
      }
      return false
    } catch (error) {
      console.error("Registration error:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  // 登出功能
  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  // 更新个人资料
  const updateProfile = async (data: Partial<User>) => {
    setIsLoading(true)
    try {
      // 模拟API调用延迟
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (user) {
        const updatedUser = { ...user, ...data }
        setUser(updatedUser)
        localStorage.setItem("user", JSON.stringify(updatedUser))
        return true
      }
      return false
    } catch (error) {
      console.error("Update profile error:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
