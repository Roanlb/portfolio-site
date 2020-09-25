import React, { Component } from 'react';
import triangleRight from '../img/circle-arrow-right-2.svg';
import triangleLeft from '../img/circle-arrow-left-2.svg';

function imageLoaded() {
  return getImage().complete;
}

function getImage() {
  const image = document.getElementById('currentProjectImage');
  return image;
}

class ImageViewer extends Component {
  state = { selection: 0, loadingPicture: false, height: null };

  renderSpinner = () => {
    if (this.state.loadingPicture) {
      return (
        <div
          className="imageLoading"
          style={{ height: `${this.state.height}px` }}
        >
          <h4>Loading</h4>
        </div>
      );
    } else {
      return null;
    }
  };

  componentDidMount() {
    !this.state.height && this.setState({ height: getImage().offsetHeight });
  }

  renderImage = () => {
    return (
      <img
        id="currentProjectImage"
        src={this.props.images[this.state.selection].src}
        alt="A screenshot of an application (change)"
        className="projectImage"
        onLoad={this.handleLoadChange}
        style={
          this.state.loadingPicture
            ? { display: 'none' }
            : { display: 'inline-block' }
        }
      />
    );
  };

  handleLoadChange = () => {
    this.setState({
      loadingPicture: !imageLoaded(),
    });
  };

  changeRight = () => {
    if (this.state.selection + 1 < this.props.images.length) {
      this.setState((currentState) => {
        return { selection: currentState.selection + 1, loadingPicture: true };
      });
    }
  };

  changeLeft = () => {
    if (this.state.selection - 1 >= 0) {
      this.setState((currentState) => {
        return { selection: currentState.selection - 1, loadingPicture: true };
      });
    }
  };

  render() {
    return (
      <>
        <div className="ImageViewer">
          {this.renderSpinner()}
          {this.renderImage()}
          <img
            src={triangleRight}
            alt="a triangle pointing right"
            className={
              this.state.selection === this.props.images.length - 1
                ? 'rightArrow obsoleteIcon'
                : 'rightArrow'
            }
            onClick={this.changeRight}
          />
          <img
            src={triangleLeft}
            alt="a triangle pointing left"
            className={
              this.state.selection === 0
                ? 'leftArrow obsoleteIcon'
                : 'leftArrow'
            }
            onClick={this.changeLeft}
          />
        </div>
      </>
    );
  }
}

export default ImageViewer;
