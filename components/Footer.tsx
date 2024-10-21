import { navLinks } from "@/config/constants";
import { useTranslations } from "next-intl";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  const t = useTranslations("FooterPage");
  const navT = useTranslations("NavPage");
  return (
    <footer className="">
      <div className="2xl:px-24 px-10 m-auto pb-7 pt-40">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap gold mb-4">
                Fitness Premium ABC
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2  gap-14 ">
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase">
                {t("links")}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 flex flex-col gap-4 font-medium [&_:hover]:text-primary-light [&]:cursor-pointer">
                {[...navLinks.slice(1, 3), navLinks.at(-1)].map((link) => (
                  <li key={link?.label}>
                    <a href={link?.href}>{navT(link?.label)}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase">
                {t("follow")}
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium [&_:hover]:text-primary-light [&]:cursor-pointer">
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/fitness_premium_abc/"
                    className="hover:underline flex items-center gap-3 "
                  >
                    <BsInstagram />
                    Fitness Premium ABC
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/abc_supplements_shop/"
                    className="hover:underline flex items-center gap-3"
                  >
                    <BsInstagram />
                    ABC Supplements
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/fitness_centar_abc2/"
                    className="hover:underline flex items-center gap-3"
                  >
                    <BsInstagram />
                    Fitness Centar ABC
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="mb-6 sm:mt-24 mt-12 border-neutral-500 sm:mx-auto dark:border-gray-700 " />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <p className="text-primary-dark inline-block">
              Fitness Premium ABC™
            </p>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
