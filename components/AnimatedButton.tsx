"use client";
import { motion } from "framer-motion";
import { BiSend } from "react-icons/bi";

export default function AnimatedButton({
  label,
  noIcon,
  light,
}: {
  label: string;
  noIcon?: boolean;
  light?: boolean;
}) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.95 }}
      className={`border-2 w-full mt-auto justify-center flex font-[600] text-gray-300 items-center gap-2 rounded-tl-md rounded-br-md ${
        light
          ? "bg-transparent border-primary-light text-primary-light"
          : "bg-primary-dark border-transparent"
      }  hover:bg-transparent transition-colors duration-300 hover:text-primary-light/90 hover:border-primary-light/90 px-5 max-sm:px-6 py-2`}
    >
      {label}
      {!noIcon && (
        <span>
          <BiSend />
        </span>
      )}
    </motion.button>
  );
}
