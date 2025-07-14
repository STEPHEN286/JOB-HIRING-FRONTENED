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
import Footer from "@/components/footer"

export default function JobApplicationPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const jobId = params.id

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    locationAddress: "",
    telephone: "",
    socialSecurityNumber: "",
    educationLevel: "",
    positionAppliedFor: "",
    cv: null,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({ ...prev, cv: file }))
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
      description: "Your employment application has been submitted successfully.",
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
      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Employment Application Form</h1>
          <p className="text-gray-600">Please Complete The Form:</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Applicant Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Grid layout for main fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <Input name="name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Age *</label>
                  <Input name="age" value={formData.age} onChange={handleInputChange} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location Address *</label>
                  <Input name="locationAddress" value={formData.locationAddress} onChange={handleInputChange} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telephone Number(s) *</label>
                  <Input name="telephone" value={formData.telephone} onChange={handleInputChange} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Social Security Number *</label>
                  <Input name="socialSecurityNumber" value={formData.socialSecurityNumber} onChange={handleInputChange} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Level Of Education *</label>
                  <Input name="educationLevel" value={formData.educationLevel} onChange={handleInputChange} required />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Position Applied For *</label>
                  <Input name="positionAppliedFor" value={formData.positionAppliedFor} onChange={handleInputChange} required />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Upload CV *</label>
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx,.odt,.rtf,.txt"
                    name="cv"
                    onChange={handleFileChange}
                    required
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-8" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
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
