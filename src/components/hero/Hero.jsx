import React from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className="container">
      <div className={classes.hero}>
        <h1>Welcome to my personal portfolio</h1>

        <p>
          Hey there, I'm Emioma Uche David. I've been working in the field of
          web development for about three years and I am still in the process of
          gaining more experience through more years. I am passionate about web
          design and I love to build websites with a good user interface. Also,
          I handle customers in a friend-like manner keeping myself
          professional.
        </p>

        <button className="btn_link">
          <a
            href={
              "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=davidemiomauche@gmail.com"
            }
            target="_blank"
          >
            Contact Me
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
