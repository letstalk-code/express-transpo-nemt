"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt={BUSINESS.name}
              width={220}
              height={80}
              className="h-16 md:h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-dark hover:text-navy font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="text-navy font-semibold hover:text-navy-light"
            >
              {BUSINESS.phone}
            </a>
            <Link
              href="/book-a-ride"
              className="bg-green hover:bg-green-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Book a Ride
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-dark"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-dark hover:text-navy font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-a-ride"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-green hover:bg-green-dark text-white font-semibold px-5 py-3 rounded-lg text-center mt-4"
            >
              Book a Ride
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
