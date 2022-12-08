import classes from "./layout.module.css";
import { FaHome } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

function Layout() {
  return (
    <nav className={classes.nav}>
      <a className={classes.link} href="#home">
        <FaHome className={classes.icon} /> Home
      </a>
      <a className={classes.link} href="#skills">
        <FaTools className={classes.icon} />
        Skills
      </a>
      <a className={classes.link} href="#projects">
        <FaLaptopCode className={classes.icon} />
        Projects
      </a>
      <a className={classes.link} href="#contact">
        <FaPhone className={classes.icon} />
        Contact Me
      </a>
    </nav>
  );
}

export default Layout;
