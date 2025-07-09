"use client"

import { useState } from "react"
import { Search, MapPin, Filter, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import Link from "next/link"
import JobCard from "@/components/job-card"
import Footer from "@/components/footer"

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCity, setSelectedCity] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedJobType, setSelectedJobType] = useState("")

  const allJobs = [
    {
      id: 1,
      company: "Accra Grand Hotel",
      location: "Accra, Ghana",
      title: "Hotel Manager",
      type: "Full-time",
      skills: ["Management", "Customer Service", "Organization"],
      logo: "A",
      description: "Oversee daily operations of a busy hotel in Accra, ensuring guest satisfaction and smooth facility management.",
      posted: "2 days ago",
      category: "management",
    },
    {
      id: 2,
      company: "Kumasi Royal Hotel",
      location: "Kumasi, Ghana",
      title: "Cleaner",
      type: "Part-time",
      skills: ["Cleaning", "Attention to Detail", "Time Management"],
      logo: "K",
      description: "Responsible for maintaining cleanliness and hygiene in hotel rooms and common areas.",
      posted: "1 day ago",
      category: "cleaning",
    },
    {
      id: 3,
      company: "Cape Coast Beach Hotel",
      location: "Cape Coast, Ghana",
      title: "Receptionist",
      type: "Full-time",
      skills: ["Communication", "Front Desk", "Customer Service"],
      logo: "C",
      description: "Greet guests, manage bookings, and provide information about hotel services and local attractions.",
      posted: "3 days ago",
      category: "reception",
    },
    {
      id: 4,
      company: "Takoradi StayEasy Hotel",
      location: "Takoradi, Ghana",
      title: "Cook",
      type: "Full-time",
      skills: ["Cooking", "Menu Planning", "Food Safety"],
      logo: "T",
      description: "Prepare daily meals for hotel guests, ensuring quality and hygiene standards are met.",
      posted: "1 week ago",
      category: "cooking",
    },
    {
      id: 5,
      company: "Tamale Guest Hotel",
      location: "Tamale, Ghana",
      title: "Security Officer",
      type: "Full-time",
      skills: ["Security", "Surveillance", "Emergency Response"],
      logo: "T",
      description: "Ensure the safety and security of hotel guests and property during assigned shifts.",
      posted: "4 days ago",
      category: "security",
    },
    {
      id: 6,
      company: "Sunyani Hotel Hub",
      location: "Sunyani, Ghana",
      title: "Maintenance Worker",
      type: "Full-time",
      skills: ["Repairs", "Plumbing", "Electrical Work"],
      logo: "S",
      description: "Handle routine maintenance and repairs for hotel facilities and equipment.",
      posted: "5 days ago",
      category: "maintenance",
    },
  ]

  const filteredJobs = allJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCity = !selectedCity || job.location.toLowerCase().includes(selectedCity.toLowerCase())
    const matchesCategory = !selectedCategory || job.category === selectedCategory
    const matchesJobType = !selectedJobType || job.type === selectedJobType

    return matchesSearch && matchesCity && matchesCategory && matchesJobType
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Search Section */}
      <section className="bg-white py-6 sm:py-8 px-2 sm:px-6 border-b">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Find Your Dream Job</h1>
            <p className="text-gray-600">Discover {allJobs.length} job opportunities in Ghana</p>
          </div>

          {/* Search Form */}
          <div className="bg-gray-50 rounded-lg p-2 sm:p-4 mb-4 sm:mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
              <div className="md:col-span-2">
                <Input
                  placeholder="Job title, keywords, or company"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="h-12"
                />
              </div>
              <div>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Choose City" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-cities">All Cities</SelectItem>
                    <SelectItem value="accra">Accra</SelectItem>
                    <SelectItem value="kumasi">Kumasi</SelectItem>
                    <SelectItem value="tamale">Tamale</SelectItem>
                    <SelectItem value="cape-coast">Cape Coast</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Button className="bg-green-500 hover:bg-green-600 h-12 w-full">
                  <Search className="w-5 h-5 mr-2" />
                  Search Jobs
                </Button>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filters:</span>
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-categories">All Categories</SelectItem>
                <SelectItem value="management">Management</SelectItem>
                <SelectItem value="cleaning">Cleaning</SelectItem>
                <SelectItem value="reception">Reception</SelectItem>
                <SelectItem value="cooking">Cooking</SelectItem>
                <SelectItem value="security">Security</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedJobType} onValueChange={setSelectedJobType}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-types">All Types</SelectItem>
                <SelectItem value="Full-time">Full-time</SelectItem>
                <SelectItem value="Part-time">Part-time</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
                <SelectItem value="Remote">Remote</SelectItem>
              </SelectContent>
            </Select>

            {(selectedCity !== "all-cities" ||
              selectedCategory !== "all-categories" ||
              selectedJobType !== "all-types" ||
              searchTerm) && (
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCity("all-cities")
                  setSelectedCategory("all-categories")
                  setSelectedJobType("all-types")
                }}
                className="text-sm"
              >
                Clear Filters
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="py-6 sm:py-10 px-2 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-gray-600">
              Showing {filteredJobs.length} of {allJobs.length} jobs
            </p>
            <Select defaultValue="newest">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters to find more jobs.</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCity("all-cities")
                  setSelectedCategory("all-categories")
                  setSelectedJobType("all-types")
                }}
                className="bg-green-500 hover:bg-green-600"
              >
                Clear All Filters
              </Button>
            </div>
          )}

          {/* Pagination */}
          {filteredJobs.length > 0 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button className="bg-green-500 hover:bg-green-600">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          )}
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  )
}
