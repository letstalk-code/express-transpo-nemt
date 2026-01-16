import { BUSINESS, FAQ_ITEMS } from "./constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://expresstranspo.com",
    name: BUSINESS.name,
    description: BUSINESS.tagline,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "County", name: "Hillsborough County, FL" },
      { "@type": "County", name: "Pinellas County, FL" },
      { "@type": "County", name: "Pasco County, FL" },
    ],
    serviceType: "Non-Emergency Medical Transportation",
    priceRange: "$$",
  };
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getMedicalTransportServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Non-Emergency Medical Transportation",
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 27.9506,
        longitude: -82.4572,
      },
      geoRadius: "50",
    },
    description: "Safe and reliable non-emergency medical transportation services including dialysis transport, wheelchair accessible vehicles, and hospital discharge pickups.",
  };
}
