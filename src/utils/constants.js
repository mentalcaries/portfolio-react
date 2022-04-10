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
import email from '../images/email.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import htmlicon from '../images/html96.png';
import cssicon from '../images/css96.png';
import nodeicon from '../images/node96.png';
import reacticon from '../images/react96.png';
import mongoicon from '../images/mongo96.png';
import gcloudicon from '../images/gcloud96.png';
import herokuicon from '../images/heroku96.png';

const aboutMe = [
  "Hi, I'm Devin, a Full Stack Engineer who's thrilled by the endless possibilities that come with code!",
  "Despite my initial apprehension, my knack for problem solving led me to dip my toes in programming, and I've had no regrets since. I can safely say this journey had been equally fun and challenging, and has pushed me to keep learning as much as I can",
  'I come from a background in healthcare where the small stuff matters; attention to detail is always key, whether it comes to clinical practice or writing code.',
]

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
    desc: `A single page application that allows users to search for news articles by keyword. It also features user registration and login.`,
    tech: [reacticon, nodeicon, mongoicon, gcloudicon],
    frontend: 'https://github.com/mentalcaries/news-explorer-frontend',
    backend: 'https://github.com/mentalcaries/news-explorer-backend',
  },
  {
    key: 101,
    url: 'https://mentalcaries.students.nomoreparties.site',
    image: around,
    title: 'Around the US',
    desc: `A full stack photo gallery app that allows users add, delete or like
  photos, with user registration and login`,
  tech: [reacticon, nodeicon, mongoicon, gcloudicon],
    frontend:
      'https://github.com/mentalcaries/react-around-api-full/tree/main/frontend',
    backend:
      'https://github.com/mentalcaries/react-around-api-full/tree/main/backend',
  },
  {
    key: 102,
    url: 'https://peaceful-woodland-39661.herokuapp.com/',
    image: dotcot,
    title: 'DotCot',
    desc: `DotCot is a platform designed to match startups with potential investors. Investors can share a link with founders who can then create their pitch.`,
    tech: [reacticon, nodeicon, mongoicon, herokuicon],
  },
  {
    key: 103,
    url: 'https://mentalcaries.github.io/code-jam-july-landing/index.html',
    image: elise,
    title: 'Elise Bouer - Portfolio',
    desc: `This Portfolio presents a clean, modern and responsive landing page coded in pure HTML and CSS. Submitted for Practicum's July 2021 Code Jam for team overReact !`,
    tech: [htmlicon, cssicon],
    frontend: 'https://github.com/mentalcaries/code-jam-july-landing',
  },
];

const contacts = [
  {
    name: 'Email',
    url: 'mailto:devjaggernauth@gmail.com',
    icon: email,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/devin-jaggernauth',
    icon: linkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/mentalcaries',
    icon: github,
  },
];

export {aboutMe, iconArray, projectCards, contacts};
