import { Button } from "@/components/ui/button"
import { Phone, Share2, UserPlus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { InsightsSection } from "@/components/insights-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 gradient-bg text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                New Era <br />
                <span className="text-orange-200">Smart OPD</span>
              </h1>
              <p className="max-w-[600px] text-orange-100 md:text-xl">
                Experience seamless healthcare management with our innovative OPD system. Book appointments, manage
                queues, and access medical resources all in one place.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/opd-registration">Book Appointment</Link>
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mr-0">
              <Image
                src="/front.webp"
                alt="Healthcare Dashboard"
                className="aspect-video overflow-hidden rounded-xl object-cover shadow-2xl w-full"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>

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

      {/* Insights Section */}
      <InsightsSection />

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-orange-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">What Our Community Says</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Emily Johnson"
              role="Patient"
              image="/placeholder.svg"
              quote="Exceptional care and attention."
              description="The staff was attentive, and the facilities were top-notch. I couldn't have asked for better care."
              rating={5}
            />
            <TestimonialCard
              name="Dr. Michael Chen"
              role="Doctor"
              image="/placeholder.svg"
              quote="State-of-the-art facilities."
              description="As a doctor, I'm impressed by the hospital's commitment to providing the best care possible."
              rating={5}
            />
            <TestimonialCard
              name="Sarah Thompson"
              role="Nurse"
              image="/placeholder.svg"
              quote="Efficient and caring team."
              description="Our nursing staff works tirelessly to ensure patient comfort and quick recovery."
              rating={4}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

