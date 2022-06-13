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
  img: `profile.JPG`,
  paragraphOne: 'I am so glad you are here! My name is Payton Whinnery, and I am a 27 year old Full Stack Web Developer. I graduated from Texas State University with a BBA in Management in 2016. I recently received my certification of completion in Full Stack Web Development from UT Austin.',
  paragraphTwo: 'Since 2017, I have been working for a travel company specializing in sports travel. While in my previous role, I began working closely with the development vendors to improve the customer service experience when guests are booking reservations. This sparked my interest in web development and began my career as a Full Stack Web Developer. I have loved every minute of learning new languages and technologies. Upon completion of my certification, I was promoted to Quality Assurance Specialist where I have worked closely with external and internal developers to ensure functionality of our public website and our admin website.',
  paragraphThree: "Combining the soft skills I've acquired in the workplace with my knowledge of web development, I look forward to becoming a valuable part of a team where I can use my skills of problem solving, critical thinking, and debugging to help improve web user experience.",
  languages: "HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js, MongoDB, MySQL",
  resume: 'https://drive.google.com/file/d/1s6VctFOCnlXkyP8A2-EHbqpmh8gHjWXc/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: `vacation.png`,
    title: 'Vacation-Planner',
    info: 'Vacation Planner is an application built to help users pick a vacation. You can pick either a winter or summer themed vacation which then brings you to three location options. Once you have selected your location, you will be presented with a weather forecast, restaurant options, and a todo list.',
    info2: '',
    url: 'https://paytoncali.github.io/vacation_planner/',
    repo: 'https://github.com/paytoncali/vacation_planner.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: `weekdaze.png`,
    title: 'WorkDaze',
    info: 'WorkDaze is an application used to help users track their job search. Users can add which jobs they have applied too and track which stage of the process they are in. Using Chart.js, you can view how many days has past since you first applied for a job.',
    info2: '',
    url: 'https://arcane-harbor-21800.herokuapp.com/',
    repo: 'https://github.com/paytoncali/WeekDaze.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: `user-directory.png`,
    title: 'User-Directory',
    info: 'This application was created using React.js and is used to search and sort users within this directory. A random user API was used to create the users.',
    info2: '',
    url: 'https://paytoncali.github.io/user-directory/',
    repo: 'https://github.com/paytoncali/user-directory.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: `workout-tracker.png`,
    title: 'Workout-Tracker',
    info: 'This application helps the user track workouts that they have completed over a span of 7 days. On the dashboard, you are able to see two charts. On the homepage, it shows you your last workout and allows you to continue a workout or start a new one.',
    info2: '',
    url: 'https://peaceful-meadow-10844.herokuapp.com/',
    repo: 'https://github.com/paytoncali/workout-tracker.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: `tech-blog.png`,
    title: 'Tech-Blog',
    info: 'This application allows users to have a webpage to post blogs, comment on others posts, delete the users posts and edit the users posts.    ',
    info2: '',
    url: 'https://frozen-stream-21398.herokuapp.com/',
    repo: 'https://github.com/paytoncali/model-view-controller.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: `code-quiz.png`,
    title: 'Code-Quiz',
    info: 'This website was created to generate a quiz to test users on their knowledge of JavaScript. The application has 5 questions. When you answer a question correctly, it will move onto the next question. When a question is answered incorrectly, it will deduct 10 seconds from the total 50 second allotted. If you run out of time before completely the quiz, you recieve a score of 0. If you answer all the question correctly before time runs out, then you recieve a score of the number of seconds left on the timer. Once the quiz has been completed, it will display your score and ask for your initials to record your score.',
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
