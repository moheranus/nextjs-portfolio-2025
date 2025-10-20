import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Section({ id, title, children, className = "" }) {
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [controls]);

  const variants = {
    hidden: { opacity: 0, scale: 0.96, y: 20, transition: { duration: 0.45 } },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id={id} ref={ref} className={`section-wrap ${className}`}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        className="max-w-4xl mx-auto p-6 bg-transparent"
      >
        <h2 className="text-4xl font-semibold mb-4">{title}</h2>
        <div className="prose prose-invert text-zinc-200 text-lg">
          {children}
        </div>
      </motion.div>
    </section>
  );
}
