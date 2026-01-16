import { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import { BUSINESS, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "NEMT Services in St. Petersburg, FL",
  description: "Non-emergency medical transportation in St. Petersburg, Florida. Serving Pinellas County with reliable medical transport to hospitals, dialysis centers, and doctor appointments.",
  keywords: ["NEMT St. Petersburg", "medical transportation St Pete FL", "dialysis transport Pinellas", "wheelchair transport St. Petersburg", "Pinellas County NEMT"],
};

export default function StPetersburgPage() {
  const nearbyAreas = ["Gulfport", "Pinellas Park", "Kenneth City", "South Pasadena", "Treasure Island", "Madeira Beach"];
  const facilities = [
    "Johns Hopkins All Children's Hospital",
    "Bayfront Health St. Petersburg",
    "St. Anthony's Hospital",
    "Palms of Pasadena Hospital",
    "DaVita Dialysis Centers",
    "Fresenius Kidney Care",
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-green font-medium mb-2">Pinellas County</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Non-Emergency Medical Transportation in St. Petersburg, FL
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-6">
            {BUSINESS.shortName} provides reliable, safe NEMT services throughout St. Petersburg and Pinellas County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/book-a-ride" size="lg">Book a Ride in St. Pete</Button>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-8">NEMT Services in St. Petersburg</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray mb-6">
                St. Petersburg residents trust {BUSINESS.shortName} for their non-emergency medical
                transportation needs. From routine check-ups to regular dialysis appointments,
                we provide dependable, compassionate service throughout the St. Pete area.
              </p>
              <h3 className="text-xl font-semibold text-navy mb-4">Our Services Include:</h3>
              <ul className="space-y-3">
                {SERVICES.map((service) => (
                  <li key={service.slug} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-dark">{service.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-light rounded-xl p-6">
              <h3 className="text-xl font-semibold text-navy mb-4">St. Pete Medical Facilities We Serve</h3>
              <ul className="space-y-2">
                {facilities.map((facility) => (
                  <li key={facility} className="flex items-center gap-2 text-gray-dark">
                    <svg className="w-4 h-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {facility}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray mt-4">And many more throughout St. Petersburg...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 md:py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-8">Areas We Serve Near St. Petersburg</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {nearbyAreas.map((area) => (
              <div key={area} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="font-medium text-gray-dark">{area}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-gray">
            <Link href="/service-areas" className="text-green-dark hover:text-green font-medium">
              View all service areas →
            </Link>
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            Why St. Pete Residents Choose {BUSINESS.shortName}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Pinellas Experts", description: "Our drivers know St. Petersburg and Pinellas County inside and out." },
              { title: "Reliable Service", description: "On-time pickups so you never miss your medical appointments." },
              { title: "Wheelchair Accessible", description: "Vehicles equipped to handle wheelchairs and mobility aids." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
