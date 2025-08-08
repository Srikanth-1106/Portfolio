import React from "react";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { textVariant } from "../utils/motion";
import { education } from "../constants";

import { motion } from "framer-motion";
import { styles } from "../styles";

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={education.date}
      icon={
        <div className="flex justify-center items-center w-full h-full overflow-hidden">
          <img
            src={education.icon}
            alt={education.title}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      }>
      <div>
        <h3 className="text-white text-[24px] font-bold">{education.title}</h3>
        <p className="text-secondary text-[16px] font-semibold m-0">
          {education.name}
        </p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {education.points.map((point, index) => (
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

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()} id="education">
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
