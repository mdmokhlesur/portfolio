import { Icon } from "@iconify/react";
import Button from "../../../Components/Button/Button";

const Slider = () => {
    return (
        <div id="home" className="hero-copy readme-panel" data-aos="fade-up">
            <p className="readme-label mb-4"><Icon icon="octicon:location-16" /> Mokhlesur Rahman / Dhaka, Bangladesh</p>
            <h1 className="hero-title header_text">
                Frontend Developer | Building Modern Web Applications
            </h1>
            <p data-aos="fade-up" className="hero-summary">
                I have 2+ years of professional experience with React, Next.js, TypeScript, and Electron.js. I build reusable UI components, integrate REST APIs, and improve application performance for product teams.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#my-work">
                    <Button className="px-6" size="wide">
                        View Projects <Icon className="text-lg" icon="octicon:project-16" />
                    </Button>
                </a>
                <a href="#contract" className="secondary-button inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold">
                    Contact Me <Icon className="text-lg" icon="octicon:mail-16" />
                </a>
            </div>
        </div>
    );
};

export default Slider;
