"use client"

import Link from "next/link"

export default function Footer() {
  return (
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
                <Link href="/jobs" className="hover:text-white">Browse Jobs</Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-white">My Applications</Link>
              </li>
              <li>
                <Link href="/profile" className="hover:text-white">Profile</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/post-job" className="hover:text-white">Post a Job</Link>
              </li>
              <li>
                <Link href="/candidates" className="hover:text-white">Browse Candidates</Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-white">Employer Dashboard</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/contact" className="hover:text-white">Contact Us</Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-white">Help Center</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 eitegh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 