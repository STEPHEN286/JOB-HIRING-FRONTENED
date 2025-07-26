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
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Search, Eye, Edit, Trash2, Plus, Filter, Users, UserCheck, UserX, Shield, Mail, Phone, MapPin, Calendar, Star } from "lucide-react"

const usersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+233 24 123 4567",
    role: "Admin",
    status: "Active",
    joinDate: "2024-01-15",
    lastLogin: "2024-01-20",
    location: "Accra, Ghana",
    avatar: "/placeholder.svg?height=40&width=40",
    permissions: ["Manage Users", "Manage Jobs", "View Reports"],
    department: "IT",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@email.com",
    phone: "+233 20 987 6543",
    role: "Manager",
    status: "Active",
    joinDate: "2024-01-10",
    lastLogin: "2024-01-19",
    location: "Kumasi, Ghana",
    avatar: "/placeholder.svg?height=40&width=40",
    permissions: ["Manage Jobs", "View Reports"],
    department: "HR",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@email.com",
    phone: "+233 26 555 0123",
    role: "Editor",
    status: "Inactive",
    joinDate: "2024-01-08",
    lastLogin: "2024-01-15",
    location: "Tema, Ghana",
    avatar: "/placeholder.svg?height=40&width=40",
    permissions: ["View Reports"],
    department: "Marketing",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah.wilson@email.com",
    phone: "+233 23 444 5678",
    role: "Viewer",
    status: "Active",
    joinDate: "2024-01-12",
    lastLogin: "2024-01-20",
    location: "Remote",
    avatar: "/placeholder.svg?height=40&width=40",
    permissions: ["View Reports"],
    department: "Analytics",
  },
  {
    id: 5,
    name: "David Brown",
    email: "david.brown@email.com",
    phone: "+233 27 333 9999",
    role: "Manager",
    status: "Active",
    joinDate: "2024-01-05",
    lastLogin: "2024-01-18",
    location: "Accra, Ghana",
    avatar: "/placeholder.svg?height=40&width=40",
    permissions: ["Manage Jobs", "View Reports"],
    department: "Operations",
  },
]

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isAddUserOpen, setIsAddUserOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const filteredUsers = usersData.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.department.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = roleFilter === "all" || user.role.toLowerCase() === roleFilter
    const matchesStatus = statusFilter === "all" || user.status.toLowerCase() === statusFilter
    return matchesSearch && matchesRole && matchesStatus
  })

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return <Badge className="bg-green-100 text-green-800 border-green-200">Active</Badge>
      case "inactive":
        return <Badge className="bg-red-100 text-red-800 border-red-200">Inactive</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Pending</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800 border-gray-200">{status}</Badge>
    }
  }

  const getRoleBadge = (role) => {
    switch (role.toLowerCase()) {
      case "admin":
        return <Badge className="bg-red-100 text-red-800 border-red-200">Admin</Badge>
      case "manager":
        return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Manager</Badge>
      case "editor":
        return <Badge className="bg-purple-100 text-purple-800 border-purple-200">Editor</Badge>
      case "viewer":
        return <Badge className="bg-gray-100 text-gray-800 border-gray-200">Viewer</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-800 border-gray-200">{role}</Badge>
    }
  }

  return (
    <>
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Users Management</h2>
            <p className="text-gray-600 mt-1">Manage system users and their permissions</p>
          </div>
          <Button onClick={() => setIsAddUserOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add New User
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="bg-blue-600 border-gray-200 relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Total Users</CardTitle>
              <div className="absolute top-4 right-4 p-3 rounded-lg bg-white/20">
                <Users className="h-8 w-8 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">156</div>
              <p className="text-xs text-white/80">+8% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-green-600 border-gray-200 relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Active Users</CardTitle>
              <div className="absolute top-4 right-4 p-3 rounded-lg bg-white/20">
                <UserCheck className="h-8 w-8 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">142</div>
              <p className="text-xs text-white/80">+12% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-red-600 border-gray-200 relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Inactive Users</CardTitle>
              <div className="absolute top-4 right-4 p-3 rounded-lg bg-white/20">
                <UserX className="h-8 w-8 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">14</div>
              <p className="text-xs text-white/80">-3% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-600 border-gray-200 relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Admin Users</CardTitle>
              <div className="absolute top-4 right-4 p-3 rounded-lg bg-white/20">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">8</div>
              <p className="text-xs text-white/80">+1 from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="bg-white border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">Users</CardTitle>
            <CardDescription className="text-gray-600">Search and filter system users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="w-full sm:w-[150px] bg-white border-gray-300">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by role" />
                </SelectTrigger>
                <SelectContent className="bg-white border-gray-200">
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
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
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card className="bg-white border-gray-200">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow className="border-gray-200 hover:bg-gray-50">
                    <TableHead className="font-semibold text-gray-700">User</TableHead>
                    <TableHead className="font-semibold text-gray-700">Role</TableHead>
                    <TableHead className="font-semibold text-gray-700">Department</TableHead>
                    <TableHead className="font-semibold text-gray-700">Status</TableHead>
                    <TableHead className="font-semibold text-gray-700">Last Login</TableHead>
                    <TableHead className="font-semibold text-gray-700">Join Date</TableHead>
                    <TableHead className="font-semibold text-gray-700">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id} className="border-gray-200 hover:bg-gray-50">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback className="bg-gray-100 text-gray-600">
                              {user.name.split(" ").map(n => n[0]).join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <div className="font-medium text-gray-900">{user.name}</div>
                            <div className="text-sm text-gray-500">{user.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{getRoleBadge(user.role)}</TableCell>
                      <TableCell>
                        <span className="text-gray-700">{user.department}</span>
                      </TableCell>
                      <TableCell>{getStatusBadge(user.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Calendar className="h-3 w-3" />
                          {new Date(user.lastLogin).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-gray-600">
                          {new Date(user.joinDate).toLocaleDateString()}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                            onClick={() => setSelectedUser(user)}
                          >
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

      {/* Add User Dialog */}
      <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
        <DialogContent className="sm:max-w-[600px] bg-white border-gray-200">
          <DialogHeader>
            <DialogTitle className="text-gray-900">Add New User</DialogTitle>
            <DialogDescription className="text-gray-600">
              Create a new user account with appropriate permissions
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Full Name</label>
                <Input 
                  placeholder="Enter full name" 
                  className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <Input 
                  type="email" 
                  placeholder="Enter email address" 
                  className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Phone</label>
                <Input 
                  placeholder="Enter phone number" 
                  className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Department</label>
                <Select>
                  <SelectTrigger className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200">
                    <SelectItem value="it">IT</SelectItem>
                    <SelectItem value="hr">HR</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="analytics">Analytics</SelectItem>
                    <SelectItem value="operations">Operations</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Role</label>
                <Select>
                  <SelectTrigger className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200">
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Status</label>
                <Select>
                  <SelectTrigger className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-gray-200">
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsAddUserOpen(false)}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button 
              className="bg-blue-600 hover:bg-blue-700" 
              onClick={() => setIsAddUserOpen(false)}
            >
              Create User
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* User Details Dialog */}
      <Dialog open={!!selectedUser} onOpenChange={() => setSelectedUser(null)}>
        <DialogContent className="sm:max-w-[600px] bg-white border-gray-200">
          <DialogHeader>
            <DialogTitle className="text-gray-900">User Details</DialogTitle>
            <DialogDescription className="text-gray-600">
              View detailed information about the user
            </DialogDescription>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={selectedUser.avatar} alt={selectedUser.name} />
                  <AvatarFallback className="bg-gray-100 text-gray-600 text-lg">
                    {selectedUser.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{selectedUser.name}</h3>
                  <p className="text-gray-600">{selectedUser.email}</p>
                  <div className="flex gap-2 mt-2">
                    {getRoleBadge(selectedUser.role)}
                    {getStatusBadge(selectedUser.status)}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Phone</label>
                  <p className="text-gray-900">{selectedUser.phone}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Department</label>
                  <p className="text-gray-900">{selectedUser.department}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Location</label>
                  <p className="text-gray-900">{selectedUser.location}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Join Date</label>
                  <p className="text-gray-900">{new Date(selectedUser.joinDate).toLocaleDateString()}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Last Login</label>
                  <p className="text-gray-900">{new Date(selectedUser.lastLogin).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Permissions</label>
                <div className="flex flex-wrap gap-2">
                  {selectedUser.permissions.map((permission, index) => (
                    <Badge key={index} className="bg-blue-100 text-blue-800 border-blue-200">
                      {permission}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit User
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Shield className="h-4 w-4 mr-2" />
                  Manage Permissions
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
