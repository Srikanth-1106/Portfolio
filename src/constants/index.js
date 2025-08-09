import {
  github,
  instagram,
  linkedin,

  html,
  css,
  javascript,
  typescript,
  python,
  c,
  java,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  mysql,
  postgres,
  docker,
  figma,
  git,
  threejs,
  flutter,
  postman,
  express,
  gcp,
  colab,

  ssnLogo,
  tptLogo,
  contentCreator,
  sfLogo,
  ucLogo,
  chiselLogo,
  nextgenChatbot,
  assitiveGlasses,
  jobconnect,
  backend,
  creator,
  mobile,
  web,
  cplusplus,
  tictactoeImage,
  generatedImage,
  updatecarsLogo, // Added new project logo
  notreDameLogo,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const sequenceText = [
  "Full Stack Developer",
  1000,
  "Flutter Developer",
  1000,
  "<ReactJs Developer />",
  1000,
  "MERN Stack Developer",
  1000,
  "Problem Solver",
  1000,
];

const socials = [
  {
    id: "github",
    icon: github,
    link: "https://github.com/Srikanth-1106",
  },
  {
    id: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/srikanthatssn/",
  },
  {
    id: "instagram",
    icon: instagram,
    link: "https://www.instagram.com/____.srikanth.____/",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Problem Solving",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Flutter Developer",
    icon: creator,
  },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: html,
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: css,
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: javascript,
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: typescript,
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "C",
      icon: c,
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "C++",
      icon: cplusplus,
      link: "https://cplusplus.com/",
    },
    {
      name: "Java",
      icon: java,
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: python,
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "TailwindCSS",
      icon: tailwind,
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: express,
      link: "https://expressjs.com/",
    },
    {
      name: "Flutter",
      icon: flutter,
      link: "https://flutter.dev/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: reactjs,
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: threejs,
      link: "https://threejs.org/",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: mysql,
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: postgres,
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: mongodb,
      link: "https://www.mongodb.com/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: git,
      link: "https://git-scm.com/",
    },
    {
      name: "GitHub",
      icon: github,
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: postman,
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: figma,
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: docker,
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: nodejs,
      link: "https://nodejs.org/en",
    },
    {
      name: "Google Cloud Platform",
      icon: gcp,
      link: "https://console.cloud.google.com/",
    },
    {
      name: "Google Colab",
      icon: colab,
      link: "https://colab.research.google.com/",
    },
  ],
};

const education = [
  {
    title: "Notre Dame Of Holy Cross School CBSE",
    name: "Schooling (10th Grade)",
    icon: notreDameLogo,
  date: "Jun 2019 - Apr 2020",
    points: [
      "Completed 10th grade at Notre Dame Of Holy Cross School (CBSE board)",
      "Percentage: 54%",
      "Developed foundational skills in mathematics, science, and computer basics."
    ],
  },
  {
    title: "Thiagarajar Polytechnic College",
    name: "Diploma in Computer Science",
    icon: tptLogo,
    date: "Nov 2020 - Jun 2023",
    points: [
      "Completed Diploma in Computer Science with excellent academic performance",
      "Percentage: 87.4%",
      "Gained strong foundation in programming, web development, and computer science fundamentals."
    ],
  },
  {
    title: "SSN College of Engineering",
    name: "B.E. in Computer Science and Engineering",
    icon: ssnLogo,
    date: "Sep 2023 - Present",
    points: [
      "Currently pursuing Bachelor of Engineering in Computer Science and Engineering",
      "CGPA: 6.1 / 10",
      "Studying core computer science subjects including Data Structures, Algorithms, Database Management Systems, and Software Engineering."
    ],
  },
];

const experiences = [
  {
    title: "Frontend Intern – WebXR Project",
    company: "Strategyfox Pvt. Ltd., Chennai",
    location: "Chennai, India",
    date: "May 2025 – Jul 2025",
    icon: sfLogo,
    points: [
      "Developed interactive 3D elements using Three.js and Blender for 3D shopping experience",
      "Created immersive shopping interfaces using modern web technologies",
      "Collaborated with design and development teams to implement WebXR features",
      "Gained hands-on experience with 3D modeling and web development integration"
    ],
  },
  {
    title: "Full Stack Developer",
    company: "UpdateCars Pvt. Ltd., Salem",
    location: "Salem, India",
    date: "Mar 2024 – Present",
    icon: ucLogo,
    points: [
      "Developed full-featured car listing and inventory management web application",
      "Integrated authentication, image uploads, and admin controls using MERN stack",
      "Technologies: MongoDB, Express.js, React.js, Node.js",
      "Also contributed to Instagram content promotion for the platform"
    ],
  },
  {
    title: "Content Creator",
    company: "Kaadhu Kuthu Channel",
    location: "Remote",
    date: "Apr 2024 – Present",
    icon: contentCreator,
    points: [
      "Content Creator for Instagram channel @kaadhu_kuthu",
      "Helped grow the channel to 140K+ followers",
      "Created engaging content and managed social media presence",
      "Developed skills in digital marketing and content strategy"
    ],
  },
];

const projects = [
  {
    name: "Chisel Recruiter Management System (Full Stack)",
    description:
      "Full-stack recruiter management system with secure authentication, job posting dashboard, and real-time notifications using MERN stack.",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "orange-text-gradient",
      },
      {
        name: "Authentication",
        color: "purple-text-gradient",
      },
    ],
    image: chiselLogo,
    source_code_link: "https://github.com/Srikanth-1106/Chisel-Recruiter-System",
  },
  {
    name: "TicTacToe Game (Front End)",
    description:
      "Interactive React.js game with modern UI, smooth animations, and responsive design for all devices.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
    ],
    image: tictactoeImage,
    source_code_link:
      "https://github.com/Srikanth-1106/TicTacToe",
  },
  {
    name: "Pet Adoption Website (Full Stack)",
    description:
      "Pet adoption platform with user authentication, admin dashboard, and responsive design using MERN stack.",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "orange-text-gradient",
      },
    ],
    image: assitiveGlasses,
    source_code_link:
      "https://github.com/Srikanth-1106/PetShop",
  },
  {
    name: "Update Cars – Automotive Platform (Full Stack)",
    description:
      "Car listing and inventory management platform with authentication, image uploads, and admin controls using MERN stack.",
    tags: [
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "React.js",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "orange-text-gradient",
      },
      {
        name: "Content Creation",
        color: "purple-text-gradient",
      },
    ],
    image: updatecarsLogo,
    source_code_link: "https://github.com/Srikanth-1106/UpdateCars-Platform",
  },
  {
    name: "Strategyfox Pvt. Ltd. - WebXR Project",
    description:
      "3D shopping experience with interactive elements using Three.js, Blender, and modern web technologies.",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "Blender",
        color: "green-text-gradient",
      },
      {
        name: "WebXR",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
    ],
    image: jobconnect,
    source_code_link: "https://github.com/Srikanth-1106/WebXR-Project",
  },
  {
    name: "Content Creator - Kaadhu Kuthu Channel",
    description:
      "Instagram content creation and social media management, growing channel to 140K+ followers. Created engaging content and developed digital marketing strategies.",
    tags: [
      {
        name: "Content Creation",
        color: "blue-text-gradient",
      },
      {
        name: "Social Media",
        color: "green-text-gradient",
      },
      {
        name: "Instagram",
        color: "pink-text-gradient",
      },
      {
        name: "Digital Marketing",
        color: "orange-text-gradient",
      },
    ],
  image: generatedImage,
    source_code_link: "https://www.instagram.com/kaadhu_kuthu/",
  },
];

export {
  navLinks,
  sequenceText,
  socials,
  services,
  technologies,
  education,
  projects,
  experiences,
};
