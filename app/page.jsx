import { Search, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import Link from "next/link"

export default function HomePage() {
  const categories = [
    { name: "Accounting/Finance", count: 305 },
    { name: "Production/Operation", count: 95 },
    { name: "Education/Training", count: 213 },
    { name: "Design/Creative", count: 93 },
    { name: "Health & Fitness", count: 6 },
    { name: "Research/Consultancy", count: 14 },
    { name: "Engineer/Architects", count: 176 },
    { name: "Telecommunication", count: 405 },
    { name: "Data Entry/Operator", count: 25 },
    { name: "Marketing/Sale", count: 666 },
    { name: "Security/Support Service", count: 62 },
  ]

  const jobListings = [
    {
      id: 1,
      company: "Accra Hostel Services",
      location: "Accra, Ghana",
      title: "Hostel Manager",
      type: "Full-time",
      skills: ["Management", "Customer Service", "Organization"],
      logo: "A",
    },
    {
      id: 2,
      company: "Kumasi Comfort Homes",
      location: "Kumasi, Ghana",
      title: "Cleaner",
      type: "Part-time",
      skills: ["Cleaning", "Attention to Detail", "Time Management"],
      logo: "K",
    },
    {
      id: 3,
      company: "Cape Coast Hostel",
      location: "Cape Coast, Ghana",
      title: "Receptionist",
      type: "Full-time",
      skills: ["Communication", "Front Desk", "Customer Service"],
      logo: "C",
    },
    {
      id: 4,
      company: "Takoradi StayEasy",
      location: "Takoradi, Ghana",
      title: "Cook",
      type: "Full-time",
      skills: ["Cooking", "Menu Planning", "Food Safety"],
      logo: "T",
    },
    {
      id: 5,
      company: "Tamale Guest House",
      location: "Tamale, Ghana",
      title: "Security Officer",
      type: "Full-time",
      skills: ["Security", "Surveillance", "Emergency Response"],
      logo: "T",
    },
    {
      id: 6,
      company: "Sunyani Hostel Hub",
      location: "Sunyani, Ghana",
      title: "Maintenance Worker",
      type: "Full-time",
      skills: ["Repairs", "Plumbing", "Electrical Work"],
      logo: "S",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-2 sm:px-4 md:px-8">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://res.cloudinary.com/disgj6wx5/image/upload/v1750779135/e5llj82zpsizfipfmnsz.png')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-2 sm:px-6">
          <div className="text-green-400 text-2xl font-semibold mb-4">2,568 job available</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            You can choose your dream job
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Find great job for build your bright career. Have many job in this platform.
          </p>

          {/* Search Form */}
          <div className="bg-white rounded-lg p-2 flex flex-col md:flex-row gap-2 max-w-4xl mx-auto mb-8 w-full">
            <div className="flex-1">
              <Input
                placeholder="Job title or keywords"
                className="border-0 text-gray-900 placeholder:text-gray-500 h-12 bg-transparent"
              />
            </div>
            <div className="flex-1">
              <Select>
                <SelectTrigger className="border-0 text-gray-900 h-12 bg-transparent">
                  <SelectValue placeholder="Choose City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="accra">Accra</SelectItem>
                  <SelectItem value="kumasi">Kumasi</SelectItem>
                  <SelectItem value="tamale">Tamale</SelectItem>
                  <SelectItem value="cape-coast">Cape Coast</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Select>
                <SelectTrigger className="border-0 text-gray-900 h-12 bg-transparent">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="development">Development</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Link href="/jobs">
              <Button className="bg-green-500 hover:bg-green-600 h-12 px-8">
                <Search className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Play Button replaced with animated rectangles */}
          <div className="flex justify-center mt-8">
            <AnimatedRectangles />
          </div>
        </div>
      </section>

      {/* Popular Category Section */}
      <section className="py-10 sm:py-16 md:py-20 px-2 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Category</h2>
            <p className="text-gray-600">Many desktop publishing packages and web page editors</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((category, index) => (
              <div key={index} className="text-center p-6 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                <h3 className="font-medium text-gray-900 mb-2">{category.name}</h3>
                <span className="text-green-500 font-semibold">({category.count})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Job Circulars Section */}
      <section className="py-10 sm:py-16 md:py-20 px-2 sm:px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Job Circulars</h2>
            <p className="text-gray-600">Many desktop publishing packages and web page editors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {jobListings.map((job) => (
              <Card key={job.id} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                      {job.logo}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{job.company}</h3>
                      <p className="text-sm text-gray-500">{job.location}</p>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{job.title}</h4>

                  <Badge
                    className={`mb-4 ${
                      job.type === "Full-time"
                        ? "bg-green-100 text-green-800 border-green-200"
                        : job.type === "Part-time"
                          ? "bg-orange-100 text-orange-800 border-orange-200"
                          : "bg-blue-100 text-blue-800 border-blue-200"
                    }`}
                  >
                    {job.type}
                  </Badge>

                  <div className="text-sm text-gray-600 mb-4">{job.skills.join(", ")}</div>

                  <div className="flex items-center justify-between">
                    <Button className="bg-green-500 hover:bg-green-600 text-white">Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/jobs">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3">View All Jobs</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About EiTechGH Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About EiTechGH</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            EiTechGH is Ghana's premier job portal, connecting talented professionals with top employers across the
            country. We specialize in technology, engineering, and innovation roles, helping to build Ghana's digital
            future.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">2,568+</div>
              <div className="text-gray-600">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">1,200+</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">15,000+</div>
              <div className="text-gray-600">Job Seekers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Finate</h3>
              <p className="text-gray-400">Ghana's leading job portal for technology and innovation careers.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Job Seekers</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/jobs" className="hover:text-white">
                    Browse Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-white">
                    My Applications
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="hover:text-white">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Employers</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/post-job" className="hover:text-white">
                    Post a Job
                  </Link>
                </li>
                <li>
                  <Link href="/candidates" className="hover:text-white">
                    Browse Candidates
                  </Link>
                </li>
                <li>
                  <Link href="/admin" className="hover:text-white">
                    Employer Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Finate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function AnimatedRectangles() {
  return (
    <div className="flex gap-2">
      <div className="w-5 h-10 bg-green-400 rounded-md animate-bounce" style={{ animationDelay: '0s' }} />
      <div className="w-5 h-10 bg-blue-400 rounded-md animate-bounce" style={{ animationDelay: '0.5s' }} />
    </div>
  );
}
