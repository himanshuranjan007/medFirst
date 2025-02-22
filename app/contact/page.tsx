
import { ContactForm } from "@/components/contactform"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | MedFirst",
  description: "Get in touch with the MedFirst team for any queries or support.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow">
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2 pl-5 pr-5">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Contact Us
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Have questions or feedback? We're here to help. Reach out to our team for support or inquiries about
                  MedFirst.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-[800px] mt-12">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

