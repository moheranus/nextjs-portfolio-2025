"use client";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AnimatedParagraph({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mb-4"
    >
      {children}
    </motion.p>
  );
}