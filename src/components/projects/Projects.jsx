import React from "react";
import { useSelector } from "react-redux";
import { projects } from "../../constants";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import classes from "./Projects.module.css";

const Projects = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div id="projects" className="container">
      <div className={classes.projects}>
        <h1>Projects</h1>

        <div className={classes.list}>
          {projects.map((project) => (
            <div key={project.id} className={classes.project}>
              <img
                className={
                  theme === "dark_mode" ? classes.bd_dark : classes.bd_light
                }
                src={project.image}
                alt=""
              />

              <div className={classes.info}>
                <h2>{project.title}</h2>

                <h3 className={classes.desc}>{project.description}</h3>

                <div className={classes.tags}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`${
                        theme === "dark_mode"
                          ? classes.tag_dark
                          : classes.tag_light
                      } ${classes.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={classes.icons}>
                  <a href={project.github} target="_blank">
                    <BsGithub
                      fontSize="27px"
                      className={
                        theme === "dark_mode"
                          ? classes.icon_dark
                          : classes.icon_light
                      }
                    />
                  </a>

                  <a href={project.liveSite} target="_blank">
                    <FaExternalLinkAlt
                      fontSize="27px"
                      className={
                        theme === "dark_mode"
                          ? classes.icon_dark
                          : classes.icon_light
                      }
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={classes.btns}>
          <button className="btn_link">
            <a
              href="https://github.com/davidemioma?tab=repositories"
              target="_blank"
            >
              More Projects...
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
