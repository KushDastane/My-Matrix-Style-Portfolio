/* eslint-disable no-unused-vars */
import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mr. Yash Raut",
    text: "Kush developed a full website and admin panel for us, his professionalism and problem-solving abilities made a significant impact on our online presence.",
    organization: "V.V. Caring Centre",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-20 px-6 bg-black text-green-300 font-mono"
    >
      <div className="absolute inset-0 bg-[radial-gradient(#00ff8877_0.5px,transparent_0.5px)] [background-size:18px_18px] opacity-20 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-12 tracking-wide uppercase">
          Testimonials.log
        </h2>

        <div className="flex justify-center">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative text-center rounded-xl p-8 bg-[#0e1111]/60 backdrop-blur-md border border-green-800 shadow-md "
            >
              {/* stars */}
              <div className="flex items-center justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) =>
                  i < item.stars ? (
                    <FaStar key={i} className="text-green-400 text-lg" />
                  ) : (
                    <FaRegStar key={i} className="text-green-800 text-lg" />
                  )
                )}
              </div>

              {/* Terminal style text */}
              <p className="text-green-200 italic leading-relaxed mb-6 max-w-md mx-auto">
                “{item.text}”
              </p>

              <p className="text-green-400 text-sm font-semibold tracking-wider">
                – {item.name}
              </p>
              <p className="text-green-400 text-sm font-semibold tracking-wider">
                ({item.organization})
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
