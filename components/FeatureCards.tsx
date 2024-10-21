import Section from "./Section";

import gymMachines from "@/public/9.jpg";
import personalTrainer from "@/public/personal.jpg";
import proteinShake from "@/public/proteinshake.jpg";
import happyStaff from "@/public/happy.jpg";
import H2 from "./typography/H2";
import { useTranslations } from "next-intl";
import { Feature } from "@/config/types";
import FeatureCard from "./FeatureCard";

const features: Feature[] = [
  {
    name: "trainings",
    image: personalTrainer,
  },
  {
    name: "machines",
    image: gymMachines,
  },
  {
    name: "recovery",
    image: proteinShake,
  },
  {
    name: "friendly",
    image: happyStaff,
  },
];

export default function FeatureCards() {
  const t = useTranslations("FeaturesPage");
  return (
    <Section id="features">
      <H2 className="mb-16 text-center">{t("headline")}</H2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 max-sm:px-6">
        {features.map((feature, i) => (
          <FeatureCard key={i} feature={feature} />
        ))}
      </ul>
    </Section>
  );
}
