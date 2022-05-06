import React from "react";
import { BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { useSelector } from "react-redux";
import classes from "./Footer.module.css";

const Footer = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className="container">
      <div className={classes.footer}>
        <div className={classes.icons}>
          <a
            href="https://github.com/davidemioma?tab=repositories"
            target="_blank"
          >
            <BsGithub
              fontSize="30px"
              color={theme === "dark_mode" ? "#fff" : "black"}
            />
          </a>

          <a
            href={
              "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=davidemiomauche@gmail.com"
            }
            target="_blank"
          >
            <SiGmail
              fontSize="30px"
              color={theme === "dark_mode" ? "#fff" : "black"}
            />
          </a>
        </div>

        <p>© Emioma Uche David 2021</p>
      </div>
    </div>
  );
};

export default Footer;
