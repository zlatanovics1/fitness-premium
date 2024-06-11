"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import AnimatedButton from "./AnimatedButton";

export default function MouseGradient() {
  const xPos = useMotionValue(0);
  const yPos = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { top, left } = currentTarget.getBoundingClientRect();

    xPos.set(clientX - left);
    yPos.set(clientY - top);
  }
  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative m-auto max-w-3xl h-[29rem] rounded-3xl bg-gradient-to-tl from-primary-light to-primary-dark sm:-rotate-6"
    >
      <div className="flex flex-col-reverse absolute inset-0 sm:scale-[0.98] border-[1px] border-neutral-700 overflow-visible sm:rotate-6 rounded-3xl bg-black px-7 py-10 peer ">
        <AnimatedButton />
      </div>
      <motion.div
        className="absolute -inset-px sm:rotate-6 sm:scale-[0.98] b rounded-3xl pointer-events-none opacity-0 transition duration-300 peer-hover:opacity-70"
        style={{
          background: useMotionTemplate`radial-gradient(550px circle at ${xPos}px ${yPos}px, hsla(48, 39%, 69%, 0.25) ,transparent 80%)`,
        }}
      ></motion.div>
    </div>
  );
}
