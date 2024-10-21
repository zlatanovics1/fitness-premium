"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export default function MouseGradient({
  children,
}: {
  children: React.ReactNode;
}) {
  // const xPos = useMotionValue(-230.4081573486328);
  // const yPos = useMotionValue(379.355804443359);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    // const { top, left } = currentTarget.getBoundingClientRect();
    // console.log(top, left);
    // xPos.set(clientX - left);
    // yPos.set(clientY - top);
  }
  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative m-auto max-w-4xl h-[34rem] rounded-3xl bg-gradient-to-tl from-primary-light to-primary-dark sm:-rotate-[4deg]"
    >
      <div className=" absolute inset-0 sm:scale-[0.98] border-[1px] border-neutral-700 overflow-visible sm:rotate-[4deg] rounded-3xl bg-zinc-950 px-7 py-10 peer ">
        {children}
      </div>
      <motion.div
        className="absolute -inset-px sm:rotate-6 sm:scale-[0.98] b rounded-3xl pointer-events-none opacity-0 transition duration-300 peer-hover:opacity-70"
        style={
          {
            // background: useMotionTemplate`radial-gradient(450px circle at ${xPos}px ${yPos}px, hsla(48, 39%, 69%, 0.25) ,transparent 80%)`,
          }
        }
      ></motion.div>
    </div>
  );
}
