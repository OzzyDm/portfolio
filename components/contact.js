import classes from "./contact.module.css";

function Contact() {
  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <div>
      <h2 className={classes.title}>Contact Me</h2>
      <div className={classes.container}>
        <form className={classes.form}>
          <label htmlFor="name" className={classes.label}>
            Name
          </label>
          <input type="text" id="name" className={classes.input} />
          <label htmlFor="email" className={classes.label}>
            Email
          </label>
          <input type="email" id="email" className={classes.input} />
          <label htmlFor="name" className={classes.label}>
            Message
          </label>
          <textarea className={classes.input}></textarea>
          <button className={classes.btn} onClick={submitHandler}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
