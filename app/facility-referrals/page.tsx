import { Metadata } from "next";
import FacilityReferralForm from "@/components/forms/FacilityReferralForm";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Facility Referrals",
  description: "Healthcare facilities can easily refer patients for non-emergency medical transportation. Streamlined referral process for hospitals, clinics, and care facilities.",
};

export default function FacilityReferralsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">For Healthcare Facilities</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Partner with us for reliable patient transportation services.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Why Partner With {BUSINESS.shortName}?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Streamlined Referral Process",
                    description: "Easy online referral form or dedicated phone line for facility staff. Quick confirmation and scheduling.",
                  },
                  {
                    title: "Reliable Service",
                    description: "On-time pickups for discharges and appointments. We understand the importance of timely patient transport.",
                  },
                  {
                    title: "Direct Billing Options",
                    description: "We offer facility billing and can work with your billing department to streamline payments.",
                  },
                  {
                    title: "Dedicated Account Support",
                    description: "Get a dedicated contact person for your facility to handle scheduling and any concerns.",
                  },
                  {
                    title: "HIPAA Compliant",
                    description: "Our drivers and staff are trained in patient privacy. We handle patient information securely.",
                  },
                  {
                    title: "Wheelchair & Stretcher Capable",
                    description: "Our fleet can accommodate a variety of patient mobility needs.",
                  },
                ].map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="w-8 h-8 bg-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">{benefit.title}</h3>
                      <p className="text-gray">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gray-light rounded-xl">
                <h3 className="font-semibold text-navy mb-2">Prefer to Call?</h3>
                <p className="text-gray mb-2">
                  Our facility coordination team is available to assist you.
                </p>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="text-green-dark font-semibold text-lg hover:text-green"
                >
                  {BUSINESS.phone}
                </a>
              </div>
            </div>

            {/* Referral Form */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-navy mb-6">Submit a Patient Referral</h2>
              <FacilityReferralForm />
            </div>
          </div>
        </div>
      </section>

      {/* Facility Types */}
      <section className="py-16 md:py-20 bg-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            Facilities We Serve
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Hospitals",
              "Dialysis Centers",
              "Rehabilitation Facilities",
              "Nursing Homes",
              "Assisted Living",
              "Physician Offices",
              "Oncology Centers",
              "Physical Therapy Clinics",
            ].map((facility) => (
              <div key={facility} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="font-medium text-gray-dark">{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
