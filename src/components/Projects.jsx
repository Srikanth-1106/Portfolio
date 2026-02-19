import React from "react";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { github } from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl w-full sm:w-[290px] md:w-[310px] lg:w-[330px] xl:w-[360px] flex flex-col justify-between min-h-[320px]">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-white font-bold text-[22px] leading-tight flex-1">{name}</h3>
            {source_code_link.includes('github.com') && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-3 flex-shrink-0">
                <img
                  src={github}
                  alt="source"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
          <p className="mt-3 text-secondary text-[14px] leading-[22px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-24 pt-2 md:pt-4 lg:pt-6 scroll-mt-20"
      id="projects">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} pl-0 md:pl-8`}>MY WORK</p>
        <h2 className={`${styles.sectionHeadText} border-l-4 border-[#00cea8] pl-6 md:pl-6`}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[18px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories. It reflects my ability to solve complex
          problems, work with different technologies, and manage projects
          effectively.
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 lg:gap-7 justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
