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
    url: 'https://newsxp.students.nomoreparties.sbs/',
    image: newsxp,
    title: 'News Explorer',
    desc: `This is a fully responsive single page application that allows users to search for news articles by keyword. It also features user registration and login, which allows for saving of articles for later reading, plus user authentication and session management using security best practices.`,
    tech: 'React | Node | MongoDB | Google Cloud',
  },
  {
    url: 'https://mentalcaries.students.nomoreparties.site',
    image: around,
    title: 'Around the US',
    desc: `A full stack photo gallery app that allows users add, delete or like
  photos . Registration and authentication handled on the back end with
  photos and users being saved to a Mongo database`,
    tech: 'React | Node | MongoDB | Google Cloud',
  },
  {
    url: 'https://peaceful-woodland-39661.herokuapp.com/',
    image: dotcot,
    title: 'DotCot',
    desc: `A full stack photo gallery app that allows users add, delete or like
  photos . Registration and authentication handled on the back end with
  photos and users being saved to a Mongo database`,
    tech: 'React | Node | MongoDB | Heroku',
  },
  {
    url: 'https://mentalcaries.students.nomoreparties.site',
    image: around,
    title: 'Around the US',
    desc: `A full stack photo gallery app that allows users add, delete or like
  photos . Registration and authentication handled on the back end with
  photos and users being saved to a Mongo database`,
    tech: 'React | Node | MongoDB | Google Cloud',
  },
];

export default {iconArray, projectCards};
