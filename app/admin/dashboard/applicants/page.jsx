"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Badge from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Search, Eye, Download, Mail, Phone, MapPin, Calendar, Star, Filter, Users, UserCheck, Clock, TrendingUp } from "lucide-react"

const applicantsData = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+233 24 123 4567",
    position: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    status: "Under Review",
    appliedDate: "2024-01-15",
    experience: "5 years",
    location: "Accra, Ghana",
    rating: 4.5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@email.com",
    phone: "+233 20 987 6543",
    position: "Marketing Manager",
    company: "StartupXYZ",
    status: "Shortlisted",
    appliedDate: "2024-01-12",
    experience: "3 years",
    location: "Kumasi, Ghana",
    rating: 4.2,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@email.com",
    phone: "+233 26 555 0123",
    position: "UX/UI Designer",
    company: "Creative Agency",
    status: "Rejected",
    appliedDate: "2024-01-10",
    experience: "2 years",
    location: "Remote",
    rating: 3.8,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah.wilson@email.com",
    phone: "+233 23 444 5678",
    position: "Data Analyst",
    company: "Analytics Pro",
    status: "Interview Scheduled",
    appliedDate: "2024-01-14",
    experience: "4 years",
    location: "Tema, Ghana",
    rating: 4.7,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function ApplicantsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedApplicant, setSelectedApplicant] = useState(null)

  const filteredApplicants = applicantsData.filter((applicant) => {
    const matchesSearch =
      applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      applicant.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      applicant.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || applicant.status.toLowerCase().replace(" ", "-") === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case "under review":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Under Review</Badge>
        )
      case "shortlisted":
        return (
          <Badge className="bg-blue-100 text-blue-800 border-blue-200">Shortlisted</Badge>
        )
      case "interview scheduled":
        return (
          <Badge className="bg-purple-100 text-purple-800 border-purple-200">Interview Scheduled</Badge>
        )
      case "rejected":
        return (
          <Badge className="bg-red-100 text-red-800 border-red-200">Rejected</Badge>
        )
      case "hired":
        return (
          <Badge className="bg-green-100 text-green-800 border-green-200">Hired</Badge>
        )
      default:
        return <Badge className="bg-gray-100 text-gray-800 border-gray-200">{status}</Badge>
    }
  }

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-3 w-3 ${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-xs text-gray-600 ml-1">({rating})</span>
      </div>
    )
  }

  return (
    <>
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Applicants Management</h2>
            <p className="text-gray-600 mt-1">Review and manage job applications</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="bg-blue-600 border-gray-200 relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Total Applicants</CardTitle>
              <div className="absolute top-4 right-4 p-3 rounded-lg bg-white/20">
                <Users className="h-8 w-8 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">1,234</div>
              <p className="text-xs text-white/80">+15% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-yellow-600 border-gray-200 relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Under Review</CardTitle>
              <div className="absolute top-4 right-4 p-3 rounded-lg bg-white/20">
                <div className="h-8 w-8 bg-white rounded-full"></div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">456</div>
              <p className="text-xs text-white/80">+8% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-green-600 border-gray-200 relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Shortlisted</CardTitle>
              <div className="absolute top-4 right-4 p-3 rounded-lg bg-white/20">
                <UserCheck className="h-8 w-8 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">89</div>
              <p className="text-xs text-white/80">+12% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-600 border-gray-200 relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Avg. Response Time</CardTitle>
              <div className="absolute top-4 right-4 p-3 rounded-lg bg-white/20">
                <Clock className="h-8 w-8 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">1.2 days</div>
              <p className="text-xs text-white/80">-0.3 days from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="bg-white border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">Applicants</CardTitle>
            <CardDescription className="text-gray-600">Search and filter job applications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search applicants..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[180px] bg-white border-gray-300">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="under-review">Under Review</SelectItem>
                  <SelectItem value="shortlisted">Shortlisted</SelectItem>
                  <SelectItem value="interview-scheduled">Interview Scheduled</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                  <SelectItem value="hired">Hired</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Applicants Table */}
        <Card className="bg-white border-gray-200">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow className="border-gray-200 hover:bg-gray-50">
                    <TableHead className="font-semibold text-gray-700">Applicant</TableHead>
                    <TableHead className="font-semibold text-gray-700">Position</TableHead>
                    <TableHead className="font-semibold text-gray-700">Company</TableHead>
                    <TableHead className="font-semibold text-gray-700">Status</TableHead>
                    <TableHead className="font-semibold text-gray-700">Experience</TableHead>
                    <TableHead className="font-semibold text-gray-700">Rating</TableHead>
                    <TableHead className="font-semibold text-gray-700">Applied</TableHead>
                    <TableHead className="font-semibold text-gray-700">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredApplicants.map((applicant) => (
                    <TableRow key={applicant.id} className="border-gray-200 hover:bg-gray-50">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={applicant.avatar} alt={applicant.name} />
                            <AvatarFallback className="bg-gray-100 text-gray-600">
                              {applicant.name.split(" ").map(n => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <div className="font-medium text-gray-900">{applicant.name}</div>
                            <div className="text-sm text-gray-500">{applicant.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium text-gray-900">{applicant.position}</div>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <MapPin className="h-3 w-3" />
                            {applicant.location}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-gray-700">{applicant.company}</span>
                      </TableCell>
                      <TableCell>{getStatusBadge(applicant.status)}</TableCell>
                      <TableCell>
                        <span className="text-gray-700">{applicant.experience}</span>
                      </TableCell>
                      <TableCell>{renderStars(applicant.rating)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Calendar className="h-3 w-3" />
                          {new Date(applicant.appliedDate).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                            onClick={() => setSelectedApplicant(applicant)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 hover:bg-green-50">
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-700 hover:bg-gray-50">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Applicant Details Dialog */}
      <Dialog open={!!selectedApplicant} onOpenChange={() => setSelectedApplicant(null)}>
        <DialogContent className="sm:max-w-[600px] bg-white border-gray-200">
          <DialogHeader>
            <DialogTitle className="text-gray-900">Applicant Details</DialogTitle>
            <DialogDescription className="text-gray-600">
              View detailed information about the applicant
            </DialogDescription>
          </DialogHeader>
          {selectedApplicant && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={selectedApplicant.avatar} alt={selectedApplicant.name} />
                  <AvatarFallback className="bg-gray-100 text-gray-600 text-lg">
                    {selectedApplicant.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{selectedApplicant.name}</h3>
                  <p className="text-gray-600">{selectedApplicant.position}</p>
                  <p className="text-sm text-gray-500">{selectedApplicant.company}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <p className="text-gray-900">{selectedApplicant.email}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone</label>
                  <p className="text-gray-900">{selectedApplicant.phone}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Location</label>
                  <p className="text-gray-900">{selectedApplicant.location}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Experience</label>
                  <p className="text-gray-900">{selectedApplicant.experience}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Rating</label>
                  <div>{renderStars(selectedApplicant.rating)}</div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Applied Date</label>
                  <p className="text-gray-900">{new Date(selectedApplicant.appliedDate).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
