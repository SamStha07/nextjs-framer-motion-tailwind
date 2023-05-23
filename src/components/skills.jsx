import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="absolute flex cursor-pointer items-center justify-center rounded-full bg-dark px-6 py-3 font-semibold text-light shadow-dark"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="mt-[100px]">
      <h2 className="w-full text-center text-8xl font-bold">Skills</h2>
      <div className="relative flex h-screen w-full items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex cursor-pointer items-center justify-center rounded-full bg-dark p-8 font-semibold text-light shadow-dark"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" x="-25vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="23vw" y="6vw" />
        <Skill name="Reactjs" x="0vw" y="11vw" />
        <Skill name="Nextjs" x="-20vw" y="-15vw" />
        <Skill name="Tailwind CSS" x="20vw" y="18vw" />
      </div>
    </div>
  );
};

export default Skills;
