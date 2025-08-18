/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaTerminal } from "react-icons/fa";

const experiences = [
  {
    role: "Full-Stack Web Intern",
    duration: "June 2025 – July 2025",
    description:
      "➤ Designed, engineered & hosted a full-stack web platform for VV Caring Centre.\n➤ Built an internal Admin Panel for managing content dynamically.\n➤ Utilized React 19, Firebase, Firestore, and Tailwind in a Vite setup.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 bg-[#0a0f0d] text-green-400 font-mono tracking-wide"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center  glitch-text mb-16">
          ./Experience
        </h2>

        <div className="relative border-l-[2px] border-green-700 ml-4 space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-10 group"
            >
              {/* Glowing dot */}
              <div className="absolute -left-[8px] top-2 w-4 h-4 bg-green-400 rounded-full shadow-[0_0_8px_2px_rgba(34,197,94,0.6)]" />

              <div className="bg-[#111] border border-green-700/40 rounded-lg p-5 shadow-md transition-transform ">
                <h3 className="text-xl font-bold text-green-300">
                  &gt; {exp.role}
                </h3>
                <p className="text-sm text-green-500 mb-3">{exp.duration}</p>
                <pre className="whitespace-pre-wrap text-green-200 text-sm leading-relaxed">
                  {exp.description}
                </pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
