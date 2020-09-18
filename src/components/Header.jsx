import React, { Component } from 'react';
import whiteChevron from '../img/white chevron.svg';

class Header extends Component {
  state = {
    isLoading: true,
  };

  handleLoadChange = () => {
    this.state.isLoading && this.setState({ isLoading: false });
  };

  render() {
    return (
      <>
        {this.state.isLoading && (
          <div className="loading">
            <h1>Loading</h1>
          </div>
        )}
        <header
          className="header"
          onLoad={this.handleLoadChange}
          style={
            this.state.isLoading ? { display: 'none' } : { display: 'grid' }
          }
        >
          <div className="titles">
            <h1 className="title">Roan Lill-Bovill</h1>
            <h2 className="title">Full stack developer</h2>
          </div>
          <img
            className="chevron"
            height="40px"
            width="40px"
            src={whiteChevron}
            alt="a white chevron pointing down"
          />
        </header>
      </>
    );
  }
}
export default Header;
