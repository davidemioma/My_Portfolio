import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div id="contact" className={`container ${classes.container}`}>
      <div className={classes.contact}>
        <h1>Get In Touch</h1>

        <h2>Feel free to reach out if you have any question</h2>

        <button className="btn_link">
          <a
            href={
              "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=davidemiomauche@gmail.com"
            }
            target="_blank"
          >
            Contact
          </a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
