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
    description:
      "Your property is delivered to our highest cleaning standards. From post-construction detailing to professional home care, we ensure every requirement is met before we leave.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Hillbrook",
    location: "",
    rating: 5,
    quote:
      "Thank you so much to your team for this amazing clean at our property!! We are excited to continue our relationship for future move out cleans",
  },
  {
    id: "t2",
    name: "Proud Trucking Office",
    location: "",
    rating: 5,
    quote:
      "Reliable cleaners, great attention to detail, office always fresh and tidy. Very satisfied!",
  },
  {
    id: "t3",
    name: "Skyler",
    location: "",
    rating: 5,
    quote:
      "We are very satisfied with your cleaning at the units in Lorette, fantastic job. Thank you for working and getting those cleaned up so well!"
  },
  {
    id: "t4",
    name: "Kelly",
    location: "",
    rating: 5,
    quote:
      "Great clean for a good price. I would definitely book again.",
  },
  {
    id: "t5",
    name: "Elena Campos",
    location: "",
    rating: 5,
    quote:
      "Nice and friendly staff. We had junk in our basement and needed help cleaning it out and they did an amazing job",
  },
  {
    id: "t6",
    name: "Mackinley Towns",
    location: "",
    rating: 5,
    quote:
      "I took a look around the unit this morning, and everything looks satisfactory.",
  },

  {
    id: "t7",
    name: "Jeremie",
    location: "",
    rating: 5,
    quote:
      "Hired Aimer Cleaning for a move out cleaning. They did a spectacular jon. I'll definitely be hiring them again.",
  },
];

export const stats: Stat[] = [
  { id: "homes", value: "500+", label: "Homes Cleaned" },
  { id: "rating", value: "4.9★", label: "Average Rating" },
  { id: "years", value: "3 Yrs", label: "Of Experience" },
  { id: "clients", value: "98%", label: "Client Retention" },
];