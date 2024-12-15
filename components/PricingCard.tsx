import { MembershipFeature } from "@/config/types";
import { useTranslations } from "next-intl";

export default function PricingCard({
  isMain,
  feature,
  index,
}: {
  isMain?: boolean;
  feature: MembershipFeature;
  index: number;
}) {
  const t = useTranslations("PricingPage");
  const isBasic = feature.type === "basic";
  const cardStyle = `bg-zinc-950 ${
    isMain ? "border-primary-dark border-2 py-14" : "border border-zinc-700"
  }`;
  // const buttonBg = `transition-all duration-300 ${
  //   isMain
  //     ? "bg-gradient-to-r from-primary-dark to-primary-light text-white border-primary-dark border"
  //     : "text-primary-dark ring-1 ring-inset ring-primary-dark hover:ring-primary-light hover:text-primary-light"
  // }`;

  const iconColor = "text-primary-light";

  return (
    <div
      className={`relative rounded-3xl p-8 shadow-2xl ring-1 ring-gray-900/10 sm:p-10 ${cardStyle} lg:first-of-type:rounded-r-none lg:last-of-type:rounded-l-none`}
    >
      {isBasic && (
        <span className="absolute top-0 left-0 rounded-3xl rounded-bl-none px-4 py-1 bg-primary-dark">
          40% OFF
        </span>
      )}
      {index === 1 && <br />}

      <h3 className="text-base font-semibold leading-7 text-primary-dark uppercase">
        {feature.type}
      </h3>
      <p className="mt-4 flex items-baseline gap-x-2">
        <span className={`${isMain && "gold"}`}>
          {isBasic ? (
            <>
              <span className="mr-2 font-semibold line-through decoration-red-500 text-3xl">
                {feature.price}
              </span>
              <br />
              <span className="text-5xl font-bold tracking-tight">4200</span>
            </>
          ) : (
            <span className="text-5xl font-bold tracking-tight">
              {feature.price}
            </span>
          )}
          <span className="text-2xl ml-1 tracking-tight font-bold">RSD</span>
          <span className="text-base"> / month</span>
        </span>
      </p>
      <p className="mt-6 text-base leading-7">
        {t(`${feature.type}.headline`)}
      </p>
      <div className="h-7"></div>
      <ul className="mt-8 space-y-3 text-sm leading-6 sm:mt-10">
        {Array.from({ length: feature.featuresCount }, (_, i) => (
          <li key={i} className="flex gap-x-3">
            <svg
              className={`h-6 w-5 flex-none ${iconColor}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                clipRule="evenodd"
              />
            </svg>
            {t(`${feature.type}.features.${i + 1}`)}
          </li>
        ))}
        {index === 0 && <br />}
        {index === 1 && <br />}
      </ul>
      <div className="h-14"></div>
    </div>
  );
}
