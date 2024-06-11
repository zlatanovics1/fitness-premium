import Image from "next/image";
import ContactForm from "./ContactForm";
import Section from "./Section";
import H1 from "./typography/H1";
import H2 from "./typography/H2";
import H3 from "./typography/H3";
import AnimatedButton from "./AnimatedButton";
import MouseGradient from "./MouseGradient";

export default function Contact() {
  return (
    <Section>
      {/* <div className="relative m-auto max-w-3xl h-[29rem] rounded-3xl bg-gradient-to-tl from-primary-light to-primary-dark -rotate-6 ">
        <div className="absolute inset-0 scale-[0.98] overflow-visible rotate-6 rounded-3xl bg-neutral-900 px-7 py-10 peer "></div> */}
      <MouseGradient />
      {/* </div> */}
    </Section>
  );
}
