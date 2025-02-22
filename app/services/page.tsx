import { Button } from "@/components/ui/button"
import { Phone, Share2, UserPlus } from "lucide-react"
import { ServiceCard } from "@/components/service-card"
import { InsightsSection } from "@/components/insights-section"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive healthcare solutions designed to make your experience better
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <ServiceCard
              icon={<UserPlus className="h-6 w-6" />}
              title="Easy Registration"
              description="Quickly and easily register for your OPD appointment with just a few simple steps. Save time by avoiding long waits and secure your preferred time slot hassle-free."
            />
            <ServiceCard
              icon={<Share2 className="h-6 w-6" />}
              title="Medical Resource Data Sharing"
              description="Stay updated on the latest data regarding hospital equipment to ensure you have access to the most current information."
            />
            <ServiceCard
              icon={<Phone className="h-6 w-6" />}
              title="24/7 Support"
              description="We are here to assist you at any time of the day, ensuring you receive the support you need whenever it's convenient for you."
            />
          </div>
        </div>
      </section>

    </div>
  )
}
