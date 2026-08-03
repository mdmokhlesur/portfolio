import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const SingleProject = ({ project }) => {
  const {
    slug,
    title,
    role,
    category,
    status,
    mainTechnology,
    languageColor,
    description,
  } = project;

  return (
    <article className="repo-card flex h-full flex-col" data-aos="fade-up">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <Link to={`/my-work/${slug}`} className="repo-card-title">
            <Icon icon="octicon:repo-16" />
            <span>{title}</span>
          </Link>
          <p className="mt-2 text-sm font-semibold">{role}</p>
        </div>
        <span className="repo-visibility">{status || category}</span>
      </div>
      <p className="repo-description mt-4 line-clamp-3">{description}</p>
      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-6 text-sm">
        <span className="repo-language">
          <span style={{ backgroundColor: languageColor }} />
          {mainTechnology}
        </span>
        <span className="repo-meta-pill">{category}</span>
        <Link to={`/my-work/${slug}`} className="repo-details-link">
          View details <Icon icon="octicon:arrow-right-16" />
        </Link>
      </div>
    </article>
  );
};

export default SingleProject;
