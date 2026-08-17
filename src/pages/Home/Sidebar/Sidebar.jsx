import { Icon } from "@iconify/react";
import AvatarPlaceholder from "../../../Components/AvatarPlaceholder/AvatarPlaceholder";

const Sidebar = () => {
    return (
        <aside id="slideBar" className="profile-panel-wrap order-1 lg:order-1 lg:self-start">
            <div className="profile-panel relative border">
                <figure className="profile-image">
                    <AvatarPlaceholder className="profile-placeholder" />
                    <span className="profile-status" aria-label="Front-End Developer">
                        <Icon icon="octicon:code-16" />
                    </span>
                </figure>
                <div className="profile-caption">
                    <h2 className="profile-name font-semibold">Mokhlesur Rahman</h2>
                    <p className="profile-username">mdmokhlesur · he/him</p>
                    <p className="profile-bio mt-5">
                        Hi there, I&apos;m Mokhlesur Rahman. Front-End Developer building modern web and desktop applications.
                    </p>
                    <div className="profile-actions mt-5">
                        <a href="Mokhlesur-Rahman-resume.pdf" download="Mokhlesur-Rahman-resume.pdf">
                            Download Resume
                        </a>
                    </div>
                    <div className="profile-meta mt-5 space-y-3 text-sm">
                        <span className="profile-contact-row"><Icon className="text-lg" icon="octicon:briefcase-16" />Front-End Developer</span>
                        <span className="profile-contact-row"><Icon className="text-lg" icon="octicon:location-16" />Dhaka, Bangladesh</span>
                        <a className="profile-contact-row" href="mailto:mokhlesurinfo5@gmail.com"><Icon className="text-base" icon="octicon:mail-16" /> mokhlesurinfo5@gmail.com</a>
                        <a className="profile-contact-row" href="tel:+8801818886577"><Icon className="text-lg" icon="octicon:device-mobile-16" />+880 1818-886577</a>
                        <a className="profile-contact-row" target="_blank" rel="noreferrer" href="https://mokhlesur.vercel.app/"><Icon className="text-lg" icon="octicon:link-16" />mokhlesur.vercel.app</a>
                        <a className="profile-contact-row" target="_blank" rel="noreferrer" href="https://github.com/mdmokhlesur"><Icon className="text-lg" icon="fa-brands:github" />github.com/mdmokhlesur</a>
                        <a className="profile-contact-row" target="_blank" rel="noreferrer" href="https://linkedin.com/in/mokhlesurrahman018"><Icon className="text-lg" icon="fa-brands:linkedin" />linkedin.com/in/mokhlesurrahman018</a>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
