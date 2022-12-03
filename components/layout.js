import classes from "./layout.module.css";
import { FaHome } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

function Layout() {
  return (
    <nav className={classes.nav}>
      <a className={classes.link}>
        <FaHome className={classes.icon} /> Home
      </a>
      <a className={classes.link}>
        <FaTools className={classes.icon} />
        Skills
      </a>
      <a className={classes.link}>
        <FaLaptopCode className={classes.icon} />
        Projects
      </a>
      <a className={classes.link}>
        <FaPhone className={classes.icon} />
        Contact Me
      </a>
    </nav>
  );
}

export default Layout;
