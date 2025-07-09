"use client"

import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Filter } from "lucide-react"

export default function CandidatesPage() {
  const candidates = [
    {
      id: 1,
      name: "John Doe",
      title: "Hotel Manager",
      location: "Accra, Ghana",
      experience: "5 years",
      skills: ["Management", "Customer Service", "Leadership"],
      avatar: "JD",
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Receptionist",
      location: "Kumasi, Ghana",
      experience: "3 years",
      skills: ["Communication", "Front Desk", "Customer Service"],
      avatar: "JS",
    },
    {
      id: 3,
      name: "Mike Johnson",
      title: "Security Officer",
      location: "Tamale, Ghana",
      experience: "4 years",
      skills: ["Security", "Surveillance", "Emergency Response"],
      avatar: "MJ",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Search Section */}
      <section className="bg-white py-6 sm:py-8 px-2 sm:px-6 border-b">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Find Candidates</h1>
            <p className="text-gray-600">Browse through qualified candidates for your hotel positions</p>
          </div>

          {/* Search Form */}
          <div className="bg-gray-50 rounded-lg p-2 sm:p-4 mb-4 sm:mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
              <div className="md:col-span-2">
                <Input
                  placeholder="Job title, skills, or candidate name"
                  className="h-12"
                />
              </div>
              <div>
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Choose Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-locations">All Locations</SelectItem>
                    <SelectItem value="accra">Accra</SelectItem>
                    <SelectItem value="kumasi">Kumasi</SelectItem>
                    <SelectItem value="tamale">Tamale</SelectItem>
                    <SelectItem value="cape-coast">Cape Coast</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Button className="bg-green-500 hover:bg-green-600 h-12 w-full">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Candidates Listing */}
      <section className="py-6 sm:py-10 px-2 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-gray-600">
              Showing {candidates.length} candidates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {candidates.map((candidate) => (
              <Card key={candidate.id} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                      {candidate.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{candidate.name}</h3>
                      <p className="text-sm text-gray-500">{candidate.title}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{candidate.location}</span>
                  </div>

                  <div className="text-sm text-gray-600 mb-4">
                    Experience: {candidate.experience}
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {candidate.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button className="bg-green-500 hover:bg-green-600 text-white flex-1">
                      View Profile
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
} 