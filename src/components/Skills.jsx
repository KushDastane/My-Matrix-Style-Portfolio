import React, { useState } from "react";
import {
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaCloud,
  FaJava,
} from "react-icons/fa";
import {
  SiFirebase,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiC,
  SiCplusplus,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
    ],
  },
  {
    title: "Backend / Database",
    skills: [
      { name: "Node.js", icon: <FaNode className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: <SiC className="text-blue-400" /> },
      { name: "C++", icon: <SiCplusplus className="text-indigo-400" /> },
      { name: "Java", icon: <FaJava className="text-orange-600" /> },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Cloudflare", icon: <FaCloud className="text-yellow-300" /> },
      { name: "SEO & Lazy Load", icon: <FaCloud className="text-green-300" /> },
    ],
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-[#0a0f0d] text-white relative z-10"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold tracking-widest glitch-text">
          ./Skills
        </h2>
        <p className="text-sm text-gray-400 mt-2">
          Tech I use to craft experiences
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-3 mb-10">
        {skillCategories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-all duration-300 ${
              activeTab === index
                ? "bg-green-500 text-black shadow-md"
                : "border-white/20 text-gray-400 hover:text-white"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Skills List as flex-wrap, not grid */}
      <div className="max-w-5xl mx-auto px-2">
        <div className="flex flex-wrap justify-center md:gap-8 gap-3">
          {skillCategories[activeTab].skills.map((skill, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center bg-white/5 border border-white/10 rounded-lg px-4 py-5 w-[110px] shadow-inner backdrop-blur-sm transition-all hover:scale-105"
            >
              <div className="text-2xl mb-2 group-hover:-rotate-6 transition-transform duration-300">
                {skill.icon}
              </div>
              <p className="text-xs font-medium text-gray-200 text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
