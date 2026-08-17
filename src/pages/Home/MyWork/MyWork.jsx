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
        title="Popular repositories"
        headline="Pinned projects across frontend, backend, commerce, and product flows"
      />
      <div className="my-work-section mt-8 grid grid-cols-1 gap-4 xl:grid-cols-2">
        {projectData.slice(0, 4)?.map((project) => (
          <SingleProject key={project?.id} project={project} />
        ))}
      </div>
      <div className="mt-8 text-center lg:mt-10">
        <Link to="/my-work" data-cursor-label="Explore work">
          <Button size="wide">
            Explore All Work <Icon className="text-base" icon="octicon:arrow-right-16" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default MyWork;
