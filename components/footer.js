import { Fragment } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import classes from "./footer.module.css";

function Footer() {
  return (
    <Fragment>
      <div className={classes.social}>
        <a href="#" className={classes.icon}>
          <FaInstagram />
        </a>
        <a href="#" className={classes.icon}>
          <FaLinkedin />
        </a>
        <a href="#" className={classes.icon}>
          <FaGithub />
        </a>
      </div>
      <div className={classes.copy}>Copyright &copy; Oguzhan Demiraslan</div>
    </Fragment>
  );
}

export default Footer;
