import { Icon } from "@iconify/react";
import useTheme from "../../hooks/useTheme";

const Footer = () => {
    const { theme } = useTheme()
    return (
        <footer id="footer" className={`footer site-container mx-auto items-center gap-4 border-t px-4 py-8 md:px-8 ${theme !== "light" && "border-zinc-800"} `}>
            <div className="grid-flow-col items-center">
                <p>Copyright © 2026 - All rights reserved by Mokhlesur Rahman</p>
            </div>
            <div className="grid-flow-col gap-3 text-xl md:place-self-center md:justify-self-end">
                <a target="_blank" rel="noreferrer" href="mailto:mokhlesurinfo5@gmail.com" aria-label="Email"><Icon icon="octicon:mail-16" /></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/mdmokhlesur" aria-label="GitHub"><Icon icon="fa-brands:github" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mokhlesurrahman018/" aria-label="LinkedIn"><Icon icon="fa-brands:linkedin" /></a>
            </div>
        </footer>
    );
};

export default Footer;
