import { Fragment } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import classes from "./footer.module.css";

function Footer() {
  return (
    <Fragment>
      <div className={classes.social}>
        <a
          href="https://www.instagram.com/oguzhan.demiraslan/"
          target="_blank"
          className={classes.icon}
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/oguzhan-demiraslan-27481625a/"
          target="_blank"
          className={classes.icon}
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/OzzyDm"
          target="_blank"
          className={classes.icon}
          aria-label="Github"
        >
          <FaGithub />
        </a>
      </div>
      <div className={classes.copy}>Copyright &copy; Oguzhan Demiraslan</div>
    </Fragment>
  );
}

export default Footer;
