import Link from "next/link";
import Image from "next/image";
import { BUSINESS, NAV_LINKS, SERVICE_AREAS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/logo.png"
              alt={BUSINESS.name}
              width={180}
              height={60}
              className="h-14 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4">{BUSINESS.tagline}</p>
            <p className="text-gray-300">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="hover:text-green">
                {BUSINESS.phone}
              </a>
            </p>
            <p className="text-gray-300">
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-green">
                {BUSINESS.email}
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-green">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {SERVICE_AREAS.counties.map((county) => (
                <li key={county.slug} className="text-gray-300">
                  {county.name}
                </li>
              ))}
            </ul>
            <Link
              href="/service-areas"
              className="inline-block mt-3 text-green hover:text-green-light"
            >
              View All Areas →
            </Link>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>{BUSINESS.address.street}</p>
              <p>{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</p>
            </address>
            <p className="mt-4 text-gray-300">
              <span className="font-medium text-white">Hours:</span><br />
              {BUSINESS.hours}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-green">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-green">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
