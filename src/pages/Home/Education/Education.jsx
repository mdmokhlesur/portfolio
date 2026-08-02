import GraduateCard from "../../../Components/GraduateCard/GraduateCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Education = () => {
  return (
    <section
      id="my-education"
      className="max-w-screen overflow-hidden"
    >
      <SectionTitle
        logo="fa-solid:graduation-cap"
        title="My education"
        headline="Education"
      />
      <div className="mt-10 grid gap-8 overflow-hidden">
        <GraduateCard
          year="2023"
          title="Diploma in Engineering, Computer Science"
          subTitle="Dhaka Polytechnic Institute"
          description="CGPA: 3.56 / 4.00"
        />
        <GraduateCard
          year="2018"
          title="Secondary School Certificate"
          subTitle="Lakshmipur Technical Training Center"
          description="Electrical and Electronic Engineering. GPA: 4.93 / 5.00"
        />
      </div>
    </section>
  );
};

export default Education;
