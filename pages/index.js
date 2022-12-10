import { Fragment } from "react";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Header from "../components/header";
import Projects from "../components/projects";
import Skills from "../components/skills";

function HomePage() {
  return (
    <Fragment>
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
