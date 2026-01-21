import { Typewriter } from "react-simple-typewriter";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useTheme from "../../../hooks/useTheme";

const Slider = () => {
    const { theme } = useTheme();
    return (
        <div id="home" data-aos="slide-up">
            <div className="xl:mt-24">
                <SectionTitle logo="heroicons-outline:home" title="Introduction" />
            </div>
            <h4 className="mb-5 font-light uppercase">Welcome</h4>
            <h1 className={`header_text text-3xl sm:text-4xl md:text-5xl mb-5 font-light ${theme !== "light" && "text-white"}`}>Hello! {"I'm"} <br className="sm:hidden"/> Mokhlesur Rahman <br className="hidden md:block" />
                <span className="text-red-700 block">
                    <Typewriter
                        words={['a Backend Developer.','a Frontend Developer.', 'a Full Stack Developer.','a MERN Stack Developer.']}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={40}
                        deleteSpeed={40}
                        delaySpeed={1500}
                    />
                </span>
            </h1>
            <p data-aos="fade-up" className="mt-6 font-light xl:w-2/3 md:w-[80%]">{"I'm always eager to connect and bring your web development ideas to life. I'm also open to hearing your positive feedback."}</p>
        </div>
    );
};

export default Slider;