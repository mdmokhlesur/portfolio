import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import useTheme from "../../hooks/useTheme";

const Navbar = () => {
    const [isSticky, setSticky] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { pathname, hash } = useLocation();
    const isHomePage = pathname === "/";
    const isAllWorkPage = pathname.startsWith("/my-work");
    const scrollStart = () => {
        setSticky(window.scrollY > 105);
    }
    useEffect(()=>{
        window.addEventListener('scroll', scrollStart);
        return () => window.removeEventListener('scroll', scrollStart);
    },[])

    const navLink = <>
        <li>
            <NavLink to='/' end className={isHomePage && !hash ? "active" : ""}>
                <Icon className="text-lg" icon="octicon:home-16" />
                <span>Home</span>
            </NavLink>
        </li>
        <li>
            <Link to="/#my-work" className={isHomePage && hash === "#my-work" ? "active" : ""}>
                <Icon className="text-lg" icon="octicon:project-16" />
                <span>Projects</span>
            </Link>
        </li>
        <li>
            <Link to="/#skills" className={isHomePage && hash === "#skills" ? "active" : ""}>
                <Icon className="text-lg" icon="octicon:code-square-16" />
                <span>Skills</span>
            </Link>
        </li>
        <li>
            <Link to="/#contract" className={isHomePage && hash === "#contract" ? "active" : ""}>
                <Icon className="text-lg" icon="octicon:mail-16" />
                <span>Contact</span>
            </Link>
        </li>
        <li>
            <NavLink to='/my-work' className={isAllWorkPage ? "active" : ""}>
                <Icon className="text-lg" icon="octicon:repo-16" />
                <span>All Work</span>
            </NavLink>
        </li>
    </>
    return (
        <header className={`site-nav github-header sticky top-0 z-40 border-b ${isSticky ? "is-sticky" : ""} ${theme !== 'light' ? 'border-zinc-800' : 'border-zinc-200'}`}>
            <div className="github-topbar flex items-center justify-between gap-3 px-4 py-2 md:px-6">
                <div className="flex min-w-0 items-center gap-3">
                    <Link to='/' className="github-brand flex min-w-0 items-center gap-3">
                        <img className="nav-brand-avatar" src="/circle-profile.png" alt="Mokhlesur Rahman" />
                        <span className="truncate text-sm font-semibold">mokhlesur-rahman</span>
                    </Link>
                </div>

                <div className="flex items-center gap-2">
                    <label className="theme-toggle github-icon-button swap swap-rotate">
                        <input onChange={toggleTheme} type="checkbox" defaultChecked={theme === 'forest'} />
                        <Icon className="swap-on h-5 w-5" icon="heroicons-outline:sun" />
                        <Icon className="swap-off h-5 w-5" icon="heroicons-outline:moon" />
                    </label>
                </div>
            </div>
            <div className="github-tabs px-2 md:px-4">
                <ul className="menu menu-horizontal flex-nowrap gap-1 overflow-x-auto text-sm font-semibold">
                    {navLink}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
