import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone } from "lucide-react"

export default function CandidatesPage() {
  const candidates = [
    {
      id: 1,
      name: "John Smith",
      title: "Frontend Developer",
      location: "New York, USA",
      email: "john.smith@email.com",
      phone: "+1 (555) 123-4567",
      skills: ["React", "JavaScript", "TypeScript", "CSS"],
      experience: "3 years",
      avatar: "JS",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "UI/UX Designer",
      location: "Los Angeles, USA",
      email: "sarah.johnson@email.com",
      phone: "+1 (555) 987-6543",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      experience: "5 years",
      avatar: "SJ",
    },
    {
      id: 3,
      name: "Mike Chen",
      title: "Full Stack Developer",
      location: "San Francisco, USA",
      email: "mike.chen@email.com",
      phone: "+1 (555) 456-7890",
      skills: ["Node.js", "React", "MongoDB", "Express"],
      experience: "4 years",
      avatar: "MC",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Candidates</h1>
          <p className="text-gray-600">Find talented professionals for your team</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {candidates.map((candidate) => (
            <Card key={candidate.id} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {candidate.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{candidate.name}</h3>
                    <p className="text-gray-600">{candidate.title}</p>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" />
                      {candidate.location}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    {candidate.email}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    {candidate.phone}
                  </div>
                  <div className="text-sm text-gray-600">Experience: {candidate.experience}</div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {candidate.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white">View Profile</Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
