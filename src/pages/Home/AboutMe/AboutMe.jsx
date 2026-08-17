import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const AboutMe = () => {
  return (
    <section data-aos="fade-up" className="section-band" id="about-me">
      <SectionTitle
        logo="octicon:person-16"
        title="About Me"
        headline="Clean interfaces, reusable systems, and reliable product delivery"
      />
      <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <p className="about-lead">
          My focus is on turning complex requirements into simple, reliable
          experiences. Whether it’s building a product from scratch, improving
          an existing system, connecting services through APIs, or fixing
          performance and usability issues, I care about making software work
          well for the people who actually use it. I’m comfortable taking a
          problem, breaking it down, and finding a practical way to solve it. I
          also think beyond the immediate feature about how the code will grow,
          how easy it will be to maintain, and how the overall product can
          become better over time.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="info-strip">
            <span>Focus</span>
            <strong>React, Next.js, TypeScript</strong>
          </div>
          <div className="info-strip">
            <span>Strength</span>
            <strong>Reusable UI and API Integration</strong>
          </div>
          <div className="info-strip">
            <span>Backend</span>
            <strong>Node.js, Express, Prisma</strong>
          </div>
          <div className="info-strip">
            <span>Based In</span>
            <strong>Dhaka, Bangladesh</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
