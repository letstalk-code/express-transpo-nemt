import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";
import { SERVICE_AREAS, LOCATIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas",
  description: "Express Transpo NEMT serves Hillsborough, Pinellas, and Pasco Counties including Tampa, St. Petersburg, Clearwater, and surrounding cities.",
};

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Service Areas</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Providing NEMT services throughout the Tampa Bay area.
          </p>
        </div>
      </section>

      {/* Counties Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICE_AREAS.counties.map((county) => (
              <div key={county.slug} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-2xl font-bold text-navy mb-4">{county.name}</h2>
                <ul className="space-y-2 mb-4">
                  {county.cities.map((city) => (
                    <li key={city} className="flex items-center gap-2 text-gray-dark">
                      <svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Pages */}
      <section className="py-16 md:py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            Popular Locations
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {LOCATIONS.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-navy mb-2">
                  {location.city}, {location.state}
                </h3>
                <p className="text-gray mb-3">{location.description}</p>
                <span className="text-green-dark font-medium">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Info */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Don&apos;t See Your City?
            </h2>
            <p className="text-lg text-gray mb-6">
              We may still be able to serve you! Our coverage area extends throughout
              the greater Tampa Bay region. Contact us to check if we can accommodate
              your transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-green hover:bg-green-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/book-a-ride"
                className="bg-navy hover:bg-navy-light text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Request a Ride
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
