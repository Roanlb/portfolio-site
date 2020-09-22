import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import ProjectList from './ProjectList';

class MainPage extends Component {
  render() {
    return (
      <>
        <Header />
        <About />
        <ProjectList />
      </>
    );
  }
}

export default MainPage;
