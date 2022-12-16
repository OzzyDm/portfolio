import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import classes from "./contact.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.MAIL_SERVICE,
        process.env.MAIL_TEMPLATE,
        form.current,
        process.env.MAIL_KEY
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

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="fade-up" id="contact">
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
            required
          />
          <label htmlFor="email" className={classes.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            className={classes.input}
            name="user_email"
            required
          />
          <label htmlFor="message" className={classes.label}>
            Message
          </label>
          <textarea
            id="message"
            className={classes.input}
            rows="5"
            name="message"
            required
          />
          <button className={classes.btn} type="submit" value="Send">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
