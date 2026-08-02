import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";

const SideNav = () => {
  const {hash}=useLocation();
  return (
    <ul className="profile-nav mt-6 grid gap-1 border-t pt-5 text-sm">
      <li>
        <a href="#home" className={hash==="#home" ? "active-section" : ""}>
          <Icon icon="heroicons-outline:home" /> Home
        </a>
      </li>
      <li>
        <a
          href="#about-me"
          className={hash==="#about-me" ? "active-section" : ""}
        >
          <Icon icon="fa-regular:user" /> About
        </a>
      </li>
      <li>
        <a href="#skills" className={hash==="#skills" ? "active-section" : ""}>
          <Icon icon="fa-solid:user-cog" /> Skills
        </a>
      </li>
      <li>
        <a href="#my-education" className={hash==="#my-education" ? "active-section" : ""}>
          <Icon icon="fa-solid:graduation-cap" /> Education
        </a>
      </li>
      <li>
        <a href="#my-work" className={hash==="#my-work" ? "active-section" : ""}>
          <Icon icon="fa-solid:project-diagram" /> Work
        </a>
      </li>
      <li>
        <a
          href="#contract"
          className={hash==="#contract" ? "active-section" : ""}
        >
          <Icon icon="fa-regular:envelope" /> Contact
        </a>
      </li>
    </ul>
  );
};

export default SideNav;
