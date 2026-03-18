export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}