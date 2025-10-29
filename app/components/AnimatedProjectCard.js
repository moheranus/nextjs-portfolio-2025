"use client";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AnimatedProjectCard({ project }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 }); // Trigger when 50% in view for single-project focus

  const cardVariants = {
    hidden: { opacity: 0, x: 100 }, // Slide in from right
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      animate={isInView ? 'visible' : 'hidden'}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow min-h-[300px]"
    >
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <a
        href={project.link}
        className="text-blue-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    </motion.div>
  );
}