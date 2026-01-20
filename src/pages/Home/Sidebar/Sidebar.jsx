import { Icon } from "@iconify/react";
import profile from "../../../assets/profile.jpg"
import useTheme from "../../../hooks/useTheme";
// import SideNav from "../sideNav/SideNav";
import SideNav from "../SideNav/SideNav"
import Button from "../../../Components/Button/Button";
const Sidebar = () => {
    const { theme } = useTheme();
    return (
        <div id="slideBar" className="xl:sticky top-32 z-20 left-0">
            <div className={`border relative rounded box-border p-10 w-[100%] md:w-[80%] lg:w-[70%] xl:w-[370px] xl:mr-auto xl:ml-0 mr-auto ml-auto ${theme !== 'light' && 'border-zinc-600'}`}>
                <figure className=" rounded overflow-hidden"><img src={profile} alt="" /></figure>
                <div className="mt-6">
                    <h3 className={`${theme !== "light" && "text-white"}  text-xl sm:text-2xl capitalize`}>Mokhlesur Rahman</h3>
                    <h4 className="sm:text-base font-mono flex items-center gap-1"><Icon className="mt-1 text-base w-5" icon="fa-solid:envelope" /> mokhlesurinfo5@gmail.com</h4>
                    <h4 className=" text-sm sm:text-base font-mono flex items-center gap-1"><Icon className="text-lg w-5" icon="heroicons-outline:phone" />+8801818886577</h4>
                    <h4 className=" text-sm sm:text-base font-mono flex items-center gap-1"><Icon className="text-lg w-5" icon="heroicons-outline:location-marker" />Dhaka,Bangladesh</h4>
                    <a href="Mokhlesur-Rahman-resume.pdf" download="Mokhlesur-Rahman-resume.pdf">
                        <Button className="mt-3" size="full"><Icon icon="fa-solid:download" /> Download CV</Button>
                    </a>
                </div>
                <SideNav />
            </div>
        </div>
    );
};

export default Sidebar;