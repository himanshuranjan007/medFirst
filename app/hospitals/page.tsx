"use client"  // Add this to enable client-side functionality

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import hospitalsData from "./hospitalsData"

export default function HospitalsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter hospitals based on search query
  const filteredHospitals = hospitalsData.filter((hospital) => {
    const searchTerm = searchQuery.toLowerCase()
    return (
      hospital.name.toLowerCase().includes(searchTerm) ||
      hospital.address.city.toLowerCase().includes(searchTerm) ||
      hospital.address.state.toLowerCase().includes(searchTerm) ||
      hospital.departments.some(dept => dept.toLowerCase().includes(searchTerm))
    )
  })

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Our Partner Hospitals</h1>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search hospitals by name, city, state or department" 
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredHospitals.map((hospital) => (
          <Card key={hospital._id}>
            <CardHeader>
              <CardTitle>{hospital.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <strong>Address:</strong> {hospital.address.street}, {hospital.address.city}, {hospital.address.state}{" "}
                {hospital.address.postalCode}
              </p>
              <p>
                <strong>Phone:</strong> {hospital.phone}
              </p>
              <p>
                <strong>Email:</strong> {hospital.email}
              </p>
              <p>
                <strong>Departments:</strong> {hospital.departments.join(", ")}
              </p>
              <p>
                <strong>Rating:</strong> {hospital.ratings} / 5
              </p>
              <Button className="mt-4" asChild>
                <a href={hospital.website} target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredHospitals.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          No hospitals found matching your search criteria.
        </div>
      )}
    </div>
  )
}

