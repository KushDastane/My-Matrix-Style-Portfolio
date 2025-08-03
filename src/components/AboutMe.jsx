import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaMusic, FaPencilAlt } from "react-icons/fa";
import { GiPianoKeys } from "react-icons/gi"; // for a better keyboard/piano icon

const matrixSymbols = ["0", "1", "Ж", "Ψ", "¥", "Σ", "λ", "中"];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center px-6 py-20 bg-[#f9f9f9] text-gray-800 relative"
    >
      {/* Profile Image with Matrix Rising Symbols */}
      <div className="relative w-72 h-72 mb-8 md:mb-0 md:mr-10">
        {/* Floating matrix symbols rising from border of image */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {[...Array(30)].map((_, i) => {
            const angle = Math.random() * 2 * Math.PI;
            const radius = 132;
            const x = radius * Math.cos(angle) + 144 - 5;
            const y = radius * Math.sin(angle) + 144 - 10;

            const delay = Math.random() * 2;
            const duration = 3 + Math.random() * 2;
            const symbol =
              matrixSymbols[Math.floor(Math.random() * matrixSymbols.length)];

            return (
              <span
                key={i}
                className="absolute text-green-500 text-sm font-mono opacity-60 animate-matrix-up"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                }}
              >
                {symbol}
              </span>
            );
          })}
        </div>

        <motion.img
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          src="/kush.png"
          alt="Kush Dastane"
          className="w-72 h-72 rounded-full object-cover  relative z-20"
        />
      </div>

      {/* Text Content */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-xl text-center md:text-left relative"
      >
        <div className="text-3xl font-semibold mb-4 text-gray-900">
          <span className="text-green-600">I’m </span>
          <div className="relative">
            <div className="min-h-[90px] sm:min-h-[100px] md:min-h-[80px] relative overflow-hidden">
              <Typewriter
                words={["Kush Dastane.", "a Creative Developer."]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </div>
          </div>
        </div>

        <p className="text-xs md:text-lg leading-relaxed text-gray-700 mb-6">
          I'm not only a website developer who does conventional programming but
          also someone who loves to think creatively! Trying out new
          technologies, applying them in real projects is something that drives
          me! My approach is rooted in user experience, clarity, and
          performance.
        </p>

        <div className="border-l-4 border-green-500 pl-4 ml-1">
          <p className="text-gray-700">
            “विद्या ददाति विनयं, विनयाद् याति पात्रताम्।”
          </p>
          <p className="text-sm text-gray-500 mt-1">
            *Knowledge brings humility, and from humility comes true worth*
          </p>
        </div>

        {/* Hobbies Section */}
        <div className="mt-8 justify-center  text-sm md:text-base text-gray-700">
          <p className="font-semibold text-green-600 mb-2">Hobbies:</p>
          <ul className="flex flex-wrap gap-4 justify-center md:justify-start">
            <li className="flex items-center gap-2 ">
              <GiPianoKeys className="text-black" /> Casio
            </li>
            <li className="flex items-center gap-2">
              <FaPencilAlt className="text-black" /> Sketching
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
