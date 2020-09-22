import React, { Component } from 'react';
import ImageViewer from './ImageViewer';

class BigProject extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  scrollToMyRef = () => {
    setTimeout(() => {
      window.scrollTo(0, this.myRef.current.offsetTop);
    }, 2);
  };

  componentDidMount = () => {
    this.scrollToMyRef();
  };

  componentDidUpdate() {
    this.scrollToMyRef();
  }

  render() {
    const project = this.props.project;

    return (
      <div
        className={
          project.name === 'TrAle' ? 'singleBox trAleBox' : 'singleBox'
        }
        ref={this.myRef}
      >
        <h3 className="bigProjectTitle">{project.name}</h3>
        <ImageViewer images={project.images} />
        <section className="projectInfo">
          <p>
            {project.longDescription}
            <a href={project.hostedVersion}>{project.hostedVersion}</a>
          </p>
          <h5>Built with: {project.builtWith}</h5>
          <h4 className="myLink" onClick={this.props.resetStateProject}>
            Less
          </h4>
        </section>
      </div>
    );
  }
}

export default BigProject;
