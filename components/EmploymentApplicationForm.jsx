import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

export default function EmploymentApplicationForm({ jobId, onSuccess }) {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    locationAddress: "",
    telephone: "",
    socialSecurityNumber: "",
    educationLevel: "",
    positionAppliedFor: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
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
    if (onSuccess) onSuccess()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Applicant Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
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
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Position Applied For *</label>
            <Input name="positionAppliedFor" value={formData.positionAppliedFor} onChange={handleInputChange} required />
          </div>
          <div className="flex items-center gap-4 mt-4">
            <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-8" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  )
} 