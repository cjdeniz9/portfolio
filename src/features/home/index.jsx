import About from "./components/About";
import Footer from "./components/Footer";
import GradientBg from "./components/GradientBg";
import Heading from "./components/Heading";
import Projects from "./components/Projects";
import Stars from "./components/Stars";
import TechnicalSkills from "./components/TechnicalSkills";

export default function Index() {
  return (
    <>
      <div className="w-full">
        <div className="flex justify-center">
          <div className="absolute z-0 top-0">
            <GradientBg />
          </div>
          <div className="xl:absolute xl:block hidden z-10 top-0">
            <Stars />
          </div>
          <Heading />
        </div>
      </div>
      <div className="md:h-64 h-48 bg-gradient-to-b from-black-50 to-grey-50" />
      <div className="w-full bg-grey-50">
        <div className="flex justify-center mb-20">
          <About />
        </div>
        <div className="flex justify-center mb-20">
          <TechnicalSkills />
        </div>
        <div className="flex justify-center mb-10">
          <Projects />
        </div>
        <div className="flex justify-center pb-7">
          <Footer />
        </div>
      </div>
    </>
  );
}
