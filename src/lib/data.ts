import { images } from "./images";
import type { Service, Feature, Step, Testimonial, Stat } from "@/types";

export const services: Service[] = [
  {
    id: "sofa-carpet",
    title: "Deep Commercial Cleaning",
    description:
      "Professional deep cleaning for commercial spaces.",
    image: images.services.sofa,
    alt: "Deep commercial cleaning service",
  },
  {
    id: "deep-clean",
    title: "Deep Home Cleaning",
    description:
      "A thorough top-to-bottom clean of every room, surface, and corner. Perfect for move-ins, move-outs, or a seasonal reset.",
    image: images.services.deepClean,
    alt: "Deep home cleaning service",
  },
  {
    id: "office",
    title: "Professional Office Cleaning",
    description:
      "Keep your workspace pristine and your team productive. We handle everything from desks to common areas with minimal disruption.",
    image: images.services.office,
    alt: "Professional office cleaning service",
  },
  {
    id: "bathroom-kitchen",
    title: "Post-Construction Cleaning",
    description:
      "Construction debris, dust, and detail cleaning for newly built or renovated spaces.",
    image: images.services.bathroom,
    alt: "Post-construction cleaning service",
  },
];

export const features: Feature[] = [
  {
    id: "verified",
    icon: "✦",
    title: "Background Checked",
    description:
      "Every cleaner is background-checked, trained, and insured before they step into your home.",
  },
  {
    id: "eco",
    icon: "◈",
    title: "Eco Friendly",
    description:
      "We use only non-toxic, biodegradable products that are safe for children, pets, and the planet.",
  },
  {
    id: "ontime",
    icon: "◎",
    title: "On Time Guarantee",
    description:
      "We respect your schedule. Our teams arrive on time, every time — or your next clean is on us.",
  },
  {
    id: "pricing",
    icon: "◇",
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprise charges. You get a clear quote upfront and pay only what was agreed.",
  },
];

export const steps: Step[] = [
  {
    id: "book",
    number: "01",
    title: "Book Online",
    description:
      "Choose your service, pick a date and time that works for you, and confirm your booking in under two minutes.",
  },
  {
    id: "clean",
    number: "02",
    title: "We Clean",
    description:
      "Our vetted team arrives on time, equipped with everything needed to deliver a thorough, professional clean.",
  },
  {
    id: "relax",
    number: "03",
    title: "Verified Results",
    description: `Your property is delivered to our highest cleaning standards. From post-construction detailing to professional home care, we ensure every requirement is met before we leave.`,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah M.",
    location: "Winnipeg, MB",
    rating: 5,
    quote:
      "AIMER has completely changed how I feel about coming home. Every corner is immaculate and the team is professional, punctual, and discreet.",
  },
  {
    id: "t2",
    name: "Daniel K.",
    location: "Toronto, ON",
    rating: 5,
    quote:
      "I booked a deep clean before a family event and they exceeded every expectation. The kitchen alone looked brand new. I won't use anyone else.",
  },
  {
    id: "t3",
    name: "Priya R.",
    location: "Vancouver, BC",
    rating: 5,
    quote:
      "Reliable, thorough, and always on time. I've been booking AIMER monthly for nearly a year and the quality has never once dropped.",
  },
  {
    id: "t4",
    name: "James T.",
    location: "Calgary, AB",
    rating: 5,
    quote:
      "Had them clean our office weekly for three months. The team is efficient and barely noticeable — exactly what you want in a workspace.",
  },
  {
    id: "t5",
    name: "Michelle L.",
    location: "Ottawa, ON",
    rating: 5,
    quote:
      "Moving out is stressful enough. AIMER handled the end-of-lease clean and I got my full deposit back. Absolutely worth it.",
  },
  {
    id: "t6",
    name: "Amir H.",
    location: "Montreal, QC",
    rating: 5,
    quote:
      "Transparent pricing, no surprises, and a genuinely spotless result every time. Refreshing to work with a company that just does what it promises.",
  },
];

export const stats: Stat[] = [
  { id: "homes", value: "500+", label: "Homes Cleaned" },
  { id: "rating", value: "4.9★", label: "Average Rating" },
  { id: "years", value: "3 Yrs", label: "Of Experience" },
  { id: "clients", value: "98%", label: "Client Retention" },
];