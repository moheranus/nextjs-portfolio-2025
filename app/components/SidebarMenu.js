
"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './SidebarMenu.css';

export default function SidebarMenu({ sections }) {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const section of sections) {
        const elem = document.getElementById(section.id);
        if (elem) {
          const { offsetTop, offsetHeight } = elem;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      scrollToSection(id);
    }
  };

  // Animation variants for entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.nav
      className="sidebar-menu"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="main">
        <div className="up">
          {sections.slice(0, 2).map((section, index) => (
            <motion.button
              key={section.id}
              role="button"
              tabIndex={0}
              className={`menu-item card${index + 1} ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
              onKeyDown={(e) => handleKeyDown(e, section.id)}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 3, boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              aria-label={`Navigate to ${section.title} section`}
            >
              <span className="menu-item-text">{section.title}</span>
            </motion.button>
          ))}
        </div>
        <div className="down">
          {sections.slice(2, 4).map((section, index) => (
            <motion.button
              key={section.id}
              role="button"
              tabIndex={0}
              className={`menu-item card${index + 3} ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
              onKeyDown={(e) => handleKeyDown(e, section.id)}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 3, boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              aria-label={`Navigate to ${section.title} section`}
            >
              <span className="menu-item-text">{section.title}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}