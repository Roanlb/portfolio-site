import React from 'react';

const About = React.forwardRef((ref) => (
  <section ref={ref}>
    <p className="credit">
      "Humber bridge" by vikwaters is licensed under CC BY-ND 2.0.
    </p>
    <h2>About</h2>
    <h3>
      I am a full stack web developer currently living in Hull, graduated from
      the Northcoders web development bootcamp in 2020.
    </h3>
    <p className="about">
      I graduated from the University of Leeds in 2018 with a BA in Politics and
      Quantitative Research Methods. After working in retail and pension
      administration, and having enjoyed programming in Stata for data analysis,
      I attended Northcoders to gain further understanding of programming and
      enter into a tech career.
      <br /> <br />
      I created several projects at Northcoders and have continued learning and
      creating afterwards. I am now looking to find my first role in web
      development. My favourite front end framework is React, which was used to
      create this page. I am also confident in styling with CSS3 and have used
      LESS. Since graduating Northcoders I have learned PHP and some Java.{' '}
      <br /> <br />I have experience with both MySQL and PostgreSQL, which I
      used to create a REST API along with Node.js and Express. I helped to
      create a hybrid mobile app using Ionic React.
    </p>
    <div className="smallBoxes">
      <div className="smallBox">
        <a href="https://github.com/Roanlb">
          <p>GitHub</p>
          <img
            src="https://camo.githubusercontent.com/7710b43d0476b6f6d4b4b2865e35c108f69991f3/68747470733a2f2f7777772e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6f637469636f6e732f313032342f6d61726b2d6769746875622d3235362e706e67"
            alt=" logo"
            className="icon2"
          />
        </a>
      </div>
      <div className="smallBox">
        <a href="https://www.linkedin.com/in/roan-lill-bovill-8b29a21a1/?originalSubdomain=uk">
          <p>LinkedIn</p>
          <img
            src="https://cdn2.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png"
            alt="LinkedIn logo"
            className="icon"
          />
        </a>
      </div>
    </div>
  </section>
));

export default About;
