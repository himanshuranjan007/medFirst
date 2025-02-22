"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Phone, Calendar } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

// Sample doctor data - In a real app, this would come from your backend
const doctorsData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialization: "Cardiologist",
    experience: "15 years",
    hospital: "AIIMS Delhi",
    rating: 4.8,
    image: "/doctor1.webp",
    availability: "Mon-Fri, 9AM-5PM",
    education: "MBBS, MD (Cardiology)",
    consultationFee: "₹1000",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialization: "Neurologist",
    experience: "12 years",
    hospital: "Apollo Hospital",
    rating: 4.7,
    image: "/doctor2.webp",
    availability: "Mon-Sat, 10AM-6PM",
    education: "MBBS, MD (Neurology)",
    consultationFee: "₹1200",
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    specialization: "Pediatrician",
    experience: "10 years",
    hospital: "Fortis Hospital",
    rating: 4.9,
    image: "/doctor3.jpg",
    availability: "Tue-Sun, 9AM-5PM",
    education: "MBBS, MD (Pediatrics)",
    consultationFee: "₹800",
  },
  // Add more doctors as needed
]

export default function DoctorsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSpecialization, setSelectedSpecialization] = useState("")

  const filteredDoctors = doctorsData.filter((doctor) => {
    const searchTerm = searchQuery.toLowerCase()
    return (
      (doctor.name.toLowerCase().includes(searchTerm) ||
        doctor.specialization.toLowerCase().includes(searchTerm) ||
        doctor.hospital.toLowerCase().includes(searchTerm)) &&
      (selectedSpecialization === "" || doctor.specialization === selectedSpecialization)
    )
  })

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Doctors</h1>

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search doctors by name, specialization, or hospital"
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredDoctors.map((doctor) => (
          <Card key={doctor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="relative h-48">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover"
              />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl mb-2">{doctor.name}</CardTitle>
              <div className="space-y-2">
                <p className="text-orange-600 font-medium">{doctor.specialization}</p>
                <p className="text-gray-600">{doctor.hospital}</p>
                <p className="text-sm text-gray-500">Experience: {doctor.experience}</p>
                <p className="text-sm text-gray-500">Rating: {doctor.rating}/5</p>
                <p className="text-sm text-gray-500">Fee: {doctor.consultationFee}</p>
                <p className="text-sm text-gray-500">{doctor.availability}</p>
              </div>
              <div className="mt-4 flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="flex-1" variant="outline">
                      <Calendar className="h-4 w-4 mr-2" />
                      Request Call
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Request Appointment with {doctor.name}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <p className="text-sm text-gray-500">
                        Please fill out the form below to request an appointment. We will contact you
                        to confirm the details.
                      </p>
                      <form className="space-y-4">
                        <Input placeholder="Your Name" />
                        <Input placeholder="Your Phone Number" type="tel" />
                        <Input placeholder="Preferred Date" type="date" />
                        <Input placeholder="Preferred Time" type="time" />
                        <textarea 
                          className="w-full p-2 border rounded-md" 
                          placeholder="Brief description of your medical concern"
                          rows={3}
                        />
                        <Button type="submit" className="w-full">Submit Request</Button>
                      </form>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button variant="outline" className="flex-1">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 