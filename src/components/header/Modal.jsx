import React from "react";
import { DiCssdeck } from "react-icons/di";
import { HiOutlineX } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, closeModal } from "../../store/store";
import classes from "./Modal.module.css";

const Modal = () => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme.theme);

  const modalOpen = useSelector((state) => state.theme.modalOpen);

  return (
    <div
      className={`${classes.modal} ${
        theme === "dark_mode" ? classes.bg_dark : classes.bg_light
      } ${modalOpen ? classes.modal_open : classes.modal_closed}`}
    >
      <div>
        <div className={classes.logo}>
          <DiCssdeck fontSize="40px" />

          <p>Portfolio</p>
        </div>

        <HiOutlineX fontSize="30px" onClick={() => dispatch(closeModal())} />
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
    </div>
  );
};

export default Modal;
