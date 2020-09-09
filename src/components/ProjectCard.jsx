import React from 'react';
// import projectData from '../projectData/projectData';

const ProjectCard = ({ project, handleChange }) => {
  return (
    <div className="box">
      <h4>{project.name}</h4>
      <p>{project.shortDescription}</p>
      <img
        className="cardImg"
        src={project.images[0].src}
        alt={project.images[0].alt}
      />
      <div className="cardFlex">
        <a href={project.gitHubLink}>
          <img
            src="https://camo.githubusercontent.com/7710b43d0476b6f6d4b4b2865e35c108f69991f3/68747470733a2f2f7777772e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6f637469636f6e732f313032342f6d61726b2d6769746875622d3235362e706e67"
            alt="GitHub logo"
            className="icon2"
          />
        </a>
        <h4 id={project.id} onClick={handleChange}>
          More
        </h4>
      </div>
    </div>
  );
};

export default ProjectCard;
