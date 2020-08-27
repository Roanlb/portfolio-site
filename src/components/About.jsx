import React from 'react';

const About = () => {
  return (
    <>
      <p>"Humber bridge" by vikwaters is licensed under CC BY-ND 2.0.</p>
      <h2>About</h2>
      <h3>
        I am a software developer currently living in Hull, graduated from the
        Northcoders web development bootcamp in 2020.
      </h3>
      <p className="about">
        Dwayne Douglas Johnson (born May 2, 1972), also known by his ring name
        the Rock, is an American-Canadian[6] actor, producer, businessman,
        retired professional wrestler,[7] and former American football
        player.[6] He wrestled for the World Wrestling Federation (WWF, now WWE)
        for eight years prior to pursuing an acting career. His films have
        grossed over $3.5 billion in North America and over $10.5 billion
        worldwide,[8] making him one of the highest-grossing actors of all
        time.[9] Johnson was a college football player for the University of
        Miami, with whom he won a national championship in 1991. He initially
        aspired for a professional career in football and entered the 1995 NFL
        Draft, but went undrafted. As a result, he signed with the Calgary
        Stampeders of the Canadian Football League (CFL), but was cut from the
        team in the middle of his first season. Shortly after, he began training
        as a professional wrestler.[10] In 1996, Johnson secured a contract with
        the WWF and was promoted as the first third-generation wrestler in the
        company's history, as he is the son of Rocky Johnson and grandson of
        Peter Maivia.[2] He rose to prominence after developing a charismatic
        persona of a boastful, trash-talking wrestler named the Rock. He
        subsequently won his first WWF Championship in 1998 and helped usher the
        WWF into the "Attitude Era", a boom period in the company's business in
        the late 1990s and early 2000s which still holds professional wrestling
        records for television ratings.[11] In 2004, he left the WWE to pursue
        an acting career. He returned in 2011 as a part-time performer until
        2013, and made sporadic appearances from then until fully retiring in
        2019.[12]
      </p>
      <div className="boxes">
        <div className="smallBox">
          <a href="https://github.com/Roanlb">
            <p>GitHub</p>
            <img
              src="https://camo.githubusercontent.com/7710b43d0476b6f6d4b4b2865e35c108f69991f3/68747470733a2f2f7777772e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6f637469636f6e732f313032342f6d61726b2d6769746875622d3235362e706e67"
              alt="GitHub logo"
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
    </>
  );
};

export default About;
