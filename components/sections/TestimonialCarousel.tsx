"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Margaret S.",
    location: "Tampa, FL",
    text: "Express Transpo has been a lifesaver for my dialysis appointments. The drivers are always on time and so helpful getting me in and out of the vehicle.",
    rating: 5,
  },
  {
    name: "Robert J.",
    location: "St. Petersburg, FL",
    text: "After my hip surgery, I needed reliable transportation to physical therapy. These folks are professional, caring, and always punctual. Highly recommend!",
    rating: 5,
  },
  {
    name: "Linda M.",
    location: "Clearwater, FL",
    text: "The wheelchair accessible van is spotless and comfortable. The driver even helped me with my bags. This service gives me independence to get to my appointments.",
    rating: 5,
  },
  {
    name: "James T.",
    location: "Brandon, FL",
    text: "I use Express Transpo for my mother's cancer treatments. Knowing she's in safe hands takes such a weight off our family. Thank you for your compassionate service.",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-gray-light overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">
          What Our Passengers Say
        </h2>

        <div className="relative h-[280px] md:h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex flex-col justify-center">
                {/* Stars */}
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg text-gray-dark text-center mb-6 italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                {/* Author */}
                <div className="text-center">
                  <p className="font-semibold text-navy">{testimonials[current].name}</p>
                  <p className="text-sm text-gray">{testimonials[current].location}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === current ? "bg-green" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
