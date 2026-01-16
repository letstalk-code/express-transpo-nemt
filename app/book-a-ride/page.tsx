import { Metadata } from "next";
import BookRideForm from "@/components/forms/BookRideForm";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book a Ride",
  description: "Book non-emergency medical transportation online. Easy scheduling for dialysis, doctor appointments, hospital discharges, and more.",
};

export default function BookRidePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Ride</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Fill out the form below to schedule your non-emergency medical transportation.
          </p>
          <p className="mt-4 text-gray-300">
            Need to book by phone? Call us at{" "}
            <a href={`tel:${BUSINESS.phoneRaw}`} className="text-green font-semibold hover:text-green-light">
              {BUSINESS.phone}
            </a>
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
            <BookRideForm />
          </div>

          {/* Additional Info */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-light rounded-xl p-6">
              <h3 className="font-semibold text-navy mb-2">Booking Tips</h3>
              <ul className="text-sm text-gray space-y-2">
                <li>• Book at least 24-48 hours in advance</li>
                <li>• Have your appointment details ready</li>
                <li>• Let us know about any mobility needs</li>
                <li>• Include building/suite numbers in addresses</li>
              </ul>
            </div>
            <div className="bg-gray-light rounded-xl p-6">
              <h3 className="font-semibold text-navy mb-2">What Happens Next</h3>
              <ul className="text-sm text-gray space-y-2">
                <li>• We&apos;ll call to confirm within 2 hours</li>
                <li>• You&apos;ll receive pickup time confirmation</li>
                <li>• Driver calls when en route</li>
                <li>• Arrive safely at your appointment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
