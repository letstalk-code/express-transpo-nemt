"use client";

import { useState } from "react";
import FormInput from "@/components/ui/FormInput";
import Button from "@/components/ui/Button";

export default function FacilityReferralForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green/10 border border-green rounded-lg p-6 text-center">
        <svg className="w-12 h-12 text-green mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-xl font-semibold text-navy mb-2">Referral Submitted!</h3>
        <p className="text-gray">Thank you for your referral. Our team will contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-navy mb-4">Facility Information</h3>
        <div className="space-y-4">
          <FormInput label="Facility Name" name="facilityName" required />
          <div className="grid md:grid-cols-2 gap-4">
            <FormInput label="Contact Person" name="contactPerson" required />
            <FormInput label="Title/Position" name="title" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <FormInput label="Phone" name="facilityPhone" type="tel" required />
            <FormInput label="Email" name="facilityEmail" type="email" required />
          </div>
          <FormInput label="Facility Address" name="facilityAddress" required />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-navy mb-4">Patient Information</h3>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <FormInput label="Patient First Name" name="patientFirstName" required />
            <FormInput label="Patient Last Name" name="patientLastName" required />
          </div>
          <FormInput label="Patient Phone" name="patientPhone" type="tel" />
          <div className="grid md:grid-cols-2 gap-4">
            <FormInput label="Pickup Address" name="pickupAddress" required />
            <FormInput label="Destination Address" name="destinationAddress" required />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-navy mb-4">Transportation Details</h3>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <FormInput label="Appointment Date" name="appointmentDate" type="date" required />
            <FormInput label="Appointment Time" name="appointmentTime" type="time" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-dark mb-2">
              Transportation Type
            </label>
            <select
              name="transportationType"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green focus:border-green outline-none"
              required
            >
              <option value="">Select type</option>
              <option value="ambulatory">Ambulatory (can walk)</option>
              <option value="wheelchair">Wheelchair</option>
              <option value="stretcher">Stretcher</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-dark mb-2">
              Round Trip?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="roundTrip" value="yes" className="text-green" />
                <span>Yes</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="roundTrip" value="no" className="text-green" />
                <span>No (one-way)</span>
              </label>
            </div>
          </div>
          <FormInput label="Special Instructions" name="specialInstructions" type="textarea" />
        </div>
      </div>

      <Button type="submit" className="w-full" size="lg">Submit Referral</Button>
    </form>
  );
}
