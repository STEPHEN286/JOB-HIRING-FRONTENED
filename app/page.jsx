import { Search, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import Badge from "@/components/ui/badge"
import { Header } from "@/components/header"
import Link from "next/link"
import JobCard from "@/components/job-card"
import Footer from "@/components/footer"

export default function HomePage() {
  const categories = [
    { name: "Hotel Management", count: 120 },
    { name: "Cleaning", count: 80 },
    { name: "Reception", count: 60 },
    { name: "Security", count: 40 },
    { name: "Maintenance", count: 30 },
    { name: "Cooking", count: 25 },
    { name: "Other (Hotel)", count: 10 },
  ]

  const jobListings = [
    {
      id: 1,
      company: "Accra Grand Hotel",
      location: "Accra, Ghana",
      title: "Hotel Manager",
      type: "Full-time",
      skills: ["Management", "Customer Service", "Organization"],
      logo: "A",
    },
    {
      id: 2,
      company: "Kumasi Royal Hotel",
      location: "Kumasi, Ghana",
      title: "Cleaner",
      type: "Part-time",
      skills: ["Cleaning", "Attention to Detail", "Time Management"],
      logo: "K",
    },
    {
      id: 3,
      company: "Cape Coast Beach Hotel",
      location: "Cape Coast, Ghana",
      title: "Receptionist",
      type: "Full-time",
      skills: ["Communication", "Front Desk", "Customer Service"],
      logo: "C",
    },
    {
      id: 4,
      company: "Takoradi StayEasy Hotel",
      location: "Takoradi, Ghana",
      title: "Cook",
      type: "Full-time",
      skills: ["Cooking", "Menu Planning", "Food Safety"],
      logo: "T",
    },
    {
      id: 5,
      company: "Tamale Guest Hotel",
      location: "Tamale, Ghana",
      title: "Security Officer",
      type: "Full-time",
      skills: ["Security", "Surveillance", "Emergency Response"],
      logo: "T",
    },
    {
      id: 6,
      company: "Sunyani Hotel Hub",
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
          <div className="text-green-400 text-2xl font-semibold mb-4">2,568 hotel jobs available</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Find your next hotel job in Ghana
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Discover great opportunities in the hotel industry. Apply for your dream hotel job today!
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
              <JobCard key={job.id} job={job} />
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
      <Footer />
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
