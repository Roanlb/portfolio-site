import traleImg1 from '../img/trAle/trAleDemo.png';
import traleImg2 from '../img/trAle/trAleDemo2.png';
import traleImg3 from '../img/trAle/trAleDemo3.png';
import traleImg4 from '../img/trAle/trAleDemo4.png';
import traleImg5 from '../img/trAle/trAleDemo5.png';
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
    longDescription:
      'This is the product of my last few weeks at Northcoders where me and a group of students were tasked with creating something relatively independently. We discussed ideas, spiked technologies and settled on an ale trail mobile app built with Ionic React. In the app, users can view a list of trails, select a trail, and then view the trail and pubs along it on a Google Map, and check in to each pub when their geolocation is nearby. When the user taps a pub, information about the pub is displayed. As the user checks into the pubs on a certain trail, their profile is updated with the progress and this can be seen as a progress bar on the profile page. The progress of multiple trails can be stored and displayed on a profile at one time, which can have a profile picture and username. \n \nThis application can be served and run locally by git cloning the GitHub repo and running npm start.',
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
    longDescription:
      "This is my individual front end project for Northcoders. We were tasked with creating a reddit-style news website which could present the articles and comments which were stored in the database and served with the API that we had created previously. In this website, users can see a list of all articles, specify a topic, upvote articles, and click on an article's headline to see the main text and comments. The user can also post their own comments and upvote others' comments. \n \nA hosted version of this site can be visited at: ",
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
    hostedVersion: 'https://roanlb-ncnews.netlify.app/',
  },
  {
    id: 2,
    name: 'NC News Back End',
    shortDescription:
      'A reddit-style news aggregation website including ability to vote on, post, and delete comments',
    longDescription:
      'This was my individual back end project for Northcoders. We were tasked with taking data in JSON format and storing it in a relational database, and then creating a REST API which served data from this database. The user can fetch data for articles, a single article, the comments of an article, and a user. The /api/articles endpoint can accept queries of author, topic, sort_by and order. The /api/articles/:article_id/comments endpoint can accept queries of sort_by and order. The /api endpoint provides a full list of all endpoints and requests available, including PATCH, DELETE and POST requests.\n \nA hosted version of this app can be visited at: ',
    builtWith: 'Node.js, Express, Postgres, Knex',
    gitHubLink: 'https://github.com/Roanlb/nc_news_be',
    images: [
      { src: beImg1, alt: '' },
      { src: beImg2, alt: '' },
      { src: beImg3, alt: '' },
      { src: beImg4, alt: '' },
    ],
    hostedVersion: 'https://roanncnewsserver.herokuapp.com/api',
  },
  {
    id: 3,
    name: 'Blackjack',
    shortDescription:
      'A virtual version of blackjack that can be played in the browser',
    longDescription:
      'This was a paired project during my time in Northcoders. We were tasked over three days to create a game app within React. Me and my partner decided on a virtual version of blackjack. Betting is not supported, but the user can enter their name, deal and then choose to hit or stand, with victory, push or defeat declared. \n \nThis application can be served and run locally by git cloning the GitHub repo and running npm start.',
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
    longDescription:
      'This was the result of a tech test I completed for a job application. I was given data about oceanography datasets and tasked with creating a page which served this data. I had been learning PHP in my own time before this and wanted to gain experience with other technologies so decided to use PHP and a CSS preprocessor for the first time. The user can click the description header to see a description for a dataset, and can also reorder the datasets by date modified or temporal with a selector.\n \nThis application can be served and run locally by git cloning the GitHub repo and running php -S localhost:9090.',
    builtWith: 'PHP, Javascript, LESS, LESS watch compiler',
    gitHubLink: 'https://github.com/Roanlb/Ayko-test',
    images: [
      { src: oceanImg1, alt: '' },
      { src: oceanImg2, alt: '' },
      { src: oceanImg3, alt: '' },
    ],
  },
];

export default projectData;
