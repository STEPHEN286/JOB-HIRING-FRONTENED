"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { MapPin, Clock, DollarSign, Users, Calendar, Share2, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import Link from "next/link"

export default function JobDetailsPage() {
  const params = useParams()
  const jobId = params.id

  // Mock job data - in real app, fetch from API
  const job = {
    id: jobId,
    company: "Accra Grand Hotel",
    location: "Accra, Ghana",
    title: "Hotel Manager",
    type: "Full-time",
    skills: ["Management", "Customer Service", "Organization"],
    logo: "A",
    description: `Manage the daily operations of a busy hotel in Accra. Ensure guest satisfaction, supervise staff, and maintain facility standards.`,
    requirements: [
      "Experience in hospitality or hotel management",
      "Strong leadership and communication skills",
      "Ability to handle guest complaints professionally",
      "Organizational and multitasking abilities",
    ],
    responsibilities: [
      "Oversee hotel staff and daily operations",
      "Manage guest check-ins and check-outs",
      "Coordinate maintenance and cleaning schedules",
      "Ensure compliance with health and safety regulations",
    ],
    benefits: [
      "Friendly work environment",
      "Opportunities for advancement",
      "Staff accommodation available",
      "Flexible working hours",
    ],
    postedDate: "2024-01-15",
    applicationDeadline: "2024-02-15",
    companyInfo: {
      size: "50-100 employees",
      industry: "Hospitality",
      founded: "2010",
      website: "https://accragrandhotel.com",
    },
  }

  const [isSaved, setIsSaved] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-2 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Job Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                    {job.logo}
                  </div>
                  <div className="flex-1">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                    <p className="text-lg sm:text-xl text-gray-600 font-medium mb-2">{job.company}</p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setIsSaved(!isSaved)}
                      className={isSaved ? "text-green-600 border-green-600" : ""}
                    >
                      <Bookmark className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {job.skills.map((skill, index) => (
                    <Badge key={index} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <Link href={`/jobs/${job.id}/apply`}>
                    <Button className="bg-green-500 hover:bg-green-600 text-white px-8">Apply Now</Button>
                  </Link>
                  <Badge
                    variant="secondary"
                    className={`${
                      job.type === "Full-time"
                        ? "bg-green-100 text-green-800"
                        : job.type === "Part-time"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {job.type}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Job Description */}
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  {job.description.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle>Key Responsibilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Benefits & Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{job.salary}</div>
                  <div className="text-gray-500">per month</div>
                </div>
                <Link href={`/jobs/${job.id}/apply`}>
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white mb-4">Apply for this Job</Button>
                </Link>
                <Button variant="outline" className="w-full bg-transparent">
                  Save Job
                </Button>
              </CardContent>
            </Card>

            {/* Job Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Job Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-medium">Posted Date</div>
                    <div className="text-sm text-gray-500">{new Date(job.postedDate).toLocaleDateString()}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-medium">Application Deadline</div>
                    <div className="text-sm text-gray-500">
                      {new Date(job.applicationDeadline).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-gray-500">{job.location}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-gray-400" />
                  <div>
                    <div className="font-medium">Job Type</div>
                    <div className="text-sm text-gray-500">{job.type}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card>
              <CardHeader>
                <CardTitle>About Company</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                    {job.logo}
                  </div>
                  <div>
                    <div className="font-semibold">{job.company}</div>
                    <div className="text-sm text-gray-500">{job.companyInfo.industry}</div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Company Size:</span>
                    <span>{job.companyInfo.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Founded:</span>
                    <span>{job.companyInfo.founded}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Industry:</span>
                    <span>{job.companyInfo.industry}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  View Company Profile
                </Button>
              </CardContent>
            </Card>

            {/* Similar Jobs */}
            <Card>
              <CardHeader>
                <CardTitle>Similar Jobs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { id: 2, title: "Senior UI Designer", company: "Inspire Fitness Co.", salary: "$4500" },
                  { id: 3, title: "Graphic Designer", company: "Cogent Data", salary: "$4000" },
                  { id: 4, title: "Full Stack Developer", company: "Tech Solutions Inc.", salary: "$6000" },
                ].map((similarJob) => (
                  <Link key={similarJob.id} href={`/jobs/${similarJob.id}`}>
                    <div className="p-3 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <div className="font-medium text-sm mb-1">{similarJob.title}</div>
                      <div className="text-xs text-gray-500 mb-2">{similarJob.company}</div>
                      <div className="text-sm font-semibold text-green-600">{similarJob.salary}/month</div>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
