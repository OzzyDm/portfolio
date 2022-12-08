import classes from "./projects.module.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={classes.container} id="pro">
      <h2 className={classes.title} data-aos="fade-up">
        Projects
      </h2>
      <div className={classes.projects}>
        <div className={classes.project} data-aos="fade-up">
          <img className={classes.image} src="images/header.jpg"></img>
          <h3 className={classes.h3}>Portfolio Page</h3>
          <p className={classes.desc}>
            lorem lf;dksa;las asdlkflasdkf ajskldfjas jflasdkfj lasdkfj
            lsadkfjlaksd jlafdksjlkj
          </p>
          <div className={classes.info}>
            <p>React Next.js</p>
            <a
              href="https://github.com/OzzyDm/portfolio"
              target="_blank"
              className={classes.git}
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={classes.project} data-aos="fade-up">
          <img className={classes.image} src="images/header.jpg"></img>
          <h3 className={classes.h3}>Yelp Camp</h3>
          <p className={classes.desc}>
            lorem lf;dksa;las asdlkflasdkf ajskldfjas jflasdkfj lasdkfj
            lsadkfjlaksd jlafdksjlkj
          </p>
          <div className={classes.info}>
            <p>Node.js Express MongoDB</p>
            <a
              href="https://github.com/OzzyDm/YelpCamp"
              target="_blank"
              className={classes.git}
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={classes.project} data-aos="fade-up">
          <img className={classes.image} src="images/header.jpg"></img>
          <h3 className={classes.h3}>WeatherApp</h3>
          <p className={classes.desc}>
            lorem lf;dksa;las asdlkflasdkf ajskldfjas jflasdkfj lasdkfj
            lsadkfjlaksd jlafdksjlkj
          </p>
          <div className={classes.info}>
            <p>Express Node.js</p>
            <a
              href="https://github.com/OzzyDm/WeatherApp"
              target="_blank"
              className={classes.git}
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={classes.project} data-aos="fade-up">
          <img className={classes.image} src="images/header.jpg"></img>
          <h3 className={classes.h3}>Expense Tracker</h3>
          <p className={classes.desc}>
            lorem lf;dksa;las asdlkflasdkf ajskldfjas jflasdkfj lasdkfj
            lsadkfjlaksd jlafdksjlkj
          </p>
          <div className={classes.info}>
            <p>React</p>
            <a
              href="https://github.com/OzzyDm/expense-tracker"
              target="_blank"
              className={classes.git}
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={classes.project} data-aos="fade-up">
          <img className={classes.image} src="images/header.jpg"></img>
          <h3 className={classes.h3}>Food Order</h3>
          <p className={classes.desc}>
            lorem lf;dksa;las asdlkflasdkf ajskldfjas jflasdkfj lasdkfj
            lsadkfjlaksd jlafdksjlkj
          </p>
          <div className={classes.info}>
            <p>React Firebase</p>
            <a
              href="https://github.com/OzzyDm/food-order-app"
              target="_blank"
              className={classes.git}
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={classes.project} data-aos="fade-up">
          <img className={classes.image} src="images/header.jpg"></img>
          <h3 className={classes.h3}>Quotes</h3>
          <p className={classes.desc}>
            lorem lf;dksa;las asdlkflasdkf ajskldfjas jflasdkfj lasdkfj
            lsadkfjlaksd jlafdksjlkj
          </p>
          <div className={classes.info}>
            <p>React Firebase</p>
            <a
              href="https://github.com/OzzyDm/quotes-react-app"
              target="_blank"
              className={classes.git}
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={classes.project} data-aos="fade-up">
          <img className={classes.image} src="images/header.jpg"></img>
          <h3 className={classes.h3}>Meeting App</h3>
          <p className={classes.desc}>
            lorem lf;dksa;las asdlkflasdkf ajskldfjas jflasdkfj lasdkfj
            lsadkfjlaksd jlafdksjlkj
          </p>
          <div className={classes.info}>
            <p>React Next.js MongoDB</p>
            <a
              href="https://github.com/OzzyDm/nextjs-meeting-app"
              target="_blank"
              className={classes.git}
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={classes.project} data-aos="fade-up">
          <img className={classes.image} src="images/header.jpg"></img>
          <h3 className={classes.h3}>Natural Tours Page</h3>
          <p className={classes.desc}>
            lorem lf;dksa;las asdlkflasdkf ajskldfjas jflasdkfj lasdkfj
            lsadkfjlaksd jlafdksjlkj
          </p>
          <div className={classes.info}>
            <p>Sass</p>
            <a
              href="https://github.com/OzzyDm/natural-tours-page"
              target="_blank"
              className={classes.git}
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={classes.project} data-aos="fade-up">
          <img className={classes.image} src="images/header.jpg"></img>
          <h3 className={classes.h3}>Trillo Booking Page</h3>
          <p className={classes.desc}>
            lorem lf;dksa;las asdlkflasdkf ajskldfjas jflasdkfj lasdkfj
            lsadkfjlaksd jlafdksjlkj
          </p>
          <div className={classes.info}>
            <p>Sass</p>
            <a
              href="https://github.com/OzzyDm/trillo-booking-page"
              target="_blank"
              className={classes.git}
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={classes.project} data-aos="fade-up">
          <img className={classes.image} src="images/header.jpg"></img>
          <h3 className={classes.h3}>Nexter Page</h3>
          <p className={classes.desc}>
            lorem lf;dksa;las asdlkflasdkf ajskldfjas jflasdkfj lasdkfj
            lsadkfjlaksd jlafdksjlkj
          </p>
          <div className={classes.info}>
            <p>Sass</p>
            <a
              href="https://github.com/OzzyDm/nexter-page"
              target="_blank"
              className={classes.git}
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={classes.project} data-aos="fade-up">
          <img className={classes.image} src="images/header.jpg"></img>
          <h3 className={classes.h3}>Twitter Home Page Clone</h3>
          <p className={classes.desc}>
            lorem lf;dksa;las asdlkflasdkf ajskldfjas jflasdkfj lasdkfj
            lsadkfjlaksd jlafdksjlkj
          </p>
          <div className={classes.info}>
            <p>Html Css</p>
            <a
              href="https://github.com/OzzyDm/Twitter-homepage-clone"
              target="_blank"
              className={classes.git}
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
