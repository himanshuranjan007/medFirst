"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function OPDRegistrationPage() {
  const [step, setStep] = useState(1)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" required className="hover:border-orange-500 focus:border-orange-500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required className="hover:border-orange-500 focus:border-orange-500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" type="number" required className="hover:border-orange-500 focus:border-orange-500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="contact">Contact Number</Label>
              <Input id="contact" type="tel" required className="hover:border-orange-500 focus:border-orange-500"/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" required className="hover:border-orange-500 focus:border-orange-500" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pincode">Pincode</Label>
              <Input id="pincode" required className="hover:border-orange-500 focus:border-orange-500"/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select >
                <SelectTrigger>
                  <SelectValue placeholder="Select department"  />
                </SelectTrigger >
                <SelectContent >
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="orthopedics">Orthopedics</SelectItem>
                  <SelectItem value="pediatrics">Pediatrics</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="date" >Date</Label>
              <div className="relative">
                <Input id="date" type="date" required className="w-full"  />
                <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="report">Upload Report (Optional)</Label>
              <Input className="hover:border-orange-500 focus:border-orange-500"
                id="report"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) {
                    setSelectedFile(file)
                  }
                }}
              />
              {selectedFile && <p className="text-sm text-muted-foreground">Selected file: {selectedFile.name}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="reason">Reason for Visit</Label>
              <Textarea id="reason" placeholder="Enter the reason for your visit" required  />
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 bg-white">
        <div className="container flex min-h-screen flex-col items-center justify-center py-8">
          <Card className="w-full max-w-lg transform transition-transform duration-300 hover:scale-105">
            <CardHeader className="space-y-1">
              <CardTitle className="text-center text-2xl">OPD Registration</CardTitle>
              <div className="flex justify-center space-x-4">
                {[1, 2, 3].map((number) => (
                  <div
                    key={number}
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      step === number
                        ? "bg-primary text-white"
                        : number < step
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > number ? "✓" : number}
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
                      Next
                    </Button>
                  ) : (
                    <Button type="submit" className="ml-auto bg-primary hover:bg-primary/90">
                      Register
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="hidden lg:flex flex-1 bg-orange-500"></div>
    </div>
  )
}

