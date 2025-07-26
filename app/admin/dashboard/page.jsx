"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Badge from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { Briefcase, Users, Building2, Tags, TrendingUp, Calendar, MapPin, Bell, User, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const statsData = [
  {
    title: "Total Jobs",
    value: "1,247",
    change: "+12% from last month",
    icon: Briefcase,
    iconBg: "bg-blue-600",
  },
  {
    title: "Total Applicants",
    value: "8,432",
    change: "+23% from last month",
    icon: Users,
    iconBg: "bg-green-600",
  },
  {
    title: "Companies",
    value: "156",
    change: "+5% from last month",
    icon: Building2,
    iconBg: "bg-purple-600",
  },
  {
    title: "Categories",
    value: "24",
    change: "+2% from last month",
    icon: Tags,
    iconBg: "bg-yellow-500",
  },
]

const applicationData = [
  { month: "Jan", applications: 420 },
  { month: "Feb", applications: 380 },
  { month: "Mar", applications: 520 },
  { month: "Apr", applications: 640 },
  { month: "May", applications: 580 },
  { month: "Jun", applications: 720 },
]

const jobStatusData = [
  { name: "Active", value: 65, color: "#10b981" },
  { name: "Closed", value: 25, color: "#f59e0b" },
  { name: "Draft", value: 10, color: "#6b7280" },
]

const recentActivities = [
  {
    id: 1,
    type: "application",
    message: "New application for Senior Developer at TechCorp",
    time: "2 minutes ago",
    icon: Users,
  },
  {
    id: 2,
    type: "job",
    message: "Marketing Manager position posted by StartupXYZ",
    time: "1 hour ago",
    icon: Briefcase,
  },
  {
    id: 3,
    type: "company",
    message: "New company registration: InnovateLabs",
    time: "3 hours ago",
    icon: Building2,
  },
  {
    id: 4,
    type: "application",
    message: "Application withdrawn for UX Designer role",
    time: "5 hours ago",
    icon: Users,
  },
]

const topJobs = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "Accra, Ghana",
    applications: 45,
    posted: "2 days ago",
  },
  {
    title: "Marketing Manager",
    company: "StartupXYZ",
    location: "Kumasi, Ghana",
    applications: 32,
    posted: "1 week ago",
  },
  {
    title: "UX/UI Designer",
    company: "Creative Agency",
    location: "Remote",
    applications: 28,
    posted: "1 week ago",
  },
  {
    title: "Data Analyst",
    company: "Analytics Pro",
    location: "Tema, Ghana",
    applications: 19,
    posted: "2 weeks ago",
  },
]

export default function DashboardPage() {
  return (
    <>
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {statsData.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className={`${stat.iconBg} border-gray-200 relative overflow-hidden`}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">{stat.title}</CardTitle>
                  <div className="absolute top-4 right-4 p-3 rounded-lg bg-white/20">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <p className="text-xs text-white/80">{stat.change}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Charts Section */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
          {/* Applications Chart */}
          <Card className="col-span-4 bg-white border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">Applications Overview</CardTitle>
              <CardDescription className="text-gray-600">Monthly application trends</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={applicationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      color: '#374151'
                    }}
                  />
                  <Bar dataKey="applications" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Job Status Chart */}
          <Card className="col-span-3 bg-white border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">Job Status</CardTitle>
              <CardDescription className="text-gray-600">Distribution of job statuses</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={jobStatusData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {jobStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      color: '#374151'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activities and Top Jobs */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2   lg:grid-cols-7">
          {/* Recent Activities */}
          <Card className="col-span-4 w-full bg-white border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">Recent Activities</CardTitle>
              <CardDescription className="text-gray-600">Latest updates and notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => {
                  const IconComponent = activity.icon
                  return (
                    <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="p-2 rounded-lg bg-blue-100">
                        <IconComponent className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">{activity.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Top Jobs */}
          <Card className="col-span-3 m-0 bg-white border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">Top Performing Jobs</CardTitle>
              <CardDescription className="text-gray-600">Jobs with most applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topJobs.map((job, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">{job.title}</h4>
                        <p className="text-xs text-gray-600">{job.company}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{job.location}</span>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-xs">
                        {job.applications} apps
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Posted {job.posted}</span>
                      <TrendingUp className="h-3 w-3 text-green-500" />
                    </div>
                    {index < topJobs.length - 1 && <hr className="border-gray-200" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

     
      </div>
    </>
  )
}
