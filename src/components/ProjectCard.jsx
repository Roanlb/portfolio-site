import React, { Component } from 'react';

class ProjectCard extends Component {
  state = {
    imageLoading: true,
  };

  handleLoadChange = () => {
    const cardImage = document.getElementById('cardImageElement');
    this.setState({ imageLoading: !cardImage.complete });
  };

  render() {
    const project = this.props.project;

    return (
      <div className="box">
        <h3>{project.name}</h3>
        <p>{project.shortDescription}</p>
        <p className="builtWith">Built with: {project.builtWith}</p>
        {this.state.imageLoading && <h4>Loading</h4>}
        <img
          id="cardImageElement"
          className="cardImg"
          src={project.images[0].src}
          alt={project.images[0].alt}
          onLoad={this.handleLoadChange}
        />
        <div className="cardFlex">
          <a href={project.gitHubLink}>
            <button>
              <img
                src="https://camo.githubusercontent.com/7710b43d0476b6f6d4b4b2865e35c108f69991f3/68747470733a2f2f7777772e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6f637469636f6e732f313032342f6d61726b2d6769746875622d3235362e706e67"
                alt="GitHub logo"
                className="icon2"
              />
            </button>
          </a>
          <button onClick={this.props.handleChange} id={project.id}>
            <h4 id={project.id}>More</h4>
          </button>
        </div>
      </div>
    );
  }
}
export default ProjectCard;
