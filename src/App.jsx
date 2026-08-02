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
    }
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
