"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BUSINESS } from "@/lib/constants";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 lg:bottom-6 lg:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden mb-2"
          >
            {/* Header */}
            <div className="bg-navy p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Need Help?</p>
                  <p className="text-gray-300 text-sm">We typically reply instantly</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-4">
              <div className="bg-gray-light rounded-lg p-3 mb-4">
                <p className="text-sm text-gray-dark">
                  👋 Hi there! How can we help you today? Click below to get in touch.
                </p>
              </div>

              <div className="space-y-2">
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="flex items-center gap-3 p-3 bg-green/10 hover:bg-green/20 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-medium text-navy text-sm">Call Us Now</p>
                    <p className="text-xs text-gray">{BUSINESS.phone}</p>
                  </div>
                </a>

                <a
                  href="/book-a-ride"
                  className="flex items-center gap-3 p-3 bg-navy/5 hover:bg-navy/10 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-navy text-sm">Book a Ride</p>
                    <p className="text-xs text-gray">Schedule online</p>
                  </div>
                </a>

                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-3 p-3 bg-navy/5 hover:bg-navy/10 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-medium text-navy text-sm">Email Us</p>
                    <p className="text-xs text-gray">{BUSINESS.email}</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${
          isOpen ? "bg-gray-600" : "bg-green hover:bg-green-dark"
        }`}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </motion.button>
    </div>
  );
}
