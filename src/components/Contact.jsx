import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto  px-6 py-20 flex flex-col md:flex-row items-start justify-center md:gap-20 gap-10"
    >
      {/* Left - Social Handles */}
      <motion.div
        className="flex flex-col gap-6 md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-[#111] border-l-4 border-green-500 pl-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 max-w-md leading-relaxed text-justify">
          I’m open to collaborations, freelance opportunities, or just a tech
          talk. Let’s connect on any of these platforms.
        </p>
        <div className="flex flex-col gap-4 text-[#111]">
          <a
            href="https://wa.me/9820060064"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-green-600 transition"
          >
            <FaWhatsapp size={22} /> WhatsApp
          </a>
          <a
            href="mailto:kushdastane69211@gmail.com"
            className="flex items-center gap-3 hover:text-blue-600 transition"
          >
            <FaEnvelope size={22} /> Email
          </a>
          <a
            href="https://github.com/KushDastane"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-gray-400 transition"
          >
            <FaGithub size={22} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/Kush-Dastane"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-blue-800 transition"
          >
            <FaLinkedin size={22} /> LinkedIn
          </a>
        </div>
      </motion.div>

      {/* Right - Contact Form */}
      <motion.div
        className="bg-gray-300 p-8 rounded-xl shadow-md md:w-1/2 w-full"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl text-center font-semibold text-[#111] mb-6">
          Send a Message
        </h3>
        <form
          action="https://formspree.io/f/mkgzvqod"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-4 py-2 border rounded-md focus:ring-1 focus:ring-green-500 outline-none bg-[#f9f9f9]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-4 py-2 border rounded-md focus:ring-1 focus:ring-green-500 outline-none bg-[#f9f9f9]"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="px-4 py-1 border rounded-md focus:ring-1 focus:ring-green-500 outline-none bg-[#f9f9f9]"
          />
          <button
            type="submit"
            className="bg-green-600 text-white flex items-center justify-center gap-2 py-2 px-6 rounded-md hover:bg-green-700 transition"
          >
            <FaPaperPlane size={16} />
            Send
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
