import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import SkillCard from "../../../Components/SkillCard/SkillCard";
// import skills from "/public/SkillsData/skillsData";
import SkillsData from '../../../../public/skillsData/skillsData'

const Skills = () => {
  return (
    <div
      id="skills"
      className="mt-16 lg:mt-0 max-w-screen overflow-hidden"
      data-aos="slide-up"
    >
      <SectionTitle
        logo="fa-solid:user-cog"
        title="My Skills"
        headline="My Skills"
      />
      <div className="grid gap-3 mt-8 lg:grid-cols-4 grid-cols-3">
        {SkillsData?.map(skill => (
          <SkillCard key={skill?.id} title={skill?.title} logo={skill?.logo} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
