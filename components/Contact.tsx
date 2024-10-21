import Section from "./Section";
import MouseGradient from "./MouseGradient";
import ContactForm from "./ContactForm";
import H2 from "./typography/H2";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("ContactPage");
  return (
    <Section id="contact">
      {/* <div className="relative m-auto max-w-3xl h-[29rem] rounded-3xl bg-gradient-to-tl from-primary-light to-primary-dark -rotate-6 ">
        <div className="absolute inset-0 scale-[0.98] overflow-visible rotate-6 rounded-3xl bg-neutral-900 px-7 py-10 peer "></div> */}
      <H2 className="text-center mb-20">{t("headline")}</H2>
      <MouseGradient>
        <ContactForm />
      </MouseGradient>
      {/* </div> */}
    </Section>
  );
}
