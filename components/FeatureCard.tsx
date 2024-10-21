import { Feature } from "@/config/types";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function FeatureCard({ feature }: { feature: Feature }) {
  const t = useTranslations("FeaturesPage");
  return (
    <li className="flex flex-col gap-4 border rounded-2xl border-neutral-900 overflowdden">
      <div className="relative rotating_border flex items-center overflow-hidden rounded-2xl">
        <Image
          src={feature.image}
          alt="Alt"
          className="rounded-2xl h-56 max-sm:h-72 brightness-75 scale-[0.99] aspect-square object-cover"
        />
      </div>
      <div className="space-y-2 px-4 pt-4 pb-8 max-sm:pb-16 max-sm:pt-6">
        {/* <p className="text-4xl gold text-cnter">{featureNum} </p> */}
        <h3 className="font-semibold capitalize text-xl max-sm:text-2xl gold textcenter">
          {t(`${feature.name}.title`)}
        </h3>
        <p className="text-gray-400 textcenter">
          {" "}
          {t(`${feature.name}.content`)}
        </p>
      </div>
    </li>
  );
}
