import { StaticImageData } from "next/image";

export interface Feature {
  name: string;
  image: StaticImageData;
}
export interface Testimonial {
  name: string;
  role?: string;
}
export interface MembershipFeature {
  type: string;
  featuresCount: number;
  price: number;
}
