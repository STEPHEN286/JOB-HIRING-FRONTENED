"use client"
import { Button } from "@/components/ui/button"
import { Bell, Search, User } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SidebarTrigger, SidebarProvider, Sidebar, SidebarInset } from "@/components/ui/sidebar"
import AppSidebar from "@/components/layout/app-sidebar"

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full flex-col bg-white text-foreground">
        <div className="flex flex-1">
          <Sidebar>
            <AppSidebar />
          </Sidebar>
          <SidebarInset>
            <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-4 border-b  mb-5  border-gray-200 bg-white py-4 px-4 sm:static sm:h-auto sm:px-6">
              <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <h1 className="font-semibold text-lg text-gray-900">Admin Dashboard</h1>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Bell className="h-5 w-5 text-gray-400" />
                  <span className="sr-only">Toggle notifications</span>
                </Button>
                {/* <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <User className="h-5 w-5 text-gray-400" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white text-gray-900 border-gray-200">
                    <DropdownMenuItem>My Account</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu> */}
              </div>
            </header>
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 mb-5  bg-gray-100">{children}</main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  )
}
