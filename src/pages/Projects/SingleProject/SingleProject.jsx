import { Icon } from "@iconify/react";
import { useState } from "react";
import Button from "../../../Components/Button/Button";

const SingleProject = ({ project, index = 0 }) => {
  const { thumbnail, title, role, stack = [], description, liveLink, github = [] } = project;
  const [fullDescription, setFullDescription] = useState(false);
  return (
    <div
      className="project-card group h-full overflow-hidden border-t transition duration-300"
      data-aos="fade-up"
    >
      <figure className="project-thumb relative overflow-hidden">
        <img className="h-full w-full object-cover transition duration-500 group-hover:scale-105" src={thumbnail} alt={title} />
        <span className="project-index">
          {String(index + 1).padStart(2, "0")}
        </span>
      </figure>
      <div className="project-content flex flex-col py-6 md:px-2">
        <p className="eyebrow mb-3">{role || "Selected project"}</p>
        <h3 className="project-title text-base-content"><Icon icon="octicon:repo-16" />{title}</h3>
        <p className="my-5 grow leading-7">
          {fullDescription ? (
            <>
              {description}
              <span
                onClick={() => setFullDescription(false)}
                className="accent-text ml-1 cursor-pointer font-semibold"
              >
                see less
              </span>
            </>
          ) : description?.length >= 180 ? (
            <>
              {description.split("").slice(0, 180)}{" "}
              <span
                onClick={() => setFullDescription(true)}
                className="accent-text ml-1 cursor-pointer font-semibold"
              >
                see more
              </span>
            </>
          ) : (
            <>{description} </>
          )}
        </p>
        {stack.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span className="tech-chip" key={item}>{item}</span>
            ))}
          </div>
        )}
        <div className="mt-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {liveLink && <a
            target="_blank"
            rel="noreferrer"
            href={liveLink}
          >
            <Button>
              <Icon
                className="mr-[1px]"
                icon="heroicons-outline:link"
              />
              Live
            </Button>
          </a>}
          {github?.length > 0 && <div className="flex items-center gap-2 rounded-md py-1 text-sm">
            <Icon className="text-lg text-base-content" icon="fa-brands:github" />
            {github?.map((item) => (
              <a
                key={item?.id}
                className="project-link font-semibold capitalize text-base-content transition"
                target="_blank"
                rel="noreferrer"
                href={item?.link}
              >
                {item?.title}
              </a>
            ))}
          </div>}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
