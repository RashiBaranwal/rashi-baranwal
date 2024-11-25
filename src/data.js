import { DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { SiFiverr } from "react-icons/si";
import { SiAppwrite } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { FaSquareXTwitter } from "react-icons/fa6";
import ux1 from "./images/ux1.png";
import ux2 from "./images/ux2.png";
import ux3 from "./images/ux3.png";
import { frontend1 } from "./images";
import { frontend2 } from "./images";
import { frontend3 } from "./images";
import { frontend4 } from "./images";
import { frontend5 } from "./images";
import { fullsatck1 } from "./images";
import { fullsatck2 } from "./images";
import { fullsatck3 } from "./images";
import { fullsatck4 } from "./images";
import { backend1 } from "./images";
import { backend2 } from "./images";

export const menu = [
  { name: "About" },
  { name: "Skill" },
  { name: "Profiles" },
  { name: "Certifications" },
  { name: "Projects" },
  { name: "Contact" },
];

export const projects = [
  {
    id: 1,
    title: "GeniePlan - Personal Finance Manager",
    image: ux2,
    category: "UI/UX",
    data: {
      description: `This project introduces GeniePlan, a personal finance management tool designed for effortless budgeting and informed financial decisions. Key features include:

      Login Interface: A modern and sleek login page with secure options like Google sign-in for quick access.
      Budget Tracker: A comprehensive dashboard displaying income, expenses, and savings. It includes visual tools like charts, calendars, and categorized transaction details for easy tracking.
      Credit Card Comparator: A unique feature that analyzes user spending patterns and recommends the best credit cards, helping users maximize cashback and rewards.
      AI-Powered Chatbot: A conversational assistant providing financial advice on investments, savings, and queries, ensuring seamless interaction.`,
      demoLink:
        "https://www.figma.com/design/oQmn4wsZbf31Nbq5yLGKV5/GENIEPLAN?node-id=0-1&t=JaMev6us81X5FeLM-1",
    },
    stack: [
      {
        name: "Figma",
        icon: <CgFigma />,
        iconColor: "skyblue",
      },
    ],
  },
  {
    id: 2,
    title: "EstateVista - Real Estate Purchase Platform",
    image: fullsatck1,
    category: "FullStack",
    data: {
      description: `EstateVista is a comprehensive real estate platform designed for seamless property transactions. It features a real-time chat system for direct communication between buyers and sellers, full user authentication for secure access, and a user-friendly interface with intuitive navigation. Advanced search filters and detailed property listings make finding the perfect property effortless, ensuring a smooth and transparent buying experience.`,
      demoLink:
        "https://www.figma.com/design/3y628tWb3AyDmvgVk4czaR/EvolveDev?node-id=0-1&t=qiaoIqWIeiPGeg5i-1",
    },
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 3,
    title: "Blockchain Club Website",
    image: fullsatck2,
    category: "FullStack",
    data: {
      description: `Blockchain Club Website is a dynamic platform built using the MERN stack, designed to showcase the activities, events, and resources of the Blockchain Club. It features a sleek, interactive interface, secure user authentication, and sections dedicated to club projects, achievements, and announcements. The website aims to engage members and visitors by providing up-to-date information and fostering a collaborative learning environment in the blockchain space.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
      {
        name: "MongoDBT",
        icon: <SiMongodb />,
      },
      {
        name: "MongoDBT",
        icon: <SiMongodb />,
      },
      {
        name: "MongoDBT",
        icon: <SiMongodb />,
      },
    ],
  },
  {
    id: 4,
    title: "Appwrite Blog Website",
    image: fullsatck3,
    category: "FullStack",
    data: {
      description: `Appwrite Blog Website is a modern blogging platform powered by Appwrite, offering a secure and efficient space for sharing ideas and insights. It features user authentication, a clean and responsive design, and tools for creating, editing, and managing blog posts. With its intuitive interface and real-time database capabilities, the platform ensures a seamless blogging experience for writers and readers alike.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "ReactJS",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "Appwrite",
        icon: <SiAppwrite />,
        iconColor: "red",
      },
    ],
  },
  {
    id: 5,
    title: "Myntra App Design Enhancements",
    image: ux1,
    category: "UI/UX",
    data: {
      description: `This project showcases a series of innovative features integrated into the Myntra app, aimed at improving user experience and engagement. It includes:
        
        - **Green Thread Rewards System**: A gamified rewards mechanism encouraging sustainable shopping habits, where users earn points for eco-friendly purchases, redeemable for exclusive discounts and offers.
        
        - **Virtual Try-On Feature**: An AR-powered tool that allows users to visualize products on themselves in real-time before purchase, boosting confidence and reducing returns.
        
        - **Myntra Find Buddy (Social Shopping)**: A matchmaking feature enabling users to connect with like-minded shoppers, featuring a swipe-based interface, chat system for collaboration, and interactive quizzes.
        
        Each feature was designed with a user-centric approach, focusing on seamless navigation, modern aesthetics, and intuitive interactions.`,
      demoLink:
        "https://www.figma.com/design/zzOMPi5bmZStXgBYoMpAwM/Myntra-Hackathon?node-id=0-1&t=YBApyyKU2glmijZ5-1",
    },
    stack: [
      {
        name: "Figma",
        icon: <CgFigma />,
        iconColor: "orangered",
      },
    ],
  },

  {
    id: 6,
    title: "User Authentication",
    image: fullsatck4,
    category: "FullStack",
    data: {
      description: `MERN User Authentication is a secure authentication system built with the MERN stack, designed to handle user registration, login, and access control efficiently. It implements features like hashed passwords, session management, and token-based authentication for robust security. With a responsive and user-friendly interface, the system ensures seamless user interaction while maintaining data privacy and integrity.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "ReactJS",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 7,
    title: "EvolveDev - Web Development Agency Website",
    image: ux3,
    category: "UI/UX",
    data: {
      description: `This project showcases the design for EvolveDev, a web development agency website aimed at simplifying the user experience. Highlights include:

      Homepage: A clean and engaging layout introducing the agency’s mission, services, and latest articles to establish credibility and relevance.

      Contact Section: An intuitive contact form with FAQs to address user concerns and facilitate seamless communication.
      Blog Module: A dynamic blog section featuring categorized content on technology, startups, and security to attract and educate visitors.
      Modern Aesthetic: Minimalist black-and-white color scheme with effective use of whitespace, enhancing readability and focus on content.`,
      demoLink:
        "https://www.figma.com/design/3y628tWb3AyDmvgVk4czaR/EvolveDev?node-id=0-1&t=qiaoIqWIeiPGeg5i-1",
    },
    stack: [
      {
        name: "Figma",
        icon: <CgFigma />,
        iconColor: "orangered",
      },
    ],
  },
  {
    id: 6,
    title: "Portfolio Website",
    image: frontend1,
    category: "Frontend",
    data: {
      description: `Portfolio Website is a visually captivating platform built with React.js and enhanced by GSAP for smooth animations and transitions. It showcases personal projects, skills, and achievements in an interactive and engaging manner. The site features dynamic animations, responsive design, and intuitive navigation, creating a lasting impression while offering visitors a seamless browsing experience.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "ReactJS",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "GSAP",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
    ],
  },
  {
    id: 7,
    title: "Youtube Backend",
    image: backend2,
    category: "Backend",
    data: {
      description: `Complete YouTube Backend is a robust backend system replicating all core functionalities of YouTube. Built with modern technologies, it supports user authentication, video uploading, streaming, likes, comments, subscriptions, and playlist management. Optimized for scalability and performance, it ensures seamless handling of large data volumes while providing secure and efficient video-sharing services.`,
      demoLink: "https://google.com/",
    },
    stack: [
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
];

export const experience = [
  {
    title: "Programming Languages",
    data: [
      {
        skill: "C/C++",
        level: "Intermediate",
      },
      {
        skill: "JAVA",
        level: "Experienced",
      },
      {
        skill: "HTML",
        level: "Experienced",
      },
      {
        skill: "CSS",
        level: "Experienced",
      },
      {
        skill: "Python",
        level: "Intermediate",
      },
      {
        skill: "MySQL",
        level: "Experienced",
      },
      {
        skill: "SCSS",
        level: "Experienced",
      },
      {
        skill: "JavaScript/Typescript",
        level: "Experienced",
      },
    ],
  },
  {
    title: "Technologies & Frameworks",
    data: [
      {
        skill: "ReactJS",
        level: "Experienced",
      },
      {
        skill: "Node",
        level: "Experienced",
      },
      {
        skill: "Express",
        level: "Experienced",
      },
      {
        skill: "NextJS",
        level: "Intermediate",
      },
      {
        skill: "Hono",
        level: "Intermediate",
      },
      {
        skill: "NoSQL (MongoDB)",
        level: "Intermediate",
      },
      {
        skill: "AppWrite",
        level: "Intermediate",
      },
      {
        skill: "Spring Boot",
        level: "Beginner",
      },
      {
        skill: "Prisma",
        level: "Beginner",
      },
    ],
  },
  {
    title: "Other Tools",
    data: [
      {
        skill: "Git",
        level: "Experienced",
      },
      {
        skill: "Github",
        level: "Experienced",
      },
      {
        skill: "Docker",
        level: "Intermediate",
      },
      {
        skill: "Kubernetes",
        level: "Intermediate",
      },
      {
        skill: "Postman",
        level: "Experienced",
      },
      {
        skill: "Netlify",
        level: "Intermediate",
      },
      {
        skill: "Vercel",
        level: "Intermediate",
      },
    ],
  },
];

export const socialHandles = [
  {
    name: "Twitter",
    icon: <FaSquareXTwitter />,
    link: "https://x.com/rashi__04",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/RashiBaranwal",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/rashibaranwal/",
  },
  {
    name: "Youtube",
    icon: <AiFillYoutube />,
    link: "https://www.youtube.com/@rashibaranwal5494",
  },
];
