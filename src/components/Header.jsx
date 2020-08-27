import React from 'react';
import splashImg from '../img/humberBridge.jpg';

const Header = () => {
  return (
    <div className="main">
      <div className="header">
        <img
          src={splashImg}
          alt='The underneath of a long bridge at dusk. "Humber bridge" by vikwaters is licensed under CC BY-ND 2.0.'
          className="splash"
        />
        <div className="titles">
          <h1 className="title">Roan Lill-Bovill</h1>
          <h2 className="title">Full stack developer</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
