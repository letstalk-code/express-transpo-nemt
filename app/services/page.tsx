import { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Non-emergency medical transportation services including dialysis transport, treatment transport, wheelchair accessible vehicles, and hospital discharge pickups.",
};

const serviceImages: Record<string, string> = {
  medical: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80",
  recurring: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
  hospital: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
  wheelchair: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Professional non-emergency medical transportation tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES.map((service, index) => (
              <div
                key={service.slug}
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray mb-6">{service.description}</p>
                  <Button href="/book-a-ride">Book This Service</Button>
                </div>
                <div className={`rounded-2xl overflow-hidden shadow-lg ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <Image
                    src={serviceImages[service.icon]}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 md:py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80"
                alt="Tampa Bay city view - our service area"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-navy mb-4">What&apos;s Included</h2>
              <ul className="space-y-3 mb-8">
                {[
                  "Door-to-door service",
                  "Driver assistance getting in and out of vehicle",
                  "Comfortable, clean vehicles",
                  "Professional, trained drivers",
                  "On-time pickup guarantee",
                  "Wait time for appointments",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-dark">{item}</span>
                  </li>
                ))}
              </ul>
              <h2 className="text-2xl font-bold text-navy mb-4">Our Fleet</h2>
              <p className="text-gray mb-4">
                Our vehicles are regularly maintained, fully insured, and equipped to handle a variety of passenger needs:
              </p>
              <ul className="space-y-2 text-gray-dark">
                <li>• Wheelchair-accessible vehicles with lifts</li>
                <li>• Comfortable sedans for ambulatory passengers</li>
                <li>• Climate-controlled interiors</li>
                <li>• Safety equipment and first aid kits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
