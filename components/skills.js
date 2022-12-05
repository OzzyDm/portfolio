import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import classes from "./skills.module.css";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.container}>
      <h2 className={classes.title} data-aos="fade-up">
        Skills
      </h2>
      <div className={classes.skills}>
        <img
          src="images/html.png"
          data-aos="fade-up"
          className={classes.logo}
        />
        <img src="images/css.png" data-aos="fade-up" className={classes.logo} />
        <img src="images/js.png" data-aos="fade-up" className={classes.logo} />
        <img
          src="images/react.png"
          data-aos="fade-up"
          className={classes.logo}
        />
        <img
          src="images/nextjs.png"
          data-aos="fade-up"
          className={classes.logo}
        />
        <img
          src="images/sass.png"
          data-aos="fade-up"
          className={classes.logo}
        />
        <img
          src="images/node.png"
          data-aos="fade-up"
          className={classes.logo}
        />
        <img
          src="images/mongo.png"
          data-aos="fade-up"
          className={classes.logo}
        />
        <img
          src="images/Expressjs.png"
          data-aos="fade-up"
          className={classes.logo}
        />
        <img src="images/git.png" data-aos="fade-up" className={classes.logo} />
      </div>
    </div>
  );
}

export default Skills;
