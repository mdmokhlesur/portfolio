import { Icon } from "@iconify/react";
import Button from "../../../Components/Button/Button";

const Slider = () => {
    return (
        <div id="home" className="hero-copy" data-aos="fade-up">
            <p className="eyebrow mb-5">Mokhlesur Rahman / Chattogram, Bangladesh</p>
            <h1 className="hero-title header_text">
                Front-End Developer building modern web and desktop applications.
            </h1>
            <p data-aos="fade-up" className="hero-summary">
                I have 2+ years of professional experience with React, Next.js, TypeScript, and Electron.js. I build reusable UI components, integrate REST APIs, and improve application performance for product teams.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#my-work">
                    <Button className="px-6" size="wide">
                        View Projects <Icon className="text-lg" icon="heroicons-outline:arrow-right" />
                    </Button>
                </a>
                <a href="#contract" className="secondary-button inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold">
                    Contact Me <Icon className="text-lg" icon="fa-regular:envelope" />
                </a>
            </div>
        </div>
    );
};

export default Slider;
