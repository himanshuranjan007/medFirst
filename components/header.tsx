import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CrossIcon as MedicalCross } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <MedicalCross className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">MedFirst</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/hospitals" className="text-sm font-medium hover:text-primary transition-colors">
            Hospitals
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

