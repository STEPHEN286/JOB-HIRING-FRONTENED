"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Search, Eye, Edit, Trash2, MapPin, Calendar, Building2, DollarSign, Filter } from "lucide-react"

const jobsData = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "Accra, Ghana",
    type: "Full-time",
    salary: "$80,000 - $120,000",
    status: "Active",
    applications: 45,
    posted: "2024-01-15",
    category: "Technology",
  },
  {
    id: 2,
    title: "Marketing Manager",
    company: "StartupXYZ",
    location: "Kumasi, Ghana",
    type: "Full-time",
    salary: "$60,000 - $80,000",
    status: "Active",
    applications: 32,
    posted: "2024-01-10",
    category: "Marketing",
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "Creative Agency",
    location: "Remote",
    type: "Contract",
    salary: "$50,000 - $70,000",
    status: "Closed",
    applications: 28,
    posted: "2024-01-08",
    category: "Design",
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "Analytics Pro",
    location: "Tema, Ghana",
    type: "Part-time",
    salary: "$40,000 - $55,000",
    status: "Draft",
    applications: 0,
    posted: "2024-01-12",
    category: "Analytics",
  },
]

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isAddJobOpen, setIsAddJobOpen] = useState(false)

  const filteredJobs = jobsData.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || job.status.toLowerCase() === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Active</Badge>
      case "closed":
        return <Badge className="bg-red-100 text-red-800 border-red-200">Closed</Badge>
      case "draft":
        return <Badge className="bg-gray-100 text-gray-800 border-gray-200">Draft</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800 border-gray-200">{status}</Badge>
    }
  }

  return (
    <>
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Jobs Management</h2>
            <p className="text-gray-600 mt-1">Manage and track all job postings</p>
          </div>
          <Button onClick={() => setIsAddJobOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add New Job
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="bg-blue-600 border-gray-200 relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Total Jobs</CardTitle>
              <div className="absolute top-4 right-4 p-3 rounded-lg bg-white/20">
                <Building2 className="h-8 w-8 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">156</div>
              <p className="text-xs text-white/80">+12% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-green-600 border-gray-200 relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Active Jobs</CardTitle>
              <div className="absolute top-4 right-4 p-3 rounded-lg bg-white/20">
                <div className="h-8 w-8 bg-white rounded-full"></div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">89</div>
              <p className="text-xs text-white/80">+8% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-600 border-gray-200 relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Total Applications</CardTitle>
              <div className="absolute top-4 right-4 p-3 rounded-lg bg-white/20">
                <div className="h-8 w-8 bg-white rounded-full"></div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">1,234</div>
              <p className="text-xs text-white/80">+23% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-600 border-gray-200 relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Avg. Response Time</CardTitle>
              <div className="absolute top-4 right-4 p-3 rounded-lg bg-white/20">
                <Calendar className="h-8 w-8 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">2.4 days</div>
              <p className="text-xs text-white/80">-0.5 days from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="bg-white border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">Job Listings</CardTitle>
            <CardDescription className="text-gray-600">Search and filter job postings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search jobs..."
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
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Jobs Table */}
        <Card className="bg-white border-gray-200">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow className="border-gray-200 hover:bg-gray-50">
                    <TableHead className="font-semibold text-gray-700">Job Details</TableHead>
                    <TableHead className="font-semibold text-gray-700">Company</TableHead>
                    <TableHead className="font-semibold text-gray-700">Location & Type</TableHead>
                    <TableHead className="font-semibold text-gray-700">Salary</TableHead>
                    <TableHead className="font-semibold text-gray-700">Status</TableHead>
                    <TableHead className="font-semibold text-gray-700">Applications</TableHead>
                    <TableHead className="font-semibold text-gray-700">Posted</TableHead>
                    <TableHead className="font-semibold text-gray-700">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredJobs.map((job) => (
                    <TableRow key={job.id} className="border-gray-200 hover:bg-gray-50">
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium text-gray-900">{job.title}</div>
                          <div className="text-sm text-gray-500">{job.category}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-700">{job.company}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </div>
                          <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-xs">
                            {job.type}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-sm text-gray-700">
                          <DollarSign className="h-3 w-3" />
                          {job.salary}
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(job.status)}</TableCell>
                      <TableCell>
                        <Badge className="bg-gray-100 text-gray-800 border-gray-200">
                          {job.applications} applicants
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Calendar className="h-3 w-3" />
                          {new Date(job.posted).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-700 hover:bg-gray-50">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                            <Trash2 className="h-4 w-4" />
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

      {/* Add Job Dialog */}
      <Dialog open={isAddJobOpen} onOpenChange={setIsAddJobOpen}>
        <DialogContent className="sm:max-w-[600px] bg-white border-gray-200">
          <DialogHeader>
            <DialogTitle className="text-gray-900">Add New Job</DialogTitle>
            <DialogDescription className="text-gray-600">
              Create a new job posting. Fill in all the required information.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-gray-700">Job Title</Label>
                <Input
                  id="title"
                  placeholder="e.g. Senior Developer"
                  className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-gray-700">Company</Label>
                <Select>
                  <SelectTrigger className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select company" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200">
                    <SelectItem value="techcorp">TechCorp Solutions</SelectItem>
                    <SelectItem value="startupxyz">StartupXYZ</SelectItem>
                    <SelectItem value="creative">Creative Agency</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="location" className="text-gray-700">Location</Label>
                <Input
                  id="location"
                  placeholder="e.g. Accra, Ghana"
                  className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type" className="text-gray-700">Job Type</Label>
                <Select>
                  <SelectTrigger className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200">
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="salary" className="text-gray-700">Salary Range</Label>
                <Input
                  id="salary"
                  placeholder="e.g. $50,000 - $70,000"
                  className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category" className="text-gray-700">Category</Label>
                <Select>
                  <SelectTrigger className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200">
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="analytics">Analytics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description" className="text-gray-700">Job Description</Label>
              <Textarea
                id="description"
                placeholder="Enter job description..."
                className="min-h-[100px] bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsAddJobOpen(false)}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setIsAddJobOpen(false)}>
              Create Job
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
