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
  backend,
  creator,
  mobile,
  web,
  cplusplus,
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
      "CGPA: 6.34 / 10",
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
    name: "Water Quality Optimization Digital Twin",
    description:
      "Built a machine learning control system simulating an industrial wastewater treatment plant to optimize chemical dosing and aeration. Implemented Champion/Challenger model selection, projecting annual operational savings of $98K while ensuring environmental compliance.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Scikit-Learn",
        color: "green-text-gradient",
      },
      {
        name: "Random Forest",
        color: "pink-text-gradient",
      },
      {
        name: "Gradient Boosting",
        color: "orange-text-gradient",
      },
    ],

    source_code_link: "https://github.com/Srikanth-1106",
  },
  {
    name: "Plastic Injection Molding Quality Control",
    description:
      "Developed RegressorChain and Gradient Boosting models on synthetic time-series data to predict manufacturing quality metrics. Conducted dual-noise dataset analysis (5% vs 15%) to evaluate model robustness and optimize hyperparameters using GridSearchCV.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "Scikit-Learn",
        color: "pink-text-gradient",
      },
    ],

    source_code_link: "https://github.com/Srikanth-1106",
  },
  {
    name: "Virtual AI Interviewer Platform",
    description:
      "Engineered a Progressive Web App (PWA) configured for offline functionality and seamless cross-platform installation. Integrated WebXR support for Meta Quest VR headsets to provide an immersive, one-on-one virtual interview environment.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "WebXR",
        color: "pink-text-gradient",
      },
      {
        name: "PWA",
        color: "orange-text-gradient",
      },
    ],

    source_code_link: "https://github.com/Srikanth-1106",
  },
  {
    name: "Tamil Movie Metadata OCR Extractor",
    description:
      "Automated data extraction from images of Tamil movies utilizing Python and OCR technology. Integrated the TMDB API to fetch, cross-reference, and structure comprehensive movie details dynamically.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TMDB API",
        color: "green-text-gradient",
      },
      {
        name: "OCR",
        color: "pink-text-gradient",
      },
    ],

    source_code_link: "https://github.com/Srikanth-1106",
  },
  {
    name: "R3F Virtual Group Discussion Platform",
    description:
      "Created an interactive 3D virtual group discussion space leveraging React Three Fiber for complex scene rendering. Integrated real-time backend synchronization to manage concurrent participant interactions and spatial presence.",
    tags: [
      {
        name: "React Three Fiber",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "3D/WebXR",
        color: "pink-text-gradient",
      },
    ],

    source_code_link: "https://github.com/Srikanth-1106",
  },
  {
    name: "Chisel Yourself – Personal Development Platform",
    description:
      "Deployed a scalable content delivery platform utilizing CDN optimization to achieve sub-3s global load times. Developed structured learning paths with progression tracking, boosting user engagement and completion rates by 20%.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Supabase",
        color: "pink-text-gradient",
      },
      {
        name: "GCP",
        color: "orange-text-gradient",
      },
    ],

    source_code_link: "https://github.com/Srikanth-1106",
  },
  {
    name: "Update Cars – Dealer Inventory Platform",
    description:
      "Delivered an inventory management system featuring real-time stock status, reducing data discrepancies by 90%. Streamlined database administration for vehicle records and implemented secure payment integrations.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Supabase",
        color: "pink-text-gradient",
      },
    ],

    source_code_link: "https://github.com/Srikanth-1106",
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
