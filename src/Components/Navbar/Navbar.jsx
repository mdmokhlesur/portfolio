import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import useTheme from "../../hooks/useTheme";

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const [isNavShow, setIsNavShow] = useState(false);
    const scrollStart = () => {
        setSticky(window.scrollY > 105);
    }
    useEffect(()=>{
        window.addEventListener('scroll', scrollStart);
        return () => window.removeEventListener('scroll', scrollStart);
    },[])

    const navLink = <>
        <li><NavLink to='/'><Icon className="text-lg" icon="heroicons-outline:home" /><span>Home</span></NavLink></li>
        <li><a href="/#my-work"><Icon className="text-lg" icon="fa-solid:project-diagram" /><span>Projects</span></a></li>
        <li><a href="/#skills"><Icon className="text-lg" icon="fa-solid:user-cog" /><span>Skills</span></a></li>
        <li><a href="/#contract"><Icon className="text-lg" icon="fa-regular:envelope" /><span>Contact</span></a></li>
        <li><NavLink to='/my-work'><Icon className="text-lg" icon="fa-regular:chart-bar" /><span>All Works</span></NavLink></li>
    </>
    return (
        <header className={`site-nav sticky top-0 z-40 border-b backdrop-blur-xl ${isSticky ? "is-sticky" : ""} ${theme !== 'light' ? 'border-zinc-800' : 'border-zinc-200'}`}>
            <div className="site-container mx-auto flex items-center justify-between gap-3 px-4 py-3 md:px-8">
                <div className="flex min-w-0 items-center gap-3">
                    <Link to='/' className="flex min-w-0 items-center gap-3">
                        <span className="brand-mark grid h-10 w-10 place-items-center rounded-md text-sm font-bold">MR</span>
                        <span className="truncate text-sm font-semibold uppercase">Mokhlesur</span>
                    </Link>
                </div>

                <div className="flex items-center gap-2">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal gap-1 text-xs font-semibold uppercase">
                            {navLink}
                        </ul>
                    </div>
                    <label className="theme-toggle swap swap-rotate rounded-md border border-zinc-200 p-2">
                        <input onChange={toggleTheme} type="checkbox" defaultChecked={theme === 'forest'} />
                        <Icon className="swap-on h-5 w-5" icon="heroicons-outline:sun" />
                        <Icon className="swap-off h-5 w-5" icon="heroicons-outline:moon" />
                    </label>
                    <div className="relative lg:hidden">
                        <button onClick={() => setIsNavShow(!isNavShow)} className="mobile-menu-button" type="button" aria-label="Toggle navigation">
                            <Icon className="text-2xl" icon="heroicons-outline:menu-alt-2" />
                        </button>
                        <ul className={`mobile-menu absolute right-0 top-12 duration-300 ease-out ${isNavShow ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-4 opacity-0"} menu menu-sm z-[1] w-56 rounded-md border border-zinc-200 bg-base-100 p-2`}>
                            {navLink}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
