import Button from "@/components/ui/Button";
import { BUSINESS } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-green">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Book Your Ride?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Schedule your non-emergency medical transportation today.
          Our friendly team is here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/book-a-ride" variant="secondary" size="lg">
            Book Online
          </Button>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-navy font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
