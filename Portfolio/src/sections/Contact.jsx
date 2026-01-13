import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Let’s Connect
        </h2>

        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          I’m open to full-time roles, internships, and freelance opportunities.
          Feel free to reach out — I usually respond quickly.
        </p>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-14">

          {/* Email */}
          <a
            href="mailto:hk995814@gmail.com"
            className="group bg-white/10 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white hover:text-black transition"
          >
            <FaEnvelope className="text-3xl mb-3 mx-auto text-blue-400 group-hover:text-black" />
            <p className="text-sm text-gray-400 group-hover:text-gray-600 mb-1">
              Email
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/kumarharsh7070"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white hover:text-black transition"
          >
            <FaGithub className="text-3xl mb-3 mx-auto text-blue-400 group-hover:text-black" />
            <p className="text-sm text-gray-400 group-hover:text-gray-600 mb-1">
              GitHub
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kumar-harsh-4350ba254/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white hover:text-black transition"
          >
            <FaLinkedin className="text-3xl mb-3 mx-auto text-blue-400 group-hover:text-black" />
            <p className="text-sm text-gray-400 group-hover:text-gray-600 mb-1">
              LinkedIn
            </p>
           
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="mailto:hk995814@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold"
        >
          <FaEnvelope />
          Send Me an Email
        </a>

        {/* Footer */}
        <p className="text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} Harsh Kumar. All rights reserved.
        </p>

      </div>
    </section>
  );
};

export default Contact;
