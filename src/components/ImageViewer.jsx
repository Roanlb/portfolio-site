import React, { Component } from 'react';
import triangle from '../img/triangle 1.svg';

function imageLoaded() {
  const image = document.getElementById('currentProjectImage');
  return image.complete;
}

class ImageViewer extends Component {
  state = { selection: 0, loadingPicture: true };

  renderSpinner = () => {
    if (this.state.loadingPicture) {
      return <h4>Loading</h4>;
    } else {
      return null;
    }
  };

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
            src={triangle}
            alt="a triangle pointing right"
            className={
              this.state.selection === this.props.images.length - 1
                ? 'rightArrow obsoleteIcon'
                : 'rightArrow'
            }
            onClick={this.changeRight}
          />
          <img
            src={triangle}
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
