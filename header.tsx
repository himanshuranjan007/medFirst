"use client"

import Link from "next/link"
import { Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Plus className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">MedFirst</span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <div className="grid gap-1">
                    <h3 className="text-sm font-medium leading-none">About Us</h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      Learn about our mission to provide quality healthcare
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-sm font-medium leading-none">Our Team</h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      Meet our experienced healthcare professionals
                    </p>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Hospitals</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                  <div className="grid gap-1">
                    <h3 className="text-sm font-medium leading-none">Locations</h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">Find a hospital near you</p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-sm font-medium leading-none">Specialties</h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">Explore our specialized departments</p>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <div className="grid gap-1">
                    <h3 className="text-sm font-medium leading-none">OPD Consultations</h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      Book an appointment with our specialists
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-sm font-medium leading-none">Lab Tests</h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">Complete range of diagnostic services</p>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/register">
            <Button className="bg-primary hover:bg-primary/90">Register</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

