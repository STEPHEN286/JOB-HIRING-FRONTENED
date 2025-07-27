"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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
import { Plus, Search, Edit, Trash2, Tags, Code, Palette, BarChart3, Megaphone, Users, Building, Filter } from "lucide-react"
import TableContainer from "@/components/ui/table-container"

const categoriesData = [
  {
    id: 1,
    name: "Technology",
    description: "Software development, IT, and technical roles",
    jobCount: 45,
    icon: Code,
    color: "bg-blue-100 text-blue-800",
    skills: ["JavaScript", "Python", "React", "Node.js", "AWS", "Docker"],
    createdDate: "2024-01-01",
    lastUpdated: "2024-01-15",
  },
  {
    id: 2,
    name: "Design", 
    description: "UI/UX, graphic design, and creative positions",
    jobCount: 18,
    icon: Palette,
    color: "bg-purple-100 text-purple-800",
    skills: ["Figma", "Adobe Creative Suite", "Sketch", "Prototyping", "User Research", "Wireframing"],
    createdDate: "2024-01-01",
    lastUpdated: "2024-01-12",
  },
  {
    id: 3,
    name: "Marketing",
    description: "Digital marketing, content, and brand management",
    jobCount: 23,
    icon: Megaphone,
    color: "bg-green-100 text-green-800",
    skills: ["SEO", "Social Media", "Content Marketing", "Google Analytics", "PPC", "Email Marketing"],
    createdDate: "2024-01-01",
    lastUpdated: "2024-01-10",
  },
  {
    id: 4,
    name: "Analytics",
    description: "Data analysis, business intelligence, and research",
    jobCount: 12,
    icon: BarChart3,
    color: "bg-orange-100 text-orange-800",
    skills: ["SQL", "Python", "R", "Tableau", "Power BI", "Statistics"],
    createdDate: "2024-01-01",
    lastUpdated: "2024-01-08",
  },
  {
    id: 5,
    name: "Human Resources",
    description: "HR management, recruitment, and people operations",
    jobCount: 8,
    icon: Users,
    color: "bg-pink-100 text-pink-800",
    skills: ["Recruitment", "Employee Relations", "Performance Management", "HRIS", "Training", "Compliance"],
    createdDate: "2024-01-01",
    lastUpdated: "2024-01-05",
  },
  {
    id: 6,
    name: "Operations",
    description: "Business operations, project management, and administration",
    jobCount: 15,
    icon: Building,
    color: "bg-gray-100 text-gray-800",
    skills: ["Project Management", "Process Improvement", "Supply Chain", "Quality Assurance", "Lean", "Agile"],
    createdDate: "2024-01-01",
    lastUpdated: "2024-01-03",
  },
]

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false)
  const [isAddSkillOpen, setIsAddSkillOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const filteredCategories = categoriesData.filter(
    (category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      {/* Page Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Categories Management</h2>
            <p className="text-gray-600 mt-1">Manage job categories and skills</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => setIsAddSkillOpen(true)} variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              <Plus className="h-4 w-4 mr-2" />
              Add Skill
            </Button>
            <Button onClick={() => setIsAddCategoryOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add Category
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="bg-blue-600 border-gray-200 relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Total Categories</CardTitle>
              <div className="absolute top-4 right-4 p-3 rounded-lg bg-white/20">
                <Tags className="h-8 w-8 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">24</div>
              <p className="text-xs text-white/80">+3 new this month</p>
            </CardContent>
          </Card>
          <Card className="bg-green-600 border-gray-200 relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Total Skills</CardTitle>
              <div className="absolute top-4 right-4 p-3 rounded-lg bg-white/20">
                <Code className="h-8 w-8 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">156</div>
              <p className="text-xs text-white/80">+12 new this month</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-600 border-gray-200 relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">Active Jobs</CardTitle>
              <div className="absolute top-4 right-4 p-3 rounded-lg bg-white/20">
                <Building className="h-8 w-8 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">1,234</div>
              <p className="text-xs text-white/80">+8% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <Card className="bg-white border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">Categories</CardTitle>
            <CardDescription className="text-gray-600">Search and manage job categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </CardContent>
        </Card>

        {/* Categories Table */}
        <Card className="bg-white border-gray-200">
          <CardContent className="p-0">
            <TableContainer>
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow className="border-gray-200 hover:bg-gray-50">
                    <TableHead className="font-semibold text-gray-700">Category</TableHead>
                    <TableHead className="font-semibold text-gray-700">Description</TableHead>
                    <TableHead className="font-semibold text-gray-700">Jobs</TableHead>
                    <TableHead className="font-semibold text-gray-700">Skills</TableHead>
                    <TableHead className="font-semibold text-gray-700">Last Updated</TableHead>
                    <TableHead className="font-semibold text-gray-700">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCategories.map((category) => {
                    const IconComponent = category.icon
                    return (
                      <TableRow key={category.id} className="border-gray-200 hover:bg-gray-50">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${category.color}`}>
                              <IconComponent className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{category.name}</div>
                              <div className="text-sm text-gray-500">ID: {category.id}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="max-w-xs">
                            <p className="text-gray-700 text-sm">{category.description}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                            {category.jobCount} jobs
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {category.skills.slice(0, 3).map((skill, index) => (
                              <Badge key={index} className="bg-gray-100 text-gray-700 border-gray-200 text-xs">
                                {skill}
                              </Badge>
                            ))}
                            {category.skills.length > 3 && (
                              <Badge className="bg-gray-100 text-gray-700 border-gray-200 text-xs">
                                +{category.skills.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm text-gray-600">
                            {new Date(category.lastUpdated).toLocaleDateString()}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                              onClick={() => setSelectedCategory(category)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </div>

      {/* Add Category Dialog */}
      <Dialog open={isAddCategoryOpen} onOpenChange={setIsAddCategoryOpen}>
        <DialogContent className="sm:max-w-[500px] bg-white border-gray-200">
          <DialogHeader>
            <DialogTitle className="text-gray-900">Add New Category</DialogTitle>
            <DialogDescription className="text-gray-600">
              Create a new job category with description
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="category-name" className="text-gray-700">Category Name</Label>
              <Input 
                id="category-name" 
                placeholder="e.g. Finance" 
                className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category-description" className="text-gray-700">Description</Label>
              <Textarea 
                id="category-description" 
                placeholder="Brief description of this category..." 
                className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsAddCategoryOpen(false)}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button 
              className="bg-blue-600 hover:bg-blue-700" 
              onClick={() => setIsAddCategoryOpen(false)}
            >
              Create Category
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Skill Dialog */}
      <Dialog open={isAddSkillOpen} onOpenChange={setIsAddSkillOpen}>
        <DialogContent className="sm:max-w-[500px] bg-white border-gray-200">
          <DialogHeader>
            <DialogTitle className="text-gray-900">Add New Skill</DialogTitle>
            <DialogDescription className="text-gray-600">
              Add a new skill to an existing category
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="skill-name" className="text-gray-700">Skill Name</Label>
              <Input 
                id="skill-name" 
                placeholder="e.g. React.js" 
                className="bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="skill-category" className="text-gray-700">Category</Label>
              <select className="w-full p-2 rounded-md bg-white border border-gray-300 text-gray-700 focus:border-blue-500 focus:ring-blue-500">
                <option value="">Select a category</option>
                {categoriesData.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsAddSkillOpen(false)}
              className="border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button 
              className="bg-blue-600 hover:bg-blue-700" 
              onClick={() => setIsAddSkillOpen(false)}
            >
              Add Skill
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Category Details Dialog */}
      {/* This dialog is not fully implemented in the new_code, so it will be commented out or removed if not needed */}
      {/* <Dialog open={!!selectedCategory} onOpenChange={() => setSelectedCategory(null)}>
        <DialogContent className="sm:max-w-[600px] bg-white border-gray-200">
          <DialogHeader>
            <DialogTitle className="text-gray-900">Category Details</DialogTitle>
            <DialogDescription className="text-gray-600">
              View and edit category information
            </DialogDescription>
          </DialogHeader>
          {selectedCategory && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${selectedCategory.color}`}>
                  {React.createElement(selectedCategory.icon, { className: "h-6 w-6" })}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{selectedCategory.name}</h3>
                  <p className="text-gray-600">{selectedCategory.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Total Jobs</label>
                  <p className="text-gray-900">{selectedCategory.jobCount}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Total Skills</label>
                  <p className="text-gray-900">{selectedCategory.skills.length}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Created Date</label>
                  <p className="text-gray-900">{new Date(selectedCategory.createdDate).toLocaleDateString()}</p>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Last Updated</label>
                  <p className="text-gray-900">{new Date(selectedCategory.lastUpdated).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Skills</label>
                <div className="flex flex-wrap gap-2">
                  {selectedCategory.skills.map((skill, index) => (
                    <Badge key={index} className="bg-gray-100 text-gray-700 border-gray-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Category
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Skill
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog> */}
    </>
  )
}
