import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const AboutMe = () => {
    return (
        <section data-aos="fade-up" className="section-band" id="about-me">
            <SectionTitle logo="fa-regular:user" title='About Me' headline="Clean interfaces, reusable systems, and reliable product delivery" />
            <div className="mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                <p className="about-lead">
                    Front-End Developer with 2+ years of professional experience building modern web and desktop applications using React, Next.js, TypeScript, and Electron.js. I create reusable UI components, integrate REST APIs, optimize performance, and collaborate with cross-functional teams.
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
                        <strong>Chattogram, Bangladesh</strong>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
