import { Icon } from "@iconify/react";
import useTheme from "../../hooks/useTheme";

const SectionTitle = ({ logo, title, headline }) => {
    const { theme } = useTheme();
    return (
        <div className="section-heading" data-aos="fade-up">
            <div className={`section-kicker ${theme !== "light" ? "text-zinc-300" : "text-zinc-600"}`}>
                <Icon className="text-sm text-red-600" icon={logo} />
                <span>{title}</span>
            </div>
            {headline && (
                <h2 className={`section-title max-w-4xl ${theme !== "light" && "text-white"}`}>
                    {headline}
                </h2>
            )}
        </div>
    );
};

export default SectionTitle;
