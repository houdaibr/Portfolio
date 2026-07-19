import React from "react";

function ProjectItem({ title, bullets, tech, link }) {
  return (
    <div className="project-item">
      <div className="project-item-body">
        <h3 className="project-item-title">{title}</h3>
        <ul className="project-bullets">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <div className="project-tech-line">
          {tech.map((t, i) => (
            <span className="project-tech-tag" key={i}>
              {t}
            </span>
          ))}
        </div>
        {link && (
          <div className="project-links">
            <a href={link} target="_blank" rel="noreferrer" className="project-link">
              View on GitHub →
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectItem;
