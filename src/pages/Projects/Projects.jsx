import PageTitle from "../../Components/PageTitle/PageTitle";
import SingleProject from "./SingleProject/SingleProject";
import projectData from "../../data/projectData";

const Projects = () => {
  return (
    <div className="site-container mx-auto px-4 py-14 md:px-8">
      <PageTitle title="Projects" />
      <div className="mb-10">
        <p className="eyebrow text-sm font-semibold uppercase">Archive</p>
        <h1 className="archive-title mt-3 font-semibold text-base-content">All selected work</h1>
      </div>
      <div className="grid grid-cols-1">
        {projectData.map((project, index) => (
          <div
            key={project?.id}
          >
            <SingleProject
              project={project}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
