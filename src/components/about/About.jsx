import React from "react";
import { useSelector } from "react-redux";
import classes from "./About.module.css";

const About = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div id="about" className="container">
      <div className={classes.about}>
        <h1>About Me</h1>

        <p>
          During my journey as a web developer, I've worked remotely for
          agencies, partnered with other web developers to create digital
          products, and i'm actively working on improving my skills. Here are
          some of the technologies I work with:
        </p>

        <ul
          className={`${
            theme === "dark_mode" ? classes.tools_dark : classes.tools_light
          }`}
        >
          <li>React Js</li>

          <li>Next Js</li>

          <li>Node Js</li>

          <li>Firebase</li>

          <li>Redux</li>

          <li>Graph Ql</li>

          <li>Commerce Js</li>

          <li>Sanity Io</li>

          <li>Socket Io</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
