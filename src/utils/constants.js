import javascript from '../images/js.png';
import react from '../images/react.png';
import html from '../images/html5.png';
import css from '../images/css3.png';
import express from '../images/expressjs.png';
import git from '../images/git.png';
import mongo from '../images/mongo.png';
import node from '../images/node.png';
import figma from '../images/figma.png';
import sql from '../images/sql.png';
import newsxp from '../images/newsxp.png';
import around from '../images/around.png';
import dotcot from '../images/dotcot.png';
import elise from '../images/elise.png';

const iconArray = [
  {name: 'Javascript', icon: javascript},
  {name: 'React', icon: react},
  {name: 'Node', icon: node},
  {name: 'Express', icon: express},
  {name: 'MongoDB', icon: mongo},
  {name: 'SQL', icon: sql},
  {name: 'Git', icon: git},
  {name: 'HTML', icon: html},
  {name: 'CSS', icon: css},
  {name: 'Figma', icon: figma},
];

const projectCards = [
  {
    key: 100,
    url: 'https://newsxp.students.nomoreparties.sbs/',
    image: newsxp,
    title: 'News Explorer',
    desc: `A single page application that allows users to search for news articles by keyword. It also features registration and login, which facilitates saving of articles, plus authentication and session management using JWT's.`,
    tech: 'React | Node | MongoDB | Google Cloud',
    frontend: 'https://github.com/mentalcaries/news-explorer-frontend',
    backend: 'https://github.com/mentalcaries/news-explorer-backend'
  },
  {
    key: 101,
    url: 'https://mentalcaries.students.nomoreparties.site',
    image: around,
    title: 'Around the US',
    desc: `A full stack photo gallery app that allows users add, delete or like
  photos . Registration and authentication handled on the back end with
  photos and users being saved to a Mongo database`,
    tech: 'React | Node | MongoDB | Google Cloud',
    frontend: 'https://github.com/mentalcaries/react-around-api-full/tree/main/frontend',
    backend: 'https://github.com/mentalcaries/react-around-api-full/tree/main/backend'
  },
  {
    key: 102,
    url: 'https://peaceful-woodland-39661.herokuapp.com/',
    image: dotcot,
    title: 'DotCot',
    desc: `DotCot is a platform designed to match startups with potential investors. Investors can share a link with founders who can then create their pitch, and later have the option of filtering startups based on desired parameters`,
    tech: 'React | Node | MongoDB | Heroku',
    
  },
  {
    key: 103,
    url: 'https://mentalcaries.students.nomoreparties.site',
    image: elise,
    title: 'Portfolio Page - Elise',
    desc: `This project presents a clean and modern landing page coded in pure HTML and CSS, and features responsive behaviour down to mobile sizes. Created for Practicum's code Jam in July 2021, this was codedsubmitted in 24 hours`,
    tech: 'HTML | CSS',
    frontend: 'https://github.com/mentalcaries/code-jam-july-landing',
  },
];

export { iconArray, projectCards };
