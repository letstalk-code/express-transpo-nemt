import Image from "next/image";
import { WHO_WE_SERVE } from "@/lib/constants";

export default function WhoWeServe() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Who We Serve
            </h2>
            <p className="text-lg text-gray mb-6">
              We provide compassionate transportation for patients of all ages and abilities.
              Our service is designed for those who need reliable, safe transport to medical appointments.
            </p>
            <ul className="space-y-3">
              {WHO_WE_SERVE.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-dark">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80"
                alt="Caring transportation for seniors and patients with mobility needs"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* CTA overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-navy mb-2">Need a Ride?</h3>
              <p className="text-gray text-sm mb-3">
                We&apos;re here to help you get to your medical appointments safely and on time.
              </p>
              <a
                href="/book-a-ride"
                className="inline-block bg-green hover:bg-green-dark text-white font-semibold px-5 py-2 rounded-lg transition-colors text-sm"
              >
                Book Your Ride Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
