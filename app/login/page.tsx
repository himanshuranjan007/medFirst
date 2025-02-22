"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        credentials: 'include'
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Login failed')
      }

      // Use replace instead of push to prevent back navigation
      router.replace('/dashboard')
      // Force a hard navigation to ensure middleware runs
      window.location.href = '/dashboard'
    } catch (error) {
      console.error("Login error:", error)
      alert(error instanceof Error ? error.message : "Login failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 bg-white">
        <div className="container relative flex min-h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="relative hidden h-full flex-col lg:flex">
            <div className="absolute inset-0">
              <img src="/login.jpg" className="object-cover w-full h-full opacity-80" alt="Login Background" />
            </div>
          </div>
          <div className="lg:p-8">
            <Card className="mx-auto max-w-sm transform transition-transform duration-300 hover:scale-105">
              <CardHeader className="space-y-1">
                <CardTitle className="text-center text-2xl">Login</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="hover:border-orange-500 focus:border-transparent focus:ring-0 border border-gray-300"
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        required
                        className="hover:border-orange-500 focus:border-transparent focus:ring-0 border border-gray-300"
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0"
                        onClick={() => setShowPassword(!showPassword)}
                        type="button"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        <span className="sr-only">Toggle password visibility</span>
                      </Button>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90" type="submit">
                    Login
                  </Button>
                  <div className="text-center text-sm">
                    <Link href="/forgot-password" className="text-primary hover:underline">
                      Forgot your password?
                    </Link>
                  </div>
                  <div className="text-center text-sm">
                    {"Don't have an account? "}
                    <Link href="/register" className="text-primary hover:underline">
                      Register
                    </Link>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

