import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import classes from "./contact.module.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bn9fn63",
        "template_kgwfcc4",
        form.current,
        "nE6I8Phy5ESFTX6wp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <h2 className={classes.title}>Contact Me</h2>
      <div className={classes.container}>
        <form ref={form} onSubmit={sendEmail} className={classes.form}>
          <label htmlFor="name" className={classes.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            className={classes.input}
            name="user_name"
          />
          <label htmlFor="email" className={classes.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={classes.input}
            name="user_email"
          />
          <label htmlFor="name" className={classes.label}>
            Message
          </label>
          <textarea className={classes.input} rows="5" name="message" />
          <button className={classes.btn} type="submit" value="Send">
            Send Message
          </button>
        </form>
      </div>
    </div>
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
  );
};

export default Contact;
