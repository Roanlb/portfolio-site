import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import ProjectList from './ProjectList';

//put a view my work button that scrolls down

//extract out some more components

class MainPage extends Component {
  render() {
    const aboutRef = React.createRef();
    console.log(aboutRef, 'ref');
    return (
      <>
        <Header aboutRef={aboutRef} />
        <About aboutRef={aboutRef} />
        <ProjectList />
      </>
    );
  }
}

export default MainPage;
