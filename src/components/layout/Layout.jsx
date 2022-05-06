import React from "react";
import { useSelector } from "react-redux";

import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={classes.header}>
      <div
        className={`${classes.children} ${
          theme === "dark_mode" ? "bg_dark" : "bg_light"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
