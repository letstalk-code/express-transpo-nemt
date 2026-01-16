import Link from "next/link";
import { SERVICE_AREAS, LOCATIONS } from "@/lib/constants";

export default function ServiceAreas() {
  return (
    <section className="py-16 md:py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Service Areas
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Proudly serving the Tampa Bay area with reliable NEMT services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {SERVICE_AREAS.counties.map((county) => (
            <div key={county.slug} className="bg-navy-light rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">{county.name}</h3>
              <ul className="space-y-2">
                {county.cities.map((city) => (
                  <li key={city} className="text-gray-300">• {city}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-300 mb-4">Looking for service in a specific city?</p>
          <div className="flex flex-wrap justify-center gap-4">
            {LOCATIONS.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="bg-green hover:bg-green-dark text-white px-4 py-2 rounded-lg transition-colors"
              >
                {location.city}, {location.state}
              </Link>
            ))}
          </div>
          <Link
            href="/service-areas"
            className="inline-block mt-6 text-green hover:text-green-light font-medium"
          >
            View All Service Areas →
          </Link>
        </div>
      </div>
    </section>
  );
}
