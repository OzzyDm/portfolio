import { Fragment } from "react";
import Header from "../components/header";
import Projects from "../components/projects";
import Skills from "../components/skills";

function HomePage() {
  return (
    <Fragment>
      <Header />
      <Skills />
      <Projects />
    </Fragment>
  );
}

export default HomePage;
