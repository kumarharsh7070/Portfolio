import React from "react";

const skills = [
  {
    title: "Frontend Development",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    title: "Data Structures & Algorithms",
    items: ["Arrays", "Strings", "Linked Lists", "Stacks", "Queues", "Recursion"],
  },
  {
    title: "Core Computer Science",
    items: ["DBMS", "Operating Systems", "Computer Networks", "OOPs"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "Vercel", "Render"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies and concepts I actively use while building
            real-world applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-6 hover:scale-[1.02] transition"
            >
              <h3 className="text-lg font-semibold mb-4 text-blue-400">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-white/20 text-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
