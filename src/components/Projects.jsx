import React from "react";
import {
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPlaycanvas,
  SiExpress,
  SiCloudflare,
} from "react-icons/si";
import SmartLazyImage from "./SmartLazyImage";

const projects = [
  {
    title: "Diksha Foundation",
    tools: [SiReact, SiTailwindcss, SiFirebase, SiCloudflare],
    link: "https://www.vvcaringcentre.com/",
    image: "/projects/vvcaring.webp",
  },
  {
    title: "University Lost & Found",
    tools: [SiHtml5, SiCss3, SiJavascript, SiExpress],
    link: "https://retrievia-lost-found-system-for.onrender.com/",
    image: "/projects/L&F.webp",
  },
  {
    title: "WebAR (Augmented Reality) App",
    tools: [SiJavascript, SiPlaycanvas],
    link: "https://github.com/KushDastane/3D-Web-AR-Heart-Anatomy-.git",
    image: "/projects/AR.webp",
  },
];

const Projects = () => {
  return (
    <section
      className="py-20 px-6 bg-[#0a0f0d] text-green-400 font-mono"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-center font-bold mb-16 glitch-text">
          ./MajorProjects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-[#0e0e0e] border border-green-700 rounded-lg overflow-hidden shadow-none hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Thumbnail */}
              <SmartLazyImage
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover border-b border-green-800"
                fetchpriority="high"
              />
              {/* Terminal Bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-green-900/20 border-b border-green-700">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full" />
                  <span className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <span className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                C:\Users
              </div>
              {/* Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-md text-green-300 font-semibold mb-3">
                    ➤ {project.title}
                  </div>

                  {/* Tech Stack Icons */}
                  <div className="flex flex-wrap gap-3 mb-6 text-green-500 text-xl">
                    {project.tools.map((Icon, idx) => (
                      <Icon key={idx} />
                    ))}
                  </div>
                </div>

                {/* Visit Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center text-sm text-black bg-green-400 px-4 py-2 rounded hover:bg-green-300 transition"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
