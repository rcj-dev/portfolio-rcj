/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ItensSkills from "./ItensSkills";
import Html from "../../src/assets/ImagensSkills/html.svg";
import Css from "../../src/assets/ImagensSkills/css.svg";
import Git from "../../src/assets/ImagensSkills/github.svg";
import Js from "../../src/assets/ImagensSkills/javascript.svg";
import Rc from "../../src/assets/ImagensSkills/react.svg";
import Figma from "../../src/assets/ImagensSkills/figma.svg";
import Tail from "../../src/assets/ImagensSkills/tailwind.svg";
import Py from "../../src/assets/ImagensSkills/python.svg";

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("skills-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { icon: Html, text: "html", hoverClass: "hover:drop-shadow-[0_0_25px_rgba(227,100,110,1)]" },
    { icon: Css, text: "css", hoverClass: "hover:drop-shadow-[0_0_25px_rgba(57,150,219,1)]" },
    { icon: Js, text: "javascript", hoverClass: "hover:drop-shadow-[0_0_25px_rgba(234,189,95,1)]" },
    { icon: Rc, text: "react", hoverClass: "hover:drop-shadow-[0_0_25px_rgba(57,150,219,1)]" },
    { icon: Git, text: "github", hoverClass: "hover:drop-shadow-[0_0_25px_rgba(192,196,206,1)]" },
    { icon: Figma, text: "figma", hoverClass: "hover:drop-shadow-[0_0_25px_rgba(255,114,55,1)]" },
    { icon: Tail, text: "tailwind", hoverClass: "hover:drop-shadow-[0_0_25px_rgba(57,150,219,1)]" },
    { icon: Py, text: "python", hoverClass: "hover:drop-shadow-[0_0_25px_rgba(234,189,95,1)]" },
  ];

  return (
    <div id="skills-section" className="mt-20 h-auto flex items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center w-10/12">
        <h1 className="fira-code font-sobre-mim text-[#fff] mb-10 md:15">
          <span className="text-[#6060dd]">#</span>skills
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-11/12 place-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.text}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`transition duration-300 ease-in-out ${skill.hoverClass}`}
            >
              <ItensSkills icon={skill.icon} text={skill.text} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
