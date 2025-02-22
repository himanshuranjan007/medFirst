import Link from "next/link"
import { Facebook, Github, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="border-t bg-gray-50/50">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">About us you</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-sm hover:underline" href="#">
                  Our Hospital
                </Link>
              </li>
              <li>
                <Link className="text-sm hover:underline" href="#">
                  Doctors
                </Link>
              </li>
              <li>
                <Link className="text-sm hover:underline" href="#">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-sm hover:underline" href="#">
                  OPD Consultations
                </Link>
              </li>
              <li>
                <Link className="text-sm hover:underline" href="#">
                  Lab Tests
                </Link>
              </li>
              <li>
                <Link className="text-sm hover:underline" href="#">
                  Health Checkup
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-sm hover:underline" href="#">
                  Business
                </Link>
              </li>
              <li>
                <Link className="text-sm hover:underline" href="#">
                  Support
                </Link>
              </li>
              <li>
                <Link className="text-sm hover:underline" href="#">
                  Customer Care
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="text-sm text-gray-600">Subscribe to our newsletter for updates and health tips.</p>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" type="email" />
              <Button className="bg-primary hover:bg-primary/90">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between space-y-4 border-t pt-8 md:flex-row md:space-y-0">
          <div className="flex space-x-4">
            <Link className="text-gray-500 hover:text-primary" href="#">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link className="text-gray-500 hover:text-primary" href="#">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link className="text-gray-500 hover:text-primary" href="#">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link className="text-gray-500 hover:text-primary" href="#">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
          <p className="text-sm text-gray-600">© 2024 MedFirst. All rights reserved.</p>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600">
          The information provided on MedFirst is intended for general informational purposes only and should not be
          considered as medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare
          provider for any medical condition or treatment.
        </div>
      </div>
    </footer>
  )
}

