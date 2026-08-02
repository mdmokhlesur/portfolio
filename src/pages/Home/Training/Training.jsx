import GraduateCard from "../../../Components/GraduateCard/GraduateCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Training = () => {
  return (
    <section
      id="my-training"
      className="max-w-screen overflow-hidden"
    >
      <SectionTitle
        logo="fa-solid:language"
        title="More"
        headline="Languages and interests"
      />
      <div className="mt-10 grid gap-8">
        <GraduateCard
          year="Languages"
          title="Bangla, English, Hindi"
          subTitle="Native / Professional / Conversational"
          description="Bangla: Native. English: Professional working proficiency. Hindi: Conversational."
        />
        <GraduateCard
          year="Interests"
          title="Frontend craft and product learning"
          subTitle="Web apps, open source, UI/UX, sports analytics"
          description="Building personal web applications, exploring modern frontend technologies, contributing to open-source projects, reading JavaScript blogs, playing football, and recreating modern web interfaces."
        />
      </div>
    </section>
  );
};

export default Training;
