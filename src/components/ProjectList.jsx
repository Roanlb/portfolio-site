import React, { Component } from 'react';
import BigProject from './BigProject';
import ProjectCard from './ProjectCard';
import projectData from '../projectData/projectData';

//make a mini database in a separate file, put all the projects in, import the object of projects in, refer to as necessary

class ProjectList extends Component {
  state = { projectId: '' };

  handleChange = ({ target: { id } }) => {
    if (this.state.projectId !== id) {
      this.setState({ projectId: id });
    }
  };

  render() {
    console.log(this.state.projectId, 'state');
    return (
      <>
        <h2>Projects</h2>
        <div className="boxes">
          {projectData.map((project, index) => {
            console.log(project.shortDescription);
            return (
              <React.Fragment key={project.id}>
                {index % 2 === 0 && <div className="break"></div>}
                {this.state.projectId === '' && (
                  <ProjectCard
                    project={project}
                    // id={index}
                    // name={project.name}
                    // shortDescription={project.shortDescription}
                    // builtWith={project.builtWith}
                    // gitHubLink={project.gitHubLink}
                    // mainImage={project.mainImage}
                    handleChange={this.handleChange}
                  />
                )}
                {this.state.projectId === index && <BigProject id={index} />}
              </React.Fragment>
            );
          })}
        </div>
        {this.state.projectId && (
          <BigProject project={projectData[this.state.projectId]} />
        )}
      </>
    );
  }
}

export default ProjectList;
