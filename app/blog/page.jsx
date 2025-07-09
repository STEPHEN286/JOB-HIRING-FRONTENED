import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User } from "lucide-react"
import Footer from "@/components/footer"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Tips for a Successful Job Interview",
      excerpt: "Learn the essential tips that will help you ace your next job interview and land your dream job.",
      author: "Sarah Wilson",
      date: "2024-01-20",
      category: "Career Tips",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Remote Work: The Future of Employment",
      excerpt: "Explore how remote work is changing the job market and what it means for both employers and employees.",
      author: "John Davis",
      date: "2024-01-18",
      category: "Industry Trends",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Building a Strong Professional Network",
      excerpt:
        "Discover effective strategies for building and maintaining professional relationships that can boost your career.",
      author: "Emily Chen",
      date: "2024-01-15",
      category: "Networking",
      readTime: "6 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Career Blog</h1>
          <p className="text-gray-600">Insights, tips, and trends in the job market</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>

                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Read More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}
