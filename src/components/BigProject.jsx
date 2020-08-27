import React, { Component } from 'react';
import ImageViewer from './ImageViewer';
// import projectData from '../projectData/projectData';

class BigProject extends Component {
  render() {
    const project = this.props.project;

    console.log(project.id, 'id in bigproject');
    console.log(project.images[0], 'main image in big project');

    return (
      <div className="singleBox">
        <h4>{project.name}</h4>
        <ImageViewer images={project.images} />
        <p>{project.longDescription}</p>
      </div>
    );
  }
}

export default BigProject;
