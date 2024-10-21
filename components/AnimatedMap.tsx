"use client";

import { useInView, motion } from "framer-motion";
import { MutableRefObject, useRef, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";

export default function AnimatedMap() {
  const ref = useRef(null);
  const videoRef = useRef() as MutableRefObject<HTMLVideoElement>;
  const inView = useInView(ref, { once: true, amount: 1 });
  const [ended, setEnded] = useState(false);
  return (
    <div
      ref={ref}
      className="h-96 border relative border-zinc-800 rounded-xl w-full md:w-3/5 self-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={ended ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="absolute top-[40%] left-[42%] z-10 flex flex-col items-center gap-2"
      >
        <p className="text-primary-light">Fitness Premium ABC</p>
        <IoLocationOutline className="w-12 h-12 text-primary-light" />
      </motion.div>
      <video
        playsInline
        ref={videoRef}
        onEnded={() => {
          setEnded(true);
        }}
        autoPlay
        muted
        className="w-full h-full object-cover brightness-75 grayscale"
      >
        <source src="/fitnessZOOMedited.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
