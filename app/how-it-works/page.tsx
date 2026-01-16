import { Metadata } from "next";
import Accordion from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";
import { HOW_IT_WORKS, FAQ_ITEMS, BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Learn how to book non-emergency medical transportation with Express Transpo. Simple 3-step process: Book, Pickup, Arrive safely.",
};

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Booking your medical transportation is simple. Here&apos;s what to expect.
          </p>
        </div>
      </section>

      {/* Steps Detail */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {HOW_IT_WORKS.map((item, index) => (
              <div key={item.step} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-navy">{item.title}</h2>
                  </div>
                  <p className="text-lg text-gray mb-4">{item.description}</p>
                  {item.step === 1 && (
                    <div className="space-y-2 text-gray-dark">
                      <p><strong>Ways to book:</strong></p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Call us at <a href={`tel:${BUSINESS.phoneRaw}`} className="text-green-dark">{BUSINESS.phone}</a></li>
                        <li>Fill out our <a href="/book-a-ride" className="text-green-dark">online booking form</a></li>
                        <li>Healthcare facilities can use our <a href="/facility-referrals" className="text-green-dark">referral system</a></li>
                      </ul>
                    </div>
                  )}
                  {item.step === 2 && (
                    <div className="space-y-2 text-gray-dark">
                      <p><strong>What to expect:</strong></p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Driver arrives at your door</li>
                        <li>Assistance walking to the vehicle</li>
                        <li>Help getting seated comfortably</li>
                        <li>Wheelchair loading if needed</li>
                      </ul>
                    </div>
                  )}
                  {item.step === 3 && (
                    <div className="space-y-2 text-gray-dark">
                      <p><strong>At your destination:</strong></p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>We&apos;ll get you there on time</li>
                        <li>Assistance to the facility entrance</li>
                        <li>Wait time or scheduled return pickup</li>
                        <li>Safe ride back home</li>
                      </ul>
                    </div>
                  )}
                </div>
                <div className={`bg-gray-light rounded-xl p-8 flex items-center justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <span className="text-8xl">
                    {item.step === 1 && "📱"}
                    {item.step === 2 && "🚐"}
                    {item.step === 3 && "🏥"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/book-a-ride" size="lg">Book Your Ride Now</Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-gray-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion items={FAQ_ITEMS} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
