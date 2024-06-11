import Image from "next/image";
import ContactForm from "./ContactForm";
import Section from "./Section";
import H1 from "./typography/H1";
import H2 from "./typography/H2";
import H3 from "./typography/H3";

export default function Contact() {
  return (
    <Section>
      <div className="relative max-w-2xl -rotate-6  m-auto  bg-gradient-to-tl from-primary-light to-primary-dark  rounded-3xl h-[28rem]">
        <div className="absolute inset-0 py-10 shadow-xl shadow-white text-center px-7 bg-neutral-900 scale-[0.98] rotate-6 rounded-3xl border-[1px]">
          <H2>Contact us</H2>
        </div>
      </div>
    </Section>
  );
}
