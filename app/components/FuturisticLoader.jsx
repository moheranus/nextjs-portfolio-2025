"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function FuturisticLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [phase, setPhase] = useState(0); // For phased animations

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Phased boot sequence
    const phases = [1000, 2000, 3000];
    phases.forEach((delay, index) => {
      setTimeout(() => setPhase(index + 1), delay);
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  const ringVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 360,
      transition: {
        rotate: { repeat: Infinity, duration: 3, ease: "linear" },
        scale: { duration: 1, ease: "backOut" },
      },
    },
  };

  const pulseGlow = {
    initial: { boxShadow: "0 0 20px #06b6d4" },
    animate: {
      boxShadow: [
        "0 0 20px #06b6d4",
        "0 0 60px #0ea5e9",
        "0 0 100px #3b82f6",
        "0 0 60px #0ea5e9",
        "0 0 20px #06b6d4",
      ],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const textMatrixEffect = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Animated background particles */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 40%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          {/* Main loading core */}
          <motion.div
            className="relative"
            variants={ringVariants}
          >
            {/* Outer energy ring */}
            <motion.div
              className="relative w-48 h-48 rounded-full border-2 border-cyan-400/30"
              animate={pulseGlow}
            >
              {/* Inner core */}
              <motion.div
                className="absolute inset-2 rounded-full bg-gradient-to-r from-cyan-900/50 to-blue-900/50"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "inset 0 0 20px #06b6d4",
                    "inset 0 0 40px #0ea5e9",
                    "inset 0 0 60px #3b82f6",
                  ],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {/* Central AI node */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-8 h-8 bg-cyan-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      backgroundColor: ["#06b6d4", "#0ea5e9", "#06b6d4"],
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              {/* Orbiting particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateX(80px)`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced text with matrix effect */}
          <motion.div
            className="mt-12 text-center space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-widest bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]"
              variants={textMatrixEffect}
              custom={0}
            >
              DANIEL SHOBE
            </motion.h1>

            {/* Dynamic status messages */}
            <motion.div className="flex flex-col items-center space-y-1">
              {[
                "NEURAL NETWORK ACTIVATING...",
                "QUANTUM PROCESSORS ONLINE",
                "SYNAPTIC CONNECTIONS ESTABLISHED",
                "SYSTEM READY",
              ].map((status, i) => (
                <motion.p
                  key={status}
                  className={`text-sm md:text-base font-mono tracking-widest ${
                    phase >= i + 1 ? "text-cyan-300" : "text-cyan-300/30"
                  }`}
                  variants={textMatrixEffect}
                  custom={i}
                  animate={phase >= i + 1 ? "visible" : "hidden"}
                  initial="hidden"
                >
                  ▓ {status}
                </motion.p>
              ))}
            </motion.div>

            {/* Progress bar effect */}
            <motion.div
              className="w-64 h-1 bg-gray-800 rounded-full mt-4 overflow-hidden"
              initial={{ scaleX: 0 }}
              animate={{
                scaleX: [0, 0.3, 0.6, 1],
                backgroundColor: ["#06b6d4", "#0ea5e9", "#3b82f6"],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500" />
            </motion.div>
          </motion.div>

          {/* Sound wave effect at bottom */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{
              opacity: [0, 1, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          >
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-cyan-400 rounded"
                  animate={{
                    height: [4, 12, 4],
                    backgroundColor: ["#06b6d4", "#0ea5e9", "#06b6d4"],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}