"use client";

import SidebarMenu from './components/SidebarMenu';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  const sections = [
    { id: 'about', title: 'About', content: <AboutSection />, fullScreen: true },
    { id: 'projects', title: 'Projects', content: <ProjectsSection /> },
    { id: 'skills', title: 'Skills', content: <SkillsSection /> },
    { id: 'contact', title: 'Contact', content: <ContactSection /> },
  ];

  return (
    <div className="flex">
      <main className="flex-1 no-scrollbar">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className={section.fullScreen ? "h-screen" : "min-h-screen py-20"}
          >
            {/* {!section.fullScreen && (
              <h2 className="text-3xl font-bold mb-4 text-cyan-50">{section.title}</h2>
            )} */}
            {section.content}
          </section>
        ))}
      </main>
      <SidebarMenu sections={sections} />
    </div>
  );
}
