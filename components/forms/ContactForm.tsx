"use client";

import { useState } from "react";
import FormInput from "@/components/ui/FormInput";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green/10 border border-green rounded-lg p-6 text-center">
        <svg className="w-12 h-12 text-green mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <h3 className="text-xl font-semibold text-navy mb-2">Message Sent!</h3>
        <p className="text-gray">Thank you for contacting us. We&apos;ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <FormInput label="First Name" name="firstName" required />
        <FormInput label="Last Name" name="lastName" required />
      </div>
      <FormInput label="Email" name="email" type="email" required />
      <FormInput label="Phone" name="phone" type="tel" />
      <FormInput label="Subject" name="subject" required />
      <FormInput label="Message" name="message" type="textarea" required />
      <Button type="submit" className="w-full">Send Message</Button>
    </form>
  );
}
