import React, { Component } from 'react';
import triangle from '../img/triangle 1.svg';

class ImageViewer extends Component {
  state = { selection: 0 };
  changeRight = () => {
    this.state.selection + 1 < this.props.images.length &&
      this.setState((currentState) => {
        return { selection: currentState.selection + 1 };
      });
  };
  changeLeft = () => {
    this.state.selection - 1 >= 0 &&
      this.setState((currentState) => {
        return { selection: currentState.selection - 1 };
      });
  };
  render() {
    return (
      <>
        <div className="ImageViewer">
          <img
            src={this.props.images[this.state.selection].src}
            alt="A screenshot of an application (change)"
            className="projectImage"
          />
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
