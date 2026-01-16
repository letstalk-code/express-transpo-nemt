import Image from "next/image";
import Button from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-navy to-navy-light text-white py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {BUSINESS.tagline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Serving Hillsborough, Pinellas, and Pasco Counties with professional,
              compassionate medical transportation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/book-a-ride" size="lg">
                Book Your Ride
              </Button>
              <Button href="/facility-referrals" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
                Healthcare Facilities
              </Button>
            </div>
            <p className="mt-6 text-gray-300">
              Or call us now:{" "}
              <a href={`tel:${BUSINESS.phoneRaw}`} className="text-green font-semibold hover:text-green-light">
                {BUSINESS.phone}
              </a>
            </p>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero-image.png"
                alt="Professional driver helping elderly woman at health center"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent"></div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white text-navy rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg">On-Time</p>
                  <p className="text-sm text-gray">Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
