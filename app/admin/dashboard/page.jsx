"use client"

import { useState, useEffect } from "react"
import { Eye, Users, Briefcase, TrendingUp, MessageSquare, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import Link from "next/link"

export default function AdminDashboard() {
  const [jobs, setJobs] = useState([])
  const [applications, setApplications] = useState([])

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("postedJobs") || "[]")
    const storedApplications = JSON.parse(localStorage.getItem("applications") || "[]")

    // Update job application counts
    const updatedJobs = storedJobs.map((job) => ({
      ...job,
      applicationsCount: storedApplications.filter((app) => app.jobId === job.id).length,
    }))

    setJobs(updatedJobs)
    setApplications(storedApplications)
  }, [])

  const updateApplicationStatus = (applicationId, newStatus) => {
    const updatedApplications = applications.map((app) =>
      app.id === applicationId ? { ...app, status: newStatus } : app,
    )
    setApplications(updatedApplications)
    localStorage.setItem("applications", JSON.stringify(updatedApplications))
  }

  const downloadApplicationData = () => {
    const csvContent = [
      ["Application ID", "Job ID", "Name", "Email", "Phone", "Applied Date", "Status"],
      ...applications.map((app) => [
        app.id,
        app.jobId,
        `${app.firstName} ${app.lastName}`,
        app.email,
        app.phone,
        new Date(app.appliedDate).toLocaleDateString(),
        app.status,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "applications-data.csv"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const stats = {
    totalJobs: jobs.length,
    activeJobs: jobs.filter((job) => job.status === "active").length,
    totalApplications: applications.length,
    pendingApplications: applications.filter((app) => app.status === "pending").length,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage your job postings and applications</p>
          </div>
          <div className="flex items-center gap-4">
            <Button
              onClick={downloadApplicationData}
              variant="outline"
              className="flex items-center gap-2 bg-transparent"
            >
              <Download className="w-4 h-4" />
              Export Data
            </Button>
            <Link href="/post-job">
              <Button className="bg-green-500 hover:bg-green-600 text-white">Post New Job</Button>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Jobs</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalJobs}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Jobs</p>
                  <p className="text-2xl font-bold text-green-600">{stats.activeJobs}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Applications</p>
                  <p className="text-2xl font-bold text-purple-600">{stats.totalApplications}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Reviews</p>
                  <p className="text-2xl font-bold text-orange-600">{stats.pendingApplications}</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="jobs" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="jobs">Job Postings</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
          </TabsList>

          {/* Jobs Tab */}
          <TabsContent value="jobs" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Job Postings</CardTitle>
              </CardHeader>
              <CardContent>
                {jobs.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="text-gray-400 mb-4">
                      <Briefcase className="w-16 h-16 mx-auto" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs posted yet</h3>
                    <p className="text-gray-600 mb-4">Start by posting your first job opening</p>
                    <Link href="/post-job">
                      <Button className="bg-green-500 hover:bg-green-600 text-white">Post Your First Job</Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {jobs.map((job) => (
                      <div key={job.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                            <p className="text-gray-600 mb-2">
                              {job.company} • {job.location}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span>{job.type}</span>
                              <span>{job.salary} monthly</span>
                              <span>Posted: {new Date(job.postedDate).toLocaleDateString()}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge variant={job.status === "active" ? "default" : "secondary"}>{job.status}</Badge>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-gray-900">{job.applicationsCount}</div>
                              <div className="text-sm text-gray-500">applications</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                          <Button variant="outline" size="sm">
                            Edit Job
                          </Button>
                          <Button variant="outline" size="sm">
                            View Applications ({job.applicationsCount})
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Applications Tab */}
          <TabsContent value="applications" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
              </CardHeader>
              <CardContent>
                {applications.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="text-gray-400 mb-4">
                      <Users className="w-16 h-16 mx-auto" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No applications yet</h3>
                    <p className="text-gray-600">Applications will appear here once candidates start applying</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {applications.slice(0, 10).map((application) => (
                      <div key={application.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                              {application.firstName} {application.lastName}
                            </h3>
                            <p className="text-gray-600 mb-2">{application.email}</p>
                            <p className="text-sm text-gray-500">
                              Applied: {new Date(application.appliedDate).toLocaleDateString()}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge
                              variant={application.status === "pending" ? "secondary" : "default"}
                              className={
                                application.status === "pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : application.status === "accepted"
                                    ? "bg-green-100 text-green-800"
                                    : application.status === "rejected"
                                      ? "bg-red-100 text-red-800"
                                      : "bg-blue-100 text-blue-800"
                              }
                            >
                              {application.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4 mr-2" />
                            View Application
                          </Button>
                          {application.status === "pending" && (
                            <>
                              <Button
                                size="sm"
                                className="bg-green-500 hover:bg-green-600 text-white"
                                onClick={() => updateApplicationStatus(application.id, "accepted")}
                              >
                                Accept
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => updateApplicationStatus(application.id, "rejected")}
                              >
                                Reject
                              </Button>
                            </>
                          )}
                          <Button variant="outline" size="sm">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Message
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
