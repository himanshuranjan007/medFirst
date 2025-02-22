"use client"

import { usePathname } from 'next/navigation'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type React from "react"

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isDashboard = pathname === '/dashboard'

  return (
    <div className="flex flex-col min-h-screen">
      {!isDashboard && <Header />}
      <main className="flex-grow">{children}</main>
      {!isDashboard && <Footer />}
    </div>
  )
} 