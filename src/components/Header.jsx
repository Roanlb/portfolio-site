import React from 'react';
import splashImg from '../img/humberBridge.jpg';
import whiteChevron from '../img/white chevron.svg';

const Header = () => {
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
        <img
          className="chevron"
          height="40px"
          width="40px"
          src={whiteChevron}
          alt="a white chevron pointing down"
        />
      </header>
    </div>
  );
};

export default Header;
