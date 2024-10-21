"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimateIn({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);

  const inView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 150, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
