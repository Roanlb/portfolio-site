import React, { Component } from 'react';
import ImageViewer from './ImageViewer';

class BigProject extends Component {
  render() {
    const project = this.props.project;

    return (
      <div
        className={
          project.name === 'TrAle' ? 'singleBox trAleBox' : 'singleBox'
        }
      >
        <ImageViewer images={project.images} />

        <section className="projectInfo">
          <h3>{project.name}</h3>
          <p>
            {project.longDescription}
            <a href={project.hostedVersion}>{project.hostedVersion}</a>
          </p>
          <h5>Built with: {project.builtWith}</h5>
          <h4 onClick={this.props.resetStateProject}>Less</h4>
        </section>
      </div>
    );
  }
}

export default BigProject;
