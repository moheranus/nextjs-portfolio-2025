"use client";

import LightRays from "./LightRays";
import SplitText from "./SplitText";
import TextType from './TextType';

export default function AboutSection() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  // 📧 Handle Hire button click
  const handleHireClick = () => {
    const email = "danielshobe90@gmail.com";
    const subject = encodeURIComponent("Let's Work Together");
    const body = encodeURIComponent(
      "Hi Daniel,\n\nI’d like to discuss a project opportunity with you.\n\nBest regards,\n[Your Name]"
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  // 📄 Handle CV Download button click
  const handleDownloadClick = () => {
    const cvPath = "/files/daniel-shobecv-2025.pdf"; 
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "DanielShobe_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Light Rays Background */}
      <div className="absolute inset-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#fff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.5}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Hero Content */}
      <div className="about-hero-container">
        <SplitText
          text="Hi There 👋, I'm"
          className="txt-hello"
          delay={50}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <SplitText
          text="Daniel Shobe"
          className="text-center txt-name"
          delay={200}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <div className="text-type-container">
          <TextType
            text={[
              "Building {pixel-perfect} interfaces",
              "For the {modern web}",
              "Crafting {scalable} solutions",
              "For the {digital frontier}",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-8 buttons-container">
          <div className="downloadcv-container">
            <button className="downloadcv-btn" onClick={handleHireClick}>
              Hire Me
            </button>
          </div>
          <div className="downloadcv-container">
            <button className="downloadcv-btn" onClick={handleDownloadClick}>
              Download My CV
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Prompt */}
      <div className="scroll-down">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
          <path d="M12 5v14m7-7l-7 7-7-7" />
        </svg>
        <span>Scroll Down</span>
      </div>
    </div>
  );
}
