import {
    
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    covid,
    expense,
    discord,
    plypicker,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
        id:"resume",
        title:"Resume",
        link : "https://drive.google.com/file/d/1jh_QZyMNCYmkJ0dIBnL1TZOGCgBUHkYK/view?usp=drivesdk"
    }
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: reactjs,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Full stack Developer",
      company_name: "PlyPicker",
      icon: plypicker,
      iconBg: "#E6DEDD",
      date: "May 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with mulitplecityscaling team to make the services and the products available in multiple cities.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Developed multiple APIs and implemented multiple features and also worked for optimization of the code.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Expense Tracker",
      description:
        "Web-based platform that allows users to add their daily expense and income and track the overall expenses each day. This is a fullstack MERN web app.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: expense,
      source_code_link: "https://github.com/aditi018/Expense-Tracker",
    },
    {
        name: "Covid Tracker",
        description:
          "Web-based platform that allows users to check the status of covid in different countries. It allows user to check the death and recovery in each state.",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "firebase",
            color: "green-text-gradient",
          },
          {
            name: "nodejs",
            color: "pink-text-gradient",
          },
        ],
        image: covid,
        source_code_link: "https://github.com/aditi018/Covid-19-Tracker",
      },
    {
      name: "Discord Clone",
      description:
        "Discord clone where user can signin through the firebase authentication and create their channels and talk to them on that channel. Used redux for state management.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: discord,
      source_code_link: "https://github.com/aditi018/Discord_Clone",
    },
  ];
  
  export { services, technologies, experiences, projects }; 