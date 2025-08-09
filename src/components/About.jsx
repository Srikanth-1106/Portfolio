import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { styles } from "../styles";
import { socials, services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { IoMdMail } from "react-icons/io";
import TicofabCanvas from "../components/canvas/Tico";
import { Tilt } from "react-tilt";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.2 * index, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card mirror-effect crystal-shine"
        style={{ '--animation-delay': `${index * 0.5}s` }}>
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[240px] w-[240px] flex justify-evenly items-center flex-col relative z-10">
          <img src={icon} alt={title} className="w-16 h-16 object-contain relative z-20" />
          <h3 className="text-white text-[20px] font-bold text-center relative z-20">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = ({ isMobile }) => {
  return (
    <section
      className="md:container md:mx-auto md:px-6 lg:px-12 xl:px-24 md:pt-4 lg:pt-6 scroll-mt-20"
      id="about">
      <div className="md:flex md:flex-row md:item-center md:justify-center md:gap-10 lg:gap-14">
        <div className="md:flex-1 md:max-w-2xl lg:max-w-3xl md:pt-12">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={`${styles.sectionHeadText} border-l-4 border-[#00cea8] pl-6`}>About</h2>
          </motion.div>
          <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-4 dark:text-ctnSecondaryDark text-gray-300 text-[17px] leading-[30px] px-8 md:pr-8 md:pl-0">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]">
              Hello! I am Srikanth Senthilkumar, a passionate Full Stack Developer and tech enthusiast currently pursuing a Bachelor of Engineering in Computer Science at SSN College of Engineering, Chennai. I specialize in MERN stack development, Flutter mobile development, and have experience in WebXR projects using Three.js and Blender. I love creating innovative solutions and have worked on various projects including automotive platforms, content creation, and sports achievements. I thrive in collaborative environments and am always eager to learn new technologies and make a meaningful impact through technology!
            </motion.p>

            <a
              href="mailto:senthilsri1106@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="mt-4 text-[14px] hover:text-primary w-fit transition-all duration-100 ease-in flex md:items-center gap-2 md:flex-row flex-wrap word-break hover:-translate-y-2">
              <IoMdMail className="h-[25px] w-[25px]" />
              senthilsri1106@gmail.com
            </a>

            <div className="flex gap-5 items-center mt-6">
              {socials.map((social) => (
                <a
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  key={social.id}
                  className="aspect-square w-8 hover:-translate-y-2 ease-in transition-all duration-100 cursor-pointer">
                  <img
                    src={social.icon}
                    alt={social.id}
                    className="w-full h-full object-contain"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        {!isMobile && (
          <div className="hidden md:flex md:items-center md:justify-center md:flex-shrink-0 h-[600px] md:w-[400px] lg:w-[500px] xl:w-[600px] md:sticky md:top-[30px]">
            <TicofabCanvas />
          </div>
        )}
      </div>
      <div className="mt-8 flex flex-wrap gap-10 items-center justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default About;
