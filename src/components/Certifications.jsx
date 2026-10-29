import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { certifications, achievements } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { FaAward, FaMedal } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

const CertificationCard = ({
  index,
  title,
  issuer,
  date,
  description,
  icon,
  certificate_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="h-full">
      <Tilt
        options={{ max: 20, scale: 1.02, speed: 450 }}
        className="h-full">
        <a
          href={certificate_link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-tertiary p-6 rounded-2xl flex flex-col justify-between h-full shadow-card mirror-effect crystal-shine border border-purple-500/20 hover:border-[#00cea8] transition-all duration-300 group block cursor-pointer select-none">
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/90 p-2.5 flex items-center justify-center border border-purple-500/10 group-hover:border-[#00cea8]/40 transition-colors">
                {icon ? (
                  <img src={icon} alt={issuer} className="w-full h-full object-contain" />
                ) : (
                  <FaAward className="text-[#00cea8] text-2xl" />
                )}
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#915eff]/20 text-[#dfd9ff] border border-[#915eff]/40">
                {date}
              </span>
            </div>

            <div className="flex items-start justify-between gap-2">
              <h3 className="text-white font-bold text-[19px] leading-snug group-hover:text-[#00cea8] transition-colors">
                {title}
              </h3>
              <FiExternalLink className="text-secondary group-hover:text-[#00cea8] text-base flex-shrink-0 mt-1 transition-colors" />
            </div>

            <p className="text-[#00cea8] text-[13px] font-medium mt-1">{issuer}</p>

            <p className="mt-3 text-secondary text-[13px] leading-[22px] flex-1">
              {description}
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-purple-500/20 flex items-center justify-between text-[#00cea8] text-xs font-semibold group-hover:text-white transition-colors">
            <span>View Verified Credential</span>
            <span className="text-sm font-bold transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
              ↗
            </span>
          </div>
        </a>
      </Tilt>
    </motion.div>
  );
};

const AchievementCard = ({ index, title, description }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="bg-gradient-to-r from-tertiary/90 to-primary/80 p-6 rounded-2xl border border-secondary/20 flex flex-col sm:flex-row items-start sm:items-center gap-4 h-full">
    <div className="w-12 h-12 rounded-xl bg-[#915eff]/20 border border-[#915eff]/40 flex items-center justify-center flex-shrink-0">
      <FaMedal className="text-[#FFD700] text-2xl" />
    </div>
    <div>
      <h4 className="text-white font-bold text-[18px]">{title}</h4>
      <p className="text-secondary text-[14px] mt-1 leading-[22px]">{description}</p>
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <section
      className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-24 pt-2 md:pt-4 lg:pt-6 scroll-mt-20"
      id="certifications">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} pl-0 md:pl-8`}>Credentials & Excellence</p>
        <h2 className={`${styles.sectionHeadText} border-l-4 border-[#00cea8] pl-6 md:pl-6`}>
          Certifications & Achievements
        </h2>
      </motion.div>

      <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {certifications.map((cert, index) => (
          <CertificationCard key={`cert-${index}`} index={index} {...cert} />
        ))}
      </div>

      <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {achievements.map((ach, index) => (
          <AchievementCard key={`ach-${index}`} index={index} {...ach} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
