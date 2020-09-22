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
          <div className="cardFlex">
            <a href={project.gitHubLink}>
              <img
                src="https://camo.githubusercontent.com/7710b43d0476b6f6d4b4b2865e35c108f69991f3/68747470733a2f2f7777772e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6f637469636f6e732f313032342f6d61726b2d6769746875622d3235362e706e67"
                alt="GitHub logo"
                className="icon2"
              />
            </a>
            <h4 className="myLink" onClick={this.props.resetStateProject}>
              Less
            </h4>
          </div>
        </section>
      </div>
    );
  }
}

export default BigProject;
