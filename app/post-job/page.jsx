"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { useToast } from "@/components/ui/use-toast"
import Footer from "@/components/footer"

export default function PostJobPage() {
  const router = useRouter()
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    hotelName: "",
    location: "",
    contactNumber: "",
    tinNumber: "",
    address: "",
    hotelCategory: "",
    jobDescription: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    // Store hotel job data in localStorage for demo
    const jobData = {
      id: Date.now().toString(),
      ...formData,
      postedDate: new Date().toISOString(),
      status: "active",
      applicationsCount: 0,
    }
    const existingJobs = JSON.parse(localStorage.getItem("postedJobs") || "[]")
    existingJobs.push(jobData)
    localStorage.setItem("postedJobs", JSON.stringify(existingJobs))
    toast({
      title: "Job Posted Successfully!",
      description: "Your hotel job posting has been published and is now live.",
    })
    setIsSubmitting(false)
    router.push("/admin/dashboard")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-2 sm:px-6 py-6 sm:py-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Post a New Job</h1>
          <p className="text-gray-600">Fill out the details below to post your job opening</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hotel Job Posting</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 rounded">
                <strong>Notice:</strong> Yearly registration is <span className="font-bold">1000 Gh cedis</span> (subject to change).
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hotel Name *</label>
                <Input
                  name="hotelName"
                  value={formData.hotelName}
                  onChange={handleInputChange}
                  placeholder="e.g. Accra Grand Hotel"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                <Input
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="e.g. Accra, Ghana"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number *</label>
                <Input
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  placeholder="e.g. 0241234567"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">TIN Number *</label>
                <Input
                  name="tinNumber"
                  value={formData.tinNumber}
                  onChange={handleInputChange}
                  placeholder="e.g. C0001234567"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                <Input
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="e.g. 123 Main St, Accra"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Hotel Category *</label>
                <Select
                  value={formData.hotelCategory}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, hotelCategory: value }))}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select hotel category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-star">1-Star</SelectItem>
                    <SelectItem value="2-star">2-Star</SelectItem>
                    <SelectItem value="3-star">3-Star</SelectItem>
                    <SelectItem value="4-star">4-Star</SelectItem>
                    <SelectItem value="5-star">5-Star</SelectItem>
                    <SelectItem value="budget">Budget</SelectItem>
                    <SelectItem value="boutique">Boutique</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Description *</label>
                <Textarea
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Describe the job role, requirements, and any other relevant details."
                  required
                />
              </div>
              <div className="flex items-center gap-4 mt-4">
                <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-8" disabled={isSubmitting}>
                  {isSubmitting ? "Publishing..." : "Publish Job"}
                </Button>
                <Button type="button" variant="outline" onClick={() => router.back()}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}
