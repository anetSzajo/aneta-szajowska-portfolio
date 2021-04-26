import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Aneta',
  subtitle: `I'm the Web Developer`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilePhoto.jpg',
  paragraphOne:
    'Open and easy-going person highly oriented to improve my skills. ' +
    'Perfectly finding myself in a teamwork, appreciate new challenges and constructive feedback. ' +
    'Want more from life and expanding my horizons on daily basis. ' +
    'Since graduated psychology I decided to rather debug code than people minds. ' +
    'Chosen frontend as a way to vent my ideas, creativity and big passion for Flex and SASS. ' +
    'Now I am looking forward to the Junior Frontend Developer position and opportunity to master my skills under the watchful eye of professional developers. ',
  paragraphTwo:
    'I work with technologies such as JavaScript, React, TypeScript, REST API, CSS (incl. Flex, Grid & SASS), HTML, GIT.',
  paragraphThree: 'During my free time I sew and train my dog.',
  resume: '',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cookBook.png',
    title: 'Cook Book',
    description:
      'Cook Book is a basic cooking app with various recipes. ' +
      'Search for recipe by entering many ingredients. ' +
      'Browse recipes to choose the one to cook and get more information and instruction. ' +
      'Check last ten searches to quickly get your favourite recipe.',
    info: 'App created using the Spoonacular API.',
    technologies: 'Next.js, TypeScript, Chakra',
    url: 'https://cook-book-liart.vercel.app/',
    repo: 'https://github.com/anetSzajo/cook-book',
  },
  {
    id: nanoid(),
    img: 'fishkey.png',
    title: 'Fishkey',
    description:
      'Fishkey is a simple app for learning new concepts using five boxes flashcard method. ' +
      'Flashcard is a small card with question on obverse and answer on reverse. Flip the card to get the correct answer. ' +
      'The aim of the method is to train each flashcard five times stepping by all box stages. Using app you can create your own flashcards assigning them to categories. ' +
      'Every new flashcard goes to the first box. After clicking correct or wrong button app will count the new flashcard stage and put it in suitable box. ' +
      'Train your brain and become a real flashcards master!',
    info: 'App created using Firebase.',
    technologies: 'React, JavaScript, TypeScript, SCSS',
    url: 'https://fishkey-1f7b9.web.app/',
    repo: 'https://github.com/anetSzajo/fishkey',
  },
  {
    id: nanoid(),
    img: 'dogapp.png',
    title: 'Dog App',
    description:
      'Wants to buy a dog but have not decided what breed? ' +
      'Take a second and use DogApp to find all dog breeds and their subbreeds. ' +
      'Choose one to view some random breed photos. Then just buy a dog.',
    info: 'App created using the Dog API.',
    technologies: 'React, JavaScript, TypeScript, SCSS',
    url: 'https://dogapp.aneta.szajowska.net/',
    repo: 'https://github.com/anetSzajo/dog-app-ts',
  },
  {
    id: nanoid(),
    img: 'plantswife.png',
    title: 'Plantswife',
    description:
      'Plantswife is the mobile app for managing a houseplant jungle. ' +
      'Allows to keep all your plants data in one place, easily add, edit or delete elements. ' +
      'Buttons facilitate quick next plant watering, spraing or feeding update. You do not have to remember dates, app will do it for you. ' +
      `Adding plants photos help to monitor their growth and find in you own plants' database. ` +
      'You can finally say goodbye to shed or withered plants. ' +
      'Enjoy beautiful home jungle and free your mind!',
    technologies: 'React, JavaScript, SCSS',
    url: 'https://plantswife.herokuapp.com/',
    repo: 'https://github.com/anetSzajo/plantswife',
  },
  {
    id: nanoid(),
    img: 'travelApp.png',
    title: 'Cross-Dimension Travel App',
    description:
      'Time for travel? Navigate between dimensions and go for a ride with Rick. ' +
      'App keeps all dimensions stored in one place, allows to filter them by price or dimension name, check place by ID, create new or update the existing one.',
    info: 'App created using the Rick and Morty API.',
    technologies: 'React, JavaScript, CSS',
    url: 'https://travel-app.aneta.szajowska.net/',
    repo: 'https://github.com/anetSzajo/react-travel-app',
  },
  {
    id: nanoid(),
    img: 'productLandingPage.png',
    title: 'HTML & CSS Projects',
    description:
      'I had to start with something...These are various HTML and CSS projects thanks to which I could practice my skills at the very beginning of my programming way: ' +
      'Product Landing Page, Tribute Page, Survey Form, Technical Documentation Page, Exemplary Template of Portfolio and Personal Page, Google Page.',
    technologies: 'HTML, CSS, JavaScript',
    url: 'https://landing-page.aneta.szajowska.net',
    repo: 'https://github.com/anetSzajo/product-landing-page',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'aneta@szajowska.net',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/anetszajo/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/anetSzajo',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
