"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Plus, Building2, MapPin, Globe, Users, Calendar } from "lucide-react"

const companiesData = [
  {
    id: 1,
    name: "TechCorp Solutions",
    logo: "/placeholder-logo.png",
    industry: "Technology",
    location: "San Francisco, CA",
    website: "techcorp.com",
    employees: "500-1000",
    status: "active",
    jobsPosted: 12,
    lastActive: "2 days ago",
  },
  {
    id: 2,
    name: "Green Energy Co",
    logo: "/placeholder-logo.png",
    industry: "Energy",
    location: "Austin, TX",
    website: "greenenergy.com",
    employees: "100-500",
    status: "active",
    jobsPosted: 8,
    lastActive: "1 week ago",
  },
  {
    id: 3,
    name: "HealthTech Innovations",
    logo: "/placeholder-logo.png",
    industry: "Healthcare",
    location: "Boston, MA",
    website: "healthtech.com",
    employees: "1000+",
    status: "pending",
    jobsPosted: 5,
    lastActive: "3 days ago",
  },
  {
    id: 4,
    name: "FinancePro Group",
    logo: "/placeholder-logo.png",
    industry: "Finance",
    location: "New York, NY",
    website: "financepro.com",
    employees: "500-1000",
    status: "active",
    jobsPosted: 15,
    lastActive: "1 day ago",
  },
  {
    id: 5,
    name: "EduTech Systems",
    logo: "/placeholder-logo.png",
    industry: "Education",
    location: "Seattle, WA",
    website: "edutech.com",
    employees: "100-500",
    status: "inactive",
    jobsPosted: 3,
    lastActive: "2 weeks ago",
  },
]

export default function CompaniesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [industryFilter, setIndustryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredCompanies = companiesData.filter((company) => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesIndustry = industryFilter === "all" || company.industry === industryFilter
    const matchesStatus = statusFilter === "all" || company.status === statusFilter
    return matchesSearch && matchesIndustry && matchesStatus
  })

  const getStatusBadge = (status) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Active</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Pending</Badge>
      case "inactive":
        return <Badge className="bg-red-100 text-red-800 border-red-200">Inactive</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800 border-gray-200">{status}</Badge>
    }
  }

  const industries = [...new Set(companiesData.map(company => company.industry))]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Companies Management</h2>
            <p className="text-gray-600 mt-1">Manage registered companies and their profiles</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add New Company
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="bg-blue-600 border-gray-200 relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Total Companies</CardTitle>
              <div className="absolute top-4 right-4 p-3 rounded-lg bg-white/20">
                <Building2 className="h-8 w-8 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">156</div>
              <p className="text-xs text-white/80">+8% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-green-600 border-gray-200 relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Active Companies</CardTitle>
              <div className="absolute top-4 right-4 p-3 rounded-lg bg-white/20">
                <div className="h-8 w-8 bg-white rounded-full"></div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">142</div>
              <p className="text-xs text-white/80">+12% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-600 border-gray-200 relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Total Jobs Posted</CardTitle>
              <div className="absolute top-4 right-4 p-3 rounded-lg bg-white/20">
                <Users className="h-8 w-8 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">1,234</div>
              <p className="text-xs text-white/80">+23% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-orange-600 border-gray-200 relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Pending Approval</CardTitle>
              <div className="absolute top-4 right-4 p-3 rounded-lg bg-white/20">
                <Calendar className="h-8 w-8 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">8</div>
              <p className="text-xs text-white/80">-2 from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="bg-white border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">Companies</CardTitle>
            <CardDescription className="text-gray-600">Search and filter registered companies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search companies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <Select value={industryFilter} onValueChange={setIndustryFilter}>
                <SelectTrigger className="w-full sm:w-[180px] bg-white border-gray-300">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by industry" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  <SelectItem value="all">All Industries</SelectItem>
                  {industries.map((industry) => (
                    <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[150px] bg-white border-gray-300">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Companies Table */}
        <Card className="bg-white border-gray-200">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow className="border-gray-200 hover:bg-gray-50">
                    <TableHead className="font-semibold text-gray-700">Company</TableHead>
                    <TableHead className="font-semibold text-gray-700">Industry</TableHead>
                    <TableHead className="font-semibold text-gray-700">Location</TableHead>
                    <TableHead className="font-semibold text-gray-700">Employees</TableHead>
                    <TableHead className="font-semibold text-gray-700">Status</TableHead>
                    <TableHead className="font-semibold text-gray-700">Jobs Posted</TableHead>
                    <TableHead className="font-semibold text-gray-700">Last Active</TableHead>
                    <TableHead className="font-semibold text-gray-700">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCompanies.map((company) => (
                    <TableRow key={company.id} className="border-gray-200 hover:bg-gray-50">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={company.logo} alt={company.name} />
                            <AvatarFallback className="bg-blue-100 text-blue-600">
                              {company.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-gray-900">{company.name}</div>
                            <div className="text-sm text-gray-500 flex items-center gap-1">
                              <Globe className="h-3 w-3" />
                              {company.website}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                          {company.industry}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-gray-700">
                          <MapPin className="h-3 w-3" />
                          {company.location}
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-700">{company.employees}</TableCell>
                      <TableCell>{getStatusBadge(company.status)}</TableCell>
                      <TableCell>
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          {company.jobsPosted} jobs
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-700">{company.lastActive}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                                View
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle>Company Details</DialogTitle>
                                <DialogDescription>
                                  Detailed information about {company.name}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                  <Avatar className="h-16 w-16">
                                    <AvatarImage src={company.logo} alt={company.name} />
                                    <AvatarFallback className="bg-blue-100 text-blue-600 text-lg">
                                      {company.name.charAt(0)}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <h3 className="text-xl font-semibold">{company.name}</h3>
                                    <p className="text-gray-600">{company.industry}</p>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <label className="text-sm font-medium text-gray-700">Location</label>
                                    <p className="text-gray-900">{company.location}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-700">Website</label>
                                    <p className="text-gray-900">{company.website}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-700">Employees</label>
                                    <p className="text-gray-900">{company.employees}</p>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-700">Status</label>
                                    <div className="mt-1">{getStatusBadge(company.status)}</div>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <Button variant="outline" size="sm" className="text-green-600 border-green-200 hover:bg-green-50">
                            Edit
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
    </div>
  )
}

