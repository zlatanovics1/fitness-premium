import Contact from "@/components/Contact";
import Supplementation from "@/components/Supplementation";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import SocialProof from "@/components/SocialProof";
import WorkTime from "@/components/WorkTime";
import React from "react";
import FeatureCards from "@/components/FeatureCards";
import FindUs from "@/components/FindUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <FeatureCards />
      <Supplementation />
      <Gallery />
      <Testimonials />
      <Pricing />
      <WorkTime />
      <Contact />
      <FindUs />
    </>
  );
}
