import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-orange-50">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hospitals" className="text-sm hover:text-primary transition-colors">
                  Our Hospital
                </Link>
              </li>
              <li>
                <Link href="/hospitals" className="text-sm hover:text-primary transition-colors">
                  Doctors
                </Link>
              </li>
              <li>
                <Link href="/hospitals" className="text-sm hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm hover:text-primary transition-colors">
                  OPD Consultations
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-primary transition-colors">
                  Lab Tests
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:text-primary transition-colors">
                  Health Checkup
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm hover:text-primary transition-colors">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary transition-colors">
                  Customer Care
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <div className="flex max-w-sm flex-col gap-2">
              <p className="text-sm text-muted-foreground">Subscribe to our newsletter for updates and health tips.</p>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" type="email" />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex space-x-6">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 MedFirst. All rights reserved.</p>
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            The information provided on MedFirst is intended for general informational purposes only and should not be
            considered as medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare
            provider for any medical condition or treatment.
          </p>
        </div>
      </div>
    </footer>
  )
}

