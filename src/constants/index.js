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
  aws,
  githubactions,
  terraform,
  nextjs,
  supabase,
  bash,
  powerbi,
  vscode,
  kubernetes,

  ssnLogo,
  tptLogo,
  chargebeeLogo,
  dreampiLogo,
  contentCreator,
  sfLogo,
  ucLogo,
  chiselLogo,
  aapaavaniLogo,
  youtubeLogo,
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
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const sequenceText = [
  "Cloud / DevOps Engineer",
  1200,
  "Software Engineer",
  1000,
  "Full Stack Developer",
  1000,
  "AWS & CI/CD Specialist",
  1200,
  "<ReactJs Developer />",
  1000,
  "MERN Stack Developer",
  1000,
  "Flutter Developer",
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
    title: "Cloud & DevOps",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Problem Solving",
    icon: mobile,
  },
  {
    title: "Flutter Developer",
    icon: creator,
  },
];

const technologies = {
  cloud: [
    {
      name: "AWS",
      icon: aws,
      link: "https://aws.amazon.com/",
    },
    {
      name: "Google Cloud Platform",
      icon: gcp,
      link: "https://cloud.google.com/",
    },
  ],
  devops: [
    {
      name: "GitHub Actions",
      icon: githubactions,
      link: "https://github.com/features/actions",
    },
    {
      name: "Docker & Buildx",
      icon: docker,
      link: "https://www.docker.com/",
    },
    {
      name: "Terraform (IaC)",
      icon: terraform,
      link: "https://www.terraform.io/",
    },
    {
      name: "Kubernetes",
      icon: kubernetes,
      link: "https://kubernetes.io/",
    },
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
  ],
  languages: [
    {
      name: "Python",
      icon: python,
      link: "https://www.python.org/",
    },
    {
      name: "Bash",
      icon: bash,
      link: "https://www.gnu.org/software/bash/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: nextjs,
      link: "https://nextjs.org/",
    },
    {
      name: "React.js",
      icon: reactjs,
      link: "https://react.dev/",
    },
    {
      name: "Express.js",
      icon: express,
      link: "https://expressjs.com/",
    },
    {
      name: "TailwindCSS",
      icon: tailwind,
      link: "https://tailwindcss.com/",
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
      name: "Supabase",
      icon: supabase,
      link: "https://supabase.com/",
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
    {
      name: "MySQL",
      icon: mysql,
      link: "https://www.mysql.com/",
    },
  ],
  tools: [
    {
      name: "VS Code",
      icon: vscode,
      link: "https://code.visualstudio.com/",
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
      name: "Power BI",
      icon: powerbi,
      link: "https://powerbi.microsoft.com/",
    },
    {
      name: "Google Colab",
      icon: colab,
      link: "https://colab.research.google.com/",
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
    title: "SSN College of Engineering",
    name: "B.E. in Computer Science and Engineering",
    icon: ssnLogo,
    date: "Sep 2023 – Apr 2026",
    points: [
      "Completed Bachelor of Engineering in Computer Science and Engineering",
      "CGPA: 6.5%",
      "Studied core computer science subjects including Cloud Infrastructure, Distributed Systems, Operating Systems, Database Management Systems, and Software Engineering."
    ],
  },
  {
    title: "Thiagarajar Polytechnic College",
    name: "Diploma in Computer Science",
    icon: tptLogo,
    date: "Nov 2020 – Jun 2023",
    points: [
      "Completed Diploma in Computer Science with excellent academic performance",
      "Percentage: 87.4%",
      "Gained strong foundation in programming, web development, data structures, and computer science fundamentals."
    ],
  },
  {
    title: "Notre Dame Of Holy Cross School CBSE",
    name: "Schooling (10th Grade)",
    icon: notreDameLogo,
    date: "Jun 2019 – Apr 2020",
    points: [
      "Completed 10th grade at Notre Dame Of Holy Cross School (CBSE board)",
      "Percentage: 54%",
      "Developed foundational skills in mathematics, science, and computer basics."
    ],
  },
];

const experiences = [
  {
    title: "Cloud Engineer Intern",
    company: "ChargeBee",
    location: "Chennai, India",
    date: "Apr 2026 – Oct 2026",
    icon: chargebeeLogo,
    iconBg: "#ffffff",
    points: [
      "Built and optimized CI/CD pipelines using GitHub Actions, Docker Buildx, and GitHub OIDC for secure, automated container image builds and multi-region deployments to Amazon ECR.",
      "Developed an AWS FIS disaster recovery automation framework to execute failure scenarios, validate ECS workload recovery, and automate DR drill activities with CloudWatch monitoring.",
      "Contributed to migrating CI/CD workflows from AWS CodePipeline to GitHub Actions, and managed cloud infrastructure using Terraform (IaC).",
      "Troubleshot CI/CD and AWS infrastructure issues across GitHub Actions workflows, container images, IAM roles, and ECS services to identify root causes and implement fixes.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Aapaavani Environmental Solution",
    location: "India",
    date: "Feb 2026 – Apr 2026",
    icon: aapaavaniLogo,
    iconBg: "#ffffff",
    points: [
      "Designed and developed full-stack web applications for environmental monitoring and data management using React, Node.js, and PostgreSQL.",
      "Built RESTful APIs and interactive dashboards to visualize environmental data, enabling real-time insights for stakeholders.",
      "Integrated authentication, role-based access control, and reporting modules to streamline internal operations and client-facing workflows.",
    ],
  },
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
    title: "Freelancer",
    company: "DreamPi",
    location: "Chennai, India",
    date: "Jan 2025 – Mar 2025",
    icon: dreampiLogo,
    iconBg: "#0c0620",
    points: [
      "Developed production web applications using Next.js, React, Node.js, REST APIs, and Supabase.",
      "Designed backend APIs and database workflows for application features, including authentication, data management, and server-side operations.",
      "Optimized database queries and application performance through indexing, API optimization, and efficient frontend rendering."
    ],
  },
  {
    title: "Freelancer",
    company: "UpdateCars Pvt. Ltd., Salem",
    location: "Salem, India",
    date: "Mar 2024 – Apr 2024",
    icon: ucLogo,
    points: [
      "Developed full-featured car listing and inventory management web application",
      "Integrated authentication, image uploads, and admin controls using MERN stack",
      "Technologies: MongoDB, Express.js, React.js, Node.js",
      "Also contributed to Instagram content promotion for the platform"
    ],
  },
  {
    title: "Freelancer",
    company: "Kaadhu Kuthu Channel",
    location: "",
    date: "Aug 2022 – Jan 2024",
    icon: youtubeLogo,
    iconBg: "#ffffff",
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
    name: "AWS Disaster Recovery Automation Framework",
    description:
      "Developed a menu-driven automation framework for executing predefined AWS FIS disaster recovery experiments against cloud workloads. Automated failure injection, workload recovery validation, and operational checks for ECS-based applications. Designed reusable automation components to make DR drills repeatable, consistent, and less dependent on manual execution.",
    tags: [
      {
        name: "AWS FIS",
        color: "orange-text-gradient",
      },
      {
        name: "ECS",
        color: "blue-text-gradient",
      },
      {
        name: "CloudWatch",
        color: "green-text-gradient",
      },
      {
        name: "Lambda",
        color: "pink-text-gradient",
      },
      {
        name: "Terraform",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "orange-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Srikanth-1106",
  },
  {
    name: "ECR Cross-Region Container Image Distribution",
    description:
      "Built a multi-region GitHub Actions workflow to build and publish Docker images to corresponding Amazon ECR repositories across AWS regions. Implemented conditional workflow logic supporting both single-region and multi-region image publishing. Integrated GitHub OIDC with AWS IAM for secure, short-lived credentials during CI/CD execution.",
    tags: [
      {
        name: "Amazon ECR",
        color: "orange-text-gradient",
      },
      {
        name: "Docker Buildx",
        color: "blue-text-gradient",
      },
      {
        name: "GitHub Actions",
        color: "green-text-gradient",
      },
      {
        name: "AWS IAM",
        color: "pink-text-gradient",
      },
      {
        name: "GitHub OIDC",
        color: "orange-text-gradient",
      },
    ],
    source_code_link: "https://github.com/Srikanth-1106",
  },
  {
    name: "Chisel Yourself – Personal Development Platform",
    description:
      "Designed and developed a full-stack learning platform with structured learning paths, user progression, and content management. Built frontend components and backend APIs using Next.js, Node.js, and Supabase. Deployed scalable content delivery utilizing CDN optimization to achieve sub-3s global load times.",
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
      {
        name: "REST APIs",
        color: "blue-text-gradient",
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

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Verified",
    description:
      "Validates foundational understanding of AWS Cloud concepts, security, architecture, compute, networking, storage, and database services.",
    icon: aws,
    certificate_link:
      "https://aws.amazon.com/certification/certified-cloud-practitioner/",
  },
  {
    title: "Google UX Design",
    issuer: "Google (Coursera)",
    date: "Verified",
    description:
      "Foundations of User Experience (UX) Design covering user-centric research, design sprints, wireframing, prototyping, and accessibility standards.",
    icon: gcp,
    certificate_link:
      "https://www.coursera.org/account/accomplishments/verify/HEZAFV3T8SLX?utm_source=ios&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "Figma Foundation",
    issuer: "Figma (GUVI)",
    date: "Verified",
    description:
      "Comprehensive mastery of modern UI/UX design systems, component libraries, responsive auto-layouts, and interactive user prototypes.",
    icon: figma,
    certificate_link: "https://www.guvi.in/verify-certificate?id=56P8G51ud1387757yx",
  },
];

const achievements = [
  {
    title: "National-Level Cricket Athlete",
    description:
      "Demonstrated teamwork, discipline, communication, and composure under pressure while competing at the national level.",
  },
  {
    title: "District Athletics Champion",
    description:
      "Demonstrated consistency, competitive performance, athletic endurance, and continuous improvement across track and field championships.",
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
  certifications,
  achievements,
};
