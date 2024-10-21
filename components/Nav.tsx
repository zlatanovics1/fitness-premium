import { useTranslations } from "next-intl";
import MobileNav from "./MobileNav";
import AnimatedButton from "./AnimatedButton";
import { Link } from "@/i18n/routing";
import { BsArrowRight } from "react-icons/bs";
import I18NSwitcher from "./I18NSwitcher";

export default function Nav({ locale }: { locale: string }) {
  const t = useTranslations("NavPage");
  const linkClass = "hover:text-primary-light transition-all";
  return (
    <nav className="absolute top-0 z-10 w-full ">
      <ul className="2xl:px-24 px-10 mx-auto py-10 h-[10vh] max-sm:hidden flex gap-12 items-center xl:text-lg">
        <I18NSwitcher locale={locale} />
        <a className={linkClass} href="#features">
          {t("Features")}
        </a>
        <a className={linkClass} href="#gallery">
          {t("Gallery")}
        </a>
        <a className={linkClass} href="#pricing">
          {t("Pricing")}
        </a>
        <a className={linkClass} href="#findus">
          {t("Find us")}
        </a>
        <a
          href="#contact"
          className="ml-auto"
          // className="ml-auto border-primary-light border text-primary-light px-4 py-2 rounded-md hover:text-primary-light/90 hover:border-primary-light/90 transition-all"
        >
          <AnimatedButton label={t("Contact us")} noIcon light />
        </a>
      </ul>
      <MobileNav locale={locale} />
    </nav>
  );
}
