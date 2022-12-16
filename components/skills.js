import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import classes from "./skills.module.css";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.container} id="skills">
      <h2 className={classes.title} data-aos="fade-up">
        Skills
      </h2>
      <div className={classes.skills}>
        <div className={classes.center}>
          <img
            src="images/html.png"
            data-aos="fade-up"
            className={classes.logo}
            alt="html logo"
          />
          <p className={classes.name}>HTML5</p>
        </div>
        <div className={classes.center}>
          <img
            src="images/css.png"
            data-aos="fade-up"
            className={classes.logo}
            alt="css logo"
          />
          <p className={classes.name}>CSS</p>
        </div>
        <div className={classes.center}>
          <img
            src="images/js.png"
            data-aos="fade-up"
            className={classes.logo}
            alt="javascript logo"
          />
          <p className={classes.name}>JavaScript</p>
        </div>
        <div className={classes.center}>
          <img
            src="images/react.png"
            data-aos="fade-up"
            className={classes.logo}
            alt="react logo"
          />
          <p className={classes.name}>React</p>
        </div>
        <div className={classes.center}>
          <img
            src="images/nextjs.png"
            data-aos="fade-up"
            className={classes.logo}
            alt="nextjs logo"
          />
          <p className={classes.name}>Next.js</p>
        </div>
        <div className={classes.center}>
          <img
            src="images/sass.png"
            data-aos="fade-up"
            className={classes.logo}
            alt="sass logo"
          />
          <p className={classes.name}>Sass</p>
        </div>
        <div className={classes.center}>
          <img
            src="images/node.png"
            data-aos="fade-up"
            className={classes.logo}
            alt="nodejs logo"
          />
          <p className={classes.name}>Node.js</p>
        </div>
        <div className={classes.center}>
          <img
            src="images/mongo.png"
            data-aos="fade-up"
            className={classes.logo}
            alt="mongodb logo"
          />
          <p className={classes.name}>MongoDB</p>
        </div>
        <div className={classes.center}>
          <img
            src="images/git.png"
            data-aos="fade-up"
            className={classes.logo}
            alt="git logo"
          />
          <p className={classes.name}>git</p>
        </div>
        <div className={classes.center}>
          <img
            src="images/Expressjs.png"
            data-aos="fade-up"
            className={classes.express}
            alt="express logo"
          />
          <p className={classes.name}>Express</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
