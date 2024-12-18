"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CgMenuMotion } from "react-icons/cg";
import { navLinks } from "@/config/constants";
import I18NSwitcher from "./I18NSwitcher";
import { useTranslations } from "next-intl";

export default function MobileNav({ locale }: { locale: string }) {
  const [open, setOpen] = useState(false);
  const t = useTranslations("NavPage");
  const handleClick = () => {
    setOpen((open) => !open);
  };
  const closeModal = () => setOpen(false);
  return (
    <>
      <motion.button
        type="button"
        onClick={handleClick}
        name="menu"
        className="px-6 py-12 sm:hidden"
        animate={{ transform: `rotate(${open ? 90 : 0}deg)` }}
        transition={{ duration: 0.15 }}
      >
        {/* <HiOutlineMenu className="w-5 h-5" /> */}
        <span>
          <CgMenuMotion className="w-7 h-7" />
        </span>
      </motion.button>
      <div className="float-right px-6 py-12 sm:hidden -translate-y-1">
        <I18NSwitcher locale={locale} />
      </div>
      {open && (
        <AnimatePresence>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="bg-neutral-950/90 flex w-[100vw] h-[100vh] pt-28 justify-center"
          >
            <ul className="flex flex-col gap-14">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  onClick={closeModal}
                  className="flex items-center gap-4"
                >
                  <link.icon className="w-6 h-6 text-primary-light" />
                  <a href={link.href}>{t(link.label)}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
