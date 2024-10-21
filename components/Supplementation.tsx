import { BiHelpCircle } from "react-icons/bi";
import Browser from "./Browser";
import Section from "./Section";
import H1 from "./typography/H1";
import H2 from "./typography/H2";
import P from "./typography/P";
import { LuHelpingHand } from "react-icons/lu";
import { FaHandsHelping, FaPercentage } from "react-icons/fa";
import { TbDiscount } from "react-icons/tb";
import { FaShop } from "react-icons/fa6";
import { useTranslations } from "next-intl";

export default function Supplementation() {
  const t = useTranslations("SupplementsPage");
  return (
    <Section>
      <div className="flex max-xl:flex-col max-xl:gap-10 justify-between items-center">
        <div className="space-y-20 -translate-y-5">
          <H2 className="max-sm:text-3xl max-sm:text-center">
            {t("headlineStart")} <br className="xsm:hidden" />
            <span className="px-5 rounded-sm mb-2 xsm:mb-4 max-xsm:mt-2 xsm:mx-2 py-[2px] bg-gradient-to-r from-primary-dark to-primary-light/70 -skew-x-12 inline-block">
              {t("headlineGradient1")}
            </span>{" "}
            <br className="xsm:hidden" />
            {t("headlineBetween")}
            <br className="xsm:hidden" />
            <span className="px-5 rounded-xsm max-xsm:mb-2 py-[2px] max-xsm:mt-2 xsm:mx-2 bg-gradient-to-r from-primary-dark to-primary-light/70 -skew-x-12 inline-block">
              {t("headlineGradient2")}
            </span>{" "}
            <br className="xsm:hidden" />
            {t("headlineEnd")}
          </H2>
          <div className="w-4/5 text-lg ml-4 pt- pb-4 pl-8 flex flex-col justify-between relative borde rounded-sm border-neutral-700 max-sm:ml-10">
            <div className="absolute top-4 bottom-2 -left-3 flex flex-col justify-around z-10">
              <FaHandsHelping className="w-6 h-6 text-primary-light -translate-y-1" />
              <TbDiscount className="w-6 h-6 text-primary-light" />
              <FaShop className="w-6 h-6 text-primary-light" />
            </div>
            <P>{t("text.help")}</P>
            <P>{t("text.discount")}</P>
            <P>{t("text.shop")}</P>
          </div>
        </div>
        <Browser />
      </div>
    </Section>
  );
}
