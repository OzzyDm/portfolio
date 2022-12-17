import classes from "./projects.module.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={classes.container} id="projects">
      <h2 className={classes.title} data-aos="fade-up">
        Projects
      </h2>
      <div className={classes.projects}>
        <div className={classes.project} data-aos="fade-up">
          <a
            href="https://github.com/OzzyDm/portfolio"
            target="_blank"
            aria-label="Project page"
          >
            <img
              className={classes.image}
              src="images/port.png"
              alt="project image"
            ></img>
          </a>
          <h3 className={classes.h3}>Portfolio Page</h3>
          <p className={classes.desc}>
            This is my portfolio website. You can find more information about
            me, my projects and more. React and Next.js were used.
          </p>
          <div className={classes.info}>
            <p className={classes.tools}>React Next.js</p>
            <a
              href="https://github.com/OzzyDm/portfolio"
              target="_blank"
              className={classes.git}
              aria-label="Github code page"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={classes.project} data-aos="fade-up">
          <a
            href="https://github.com/OzzyDm/YelpCamp"
            target="_blank"
            aria-label="Github code page"
          >
            <img
              className={classes.image}
              src="images/yelp.png"
              alt="project image"
            ></img>
          </a>
          <h3 className={classes.h3}>Yelp Camp</h3>
          <p className={classes.desc}>
            Fully functional NodeJs web app - Allows users to view, post,
            comment on campgrounds worldwide. I used Express and MongoDB for
            this project.
          </p>
          <div className={classes.info}>
            <p className={classes.tools}>Node.js Express MongoDB</p>
            <a
              href="https://github.com/OzzyDm/YelpCamp"
              target="_blank"
              className={classes.git}
              aria-label="Github code page"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={classes.project} data-aos="fade-up">
          <a
            href="https://weatherapp-production-a338.up.railway.app/"
            target="_blank"
            aria-label="Project page"
          >
            <img
              className={classes.image}
              src="images/weather.png"
              alt="project image"
            ></img>
          </a>
          <h3 className={classes.h3}>WeatherApp</h3>
          <p className={classes.desc}>
            An app in which you can get real-time weather information of
            searched locations. Built with Express.
          </p>
          <div className={classes.info}>
            <p className={classes.tools}>Express Node.js</p>
            <div>
              <a
                href="https://weatherapp-production-a338.up.railway.app/"
                target="_blank"
                className={classes.link}
                aria-label="Project page"
              >
                <FaExternalLinkAlt />
              </a>
              <a
                href="https://github.com/OzzyDm/WeatherApp"
                target="_blank"
                className={classes.git}
                aria-label="Github code page"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className={classes.project} data-aos="fade-up">
          <a
            href="https://glittery-pastelito-947428.netlify.app/"
            target="_blank"
            aria-label="Project page"
          >
            <img
              className={classes.image}
              src="images/expense.png"
              alt="project image"
            ></img>
          </a>
          <h3 className={classes.h3}>Expense Tracker</h3>
          <p className={classes.desc}>
            An Expense Tracker app in which you can log your expenses. You can
            see and filter your expenses by year. React was used for this
            project.
          </p>
          <div className={classes.info}>
            <p className={classes.tools}>React</p>
            <div>
              <a
                href="https://glittery-pastelito-947428.netlify.app/"
                target="_blank"
                className={classes.link}
                aria-label="Project page"
              >
                <FaExternalLinkAlt />
              </a>
              <a
                href="https://github.com/OzzyDm/expense-tracker"
                target="_blank"
                className={classes.git}
                aria-label="Github code page"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className={classes.project} data-aos="fade-up">
          <a
            href="https://starlit-entremet-ffb434.netlify.app/"
            target="_blank"
            aria-label="Project page"
          >
            <img
              className={classes.image}
              src="images/foodapp.png"
              alt="project image"
            ></img>
          </a>
          <h3 className={classes.h3}>Food Order App</h3>
          <p className={classes.desc}>
            A Food Ordering App where you can add items to your cart. The cart
            will update itself automatically. I used React and Firebase for this
            project.
          </p>
          <div className={classes.info}>
            <p className={classes.tools}>React Firebase</p>
            <div>
              <a
                href="https://starlit-entremet-ffb434.netlify.app/"
                target="_blank"
                className={classes.link}
                aria-label="Project page"
              >
                <FaExternalLinkAlt />
              </a>
              <a
                href="https://github.com/OzzyDm/food-order-app"
                target="_blank"
                className={classes.git}
                aria-label="Github code page"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className={classes.project} data-aos="fade-up">
          <a
            href="https://roaring-kitsune-ee4b68.netlify.app/"
            target="_blank"
            aria-label="Project page"
          >
            <img
              className={classes.image}
              src="images/quotes.png"
              alt="project image"
            ></img>
          </a>
          <h3 className={classes.h3}>Quotes</h3>
          <p className={classes.desc}>
            A Quotes app that you can add new quotes and comment to the existing
            ones. Quotes can be viewed invidually. I used React and Firebase for
            this project.
          </p>
          <div className={classes.info}>
            <p className={classes.tools}>React Firebase</p>
            <div>
              <a
                href="https://roaring-kitsune-ee4b68.netlify.app/"
                target="_blank"
                className={classes.link}
                aria-label="Project page"
              >
                <FaExternalLinkAlt />
              </a>
              <a
                href="https://github.com/OzzyDm/quotes-react-app"
                target="_blank"
                className={classes.git}
                aria-label="Github code page"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className={classes.project} data-aos="fade-up">
          <a
            href="https://github.com/OzzyDm/nextjs-meeting-app"
            target="_blank"
          >
            <img
              className={classes.image}
              src="images/meeting.png"
              alt="project image"
            ></img>
          </a>
          <h3 className={classes.h3}>Meeting App</h3>
          <p className={classes.desc}>
            A Meetups app where you can add meetups. You can see the details of
            meetups on their individual pages. Next.js and MongoDB were used.
          </p>
          <div className={classes.info}>
            <p className={classes.tools}>React Next.js MongoDB</p>
            <a
              href="https://github.com/OzzyDm/nextjs-meeting-app"
              target="_blank"
              className={classes.git}
              aria-label="Github code page"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={classes.project} data-aos="fade-up">
          <a
            href="https://profound-dango-b6e469.netlify.app/"
            target="_blank"
            aria-label="Project page"
          >
            <img
              className={classes.image}
              src="images/natours.png"
              alt="project image"
            ></img>
          </a>
          <h3 className={classes.h3}>Natural Tours Page</h3>
          <p className={classes.desc}>
            A page where you can find natural tours. Built with Sass. No
            JavaScript has been used for this project and the links lead to
            nowhere.
          </p>
          <div className={classes.info}>
            <p className={classes.tools}>Sass</p>
            <div>
              <a
                href="https://profound-dango-b6e469.netlify.app/"
                target="_blank"
                className={classes.link}
                aria-label="Project page"
              >
                <FaExternalLinkAlt />
              </a>
              <a
                href="https://github.com/OzzyDm/natural-tours-page"
                target="_blank"
                className={classes.git}
                aria-label="Github code page"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className={classes.project} data-aos="fade-up">
          <a
            href="https://creative-gelato-5dbd5e.netlify.app/"
            target="_blank"
            aria-label="Project page"
          >
            <img
              className={classes.image}
              src="images/trillo.png"
              alt="project image"
            ></img>
          </a>
          <h3 className={classes.h3}>Trillo Booking Page</h3>
          <p className={classes.desc}>
            A page where you can find hotels. Built with Sass. No JavaScript has
            been used for this project and the links lead to nowhere.
          </p>
          <div className={classes.info}>
            <p className={classes.tools}>Sass</p>
            <div>
              <a
                href="https://creative-gelato-5dbd5e.netlify.app/"
                target="_blank"
                className={classes.link}
                aria-label="Project page"
              >
                <FaExternalLinkAlt />
              </a>
              <a
                href="https://github.com/OzzyDm/trillo-booking-page"
                target="_blank"
                className={classes.git}
                aria-label="Github code page"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className={classes.project} data-aos="fade-up">
          <a
            href="https://jazzy-strudel-e94da6.netlify.app/"
            target="_blank"
            aria-label="Project page"
          >
            <img
              className={classes.image}
              src="images/nexter.png"
              alt="project image"
            ></img>
          </a>
          <h3 className={classes.h3}>Nexter Page</h3>
          <p className={classes.desc}>
            A page where you can find your dream home. Built with Sass. No
            JavaScript has been used for this project and the links lead to
            nowhere.
          </p>
          <div className={classes.info}>
            <p className={classes.tools}>Sass</p>
            <div>
              <a
                href="https://jazzy-strudel-e94da6.netlify.app/"
                target="_blank"
                className={classes.link}
                aria-label="Project page"
              >
                <FaExternalLinkAlt />
              </a>
              <a
                href="https://github.com/OzzyDm/nexter-page"
                target="_blank"
                className={classes.git}
                aria-label="Github code page"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className={classes.project} data-aos="fade-up">
          <a
            href="https://github.com/OzzyDm/Twitter-homepage-clone"
            target="_blank"
          >
            <img
              className={classes.image}
              src="images/twitter.png"
              alt="project image"
            ></img>
          </a>
          <h3 className={classes.h3}>Twitter Home Page Clone</h3>
          <p className={classes.desc}>
            Twitter homepage clone - to practice HTML/CSS.
          </p>
          <div className={classes.info}>
            <p className={classes.tools}>Html Css</p>
            <a
              href="https://github.com/OzzyDm/Twitter-homepage-clone"
              target="_blank"
              className={classes.git}
              aria-label="Github code page"
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
