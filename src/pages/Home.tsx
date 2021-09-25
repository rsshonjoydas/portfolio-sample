import Header from "../components/Header";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Skill from "./Skill";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Skill />
      <Services />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Home;
