import { MembershipFeature } from "@/config/types";
import Section from "./Section";
import PricingCard from "./PricingCard";
import { useTranslations } from "next-intl";

const features: MembershipFeature[] = [
  {
    type: "basic",
    featuresCount: 4,
    price: 7000,
  },
  {
    type: "premium",
    featuresCount: 5,
    price: 13000,
  },
  {
    type: "gold",
    featuresCount: 5,
    price: 9000,
  },
];

export default function Pricing() {
  const t = useTranslations("PricingPage");
  return (
    <Section id="pricing">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-primary-dark">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight gold  sm:text-5xl">
            {t("headline")}
          </p>
        </div>
        {/* <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Qui iusto aut est earum eos quae. Eligendi est at nam aliquid ad quo
          reprehenderit in aliquid fugiat dolorum voluptatibus.
        </p> */}
        <div className="rounded-full flex max-w-64 px-4 py-2 justify-between border border-zinc-600 mx-auto mt-16 sm:mt-20">
          <p className="font-bold text-zinc-400">{t("daily")}</p>
          <p className="space-x-1 font-semibold">
            <span>1200</span>
            <span className="text-sm">RSD</span>
          </p>
        </div>
        <div className="mx-auto mt-4 grid max-w-3xl grid-cols-1 items-center gap-y-6 sm:mt-6 sm:gap-y-0 lg:max-w-7xl lg:grid-cols-3">
          {features.map((feature, i) => (
            <PricingCard
              isMain={feature.type === "premium"}
              feature={feature}
              key={feature.type}
              index={i}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
