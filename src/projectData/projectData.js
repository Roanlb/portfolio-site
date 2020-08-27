import traleImg1 from '../img/trAle/trAleDemo.png';
import traleImg2 from '../img/trAle/trAleDemo3.png';
import traleImg3 from '../img/trAle/trAleDemo4.png';
import traleImg4 from '../img/trAle/trAleDemo5.png';
import traleImg5 from '../img/trAle/trAleDemo6.png';
import beImg1 from '../img/NC BE/NC BE 1.png';
import beImg2 from '../img/NC BE/NC BE 2.png';
import beImg3 from '../img/NC BE/NC BE 3.png';
import beImg4 from '../img/NC BE/NC BE 4.png';
import feImg1 from '../img/NC FE/NC FE Demo1.png';
import feImg2 from '../img/NC FE/NC FE Demo2.png';
import feImg3 from '../img/NC FE/NC FE Demo3.png';
import feImg4 from '../img/NC FE/NC FE Demo4.png';
import blackjackImg1 from '../img/blackjack/blackjackDemo1.png';
import blackjackImg2 from '../img/blackjack/blackjackDemo2.png';
import blackjackImg3 from '../img/blackjack/blackjackDemo3.png';
import blackjackImg4 from '../img/blackjack/blackjackDemo4.png';
import blackjackImg5 from '../img/blackjack/blackjackDemo5.png';
import blackjackImg6 from '../img/blackjack/blackjackDemo6.png';
import oceanImg1 from '../img/ocean/oceanDemo1.png';
import oceanImg2 from '../img/ocean/oceanDemo2.png';
import oceanImg3 from '../img/ocean/oceanDemo3.png';

const projectData = [
  {
    id: 0,
    name: 'TrAle',
    shortDescription:
      'A hybrid mobile app where users can see ale trails nearby and track their progress along them',
    longDescription: 'pokemon',
    builtWith: 'Ionic React, React Router, Axios, Google Maps Platform, CSS3',
    gitHubLink: 'https://github.com/rapture7777/Trale-FE',
    images: [
      {
        src: traleImg1,
        alt:
          "The TrAle app's map page, showing a Google map, with a route plotted out between three points and an information box appearing above one of them",
      },
      {
        src: traleImg2,
        alt:
          "A trAle profile's in-app page, showing no completed trails and one in progress trail, with a progress bar showing a quarter progress",
      },
      {
        src: traleImg3,
        alt:
          "TrAle's map page, showing a text box saying the user has arrived at the Ship Inn Leeds, with a tick icon over the pub's location",
      },
      {
        src: traleImg4,
        alt:
          "TrAle's map page showing a number of pub's locations shown by markers on Google map",
      },
      {
        src: traleImg5,
        alt:
          "TrAle's trails page, showing a list of ale trails and descriptions. 3 trails are described ",
      },
    ],
  },
  {
    id: 1,
    name: 'NC News Front End',
    shortDescription:
      'A reddit-style news aggregation website including ability to vote on, post, and delete comments',
    longDescription: 'pokemon',
    builtWith: 'React, Reach Router, Axios, CSS3',
    gitHubLink: 'https://github.com/Roanlb/nc_news_fe',
    images: [
      {
        src: feImg1,
        alt:
          'The NC News main page, showing all articles. The nav bar at the top shows links to see stories by topic, while in the area below there is a sort by button and numerous articles each with vote buttons and a link to see all related stories',
      },
      {
        src: feImg2,
        alt:
          "The NC News main page with the sort by selector opened and 'comment count' selected",
      },
      {
        src: feImg3,
        alt:
          "NC News football stories. A headline reads '/football' and football related stories are shown",
      },
      {
        src: feImg4,
        alt:
          "An article page on NC News, showing an article called 'What does Jose Mourinho's handwriting say about his personality?'. The main text is shown below with upvote/downvote buttons. There is a textbox in which to post a comment with a submit button, and comments underneath, each with their own upvote and downvote buttons",
      },
    ],
  },
  {
    id: 2,
    name: 'NC News Back End',
    shortDescription:
      'A reddit-style news aggregation website including ability to vote on, post, and delete comments',
    longDescription: 'pokemon',
    builtWith: 'Node.js, Express, Postgres, Knex',
    gitHubLink: 'https://github.com/Roanlb/nc_news_be',
    images: [
      { src: beImg1, alt: '' },
      { src: beImg2, alt: '' },
      { src: beImg3, alt: '' },
      { src: beImg4, alt: '' },
    ],
  },
  {
    id: 3,
    name: 'Blackjack',
    shortDescription:
      'A virtual version of blackjack that can be played in the browser',
    longDescription: 'pokemon',
    builtWith: 'React, CSS3',
    gitHubLink: 'https://github.com/rapture7777/blackjack',
    images: [
      { src: blackjackImg1, alt: '' },
      { src: blackjackImg2, alt: '' },
      { src: blackjackImg3, alt: '' },
      { src: blackjackImg4, alt: '' },
      { src: blackjackImg5, alt: '' },
      { src: blackjackImg6, alt: '' },
    ],
  },
  {
    id: 4,
    name: 'Oceanography dataset page',
    shortDescription:
      'A simple dynamic webpage listing oceanography data, completed for a tech test',
    longDescription: 'pokemon',
    builtWith: 'PHP, LESS',
    gitHubLink: 'https://github.com/Roanlb/Ayko-test',
    images: [
      { src: oceanImg1, alt: '' },
      { src: oceanImg2, alt: '' },
      { src: oceanImg3, alt: '' },
    ],
  },
];

export default projectData;
