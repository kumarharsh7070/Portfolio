import React from "react";

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
            href="mailto:yourmail@gmail.com"
            className="group bg-white/10 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white hover:text-black transition"
          >
            <p className="text-sm text-gray-400 group-hover:text-gray-600 mb-1">
              Email
            </p>
            <p className="font-semibold">yourmail@gmail.com</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="group bg-white/10 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white hover:text-black transition"
          >
            <p className="text-sm text-gray-400 group-hover:text-gray-600 mb-1">
              GitHub
            </p>
            <p className="font-semibold">github.com/yourusername</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="group bg-white/10 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-white hover:text-black transition"
          >
            <p className="text-sm text-gray-400 group-hover:text-gray-600 mb-1">
              LinkedIn
            </p>
            <p className="font-semibold">linkedin.com/in/yourprofile</p>
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="mailto:yourmail@gmail.com"
          className="inline-block px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold"
        >
          Send Me an Email
        </a>

        {/* Footer Note */}
        <p className="text-gray-500 text-sm mt-10">
          © {new Date().getFullYear()} Harsh Kumar. All rights reserved.
        </p>

      </div>
    </section>
  );
};

export default Contact;
