import { Icon } from "@iconify/react";

const SkillCard = ({ icon, logo, title }) => {
  return (
    <div data-aos="fade-up" data-aos-duration={650} className="skill-tile group flex min-h-28 flex-col items-center justify-center p-4 text-center transition duration-300">
      {icon ? (
        <Icon
          className="mx-auto h-11 w-11 transition duration-300 group-hover:scale-105 md:h-12 md:w-12"
          icon={icon}
        />
      ) : (
        <img
          className="mx-auto h-11 max-w-16 object-contain transition duration-300 group-hover:scale-105 md:h-12"
          src={logo}
          alt={title}
        />
      )}
      <h3 className="mt-4 text-sm font-semibold text-base-content">{title}</h3>
    </div>
  );
};

export default SkillCard;
