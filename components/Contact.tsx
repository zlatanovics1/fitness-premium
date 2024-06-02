import Image from "next/image";
import ContactForm from "./ContactForm";
import Section from "./Section";
import H1 from "./typography/H1";

export default function Contact() {
  return (
    <Section>
      <div className="rounded-3xl overflow-hidden border-gray-900 border-2 grid sm:grid-cols-[4fr,5fr] grid-cols-1">
        <div className="sm:py-20 sm:px-7 max-sm:order-1">
          <ContactForm />
        </div>
        <div className="relative max-sm:h-80">
          <H1 className="py-6 px-6 text-neutral-400">Kontakiraj nas</H1>
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/95  from-10% via-neutral-950/85 via-35% to-neutral-950/30 -z-[1] to-100%" />
          <Image
            src="https://images.unsplash.com/photo-1701122640209-26d07d4f35ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gym"
            fill
            className="object-cover opacity-60  -z-10"
          />
        </div>
      </div>
    </Section>
  );
}
