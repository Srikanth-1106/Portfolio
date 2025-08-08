import React from "react";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      icon={
        <div className="flex justify-center items-center w-full h-full overflow-hidden">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      }>
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold m-0">
          {experience.company}
        </p>
        <p className="text-secondary text-[14px] font-medium m-0">
          {experience.location}
        </p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-secondary text-[14px] pl-1 tracking-wider">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Intern – WebXR Project",
      company: "Strategyfox Pvt. Ltd., Chennai",
      location: "Chennai, India",
      date: "May 2025 – Jul 2025",
      icon: "src/assets/experiences/SF%20logo.png",
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
      icon: "src/assets/experiences/UC.png",
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
      icon: "src/assets/experiences/content-creator.jpeg",
      points: [
        "Content Creator for Instagram channel @kaadhu_kuthu",
        "Helped grow the channel to 140K+ followers",
        "Created engaging content and managed social media presence",
        "Developed skills in digital marketing and content strategy"
      ],
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()} id="experience">
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience; 