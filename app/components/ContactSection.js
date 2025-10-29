"use client";
import ProfileCard from './ProfileCard';

export default function ContactSection() {
  const handleHireClick = () => {
    const email = "danielshobe90@gmail.com";
    const subject = encodeURIComponent("Let's Work Together");
    const body = encodeURIComponent("Hi Daniel,\n\nI’d like to discuss a project opportunity with you.\n\nBest regards,\n[Your Name]");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-cont">
      <ProfileCard
        name="Daniel Shobe.A"
        title="Full-stack Software Engineer"
        handle="+251949052848"
        status="danielshobe90@gmail.com"
        contactText="Hire"
        avatarUrl="/images/ai2.jpg"
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={handleHireClick}
        className='prof-card-cont'
      />
    </div>
  );
}
