import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./Projects";

const All = () => {
  return (
    <div className="flex-1 p-10 md:p-16 pb-0">
      <div className="flex flex-col gap-28">
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default All;
