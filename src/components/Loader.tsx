"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white">
      <motion.div
        className="h-16 w-16 rounded-full border-4 border-orange-200 border-t-orange-500"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
