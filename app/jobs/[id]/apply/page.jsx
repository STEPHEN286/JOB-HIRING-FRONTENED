"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Upload, FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { useToast } from "@/components/ui/use-toast"

export default function JobApplicationPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const jobId = params.id

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    experience: "",
    expectedSalary: "",
    availableDate: "",
    coverLetter: "",
    resume: null,
    portfolio: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({ ...prev, resume: file }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Store application data in localStorage for demo
    const applicationData = {
      id: Date.now().toString(),
      jobId,
      ...formData,
      appliedDate: new Date().toISOString(),
      status: "pending",
    }

    const existingApplications = JSON.parse(localStorage.getItem("applications") || "[]")
    existingApplications.push(applicationData)
    localStorage.setItem("applications", JSON.stringify(existingApplications))

    toast({
      title: "Application Submitted!",
      description: "Your job application has been submitted successfully. You can track its status in your dashboard.",
    })

    setIsSubmitting(false)
    router.push("/dashboard/applications")
  }

  const generateApplicationPDF = () => {
    // In a real app, you would use a library like jsPDF to generate PDF
    const applicationText = `
Job Application

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}, ${formData.city}, ${formData.state} ${formData.zipCode}
Experience: ${formData.experience} years
Expected Salary: $${formData.expectedSalary}
Available Date: ${formData.availableDate}

Cover Letter:
${formData.coverLetter}

Portfolio: ${formData.portfolio}
    `

    const blob = new Blob([applicationText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `job-application-${jobId}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    toast({
      title: "Application Downloaded",
      description: "Your application has been downloaded as a text file.",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Apply for Job</h1>
          <p className="text-gray-600">Fill out the form below to apply for this position</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <Input name="firstName" value={formData.firstName} onChange={handleInputChange} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <Input name="lastName" value={formData.lastName} onChange={handleInputChange} required />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <Input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <Input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <Input name="address" value={formData.address} onChange={handleInputChange} />
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <Input name="city" value={formData.city} onChange={handleInputChange} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                  <Input name="state" value={formData.state} onChange={handleInputChange} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code</label>
                  <Input name="zipCode" value={formData.zipCode} onChange={handleInputChange} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Information */}
          <Card>
            <CardHeader>
              <CardTitle>Professional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience *</label>
                  <Select
                    value={formData.experience}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, experience: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="2-3">2-3 years</SelectItem>
                      <SelectItem value="4-5">4-5 years</SelectItem>
                      <SelectItem value="6-10">6-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expected Salary (Monthly)</label>
                  <Input
                    type="number"
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    placeholder="5000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Available Start Date</label>
                <Input type="date" name="availableDate" value={formData.availableDate} onChange={handleInputChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio/Website URL</label>
                <Input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  placeholder="https://your-portfolio.com"
                />
              </div>
            </CardContent>
          </Card>

          {/* Resume Upload */}
          <Card>
            <CardHeader>
              <CardTitle>Resume & Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Resume *</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <div className="text-sm text-gray-600 mb-2">
                    {formData.resume ? formData.resume.name : "Click to upload or drag and drop"}
                  </div>
                  <div className="text-xs text-gray-500 mb-4">PDF, DOC, DOCX (Max 5MB)</div>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    id="resume-upload"
                    required
                  />
                  <label htmlFor="resume-upload">
                    <Button type="button" variant="outline" className="cursor-pointer bg-transparent">
                      <FileText className="w-4 h-4 mr-2" />
                      Choose File
                    </Button>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cover Letter */}
          <Card>
            <CardHeader>
              <CardTitle>Cover Letter</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter *</label>
                <Textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows={6}
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Submit Buttons */}
          <div className="flex items-center gap-4">
            <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-8" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={generateApplicationPDF}
              className="flex items-center gap-2 bg-transparent"
            >
              <Download className="w-4 h-4" />
              Download Application
            </Button>
            <Button type="button" variant="ghost" onClick={() => router.back()}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
