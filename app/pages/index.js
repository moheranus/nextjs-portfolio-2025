import RightMenu from "../components/RightMenu";
import Section from "../components/Section";

export default function Home() {
  return (
    <div>
      <RightMenu />

      {/* Page content stack */}
      <main>
        <Section id="home" title="Home">
          <p>
            Hi — I'm <strong>Your Name</strong>. Welcome to my portfolio. This
            hero section sits centered on the viewport. Use the right menu to
            quickly jump through sections or scroll to explore.
          </p>

          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/3 rounded-md">Featured highlight 1</div>
              <div className="p-4 bg-white/3 rounded-md">Featured highlight 2</div>
            </div>
          </div>
        </Section>

        <Section id="about" title="About">
          <p>
            Write a short bio here. Describe your background, skills, and what
            you bring to projects. This section zooms into view when it becomes
            visible in the viewport.
          </p>

          <ul className="mt-4 list-disc ml-6">
            <li>Software engineering</li>
            <li>React / WebGL / 3D</li>
            <li>AI & local browser LLM experiments</li>
          </ul>
        </Section>

        <Section id="projects" title="Projects">
          <p>
            Showcase a few projects. For each project you can include a short
            description and a link or small image. The sections are large so you
            can place more content and the zoom effect makes each project feel
            like it comes forward as you scroll.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="p-6 bg-white/3 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Project One</h3>
              <p>Short description of tech used and impact.</p>
            </article>
            <article className="p-6 bg-white/3 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Project Two</h3>
              <p>Short description of tech used and impact.</p>
            </article>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <p>
            Want to work together? Put your email, social links, or a contact
            form here.
          </p>

          <div className="mt-6">
            <address className="not-italic">
              <div>Email: <a href="mailto:you@example.com" className="text-primary">you@example.com</a></div>
              <div>Location: Addis Ababa, Ethiopia</div>
            </address>
          </div>
        </Section>
      </main>
    </div>
  );
}
