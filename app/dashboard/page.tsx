"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { LogOut, MapPin, User } from "lucide-react"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  const router = useRouter()
  const [userName, setUserName] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/user/profile", {
          credentials: 'include'
        })
        if (response.ok) {
          const data = await response.json()
          setUserName(data.name)
        } else {
          router.push("/login")
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error)
        router.push("/login")
      } finally {
        setLoading(false)
      }
    }

    fetchUserData()
  }, [router])

  if (loading) {
    return <div>Loading...</div>
  }

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
      })
      if (response.ok) {
        router.push("/login")
      }
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image src="/logonew.png" alt="Med First Logo" width={150} height={50} />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Nearby Hospitals Card */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Nearby Hospitals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div id="map" className="h-[400px] bg-gray-200 rounded-lg">
                {/* Map will be rendered here */}
              </div>
            </CardContent>
          </Card>

          {/* Connect with Doctor Card */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Connect with a Doctor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Add doctor connection functionality here */}
                <Button className="w-full">Find Available Doctors</Button>
              </div>
            </CardContent>
          </Card>

          {/* Medicine Store Card */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Medicine Store</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Add medicine store functionality here */}
                <Button className="w-full">Browse Medicines</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
} 