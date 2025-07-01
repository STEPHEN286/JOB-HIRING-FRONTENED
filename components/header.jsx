"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

export function Header() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/jobs", label: "Find Jobs" },
    { href: "/post-job", label: "Post Jobs" },
    { href: "/candidates", label: "Candidates" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="bg-gray-900 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-gray-900 font-bold text-sm">E</span>
          </div>
          <span className="text-xl font-semibold">Eitechgh</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn("hover:text-green-400 transition-colors", pathname === item.href && "text-green-400")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/auth/login">
            <Button variant="ghost" className="text-white hover:text-green-400">
              Login
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button className="bg-green-500 hover:bg-green-600 text-white px-6">Registration</Button>
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <button aria-label="Open menu">
                <Menu className="w-7 h-7" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64 bg-gray-900 text-white">
              <SheetHeader className="px-6 py-4 border-b border-gray-800">
                <SheetTitle asChild>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                      <span className="text-gray-900 font-bold text-sm">F</span>
                    </div>
                    <span className="text-xl font-semibold">Finate</span>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <nav className="flex flex-col space-y-2 px-6 py-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn("hover:text-green-400 transition-colors py-2", pathname === item.href && "text-green-400")}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col space-y-2 px-6 pb-6">
                  <Link href="/auth/login">
                    <Button variant="ghost" className="w-full text-white hover:text-green-400">
                      Login
                    </Button>
                  </Link>
                  <Link href="/auth/register">
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Registration</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
