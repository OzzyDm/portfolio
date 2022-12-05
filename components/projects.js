import classes from "./projects.module.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={classes.container}>
      <h2 className={classes.title} data-aos="fade-up">
        Projects
      </h2>
      <div className={classes.projects}>
        <div className={classes.project} data-aos="flip-up">
          <img className={classes.image} src="images/header.jpg"></img>
          <h3 className={classes.h3}>Portfolio Page</h3>
          <p className={classes.desc}>
            lorem lf;dksa;las asdlkflasdkf ajskldfjas jflasdkfj lasdkfj
            lsadkfjlaksd jlafdksjlkj
          </p>
          <div className={classes.info}>
            <p>html css</p>
            <a>git</a>
          </div>
        </div>
        <div className={classes.project} data-aos="flip-up">
          <img className={classes.image} src="images/header.jpg"></img>
          <h3 className={classes.h3}>Yelp Camp</h3>
          <p className={classes.desc}>
            lorem lf;dksa;las asdlkflasdkf ajskldfjas jflasdkfj lasdkfj
            lsadkfjlaksd jlafdksjlkj
          </p>
          <div className={classes.info}>
            <p>html css</p>
            <a>git</a>
          </div>
        </div>
        <div className={classes.project} data-aos="flip-up">
          <img className={classes.image} src="images/header.jpg"></img>
          <h3 className={classes.h3}>WeatherApp</h3>
          <p className={classes.desc}>
            lorem lf;dksa;las asdlkflasdkf ajskldfjas jflasdkfj lasdkfj
            lsadkfjlaksd jlafdksjlkj
          </p>
          <div className={classes.info}>
            <p>html css</p>
            <a>git</a>
          </div>
        </div>
        <div className={classes.project} data-aos="flip-up">
          <img className={classes.image} src="images/header.jpg"></img>
          <h3 className={classes.h3}>Expense Tracker</h3>
          <p className={classes.desc}>
            lorem lf;dksa;las asdlkflasdkf ajskldfjas jflasdkfj lasdkfj
            lsadkfjlaksd jlafdksjlkj
          </p>
          <div className={classes.info}>
            <p>html css</p>
            <a>git</a>
          </div>
        </div>
        <div className={classes.project} data-aos="flip-up">
          <img className={classes.image} src="images/header.jpg"></img>
          <h3 className={classes.h3}>Expense Tracker</h3>
          <p className={classes.desc}>
            lorem lf;dksa;las asdlkflasdkf ajskldfjas jflasdkfj lasdkfj
            lsadkfjlaksd jlafdksjlkj
          </p>
          <div className={classes.info}>
            <p>html css</p>
            <a>git</a>
          </div>
        </div>
        <div className={classes.project} data-aos="flip-up">
          <img className={classes.image} src="images/header.jpg"></img>
          <h3 className={classes.h3}>Food Order</h3>
          <p className={classes.desc}>
            lorem lf;dksa;las asdlkflasdkf ajskldfjas jflasdkfj lasdkfj
            lsadkfjlaksd jlafdksjlkj
          </p>
          <div className={classes.info}>
            <p>html css</p>
            <a>git</a>
          </div>
        </div>
        <div className={classes.project} data-aos="flip-up">
          <img className={classes.image} src="images/header.jpg"></img>
          <h3 className={classes.h3}>Quotes</h3>
          <p className={classes.desc}>
            lorem lf;dksa;las asdlkflasdkf ajskldfjas jflasdkfj lasdkfj
            lsadkfjlaksd jlafdksjlkj
          </p>
          <div className={classes.info}>
            <p>html css</p>
            <a>git</a>
          </div>
        </div>
        <div className={classes.project} data-aos="flip-up">
          <img className={classes.image} src="images/header.jpg"></img>
          <h3 className={classes.h3}>Meeting App</h3>
          <p className={classes.desc}>
            lorem lf;dksa;las asdlkflasdkf ajskldfjas jflasdkfj lasdkfj
            lsadkfjlaksd jlafdksjlkj
          </p>
          <div className={classes.info}>
            <p>html css</p>
            <a>git</a>
          </div>
        </div>
        <div className={classes.project} data-aos="flip-up">
          <img className={classes.image} src="images/header.jpg"></img>
          <h3 className={classes.h3}>Natural Tours Page</h3>
          <p className={classes.desc}>
            lorem lf;dksa;las asdlkflasdkf ajskldfjas jflasdkfj lasdkfj
            lsadkfjlaksd jlafdksjlkj
          </p>
          <div className={classes.info}>
            <p>html css</p>
            <a>git</a>
          </div>
        </div>
        <div className={classes.project} data-aos="flip-up">
          <img className={classes.image} src="images/header.jpg"></img>
          <h3 className={classes.h3}>Trillo Booking Page</h3>
          <p className={classes.desc}>
            lorem lf;dksa;las asdlkflasdkf ajskldfjas jflasdkfj lasdkfj
            lsadkfjlaksd jlafdksjlkj
          </p>
          <div className={classes.info}>
            <p>html css</p>
            <a>git</a>
          </div>
        </div>
        <div className={classes.project} data-aos="flip-up">
          <img className={classes.image} src="images/header.jpg"></img>
          <h3 className={classes.h3}>Nexter Page</h3>
          <p className={classes.desc}>
            lorem lf;dksa;las asdlkflasdkf ajskldfjas jflasdkfj lasdkfj
            lsadkfjlaksd jlafdksjlkj
          </p>
          <div className={classes.info}>
            <p>html css</p>
            <a>git</a>
          </div>
        </div>
        <div className={classes.project} data-aos="flip-up">
          <img className={classes.image} src="images/header.jpg"></img>
          <h3 className={classes.h3}>Twitter Home Page Clone</h3>
          <p className={classes.desc}>
            lorem lf;dksa;las asdlkflasdkf ajskldfjas jflasdkfj lasdkfj
            lsadkfjlaksd jlafdksjlkj
          </p>
          <div className={classes.info}>
            <p>html css</p>
            <a>git</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
