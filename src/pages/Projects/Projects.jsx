import { Icon } from "@iconify/react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../Components/PageTitle/PageTitle";
import projectData from "../../data/projectData";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLanguage, setActiveLanguage] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  const categories = useMemo(
    () => ["All", ...new Set(projectData.map((project) => project.category))],
    []
  );

  const languages = useMemo(
    () => ["All", ...new Set(projectData.map((project) => project.mainTechnology))],
    []
  );

  const filteredProjects = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return projectData
      .filter((project) => {
        const matchesCategory =
          activeCategory === "All" || project.category === activeCategory;
        const matchesLanguage =
          activeLanguage === "All" || project.mainTechnology === activeLanguage;
        const searchableText = [
          project.title,
          project.description,
          project.category,
          project.status,
          project.mainTechnology,
          ...project.stack,
        ]
          .join(" ")
          .toLowerCase();

        return (
          matchesCategory &&
          matchesLanguage &&
          searchableText.includes(normalizedSearch)
        );
      })
      .sort((firstProject, secondProject) => {
        if (sortBy === "default") {
          return firstProject.id - secondProject.id;
        }

        if (sortBy === "name") {
          return firstProject.title.localeCompare(secondProject.title);
        }

        if (sortBy === "technology") {
          return firstProject.mainTechnology.localeCompare(
            secondProject.mainTechnology
          );
        }

        return new Date(secondProject.updatedAt) - new Date(firstProject.updatedAt);
      });
  }, [activeCategory, activeLanguage, searchTerm, sortBy]);

  return (
    <div className="portfolio-page repo-page-surface">
      <PageTitle title="Projects" />
      <div className="site-container mx-auto px-4 py-12 md:px-8 lg:py-16">
        <div className="repo-page-header mb-8">
          <div>
            <p className="eyebrow mb-3">Repository archive</p>
            <h1 className="archive-title font-semibold text-base-content">
              All work
            </h1>
          </div>
          <div className="repo-count">
            <Icon icon="octicon:repo-16" />
            {projectData.length} repositories
          </div>
        </div>

        <div className="repo-toolbar mb-5">
          <label className="repo-search">
            <Icon icon="octicon:search-16" />
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Find a repository..."
            />
          </label>
          <div className="repo-filter-bar">
            <label className="repo-select-wrap">
              <span>Type</span>
              <select
                value={activeCategory}
                onChange={(event) => setActiveCategory(event.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <Icon icon="octicon:chevron-down-16" />
            </label>
            <label className="repo-select-wrap">
              <span>Language</span>
              <select
                value={activeLanguage}
                onChange={(event) => setActiveLanguage(event.target.value)}
              >
                {languages.map((language) => (
                  <option key={language} value={language}>
                    {language}
                  </option>
                ))}
              </select>
              <Icon icon="octicon:chevron-down-16" />
            </label>
            <label className="repo-select-wrap">
              <span>Sort</span>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
              >
                <option value="default">Default order</option>
                <option value="updated">Last updated</option>
                <option value="name">Name</option>
                <option value="technology">Technology</option>
              </select>
              <Icon icon="octicon:chevron-down-16" />
            </label>
          </div>
        </div>

        <div className="repo-list">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <article key={project.id} className="repo-list-item">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      to={`/my-work/${project.slug}`}
                      className="repo-list-title"
                    >
                      <Icon icon="octicon:repo-16" />
                      {project.title}
                    </Link>
                    <span className="repo-visibility">{project.status}</span>
                  </div>
                  <p className="mt-3 max-w-4xl leading-7">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                    <span className="repo-language">
                      <span
                        style={{ backgroundColor: project.languageColor }}
                      />
                      {project.mainTechnology}
                    </span>
                    <span className="repo-meta-pill">{project.category}</span>
                    {project.stack.map((item) => (
                      <span className="repo-stack-token" key={item}>
                        {item}
                      </span>
                    ))}
                    <span className="repo-updated">
                      Updated {formatDate(project.updatedAt)}
                    </span>
                  </div>
                </div>
                <Link
                  to={`/my-work/${project.slug}`}
                  className="repo-row-action"
                  aria-label={`View ${project.title} details`}
                >
                  <Icon icon="octicon:arrow-right-16" />
                </Link>
              </article>
            ))
          ) : (
            <div className="repo-empty-state">
              <Icon icon="octicon:repo-16" />
              <p>No repositories matched your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
