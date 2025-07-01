"use client"

import { useState, useEffect } from "react"
import { Eye, Download, Clock, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"

export default function ApplicationsPage() {
  const [applications, setApplications] = useState([])

  useEffect(() => {
    const storedApplications = JSON.parse(localStorage.getItem("applications") || "[]")
    setApplications(storedApplications)
  }, [])

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "reviewed":
        return "bg-blue-100 text-blue-800"
      case "accepted":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <Clock className="w-4 h-4" />
      case "reviewed":
        return <Eye className="w-4 h-4" />
      case "accepted":
        return <CheckCircle className="w-4 h-4" />
      case "rejected":
        return <XCircle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const downloadApplication = (application) => {
    const applicationText = `
Job Application Details

Name: ${application.firstName} ${application.lastName}
Email: ${application.email}
Phone: ${application.phone}
Experience: ${application.experience}
Expected Salary: $${application.expectedSalary}
Applied Date: ${new Date(application.appliedDate).toLocaleDateString()}
Status: ${application.status}

Cover Letter:
${application.coverLetter}
    `

    const blob = new Blob([applicationText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `application-${application.id}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const filterApplicationsByStatus = (status) => {
    if (status === "all") return applications
    return applications.filter((app) => app.status === status)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Applications</h1>
          <p className="text-gray-600">Track the status of your job applications</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Applications</p>
                  <p className="text-2xl font-bold text-gray-900">{applications.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-yellow-600">{filterApplicationsByStatus("pending").length}</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Accepted</p>
                  <p className="text-2xl font-bold text-green-600">{filterApplicationsByStatus("accepted").length}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Rejected</p>
                  <p className="text-2xl font-bold text-red-600">{filterApplicationsByStatus("rejected").length}</p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Applications List */}
        <Card>
          <CardHeader>
            <CardTitle>Application History</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="reviewed">Reviewed</TabsTrigger>
                <TabsTrigger value="accepted">Accepted</TabsTrigger>
                <TabsTrigger value="rejected">Rejected</TabsTrigger>
              </TabsList>

              {["all", "pending", "reviewed", "accepted", "rejected"].map((status) => (
                <TabsContent key={status} value={status} className="mt-6">
                  <div className="space-y-4">
                    {filterApplicationsByStatus(status).length === 0 ? (
                      <div className="text-center py-8">
                        <div className="text-gray-400 mb-2">
                          <Eye className="w-12 h-12 mx-auto" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">No applications found</h3>
                        <p className="text-gray-500">
                          {status === "all"
                            ? "You haven't applied to any jobs yet."
                            : `No ${status} applications found.`}
                        </p>
                      </div>
                    ) : (
                      filterApplicationsByStatus(status).map((application) => (
                        <div key={application.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                Job Application #{application.id.slice(-6)}
                              </h3>
                              <p className="text-gray-600 mb-2">
                                Applied on {new Date(application.appliedDate).toLocaleDateString()}
                              </p>
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span>Experience: {application.experience}</span>
                                <span>Expected: ${application.expectedSalary}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <Badge className={`${getStatusColor(application.status)} flex items-center gap-1`}>
                                {getStatusIcon(application.status)}
                                {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                              </Badge>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => downloadApplication(application)}
                                className="flex items-center gap-2"
                              >
                                <Download className="w-4 h-4" />
                                Download
                              </Button>
                            </div>
                          </div>

                          <div className="bg-gray-50 rounded-lg p-4">
                            <h4 className="font-medium text-gray-900 mb-2">Cover Letter Preview</h4>
                            <p className="text-sm text-gray-600 line-clamp-3">{application.coverLetter}</p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
