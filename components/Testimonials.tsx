import { useTranslations } from "next-intl";
import Section from "./Section";
import TestimonialCard from "./TestimonialCard";
import H2 from "./typography/H2";
import { Testimonial } from "@/config/types";

const testimonials = [
  { name: "Milan Jovanović" },
  {
    name: "Jelena Petrović",
  },
  {
    name: "Marko Nikolić",
  },
  {
    name: "Ivana Savić",
  },
  {
    name: "Stefan Ilić",
  },
  { name: "Ana Stanković" },
];

export default function Testimonials() {
  const t = useTranslations("TestimonialsPage");
  return (
    <Section className="overflow-x-hidden">
      <H2 className="text-center mb-16">{t("headline")}</H2>
      <div className="space-y-10 sm:space-y-8">
        <TestimonialRow testimonials={testimonials.slice(0, 3)} />
        <TestimonialRow testimonials={testimonials.slice(3)} reverse />
      </div>
    </Section>
  );
}

function TestimonialRow({
  testimonials,
  reverse,
}: {
  testimonials: Testimonial[];
  reverse?: boolean;
}) {
  const testimonialsJSX = testimonials.map(
    (testimonial: any, index: number) => (
      <TestimonialCard
        testimonial={testimonial}
        key={index}
        index={reverse ? index + 3 : index}
      />
    )
  );
  return (
    // we need duplicate row to make animation work
    <div className="scroll-mask overflow-hidden relative flex">
      <div className={`flex scroll1 ${reverse ? "reverse" : ""}`}>
        {testimonialsJSX}
      </div>
      <div className={`flex scroll2 ${reverse ? "reverse" : ""}`}>
        {testimonialsJSX}
      </div>
    </div>
  );
}
