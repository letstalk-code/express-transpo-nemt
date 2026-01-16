// Business Information
export const BUSINESS = {
  name: "Express Transpo NEMT Services",
  shortName: "Express Transpo",
  phone: "(813) 555-0123",
  phoneRaw: "8135550123",
  email: "info@expresstranspo.com",
  address: {
    street: "123 Main Street",
    city: "Tampa",
    state: "FL",
    zip: "33602",
    full: "123 Main Street, Tampa, FL 33602",
  },
  hours: "Monday - Sunday: 6:00 AM - 10:00 PM",
  tagline: "Safe, Reliable Non-Emergency Medical Transportation",
};

// Service Areas
export const SERVICE_AREAS = {
  counties: [
    {
      name: "Hillsborough County",
      slug: "hillsborough-county",
      cities: ["Tampa", "Brandon", "Plant City", "Temple Terrace", "Riverview"],
    },
    {
      name: "Pinellas County",
      slug: "pinellas-county",
      cities: ["St. Petersburg", "Clearwater", "Largo", "Pinellas Park", "Dunedin"],
    },
    {
      name: "Pasco County",
      slug: "pasco-county",
      cities: ["New Port Richey", "Port Richey", "Zephyrhills", "Dade City", "Wesley Chapel"],
    },
  ],
};

// Location Pages Data
export const LOCATIONS = [
  {
    city: "Tampa",
    state: "FL",
    slug: "tampa-fl",
    county: "Hillsborough County",
    description: "Serving Tampa and surrounding Hillsborough County with reliable NEMT services.",
  },
  {
    city: "St. Petersburg",
    state: "FL",
    slug: "st-petersburg-fl",
    county: "Pinellas County",
    description: "Professional medical transportation services throughout St. Petersburg and Pinellas County.",
  },
  {
    city: "Clearwater",
    state: "FL",
    slug: "clearwater-fl",
    county: "Pinellas County",
    description: "Dependable NEMT services for Clearwater residents and the greater Pinellas area.",
  },
];

// Services
export const SERVICES = [
  {
    title: "Non-Emergency Medical Transportation",
    slug: "nemt",
    shortDescription: "Safe transport to and from medical appointments",
    description: "Our core NEMT service provides reliable transportation to doctor visits, specialist appointments, lab work, and routine medical care.",
    icon: "medical",
  },
  {
    title: "Treatment Transport",
    slug: "treatment-transport",
    shortDescription: "Regular transport for ongoing treatments",
    description: "Specialized transportation for patients requiring regular trips to dialysis centers, chemotherapy treatments, physical therapy, and rehabilitation facilities.",
    icon: "recurring",
  },
  {
    title: "Discharge Pickups",
    slug: "discharge-pickups",
    shortDescription: "Hospital and facility discharge transportation",
    description: "Timely and comfortable transportation home after hospital stays, surgeries, or facility discharges. We coordinate with discharge planners for seamless service.",
    icon: "hospital",
  },
  {
    title: "Wheelchair Accessible Transport",
    slug: "wheelchair-transport",
    shortDescription: "Vehicles equipped for wheelchair passengers",
    description: "Our fleet includes wheelchair-accessible vehicles with secure tie-downs and lifts to ensure safe, comfortable transport for passengers with mobility needs.",
    icon: "wheelchair",
  },
];

// Navigation Links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "For Facilities", href: "/facility-referrals" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Trust Points (for trust bar)
export const TRUST_POINTS = [
  { text: "Licensed & Insured", icon: "shield" },
  { text: "Trained Drivers", icon: "user" },
  { text: "On-Time Guarantee", icon: "clock" },
  { text: "Door-to-Door Service", icon: "door" },
];

// How It Works Steps
export const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Book Your Ride",
    description: "Call us or fill out our online form with your appointment details. We'll confirm your pickup time.",
  },
  {
    step: 2,
    title: "We Pick You Up",
    description: "Our professional driver arrives at your door, assists you to the vehicle, and ensures you're comfortable.",
  },
  {
    step: 3,
    title: "Safe Arrival",
    description: "We get you to your appointment on time and can wait or return for your pickup when you're ready.",
  },
];

// Who We Serve
export const WHO_WE_SERVE = [
  "Seniors requiring medical appointments",
  "Patients with mobility challenges",
  "Individuals on dialysis treatment",
  "Cancer patients needing chemotherapy transport",
  "Post-surgery patients",
  "Rehabilitation facility patients",
  "Veterans (VA appointments)",
  "Medicaid recipients",
];

// Payment Options
export const PAYMENT_OPTIONS = [
  { name: "Medicaid", description: "We accept Medicaid for qualified recipients" },
  { name: "Private Pay", description: "Competitive rates for self-pay passengers" },
  { name: "Insurance", description: "We work with select insurance providers" },
  { name: "Facility Billing", description: "Direct billing options for healthcare facilities" },
];

// FAQ Items
export const FAQ_ITEMS = [
  {
    question: "How far in advance should I book my ride?",
    answer: "We recommend booking at least 24-48 hours in advance to ensure availability. However, we do our best to accommodate same-day requests when possible.",
  },
  {
    question: "Do you provide wheelchair-accessible vehicles?",
    answer: "Yes! Our fleet includes vehicles equipped with wheelchair lifts and secure tie-down systems to safely transport passengers who use wheelchairs.",
  },
  {
    question: "Can a family member or caregiver ride along?",
    answer: "Absolutely. One companion can ride along at no additional charge to provide support during your medical appointment.",
  },
  {
    question: "What areas do you serve?",
    answer: "We provide NEMT services throughout Hillsborough, Pinellas, and Pasco Counties, including Tampa, St. Petersburg, Clearwater, and surrounding cities.",
  },
  {
    question: "Do you accept Medicaid?",
    answer: "Yes, we are an approved Medicaid transportation provider. Contact us to verify your eligibility and schedule your ride.",
  },
  {
    question: "What if my appointment runs late?",
    answer: "We understand medical appointments can be unpredictable. Just let us know, and we'll adjust your return pickup time accordingly.",
  },
];
