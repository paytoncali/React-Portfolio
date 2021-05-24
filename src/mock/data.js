import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Payton Whinnery | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Payton',
  subtitle: 'I am a Full Stack Web Developer.',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: 'I am so glad you are here! My name is Payton Whinnery, and I am a 26 year old Full Stack Web Developer. I graduated from Texas State University with a BBA in Management in 2016. I recently received my certification in Full Stack Web Development from UT Austin.',
  paragraphTwo: 'Since 2017, I have been working for a travel company specializing in sports travel. While in my current role, I began working closely with the development vendors to improve the customer service experience when guests are booking reservations. This sparked my interest in web development and began my career as a Full Stack Web Developer. I have loved every minute of learning new languages and technologies.',
  paragraphThree: "Combining the soft skills I've acquired in the workplace with my knowledge of web development, I look forward to becoming a valuable part of a team where I can use my skills of problem solving, critical thinking, and debugging to help improve web user experience.",
  resume: 'https://drive.google.com/file/d/1s6VctFOCnlXkyP8A2-EHbqpmh8gHjWXc/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'vacation.png',
    title: 'Vacation Planner',
    info: '',
    info2: '',
    url: 'https://damiandeleon.github.io/vacation_planner/',
    repo: 'https://github.com/paytoncali/vacation_planner.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weekdaze.png',
    title: 'WorkDaze',
    info: '',
    info2: '',
    url: 'https://arcane-harbor-21800.herokuapp.com/',
    repo: 'https://github.com/paytoncali/WeekDaze.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'user-directory.png',
    title: 'User Directory',
    info: '',
    info2: '',
    url: 'https://paytoncali.github.io/user-directory/',
    repo: 'https://github.com/paytoncali/user-directory.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'workout-tracker.png',
    title: 'Workout Tracker',
    info: '',
    info2: '',
    url: 'https://peaceful-meadow-10844.herokuapp.com/',
    repo: 'https://github.com/paytoncali/workout-tracker.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'tech-blog.png',
    title: 'Tech Blog',
    info: '',
    info2: '',
    url: 'https://frozen-stream-21398.herokuapp.com/',
    repo: 'https://github.com/paytoncali/model-view-controller.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'code-quiz.png',
    title: 'Code Quiz',
    info: '',
    info2: '',
    url: 'https://paytoncali.github.io/Code-Quiz/',
    repo: 'https://github.com/paytoncali/Code-Quiz.git', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Let's Work Together!",
  btn: '',
  email: 'paytoncaliw@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/paytoncali/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/payton-whinnery-052994106/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/paytoncali',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
