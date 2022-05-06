import React, { useEffect, useState } from "react";
import { DiCssdeck } from "react-icons/di";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, openModal } from "../../store/store";
import Modal from "./Modal";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.theme);

  const modalOpen = useSelector((state) => state.theme.modalOpen);

  return (
    <div className={classes.header}>
      <div
        className={`${classes.nav_container} ${
          theme === "dark_mode" ? classes.nav_dark : classes.nav_light
        } `}
      >
        <nav className={`container ${classes.nav}`}>
          <div className={classes.logo}>
            <DiCssdeck fontSize="40px" />
            <p>Portfolio</p>
          </div>

          <ul className={classes.list}>
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>

            <li>
              <img
                src={
                  theme === "dark_mode"
                    ? "/assets/icon-sun.svg"
                    : "/assets/icon-moon.svg"
                }
                alt={theme}
                onClick={() => dispatch(toggleTheme())}
              />
            </li>
          </ul>

          <GiHamburgerMenu
            fontSize="35px"
            className={classes.toggler}
            onClick={() => dispatch(openModal())}
          />
        </nav>
      </div>

      {modalOpen && <Modal />}
    </div>
  );
};

export default Header;
