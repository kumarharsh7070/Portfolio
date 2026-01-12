import React from "react";
import heroBg from "../assets/images/hero-bg.jpg";
import profile from "../assets/images/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-white">
        
        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
           Kumar  Harsh
          </h1>

          <h2 className="text-xl md:text-2xl text-blue-400 mb-6">
            Full Stack Developer
          </h2>

          <p className="text-gray-300 max-w-xl mb-8">
            I design and build scalable web & mobile applications using
            React, Node.js, MongoDB, and Flutter. I love solving real-world
            problems with clean and efficient code.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="/harsh_final.pdf"
              download
              className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="profile"
            className="w-72 h-72 rounded-2xl object-cover shadow-2xl border border-white/20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
