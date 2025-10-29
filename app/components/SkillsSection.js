'use client';

import AnimatedParagraph from './AnimatedParagraph';
import { ScrollTimeline } from './scroll-timeline';
import { Code, Server, Shield } from 'lucide-react';
import MagicBento from './MagicBento'
import './MagicBento.css';
import { motion } from "framer-motion";

const skills = [
  {
    id: '1',
    year: '2018-2023',
    title: 'Software Engineering Degree',
    subtitle: 'Data Structures, Web Dev, Databases, Software Engineering',
    description:
      'Specialized in Full-Stack Web Development, Completed ERP and LMS implementation projects',
    icon: <Code className="h-4 w-4 mr-2 text-blue-500" />,
    color: 'text-blue-500',
  },
  {
    id: '2',
    year: 'Dec 2021 – Feb 2022',
    title: 'Frontend Developer (Intern) ',
    subtitle: 'Enat Bank — Addis Ababa, Ethiopia',
    description:
      'Built a real-time exchange-rate display web app using EJS & MongoDB. ,Reduced data update processing time from 1 hour to 5 minutes.',
    icon: <Server className="h-4 w-4 mr-2 text-green-500" />,
    color: 'text-green-500',
  },
  {
    id: '3',
    year: 'Oct 2022 – Dec 2022',
    title: 'Full-Stack Developer (Intern)',
    subtitle: 'Echno-serve Consulting PLC — Addis Ababa, Ethiopia',
    description: 'Co-developed Tolopay wallet payment system using React & Figma. Documented analysis process for reproducibility and team reference',
    icon: <Shield className="h-4 w-4 mr-2 text-purple-500" />,
    color: 'text-purple-500',
  },
  {
    id: '4',
    year: 'Dec 2023 – Present',
    title: 'Software Developer/Technical Support I',
    subtitle: 'HST Consulting PLC — Addis Ababa, Ethiopia',
    description: 'Improved Moodle LMS functionality, increasing client satisfaction scores by 25%,Integrated Telebirr and Webirr, enabling 2,000+ automated transactions per month, Developed custom automation plugins, reducing admin workload by 50%',
    icon: <Shield className="h-4 w-4 mr-2 text-purple-500" />,
    color: 'text-purple-500',
  },
];

export default function SkillsSection() {
  return (
    <div className="min-h-screen py-16 ">
      <div className='magicbento-container'>
        <div className="relative text-center py-12 overflow-hidden skill-header">
      {/* Background holo glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-cyan-400/20 via-transparent to-transparent blur-2xl"
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Holographic scanline effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r 
                   from-transparent via-cyan-400 to-transparent opacity-40"
        animate={{
          y: ["0%", "100%"],
          opacity: [0.1, 0.5, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Main Animated Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40, letterSpacing: "0.05em" }}
        whileInView={{
          opacity: 1,
          y: 0,
          letterSpacing: "0.15em",
        }}
        transition={{
          duration: 1.4,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        className="relative z-10 text-2xl sm:text-4xl md:text-6xl font-extrabold uppercase 
                   bg-clip-text text-transparent bg-gradient-to-r 
                   from-cyan-300 via-blue-400 to-purple-500 
                   drop-shadow-[0_0_12px_rgba(0,255,255,0.25)] 
                   tracking-widest"
      >
        Skill and Technology I Use!!
      </motion.h1>

      {/* Subtle circuit pulse line */}
      <motion.div
        className="mx-auto mt-6 h-[2px] w-1/2 bg-gradient-to-r 
                   from-cyan-400 via-fuchsia-400 to-cyan-400 rounded-full"
        animate={{
          width: ["40%", "60%", "40%"],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>

<MagicBento 
  textAutoHide={true}
  enableStars={true}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={false}
  enableMagnetism={true}
  clickEffect={true}
  spotlightRadius={300}
  particleCount={12}
  glowColor="132, 0, 255"
/>
      </div>
       <div className="relative text-center py-20 overflow-hidden journey-cont">
      {/* Pulsing background aura */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-indigo-500/10 via-fuchsia-500/10 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated binary particles */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.6,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        className="relative z-10 text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase 
                   bg-clip-text text-transparent bg-gradient-to-r 
                   from-fuchsia-400 via-cyan-400 to-blue-500 
                   drop-shadow-[0_0_25px_rgba(0,255,255,0.3)] tracking-[0.15em]"
      >
        Skill Evolution: System Upgrade in Progress
      </motion.h1>

      {/* Scanning light bar */}
      <motion.div
        className="relative z-10 mx-auto mt-8 h-[4px] w-2/5 
                   bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 rounded-full"
        animate={{
          x: ["-10%", "10%", "-10%"],
          opacity: [0.5, 1, 0.5],
          filter: ["blur(3px)", "blur(0px)", "blur(3px)"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtitle line */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-10 mt-6 text-cyan-300/80 text-base sm:text-lg font-mono"
      >
        [ Neural growth detected — unlocking advanced skill modules... ]
      </motion.p>
    </div>

      <ScrollTimeline
        events={skills}
        title="Skills Timeline"
        subtitle="Explore the skills I've mastered over the years"
        animationOrder="staggered"
        cardAlignment="alternating"
        lineColor="bg-blue-200"
        activeColor="bg-blue-600"
        progressIndicator={true}
        cardVariant="elevated"
        cardEffect="glow"
        parallaxIntensity={0.2}
        progressLineWidth={4}
        progressLineCap="round"
        dateFormat="badge"
        revealAnimation="slide"
        connectorStyle="line"
        perspective={true} // Enable 3D effect
        darkMode={false} // Enable dark mode
        smoothScroll={true}
        className="mx-auto timeline-cont"
      />
        <div className="future-words relative overflow-hidden flex justify-center mt-12 px-4">
      <motion.p
        initial={{ opacity: 0, y: 10, letterSpacing: "0.1em" }}
        animate={{
          opacity: [0, 1, 1, 0.95],
          y: [10, 0, 0, 2],
          letterSpacing: ["0.1em", "0.3em", "0.1em"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="text-center text-base sm:text-lg md:text-xl tracking-widest uppercase font-light 
                   bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-purple-500
                   select-none"
      >
        Exploration mode: ON — future projects compiling...
      </motion.p>

      {/* Subtle glow for mobile */}
      <motion.div
        className="absolute inset-0 blur-xl sm:blur-3xl opacity-20 bg-gradient-to-r 
                   from-cyan-400 via-fuchsia-500 to-purple-600 pointer-events-none"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>

    </div>
  );
}

