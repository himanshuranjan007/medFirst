"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    userType: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    department: "",
    services: "",
  })

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="userType">User Type</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, userType: value })}>
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
              <Label htmlFor="name">Name</Label>
              <Input
                className="hover:border-orange-500 focus:border-transparent focus:ring-0 border border-gray-300"
                id="name"
                required
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                className="hover:border-orange-500 focus:border-transparent focus:ring-0 border border-gray-300"
                id="email"
                type="email"
                required
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  className="hover:border-orange-500 focus:border-transparent focus:ring-0 border border-gray-300"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
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
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                className="hover:border-orange-500 focus:border-transparent focus:ring-0 border border-gray-300"
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                required
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="street">Street</Label>
              <Input
                className="hover:border-orange-500 focus:border-transparent focus:ring-0 border border-gray-300"
                id="street"
                required
                onChange={(e) => setFormData({ ...formData, street: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                className="hover:border-orange-500 focus:border-transparent focus:ring-0 border border-gray-300"
                id="city"
                required
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Input
                className="hover:border-orange-500 focus:border-transparent focus:ring-0 border border-gray-300"
                id="state"
                required
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pincode">Pin Code</Label>
              <Input
                className="hover:border-orange-500 focus:border-transparent focus:ring-0 border border-gray-300"
                id="pincode"
                required
                onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
              />
            </div>
          
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, department: value })}>
                <SelectTrigger className="hover:border-orange-500 focus:border-orange-500">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="orthopedics">Orthopedics</SelectItem>
                  <SelectItem value="pediatrics">Pediatrics</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="services">Available Services</Label>
              <Textarea
                className="hover:border-orange-500 focus:border-transparent focus:ring-0 border border-gray-300"
                id="services"
                placeholder="OPD, Cancer Treatment, etc."
                required
                onChange={(e) => setFormData({ ...formData, services: e.target.value })}
              />
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-medium">Review your information</h3>
              <p className="text-sm text-muted-foreground">Please review your information before submitting</p>
            </div>
            <div className="space-y-2">
              <p><strong>User Type:</strong> {formData.userType}</p>
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Street:</strong> {formData.street}</p>
              <p><strong>City:</strong> {formData.city}</p>
              <p><strong>State:</strong> {formData.state}</p>
              <p><strong>Pincode:</strong> {formData.pincode}</p>
              <p><strong>Department:</strong> {formData.department}</p>
              <p><strong>Available Services:</strong> {formData.services}</p>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex min-h-screen" style={{ backgroundImage: "url('/register.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="flex-1 bg-white bg-opacity-50">
        <div className="container flex min-h-screen w-full items-center justify-center py-8">
          <Card className="w-full max-w-lg transform transition-transform duration-300 hover:scale-105">
            <CardHeader className="space-y-1">
              <CardTitle className="text-center text-2xl">Register</CardTitle>
              <div className="flex justify-center space-x-4">
                {[1, 2, 3].map((number) => (
                  <div
                    key={number}
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      step === number ? "bg-primary text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {number}
                  </div>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                {renderStep()}
                <div className="flex justify-between">
                  {step > 1 && (
                    <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                      Back
                    </Button>
                  )}
                  {step < 3 ? (
                    <Button
                      type="button"
                      className="ml-auto bg-primary hover:bg-primary/90"
                      onClick={() => setStep(step + 1)}
                    >
                      Continue
                    </Button>
                  ) : (
                    <Button type="submit" className="ml-auto bg-primary hover:bg-primary/90">
                      Register
                    </Button>
                  )}
                </div>
              </form>
              {step === 1 && (
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link href="/login" className="text-primary hover:underline">
                    Login
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

