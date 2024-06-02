"use client";
import { motion } from "framer-motion";
import { BiSend } from "react-icons/bi";

export default function AnimatedButton() {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.95 }}
      className="border-2 w-full justify-center flex font-[600] text-gray-300 items-center gap-2 rounded-tl-md rounded-br-md bg-primary-dark border-transparent hover:bg-transparent transition-colors duration-300 hover:text-primary-light hover:border-primary-light px-5 max-sm:px-6 py-2"
    >
      Pošalji poruku
      <span>
        <BiSend />
      </span>
    </motion.button>
  );
}
