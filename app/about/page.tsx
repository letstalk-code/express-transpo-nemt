import { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/sections/CTASection";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Express Transpo NEMT Services - our mission, values, and commitment to providing safe, reliable medical transportation in the Tampa Bay area.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Your trusted partner for non-emergency medical transportation.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">Our Mission</h2>
              <p className="text-lg text-gray mb-4">
                At {BUSINESS.shortName}, our mission is to provide safe, reliable, and compassionate
                non-emergency medical transportation to individuals who need it most.
              </p>
              <p className="text-gray">
                We understand that getting to medical appointments can be challenging for many people.
                Whether it&apos;s due to mobility limitations, lack of transportation, or the need for
                specialized assistance, we&apos;re here to bridge that gap and ensure everyone has
                access to the healthcare they need.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80"
                alt="Healthcare professional providing compassionate care"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Safety First",
                description: "Every trip is conducted with the highest safety standards. Our vehicles are regularly inspected and our drivers are thoroughly trained.",
                icon: "🛡️",
              },
              {
                title: "Reliability",
                description: "We understand that medical appointments are time-sensitive. We pride ourselves on punctuality and dependable service.",
                icon: "⏰",
              },
              {
                title: "Compassion",
                description: "Our team treats every passenger with dignity and respect. We go the extra mile to ensure comfort throughout the journey.",
                icon: "❤️",
              },
              {
                title: "Professionalism",
                description: "From booking to drop-off, we maintain the highest level of professionalism in all our interactions.",
                icon: "👔",
              },
              {
                title: "Accessibility",
                description: "Our services are designed to be accessible to everyone, including those with wheelchairs and mobility aids.",
                icon: "♿",
              },
              {
                title: "Community Focus",
                description: "We&apos;re proud to serve the Tampa Bay community and are committed to improving healthcare access for all.",
                icon: "🏘️",
              },
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 shadow-sm">
                <span className="text-4xl">{value.icon}</span>
                <h3 className="text-xl font-semibold text-navy mt-4 mb-2">{value.title}</h3>
                <p className="text-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80"
                alt="Professional driver helping passenger"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-navy mb-4">Why Choose Us</h2>
              <ul className="space-y-4">
                {[
                  "Licensed and fully insured transportation company",
                  "Background-checked and professionally trained drivers",
                  "Clean, well-maintained, and comfortable vehicles",
                  "Wheelchair-accessible transportation options",
                  "Flexible scheduling including same-day requests",
                  "Competitive pricing with multiple payment options",
                  "Serving Hillsborough, Pinellas, and Pasco Counties",
                  "Dedicated customer service team",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
