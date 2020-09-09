import React from 'react';
import splashImg from '../img/humberBridge.jpg';

const Header = () => {
  const dragDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="main">
      <header className="header">
        <img
          src={splashImg}
          alt='The underneath of a long bridge at dusk. "Humber bridge" by vikwaters is licensed under CC BY-ND 2.0.'
          className="splash"
        />
        <div className="titles">
          <h1 className="title">Roan Lill-Bovill</h1>
          <h2 className="title">Full stack developer</h2>
        </div>
        <h2 className="viewMyWork" onClick={dragDown}>
          View my work
        </h2>
      </header>
    </div>
  );
};

export default Header;
