import { Icon } from "@iconify/react";
import profile from "../../../assets/profile.jpg"
import useTheme from "../../../hooks/useTheme";

const Sidebar = () => {
    const { theme } = useTheme();
    return (
        <aside id="slideBar" className="profile-panel-wrap order-1 lg:order-1 lg:self-start">
            <div className={`profile-panel relative overflow-hidden border ${theme !== 'light' && 'border-zinc-700'}`}>
                <figure className="profile-image overflow-hidden">
                    <img className="h-full w-full object-cover" src={profile} alt="Mokhlesur Rahman" />
                </figure>
                <div className="profile-caption">
                    <p className="eyebrow mb-2">Front-End Developer</p>
                    <h2 className={`${theme !== "light" && "text-white"} profile-name font-semibold capitalize`}>Mokhlesur Rahman</h2>
                   
                    <div className="mt-5 space-y-3 text-sm">
                        <a className="profile-contact-row" href="mailto:mokhlesurinfo5@gmail.com"><Icon className="text-base" icon="fa-solid:envelope" /> mokhlesurinfo5@gmail.com</a>
                        <a className="profile-contact-row" href="tel:+8801818886577"><Icon className="text-lg" icon="heroicons-outline:phone" />+880 1818-886577</a>
                        <span className="profile-contact-row"><Icon className="text-lg" icon="heroicons-outline:location-marker" />Chattogram, Bangladesh</span>
                        <a className="profile-contact-row" target="_blank" rel="noreferrer" href="https://github.com/mokhles018"><Icon className="text-lg" icon="fa-brands:github" />github.com/mokhles018</a>
                        <a className="profile-contact-row" target="_blank" rel="noreferrer" href="https://linkedin.com/in/mokhlesurrahman018"><Icon className="text-lg" icon="fa-brands:linkedin" />linkedin.com/in/mokhlesurrahman018</a>
                    </div>
                    <div className="profile-actions mt-6 grid grid-cols-2 gap-2">
                        <a href="Mokhlesur-Rahman-resume.pdf" download="Mokhlesur-Rahman-resume.pdf">
                            <Icon icon="fa-solid:download" /> Resume
                        </a>
                        <a href="#contract">
                            <Icon icon="fa-regular:envelope" /> Contact
                        </a>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
