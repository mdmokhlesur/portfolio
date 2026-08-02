import { Icon } from "@iconify/react";
import projectData from "../../../data/projectData";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import SingleProject from "../../Projects/SingleProject/SingleProject";
import { Link } from "react-router-dom";
import Button from "../../../Components/Button/Button";

const MyWork = () => {
  return (
    <section id="my-work">
      <SectionTitle
        logo="octicon:repo-16"
        title="Selected Work"
        headline="Recent projects built across frontend, backend, and product flows"
      />
      <div className="my-work-section mt-8 grid h-auto">
        {projectData.slice(0, 4)?.map((project, index) => (
          <SingleProject key={project?.id} project={project} index={index} />
        ))}
        </div>
      <div className="mt-8 text-center lg:mt-10">
        <Link to="/my-work">
          <Button size="wide">
            Explore All Work <Icon className="text-base" icon="octicon:arrow-right-16" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default MyWork;
