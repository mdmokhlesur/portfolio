import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import SkillCard from "../../../Components/SkillCard/SkillCard";
import SkillsData from "../../../data/skillsData";

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-screen overflow-hidden"
      data-aos="fade-up"
    >
      <SectionTitle
        logo="fa-solid:user-cog"
        title="My Skills"
        headline="Technical skills from my current frontend and product work"
      />
      <div className="skills-grid mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {SkillsData?.map(skill => (
          <SkillCard key={skill?.id} title={skill?.title} logo={skill?.logo} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
