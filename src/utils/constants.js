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
// import wtwr from '../images/wtwr.png';
import warehouse from '../images/warehouse.png';
import typescript from '../images/ts.png';
import python from '../images/python.png';
// import railway from '../images/railway.png';
import nextjs from '../images/nextjs.png';
import framer from '../images/framer.png';
import vercel from '../images/vercel.png';
import plantboutique from '../images/pb.png';
import tailwind from '../images/tailwind.svg'
import svelte from '../images/svelte.svg'
import flexFactor from '../images/flexfactor.png'
import essentialDental from '../images/eds.png'
import astro from '../images/astro.svg'
import hygraph from '../images/hygraph.svg'
import netlify from '../images/netlify.svg'

const aboutMe = [
  "Hi, I'm Devin, a Full Stack Engineer who's thrilled by the endless possibilities that come with code!",
  "Despite my initial apprehension, my knack for problem solving led me to dip my toes in programming, and I've had no regrets since. I can safely say this journey had been equally fun and challenging, and has pushed me to keep learning as much as I can.",
  'I come from a background in dentistry where the small stuff matters; attention to detail is always key, whether it comes to clinical practice or writing code.',
];

const iconArray = [
  { name: 'JavaScript', icon: javascript },
  { name: 'React', icon: react },
  { name: 'TypeScript', icon: typescript },
  { name: 'Node', icon: node },
  { name: 'Express', icon: express },
  { name: 'MongoDB', icon: mongo },
  { name: 'SQL', icon: sql },
  { name: 'Python', icon: python },
  { name: 'Git', icon: git },
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css },
  { name: 'Figma', icon: figma },
];

const projectCards = [
  {
    key: 100,
    url: 'https://flex-factor-v2.vercel.app/',
    image: flexFactor,
    title: 'FlexFactor',
    desc: `The ultimate bulking calculator app! Our muscle growth forecasting feature helps you track progress and smash goals like a pro. Get ready to flex with confidence and take your gains game to the next level!`,
    tech: [svelte, tailwind, vercel],
    frontend: 'https://github.com/thinklikeadesigner/FlexFactor-V2'
  },
  {
    key: 101,
    url: 'https://southtrinidaddentist.com/',
    image: essentialDental,
    title: 'Essential Dental Solutions',
    desc: `A clean, modern content-focused landing page for Essential Dental Solutions, private practice focused on personalised patient care. Features integration with Hygraph for content management. `,
    tech: [astro, tailwind, hygraph, netlify],
  },
  {
    key: 102,
    url: 'https://dotcot.onrender.com/welcome',
    image: dotcot,
    title: 'DotCot',
    desc: `DotCot is a platform designed to match startups with potential investors. Investors can share a link with founders who can then create their pitch.`,
    tech: [reacticon, nodeicon, mongoicon],
  },

  {
    key: 106,
    url: 'https://plantboutiquett.com',
    image: plantboutique,
    title: 'The Plant Boutique',
    desc: `An elegant and modern home page for The Plant Boutique, a small business specialised in plant accessories`,
    tech: [typescript, nextjs, framer, vercel],
    repository: 'https://github.com/mentalcaries/plant-boutique-next',
  },
  // {
  //   key: 104,
  //   url: 'https://wtwr-app.up.railway.app/',
  //   image: wtwr,
  //   title: 'WTWR',
  //   desc: `WTWR recommends clothing options for the user based on the current weather and items available in the user's wardrobe.`,
  //   tech: [reacticon, nodeicon, mongoicon, railway],
  //   repository: 'https://github.com/mentalcaries/wtwr-app',
  // },
  {
    key: 105,
    url: 'https://subtle-zabaione-721bc9.netlify.app',
    image: warehouse,
    title: 'Warehouse Manager',
    desc: `Warehouse Inventory Management for looking up product stats by name or SKU, and adjusting quantities at specific locations.`,
    tech: [typescript, reacticon, nodeicon, sql],
    frontend: 'https://github.com/mentalcaries/warehouse-inventory-ts',
    backend: 'https://github.com/mentalcaries/jls-inventory-backend',
  },
  {
    key: 100,
    // url: 'https://newsxpdev.students.nomoredomainssbs.ru/',
    image: newsxp,
    title: 'News Explorer',
    desc: `A single page application that allows users to search for news articles by keyword and save to an account for later reading.`,
    tech: [reacticon, nodeicon, mongoicon, gcloudicon],
    frontend: 'https://github.com/mentalcaries/news-explorer-frontend',
    backend: 'https://github.com/mentalcaries/news-explorer-backend',
  },
  {
    key: 101,
    // url: 'https://devaround.students.nomoreparties.sbs',
    image: around,
    title: 'Around the US',
    desc: `A full stack photo gallery app that allows users add, delete or like
  photos, with user registration and login.`,
    tech: [reacticon, nodeicon, mongoicon, gcloudicon],
    frontend:
      'https://github.com/mentalcaries/react-around-api-full/tree/main/frontend',
    backend:
      'https://github.com/mentalcaries/react-around-api-full/tree/main/backend',
  },

  {
    key: 103,
    url: 'https://mentalcaries.github.io/code-jam-july-landing/index.html',
    image: elise,
    title: 'Elise Bouer - Portfolio',
    desc: `This Portfolio presents a clean, modern and responsive landing page coded ONLY in pure HTML and CSS. Submitted for Practicum's July 2021 Code Jam for team overReact!`,
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

export { aboutMe, iconArray, projectCards, contacts };
