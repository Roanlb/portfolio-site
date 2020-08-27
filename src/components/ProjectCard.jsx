import React from 'react';
// import projectData from '../projectData/projectData';

const ProjectCard = ({ project, handleChange }) => {
  console.log(project, 'project LOOK HERE');
  console.log(handleChange, 'handlechange');

  return (
    <div className="box">
      <h4>{project.name}</h4>
      <p>{project.shortDescription}</p>
      <h4 id={project.id} onClick={handleChange}>
        More
      </h4>
      {/* <img src={project.images[0].src} alt={project.images[0].alt} /> */}
      <a href={project.gitHubLink}>GitHub</a>
    </div>
  );
};

export default ProjectCard;
