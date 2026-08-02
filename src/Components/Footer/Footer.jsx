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
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mokhlesurRahman018/"><Icon icon="fa-brands:linkedin" /></a>
                <a target="_blank" rel="noreferrer" href="https://t.me/pmrahman"><Icon icon="fa-brands:telegram" /></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/pm-rahman"><Icon icon="fa-brands:github" /></a>
                <a target="_blank" rel="noreferrer" href="https://web.facebook.com/pm.mokhles"><Icon icon="fa-brands:facebook-square" /></a>
            </div>
        </footer>
    );
};

export default Footer;
