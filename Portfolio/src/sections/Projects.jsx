import React from "react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Some of the real-world applications I’ve built using modern
            technologies.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] transition"
            >
              <div className="h-full rounded-2xl bg-gray-900 p-6 flex flex-col justify-between">

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 mt-auto">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      className="flex-1 text-center py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-sm font-medium"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex-1 text-center py-2 rounded-lg border border-white/20 hover:bg-white hover:text-black transition text-sm font-medium"
                  >
                    GitHub
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
