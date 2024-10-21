import { useTranslations } from "next-intl";
import Section from "./Section";
import Timer from "./Timer";
import H2 from "./typography/H2";

export default function WorkTime() {
  const t = useTranslations("WorkingHoursPage");
  const isEN = t("working").toLowerCase().startsWith("mon");
  return (
    <Section>
      <H2 className="text-center upercase">{t("headline")}</H2>
      <div className="flex justify-between items-center mt-20 sm:mt-28 max-xl:flex-col gap-20 md:gap-10">
        <div className=" space-y-10">
          <div className="flex gap-8 items-center flex-col sm:flex-row">
            <p className="uppercase text-3xl font-bold text-gray-400">
              {t("working")}
            </p>
            <p className="uppercase text-5xl font-bold gold">
              {process.env.NEXT_PUBLIC_OPEN_FROM?.padStart(2, "0")}:00 -{" "}
              {process.env.NEXT_PUBLIC_OPEN_TO?.padStart(2, "0")}:00
            </p>
          </div>
          <div className="flex gap-8 items-center flex-col sm:flex-row">
            <p className="uppercase text-3xl font-bold text-gray-400">
              {t("not-working")}
            </p>
            <p
              className={`uppercase text-5xl font-bold gold ${
                isEN ? "ml-4" : ""
              }`}
            >
              {t("nonWorkingDay")}
            </p>
          </div>
        </div>
        <div className="flex gap-10 md:gap-20 justify-center items-center flex-col md:flex-row">
          <Timer />
        </div>
      </div>
    </Section>
  );
}
