import React, { Component } from 'react';
import BigProject from './BigProject';
import ProjectCard from './ProjectCard';
import projectData from '../projectData/projectData';

class ProjectList extends Component {
  state = { projectId: '' };

  handleChange = ({ target: { id } }) => {
    if (this.state.projectId !== id) {
      this.setState({ projectId: id });
    }
  };

  resetStateProject = () => {
    if (this.state.projectId !== '') {
      this.setState({ projectId: '' });
    }
  };

  render() {
    return (
      <>
        <h2>Projects</h2>
        {this.state.projectId === '' && (
          <>
            <div className="boxes">
              {projectData.map((project, index) => {
                return (
                  <React.Fragment key={project.id}>
                    {index % 2 === 0 && <div className="break"></div>}
                    <ProjectCard
                      project={project}
                      handleChange={this.handleChange}
                    />
                    {this.state.projectId === index && (
                      <BigProject id={index} />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
            <p className="websiteInfo">
              {"This website's github repo can be found at: "}
              <a href="https://github.com/Roanlb/portfolio-site">
                https://github.com/Roanlb/portfolio-site
              </a>
            </p>
          </>
        )}
        {this.state.projectId && (
          <BigProject
            resetStateProject={this.resetStateProject}
            project={projectData[this.state.projectId]}
          />
        )}
      </>
    );
  }
}

export default ProjectList;
