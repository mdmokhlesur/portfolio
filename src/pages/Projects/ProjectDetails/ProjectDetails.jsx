import { Icon } from "@iconify/react";
import { Link, Navigate, useParams } from "react-router-dom";
import PageTitle from "../../../Components/PageTitle/PageTitle";
import projectData from "../../../data/projectData";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projectData.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/my-work" replace />;
  }

  const previewImages = project.previewImages || [project.thumbnail];

  return (
    <div className="portfolio-page repo-page-surface">
      <PageTitle title={project.title} />
      <div className="site-container mx-auto px-4 py-10 md:px-8 lg:py-14">
        <Link to="/my-work" className="repo-back-link" data-cursor-label="Back to work">
          <Icon icon="octicon:arrow-left-16" />
          All work
        </Link>

        <div className="repo-detail-header mt-6">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="repo-detail-title">
                <Icon icon="octicon:repo-16" />
                {project.title}
              </h1>
              <span className="repo-visibility">{project.status}</span>
            </div>
            <p className="mt-3 max-w-4xl leading-7">
              {project.fullDescription || project.description}
            </p>
          </div>
          <div className="repo-detail-actions">
            {project.liveLink && (
              <a target="_blank" rel="noreferrer" href={project.liveLink} data-cursor-label="Open live site">
                <Icon icon="octicon:link-external-16" />
                Live website
              </a>
            )}
            {project.github?.map((item) => (
              <a
                key={item.id}
                target="_blank"
                rel="noreferrer"
                href={item.link}
                data-cursor-label="Open GitHub"
              >
                <Icon icon="fa-brands:github" />
                {item.title}
              </a>
            ))}
          </div>
        </div>

        <div className="repo-detail-layout mt-8">
          <main className="readme-panel repo-readme">
            <div className="readme-label mb-5">
              <Icon icon="octicon:file-16" />
              Project overview
            </div>

            <section>
              <h2>Preview</h2>
              <div className="project-preview-grid">
                {previewImages.map((image) => (
                  <figure key={image} className="project-preview">
                    <img src={image} alt={`${project.title} preview`} />
                  </figure>
                ))}
              </div>
            </section>

            <section>
              <h2>Overview</h2>
              <p>{project.fullDescription || project.description}</p>
            </section>

            <section>
              <h2>Features</h2>
              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2>Responsibilities</h2>
              <ul>
                {project.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </section>
          </main>

          <aside className="repo-sidebar">
            <div className="repo-sidebar-panel">
              <h2>About</h2>
              <p>{project.role}</p>
              <dl>
                <div>
                  <dt>Category</dt>
                  <dd>{project.category}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>{project.status}</dd>
                </div>
                <div>
                  <dt>Updated</dt>
                  <dd>{formatDate(project.updatedAt)}</dd>
                </div>
              </dl>
            </div>

            <div className="repo-sidebar-panel">
              <h2>Technologies</h2>
              <div className="repo-tech-list">
                {project.stack.map((item) => (
                  <span className="tech-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="repo-sidebar-panel">
              <h2>Primary language</h2>
              <span className="repo-language">
                <span style={{ backgroundColor: project.languageColor }} />
                {project.mainTechnology}
              </span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
