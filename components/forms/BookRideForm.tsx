"use client";

import { useState } from "react";
import FormInput from "@/components/ui/FormInput";
import Button from "@/components/ui/Button";

export default function BookRideForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green/10 border border-green rounded-lg p-8 text-center">
        <svg className="w-16 h-16 text-green mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-2xl font-semibold text-navy mb-2">Ride Request Submitted!</h3>
        <p className="text-gray mb-4">
          Thank you for booking with us. We&apos;ll call you within 2 hours to confirm your ride details.
        </p>
        <p className="text-sm text-gray">
          Need immediate assistance? Call us at <a href="tel:8135550123" className="text-green-dark font-medium">(813) 555-0123</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div>
        <h3 className="text-lg font-semibold text-navy mb-4 flex items-center gap-2">
          <span className="w-6 h-6 bg-green text-white rounded-full flex items-center justify-center text-sm">1</span>
          Personal Information
        </h3>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <FormInput label="First Name" name="firstName" required />
            <FormInput label="Last Name" name="lastName" required />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <FormInput label="Phone Number" name="phone" type="tel" required />
            <FormInput label="Email (optional)" name="email" type="email" />
          </div>
          <FormInput label="Date of Birth" name="dob" type="date" />
        </div>
      </div>

      {/* Trip Details */}
      <div>
        <h3 className="text-lg font-semibold text-navy mb-4 flex items-center gap-2">
          <span className="w-6 h-6 bg-green text-white rounded-full flex items-center justify-center text-sm">2</span>
          Trip Details
        </h3>
        <div className="space-y-4">
          <FormInput label="Pickup Address" name="pickupAddress" placeholder="Street address, city, state, zip" required />
          <FormInput label="Destination Address" name="destinationAddress" placeholder="Medical facility or address" required />
          <div className="grid md:grid-cols-2 gap-4">
            <FormInput label="Appointment Date" name="appointmentDate" type="date" required />
            <FormInput label="Appointment Time" name="appointmentTime" type="time" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-dark mb-2">
              Round Trip? <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="roundTrip" value="yes" className="w-4 h-4 text-green" defaultChecked />
                <span>Yes, I need a return trip</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="roundTrip" value="no" className="w-4 h-4 text-green" />
                <span>No, one-way only</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Mobility & Special Needs */}
      <div>
        <h3 className="text-lg font-semibold text-navy mb-4 flex items-center gap-2">
          <span className="w-6 h-6 bg-green text-white rounded-full flex items-center justify-center text-sm">3</span>
          Mobility & Special Needs
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-dark mb-2">
              Mobility Status <span className="text-red-500">*</span>
            </label>
            <select
              name="mobilityStatus"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green focus:border-green outline-none"
              required
            >
              <option value="">Select mobility status</option>
              <option value="ambulatory">Ambulatory (can walk without assistance)</option>
              <option value="ambulatory-assist">Ambulatory with assistance (cane, walker)</option>
              <option value="wheelchair">Wheelchair user</option>
              <option value="wheelchair-lift">Wheelchair requiring vehicle lift</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-dark mb-2">
              Will a companion be riding along?
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="companion" value="yes" className="w-4 h-4 text-green" />
                <span>Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="companion" value="no" className="w-4 h-4 text-green" defaultChecked />
                <span>No</span>
              </label>
            </div>
          </div>
          <FormInput
            label="Special Instructions (optional)"
            name="specialInstructions"
            type="textarea"
            placeholder="Any special needs, instructions for the driver, or additional information..."
          />
        </div>
      </div>

      {/* Payment */}
      <div>
        <h3 className="text-lg font-semibold text-navy mb-4 flex items-center gap-2">
          <span className="w-6 h-6 bg-green text-white rounded-full flex items-center justify-center text-sm">4</span>
          Payment Information
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-dark mb-2">
              Payment Method <span className="text-red-500">*</span>
            </label>
            <select
              name="paymentMethod"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green focus:border-green outline-none"
              required
            >
              <option value="">Select payment method</option>
              <option value="medicaid">Medicaid</option>
              <option value="private">Private Pay</option>
              <option value="insurance">Insurance</option>
              <option value="facility">Facility Billing</option>
            </select>
          </div>
          <FormInput label="Medicaid ID (if applicable)" name="medicaidId" placeholder="Enter your Medicaid ID number" />
        </div>
      </div>

      <div className="pt-4">
        <Button type="submit" size="lg" className="w-full">
          Submit Ride Request
        </Button>
        <p className="text-sm text-gray text-center mt-4">
          By submitting this form, you agree to be contacted about your ride request.
        </p>
      </div>
    </form>
  );
}
