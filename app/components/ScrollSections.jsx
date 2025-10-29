"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ScrollSections.css";
import Image from "next/image";
import { motion } from "framer-motion";
const ScrollSections = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Always register the plugin first
    gsap.registerPlugin(ScrollTrigger);

    // Kill any previous triggers (important for React + Next.js)
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const ctx = gsap.context(() => {
      const scrollSections = containerRef.current.querySelectorAll(".scroll-section");

      scrollSections.forEach((section) => {
        const wrapper = section.querySelector(".wrapper");
        const items = wrapper.querySelectorAll(".item");

        let direction = section.classList.contains("vertical-section")
          ? "vertical"
          : "horizontal";

        initScroll(section, items, direction);
      });

      function initScroll(section, items, direction) {
        items.forEach((item, index) => {
          if (index !== 0) {
            direction === "horizontal"
              ? gsap.set(item, { xPercent: 100 })
              : gsap.set(item, { yPercent: 100 });
          }
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            pin: true,
            start: "top top",
            end: () => `+=${items.length * 100}%`,
            scrub: 1,
            anticipatePin: 1, // smoothens pin start
            invalidateOnRefresh: true,
          },
          defaults: { ease: "none" },
        });

        items.forEach((item, index) => {
          timeline.to(item, { scale: 0.9, borderRadius: "10px" });
          if (index < items.length - 1) {
            direction === "horizontal"
              ? timeline.to(items[index + 1], { xPercent: 0 }, "<")
              : timeline.to(items[index + 1], { yPercent: 0 }, "<");
          }
        });
      }
    }, containerRef);

    // Cleanup GSAP triggers when component unmounts
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef}>
      <main className="main-wrapper">
        {/* Keep your same content structure here */}
        <div className="section">
          <div className="container-medium">
            <div className="padding-vertical">
              <div className="relative text-center py-16 overflow-hidden max-width-large">
      {/* Animated backdrop glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-fuchsia-400/10 via-cyan-400/10 to-transparent blur-3xl"
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

      {/* Moving holographic grid lines */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px]"
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.4,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        className="relative z-10 text-3xl sm:text-5xl md:text-6xl font-extrabold 
                   uppercase bg-clip-text text-transparent 
                   bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-500
                   drop-shadow-[0_0_15px_rgba(0,255,255,0.3)] tracking-widest"
      >
        Core Projects: Activated
      </motion.h1>

      {/* Underline beam animation */}
      <motion.div
        className="relative z-10 mx-auto mt-6 h-[3px] w-1/3 
                   bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 rounded-full"
        animate={{
          width: ["25%", "40%", "25%"],
          opacity: [0.6, 1, 0.6],
          filter: ["blur(2px)", "blur(0px)", "blur(2px)"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle “initializing” line */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-10 mt-4 text-sm sm:text-base text-cyan-300/80 font-mono"
      >
        [ Initializing visual archive... please scroll ]
      </motion.p>
    </div>
            </div>
          </div>
        </div>

        {/* Vertical Scroll Section */}
        <div className="scroll-section vertical-section section">
          <div className="wrapper">
            <div role="list" className="list">
              {[
  {
    num: 1,
    title: "HST Skill Academy Landing Page",
    desc: "Designed and developed a responsive landing page for HST Skill Academy, showcasing available courses, registration options, and institutional highlights. Focused on accessibility, SEO optimization, and clean UI/UX. Technologies used: Next.js, Tailwind CSS, and GSAP for smooth animations.",
    image: "/images/landingpage1.png",
  },
  {
    num: 2,
    title: "Modern Personal Portfolio Website",
    desc: "Built a modern, dynamic portfolio website to present personal projects, technical skills, and professional achievements. Integrated smooth scrolling, interactive transitions, and optimized images for fast performance. Technologies used: Next.js, React Hooks, Tailwind CSS, and Framer Motion.",
    image: "/images/portfolio.png",
  },
  {
    num: 3,
    title: "Tolopay Wallet Web App",
    desc: "Designed and implemented a digital wallet system for sending and receiving payments with secure authentication and transaction management. Includes intuitive dashboard and real-time balance updates. Technologies used: React.js, Node.js, MongoDB, and Figma for UI prototyping.",
    image: "/images/tolopay.png",
  },
  {
    num: 4,
    title: "Interactive Portfolio Experiment",
    desc: "Created an experimental React-based portfolio to explore GSAP animations and interactive layouts. Focused on performance, component reusability, and creative transitions. Technologies used: React.js, Vite, and GSAP.",
    image: "/images/portfolio1.png",
  },
]
.map((item) => (
                <div role="listitem" className="item" key={item.num}>
                  <div className="item_content">
                    <h2 className="item_number">{item.num}</h2>
                    <h2>{item.title}</h2>
                    <p className="item_p">{item.desc}</p>
                  </div>
                  {item.image ? (
  <Image
    src={item.image}
    alt={item.title}
    width={1920}
    height={1080}
    className="item_media object-cover"
    priority={item.num === 1}
  />
) : (
  <video
    src={item.video}
    loading="lazy"
    autoPlay
    muted
    loop
    playsInline
    className="item_media"
  ></video>
)}

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Section */}
        <div className="section">
          <div className="container-medium">
            <div className="padding-vertical">
              <div className="mx-auto text-center py-8 relative overflow-hidden">
      {/* Animated Glow Behind Text */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-600 
                   blur-3xl opacity-20 pointer-events-none"
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated Heading Text */}
      <motion.h1
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        className="text-xl sm:text-1xl md:text-xl font-extrabold 
                   text-transparent bg-clip-text bg-gradient-to-r 
                   from-cyan-300 via-pink-400 to-purple-500 
                   tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] 
                   uppercase"
      >
        Still More Projects to Present...
      </motion.h1>

      {/* Subtle Pulse Line Underneath */}
      <motion.div
        className="mx-auto mt-4 h-[2px] w-2/3 bg-gradient-to-r 
                   from-transparent via-cyan-400 to-transparent"
        animate={{ width: ["40%", "70%", "40%"], opacity: [0.6, 1, 0.6] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
            </div>
          </div>
        </div>

        <div className="scroll-section horizontal-section section">
          <div className="wrapper">
            <div role="list" className="list">
              {[
  {
    num: 1,
    title: "Online Learning Platform Design",
    desc: "Developed a modern and scalable front-end design for an online learning platform. Focused on modular components, responsive layouts, and user-friendly navigation. Technologies used: Figma, React.js, and Tailwind CSS.",
    image: "/images/landing2.png",
  },
  {
    num: 2,
    title: "Webirr Payment Gateway Plugin for Moodle LMS",
    desc: "Built a secure Moodle plugin integrating the Webirr payment gateway, enabling online payment and enrollment management. Focused on PHP integration, backend validation, and seamless UX. Technologies used: PHP, MySQL, and Moodle API.",
    image: "/images/webirr.png",
  },
  {
    num: 3,
    title: "Custom Application Form Plugin for Moodle",
    desc: "Developed a plugin that allows organizations to collect structured applicant data, integrate payment verification, and automate registration workflows. Technologies used: PHP, MySQL, and Moodle Plugin Framework.",
    image: "/images/plugin1.png",
  },
  {
    num: 4,
    title: "Blog Website",
    desc: "Created a content-driven blog platform with category-based filtering, Markdown support, and admin post management. Focused on SEO and responsive design. Technologies used: Next.js, MongoDB, and Tailwind CSS.",
    image: "/images/blog.png",
  },
]
.map((item) => (
                <div role="listitem" className="item" key={item.num}>
                  <div className="item_content">
                    <h2 className="item_number">{item.num}</h2>
                    <h2>{item.title}</h2>
                    <p className="item_p">{item.desc}</p>
                  </div>
                  {item.image ? (
  <Image
    src={item.image}
    alt={item.title}
    width={1920}
    height={1080}
    className="item_media object-cover"
    priority={item.num === 1}
  />
) : (
  <video
    src={item.video}
    loading="lazy"
    autoPlay
    muted
    loop
    playsInline
    className="item_media"
  ></video>
)}


                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section">
          <div className="padding-global">
            <div className="container-medium">
              <div className="padding-vertical">
                 <div className="relative max-w-5xl mx-auto text-center py-16 overflow-hidden">
      {/* Pulsating holographic halo */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-cyan-400/20 via-transparent to-transparent blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main animated text */}
      <motion.h1
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="heading text-3xl sm:text-4xl md:text-6xl font-extrabold 
                   text-transparent bg-clip-text bg-gradient-to-r 
                   from-cyan-300 via-teal-400 to-blue-500 
                   drop-shadow-[0_0_15px_rgba(0,255,255,0.2)] 
                   tracking-wider uppercase relative z-10"
      >
        Keep Scrolling!!
      </motion.h1>

      {/* Scrolling indicator line */}
      <motion.div
        className="mx-auto mt-6 h-[3px] w-24 bg-gradient-to-r 
                   from-cyan-400 via-blue-400 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.5)]"
        animate={{
          width: ["4rem", "8rem", "4rem"],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating scroll icon */}
      <motion.div
        className="mt-8 flex justify-center"
        animate={{ y: [0, 10, 0], opacity: [0.8, 1, 0.8] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#67e8f9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]"
        >
          <path d="M12 5v14m7-7-7 7-7-7" />
        </svg>
      </motion.div>
    </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ScrollSections;
