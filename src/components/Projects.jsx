import { PROJECTSSHOWN } from "../shared/projectsShown";
import { PROJECTSEXPAND } from "../shared/projectsExpand";
import { useState, useRef, useTransition } from "react";

export function Projects({ isMobile, isDesktop }) {
  const [currentHovered, setCurrentHovered] = useState(undefined);
  const [projectDataShown] = useState(PROJECTSSHOWN);
  const [projectDataExpand] = useState(PROJECTSEXPAND);
  const [isExpandShown, setIsExpandShown] = useState(false);
  const projectSection = useRef(null);
  const handleHide = () => {
    setIsExpandShown(false);
    window.location.replace("/#project-shown");
  };

  const handleShown = () => {
    setIsExpandShown(true);
    window.location.replace("/#project-expand");
  };

  return (
    <div className="projects" ref={projectSection}>
      {isMobile && <hr className="projects-hr" />}
      <div className="projects-header">
        <h2 className="projects-header-title">Projects</h2>
        <button
          className="contact-me"
          onClick={() => window.location.replace("/#contact")}
        >
          contact me
        </button>
      </div>
      <div className="projects-wrapper" id="project-shown">
        <div className="projects-shown">
          {projectDataShown.map((data, i) => (
            <div
              key={i}
              className="project-card"
              onMouseLeave={() =>
                setTimeout(() => setCurrentHovered(undefined), 100)
              }
            >
              <img
                onMouseEnter={() => setTimeout(() => setCurrentHovered(i), 100)}
                className="project-thumbnail"
                src={data.thumbnail}
                alt="project thumbnail"
              />
              <div className="project-name-stack-wrapper">
                <div className="project-name">{data.name}</div>
                <div className="project-stacks">
                  {data.stacks.map((stack) => (
                    <span key={stack} className="project-stack-item">
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className={
                  isDesktop && i === currentHovered
                    ? "project-desktop"
                    : !isDesktop
                    ? "project-link"
                    : "hidden"
                }
              >
                <span className="project-link-item">
                  <a href={data.webLink} target="_blank" rel="noreferrer">
                    View Project
                  </a>
                </span>

                <span className="project-link-item code-link">
                  <a href={data.codeLink} target="_blank" rel="noreferrer">
                    View Code
                  </a>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div
          className={isExpandShown ? "projects-expand" : "hidden"}
          id="project-expand"
        >
          {projectDataExpand.map((data, i) => (
            <div
              key={data.name}
              className="project-card"
              onMouseLeave={() =>
                setTimeout(() => setCurrentHovered(undefined), 100)
              }
            >
              <img
                onMouseEnter={() => setTimeout(() => setCurrentHovered(i), 100)}
                className="project-thumbnail"
                src={data.thumbnail}
                alt="project thumbnail"
              />
              <div className="project-name-stack-wrapper">
                <div className="project-name">{data.name}</div>
                <div className="project-stacks">
                  {data.stacks.map((stack) => (
                    <span key={stack} className="project-stack-item">
                      {stack}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={
                  isDesktop && i === currentHovered
                    ? "project-desktop"
                    : !isDesktop
                    ? "project-link"
                    : "hidden"
                }
              >
                <span className="project-link-item">
                  <a href={data.webLink} target="_blank" rel="noreferrer">
                    View Project
                  </a>
                </span>
                <span className="project-link-item code-link">
                  <a href={data.codeLink} target="_blank" rel="noreferrer">
                    View Code
                  </a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="expand-button-wrapper">
        {!isExpandShown ? (
          <button
            onClick={handleShown}
            className={isExpandShown ? "hidden" : "expand-button"}
            style={{ textDecorationColor: isDesktop ? "#4EE1A0" : "white" }}
          >
            Expand All
          </button>
        ) : (
          <button
            onClick={handleHide}
            className={isExpandShown ? "expand-button" : "hidden"}
          >
            hide
          </button>
        )}
      </div>
    </div>
  );
}
