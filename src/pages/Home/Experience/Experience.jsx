import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import experienceData from "../../../data/experienceData";

const Experience = () => {
  return (
    <section id="experience" className="section-band" data-aos="fade-up">
      <SectionTitle
        logo="octicon:git-branch-16"
        title="Experience"
        headline="Professional work across ERP, desktop, and analytics products"
      />
      <div className="experience-list mt-8">
        {experienceData.map((item) => (
          <article className="experience-item" key={item.id}>
            <div>
              <p className="eyebrow">{item.period}</p>
              <h3>{item.company}</h3>
              <p>{item.role}</p>
            </div>
            <div className="experience-projects">
              {item.projects.map((project) => (
                <div className="experience-project" key={project.name}>
                  <h4>{project.name}</h4>
                  <ul>
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
