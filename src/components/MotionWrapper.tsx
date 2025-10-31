"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type MotionWrapperProps = PropsWithChildren<{
  delay?: number;
  duration?: number;
  className?: string;
}>;

export default function MotionWrapper({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: MotionWrapperProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
