import { Card, CardContent } from "./ui/card"
import Badge from "./ui/badge"
import { Button } from "./ui/button"
import Link from "next/link"
import React from "react"

export default function JobCard({ job }) {
  return (
    <Card className="bg-white hover:shadow-lg transition-shadow">
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
        <div className="text-sm text-gray-600 mb-4">{job.skills && job.skills.join(", ")}</div>
        <div className="flex items-center justify-between">
          <Link href={job.id ? `/jobs/${job.id}/apply` : "#"}>
            <Button className="bg-green-500 hover:bg-green-600 text-white">Apply Now</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
} 