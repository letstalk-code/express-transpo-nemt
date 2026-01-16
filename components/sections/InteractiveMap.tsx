"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SERVICE_AREAS } from "@/lib/constants";

export default function InteractiveMap() {
  const [activeCounty, setActiveCounty] = useState<string | null>(null);

  // Approximate positions on the Tampa Bay map for each county
  const countyData: Record<string, { x: number; y: number; color: string }> = {
    "hillsborough-county": { x: 62, y: 55, color: "#22c55e" },
    "pinellas-county": { x: 28, y: 58, color: "#4ade80" },
    "pasco-county": { x: 50, y: 22, color: "#86efac" },
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Our Service Coverage
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            Click on a county to see the cities we serve in the Tampa Bay area
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200"
          >
            {/* Embedded Map Image - Tampa Bay Area */}
            <div className="relative aspect-square bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d450563.5765498867!2d-82.6!3d28.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus&style=feature:all|element:labels|visibility:simplified"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[30%] contrast-[1.1]"
              />

              {/* Interactive Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                {/* County Markers */}
                {SERVICE_AREAS.counties.map((county) => {
                  const position = countyData[county.slug];
                  const isActive = activeCounty === county.slug;

                  return (
                    <motion.button
                      key={county.slug}
                      onClick={() => setActiveCounty(isActive ? null : county.slug)}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 z-10"
                      style={{
                        left: `${position.x}%`,
                        top: `${position.y}%`,
                      }}
                    >
                      {/* Pulse ring */}
                      <span
                        className={`absolute inset-0 rounded-full animate-ping ${isActive ? 'bg-green' : 'bg-green/50'}`}
                        style={{ animationDuration: '2s' }}
                      />

                      {/* Marker */}
                      <div
                        className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                          isActive
                            ? 'bg-green text-white scale-110'
                            : 'bg-white text-navy hover:bg-green hover:text-white'
                        }`}
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>

                      {/* Label */}
                      <div
                        className={`absolute top-full mt-1 left-1/2 transform -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded text-xs font-semibold transition-all ${
                          isActive
                            ? 'bg-navy text-white'
                            : 'bg-white/90 text-navy shadow'
                        }`}
                      >
                        {county.name.replace(" County", "")}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Map Legend */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-lg p-3 shadow-lg">
                <p className="text-xs font-semibold text-navy mb-2">Service Areas</p>
                <div className="space-y-1">
                  {SERVICE_AREAS.counties.map((county) => (
                    <div
                      key={county.slug}
                      className={`flex items-center gap-2 text-xs cursor-pointer transition-colors ${
                        activeCounty === county.slug ? 'text-green font-semibold' : 'text-gray-dark'
                      }`}
                      onClick={() => setActiveCounty(activeCounty === county.slug ? null : county.slug)}
                    >
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: countyData[county.slug].color }}
                      />
                      {county.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* County Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-light rounded-2xl p-6 lg:p-8 min-h-[400px]"
          >
            {activeCounty ? (
              <motion.div
                key={activeCounty}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {SERVICE_AREAS.counties
                  .filter((c) => c.slug === activeCounty)
                  .map((county) => (
                    <div key={county.slug}>
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: countyData[county.slug].color }}
                        />
                        <h3 className="text-2xl font-bold text-navy">
                          {county.name}
                        </h3>
                      </div>
                      <p className="text-gray mb-6">
                        We proudly serve the following cities in {county.name}:
                      </p>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {county.cities.map((city) => (
                          <motion.div
                            key={city}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm"
                          >
                            <svg className="w-4 h-4 text-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-dark text-sm">{city}</span>
                          </motion.div>
                        ))}
                      </div>
                      <Link
                        href="/book-a-ride"
                        className="inline-flex items-center gap-2 bg-green hover:bg-green-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                      >
                        Book a Ride in {county.name.replace(" County", "")}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  ))}
              </motion.div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-20 h-20 bg-green/10 rounded-full flex items-center justify-center mb-4"
                >
                  <svg className="w-10 h-10 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-navy mb-2">
                  Select a County
                </h3>
                <p className="text-gray max-w-xs">
                  Click on any marker on the map to explore the cities we serve in that area.
                </p>

                {/* Quick select buttons */}
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  {SERVICE_AREAS.counties.map((county) => (
                    <button
                      key={county.slug}
                      onClick={() => setActiveCounty(county.slug)}
                      className="px-4 py-2 bg-white rounded-full text-sm font-medium text-navy hover:bg-green hover:text-white transition-colors shadow-sm"
                    >
                      {county.name.replace(" County", "")}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
