import { images } from "./images";
import type { Service, Feature, Step, Testimonial, Stat } from "@/types";

export const services: Service[] = [
  {
    id: "sofa-carpet",
    title: "Sofa & Carpet Refresh",
    description:
      "Deep extraction cleaning that lifts stains, allergens, and odors from your sofas and carpets — leaving them fresh and revitalized.",
    image: images.services.sofa,
    alt: "Sofa and carpet cleaning service",
  },
  {
    id: "deep-clean",
    title: "Complete Deep Home Cleaning",
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
    title: "Bathroom & Kitchen Shine",
    description:
      "Intensive sanitization of your most-used spaces. We remove limescale, grease, and bacteria for a hygienically spotless result.",
    image: images.services.bathroom,
    alt: "Bathroom and kitchen cleaning service",
  },
];

export const features: Feature[] = [
  {
    id: "verified",
    icon: "✦",
    title: "Verified Professionals",
    description:
      "Every cleaner is background-checked, trained, and insured before they step into your home.",
  },
  {
    id: "eco",
    icon: "◈",
    title: "Eco-Friendly Products",
    description:
      "We use only non-toxic, biodegradable products that are safe for children, pets, and the planet.",
  },
  {
    id: "ontime",
    icon: "◎",
    title: "On-Time Guarantee",
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
    title: "You Relax",
    description:
      "Come home to a spotless, fresh-smelling space. No effort from you — just the pleasure of a clean home.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Amara O.",
    location: "Lekki, Lagos",
    rating: 5,
    quote:
      "AIMER has completely changed how I feel about coming home. Every corner is immaculate and the team is so professional and discreet.",
  },
  {
    id: "t2",
    name: "Chidi N.",
    location: "Maitama, Abuja",
    rating: 5,
    quote:
      "I booked a deep clean before a family event and they exceeded every expectation. The kitchen alone looked brand new. Highly recommend.",
  },
  {
    id: "t3",
    name: "Fatima B.",
    location: "GRA, Port Harcourt",
    rating: 5,
    quote:
      "Reliable, thorough, and always on time. I've been using AIMER monthly for six months and the quality never drops. Worth every kobo.",
  },
];

export const stats: Stat[] = [
  { id: "homes", value: "500+", label: "Homes Cleaned" },
  { id: "rating", value: "4.9★", label: "Average Rating" },
  { id: "years", value: "3 Yrs", label: "Of Experience" },
  { id: "clients", value: "98%", label: "Client Retention" },
];