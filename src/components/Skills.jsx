import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const tech = [
  technologies.languages,
  technologies.frameworks,
  technologies.libraries,
  technologies.databases,
  technologies.tools,
  technologies.environments,
];

const techVariants = [
  "Languages",
  "Frameworks",
  "Libraries",
  "Databases",
  "Tools",
  "Environments",
];

const techItemClasses = "relative flex items-center group cursor-pointer";
const techTooltipClasses =
  "opacity-0 w-fit min-w-[80px] bg-primary text-[#e5e6e9] text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 px-3 -top-12 -left-1/3 pointer-events-none";

const Skills = () => {
  const languageSections = tech.map((technology, index) => (
    <div className="w-full h-fit flex gap-2 md:flex-row flex-col" key={index}>
      <h3 className="md:hidden text-[#e5e6e9]">{techVariants[index]}</h3>
      <motion.div
        className="w-full flex flex-row flex-wrap gap-2"
        variants={fadeIn("right", "spring", 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}>
        {technology.map((tech, idx) => (
          <a
            href={tech.link}
            key={tech.name}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row">
            <div className={`w-[40px] h-[40px] ${techItemClasses}`}>
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-full h-full object-contain"
              />
              <div className={techTooltipClasses}>{tech.name}</div>
            </div>
          </a>
        ))}
      </motion.div>
    </div>
  ));

  const techNames = techVariants.map((techName, index) => (
    <h3
      className="h-[50px] md:flex items-center hidden text-[#e5e6e9]"
      key={index}>
      {techName}
    </h3>
  ));

  return (
    <section className="w-full h-fit p-6 sm:p-8 mt-20" id="skills">
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center mx-auto">
        <p className={styles.sectionSubText}>What I have learnt so far</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      <div className="flex justify-center w-full">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-4 text-[#e5e6e9] text-[17px] bg-[#2e384d] w-full md:w-[95%] lg:w-[85%] xl:w-3/4 2xl:w-2/3 h-full leading-[30px] flex md:flex-row flex-col gap-4 p-4 sm:p-6 md:p-8 md:px-8 lg:px-12 rounded-lg justify-between bg-opacity-90 shadow-sm shadow-[#804dee]">
          <motion.div
            variants={textVariant()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col justify-between h-full gap-5 md:w-auto">
            {techNames}
          </motion.div>

          <div className="w-[2px] h-[400px] bg-[#cbb8f5] rounded-lg md:flex hidden mx-4 md:mx-6 lg:mx-8 flex-shrink-0" />

          <div className="md:w-[80%] lg:flex-1 w-full pl-0 md:pl-2 h-full flex flex-col gap-8">
            {languageSections}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
