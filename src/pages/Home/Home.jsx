import PageTitle from "../../Components/PageTitle/PageTitle";
import AboutMe from "./AboutMe/AboutMe";
import Contract from "./Contract/Contract";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import MyWork from "./MyWork/MyWork";
import Sidebar from "./Sidebar/Sidebar";
import Skills from "./Skills/Skills";
import Slider from "./Slider/Slider";
import Training from "./Training/Training";

const Home = () => {
  return (
    <>
      <PageTitle title="Home" />
      <div className="portfolio-page">
        <div className="site-container portfolio-shell mx-auto grid gap-12 px-4 pb-20 pt-10 md:px-8 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16 lg:pt-16 xl:grid-cols-[360px_minmax(0,1fr)] xl:gap-20">
          <Sidebar />
          <div className="content-column order-2 flex flex-col gap-16 lg:order-2 lg:gap-24">
            <Slider />
            <AboutMe />
            <Experience />
            <Skills />
            <MyWork/>
            <div className="grid gap-12 lg:grid-cols-2">
              <Education />
              <Training />
            </div>
            <Contract />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
