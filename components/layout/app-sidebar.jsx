"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  Package2,
  Home,
  Briefcase,
  Users,
  UserCheck,
  Tags,
  Settings,
} from "lucide-react"

export default function AppSidebar() {
  const pathname = usePathname()

  const navigationItems = [
    { name: "Dashboard", href: "/admin/dashboard", icon: Home },
    { name: "Jobs", href: "/admin/dashboard/jobs", icon: Briefcase },
    { name: "Applicants", href: "/admin/dashboard/applicants", icon: Users },
    { name: "Users", href: "/admin/dashboard/users", icon: UserCheck },
    { name: "Categories", href: "/admin/dashboard/categories", icon: Tags },
    { name: "Settings", href: "/admin/dashboard/settings", icon: Settings },
  ]

  return (
    <Sidebar className=" border-r border-blue-900" style={{ "--sidebar": "#0c1a2a" }}>
    <SidebarHeader className="flex flex-col items-center gap-4 px-4 py-6">
      <Link href="#" className="flex items-center gap-2 font-semibold text-lg">
        <Package2 className="h-6 w-6 text-blue-600" />
        <span className="text-blue-600">Eitegh Jobs</span>
      </Link>
      <span className="text-sm text-gray-400">Admin Dashboard</span>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        {/* <SidebarGroupLabel>Navigation</SidebarGroupLabel> */}
        <SidebarGroupContent>
          <SidebarMenu className="space-y-2">
            {navigationItems.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild className="text-blue-100 text-lg py-6 hover:bg-blue-950/50 hover:text-blue-100 data-[active=true]:rounded-0 data-[active=true]:bg-blue-950/50 data-[active=true]:text-white" isActive={pathname === item.href}>
                  <Link href={item.href}>
                    <item.icon className="h-5 w-5 mr-2" />
                    <span className="text-lg">{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  )
}
