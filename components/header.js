import { Fragment } from "react";
import classes from "./header.module.css";
import Layout from "./layout";

function Header() {
  return (
    <Fragment>
      <Layout />
      <div className={classes.header}>
        <div className={classes.name}>
          <h1 className={classes.hello}>Hello!</h1>
          <h2 className={classes.first}>I'm Oguzhan Demiraslan.</h2>
          <h2 className={classes.second}>I'm a front-end web developer.</h2>
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
