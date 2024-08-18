import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpeg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like HTML, CSS and React, as well as back-end technologies like Javascript, Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including HTML, CSS, Javascript, React, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Text to Speech Converter",
    image: project1,
    description:
      "Developed a Text to Speech Converter Application using React and AWS Polly. Integrated AWS Polly to convert user input text into natural-sounding speech. The application features a user-friendly interface for real-time text-to-speech conversion, enhancing accessibility and user interaction.",
    technologies: ["React", "AWS", "Polly"],
    link: "https://text-to-speech-aws-polly.netlify.app",
  },
  {
    title: "Job List Application",
    image: project2,
    description:
      "Developed a full-stack Job List Application using the MERN Stack. Implemented Node.js APIs hosted on AWS EC2, managed via Putty for seamless deployment and server management. The application efficiently handles job listings, and dynamic data interactions.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "AWS EC2", "Putty"],
    link: "https://job-portal-aws.netlify.app",
  },
  {
    title: "CRUD Website",
    image: project3,
    description:
      "A website that allow users to create, read, update, and delete data within a user-friendly interface, enabling seamless management of records or content.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    link: "https://crud-with-firebase-kappa.vercel.app/",
  },
  {
    title: "Todo List App",
    image: project4,
    description:
      "An application that helps users efficiently manage tasks by allowing them to create, organize, and track their to-dos in a streamlined interface.",
    technologies: ["HTML", "CSS", "React", "Node.js"],
    link: "https://todos-list-neon.vercel.app/",
  },
  {
    title: "Portfolio Website",
    image: project5,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Vite", "Node.js", "Bootstrap"],
    link: "https://personal-portfolio-seven-iota-23.vercel.app/",
  },
  {
    title: "E-Commerce Website",
    image: project6,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://ez-shop-theta.vercel.app/",
  },
];

export const CONTACT = {
  address: "Qtr No: 25, Road No: 08, Shri Krishna Nagar, Patna 800001 ",
  phoneNo: "+91 9473 450 999 ",
  email: "arnavsinha.sunny@gmail.com",
};
