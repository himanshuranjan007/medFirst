"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"
import { Plus } from "lucide-react"
import React from 'react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 bg-white">
        <div className="container relative flex min-h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="relative hidden h-full flex-col lg:flex">
            <div className="absolute inset-0">
              <img src="/images/login.jpg" className="object-cover w-full h-full " alt="Login Background" />
            </div>
            
            <div className="relative z-20 mt-auto">
              
            </div>
          </div>
          <div className="lg:p-8">
            <Card className="mx-auto max-w-sm transform transition-transform duration-300 hover:scale-105">
              <CardHeader className="space-y-1">
                <CardTitle className="text-center text-2xl">Login</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="userType">User Type</Label>
                  <Select >
                    <SelectTrigger className="hover:border-orange-500 focus:border-orange-500">
                      <SelectValue placeholder="Select user type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hospital">Hospital</SelectItem>
                      <SelectItem value="doctor">Doctor</SelectItem>
                      <SelectItem value="patient">Patient</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="m@example.com" type="email" required className="hover:border-orange-500 focus:border-orange-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input id="password" type={showPassword ? "text" : "password"} required className="hover:border-orange-500 focus:border-orange-500" />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      <span className="sr-only">Toggle password visibility</span>
                    </Button>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90" type="submit">
                  Login
                </Button>
                <Button variant="outline" className="w-full" type="button">
                  Sign in with Google
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
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

