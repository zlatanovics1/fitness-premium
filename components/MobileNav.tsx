"use client";

import { CgMenuMotion } from "react-icons/cg";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HiHomeModern } from "react-icons/hi2";
import { HiOutlineHome } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { SlCallOut } from "react-icons/sl";
export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    console.log("open");
    setOpen((open) => !open);
  };
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
      {open && (
        <AnimatePresence>
          <motion.ul
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="bg-neutral-950/80 flex flex-col gap-10 w-[100vw] h-[100vh] pt-20 items-center"
          >
            <li className="flex items-center gap-2">
              <HiOutlineHome className="w-6 h-6 text-primary-light" />
              Home
            </li>
            <li>Link</li>
            <li>Socials</li>
            <li className="flex items-center gap-2">
              <SlCallOut className="w-6 h-6 text-primary-light" />
              Contact
            </li>
            <li>Gallery</li>
          </motion.ul>
        </AnimatePresence>
      )}
    </>
  );
}
