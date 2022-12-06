import { Fragment } from "react";
import Contact from "../components/contact";
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
    </Fragment>
  );
}

export default HomePage;
