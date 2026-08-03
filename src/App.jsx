import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import CursorEffect from "./Components/CursorEffect/CursorEffect";
import Aos from "aos";
import { useEffect } from "react";

function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const timeoutId = window.setTimeout(() => {
      const target = document.querySelector(hash);

      if (target) {
        const navOffset = 112;
        const targetTop =
          target.getBoundingClientRect().top + window.scrollY - navOffset;

        window.scrollTo({
          top: targetTop,
          left: 0,
          behavior: "smooth",
        });
      }
    }, 80);

    return () => window.clearTimeout(timeoutId);
  }, [pathname, hash]);

  return (
    <div className="portfolio-app flex min-h-screen flex-col">
      <CursorEffect />
      <Navbar />
      <main className="w-full">
        <Outlet />
      </main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
