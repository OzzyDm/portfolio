import classes from "./header.module.css";

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.name}>
        <h1>
          Hello! <br></br>{" "}
          <span className={classes.first}>I'm Oguzhan Demiraslan</span>.
        </h1>
      </div>
    </div>
  );
}

export default Header;
