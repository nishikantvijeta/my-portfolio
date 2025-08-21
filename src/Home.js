import React from "react";

const Home = () => (
  <div className="mt-16 p-4 text-center min-h-screen flex flex-col justify-center items-center space-y-4">
    <h1 className="text-3xl sm:text-4xl font-bold">
      Hi, I'm <span className="text-blue-400">Nishikant Kumar</span>.
    </h1>

    <h2 className="text-lg sm:text-xl text-gray-300">
      Full Stack Developer (MERN Stack) | B.Tech student at NIT Patna
    </h2>

    <p className="text-gray-400 text-base sm:text-xl max-w-xl sm:max-w-2xl px-4">
      I'm passionate about problem-solving and driven to build innovative,
      user-friendly web applications that address real-world challenges with
      clean and efficient code.
    </p>

    {/* Contact Buttons */}
    <div className="flex flex-wrap justify-center gap-4 text-base sm:text-xl mt-4">
      {/* Email */}
      <a
        href="mailto:nishikantk.ug22.ec@nitp.ac.in"
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-semibold"
      >
        <i className="fas fa-envelope"></i>
        nishikantk.ug22.ec@nitp.ac.in
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/nishikant-kumar-5101a3271"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full font-semibold"
      >
        <i className="fab fa-linkedin"></i>
        LinkedIn
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/nishikantvijeta"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-full font-semibold"
      >
        <i className="fab fa-github"></i>
        GitHub
      </a>
    </div>

    {/* Navigation Buttons */}
    <div className="mt-6 flex flex-wrap justify-center gap-4">
      <a
        href="#about"
        className="bg-blue-500 hover:bg-blue-600 text-white text-lg sm:text-2xl px-4 py-2 rounded-xl transition"
      >
        Read More
      </a>

      <a
        href="#contact"
        className="bg-green-500 hover:bg-green-600 text-white text-lg sm:text-2xl px-4 py-2 rounded-xl transition"
      >
        Contact Me
      </a>

      <a
        href="https://drive.google.com/file/d/1gBoDRI2i413_h9C74GWY3kvsSTKt5kRP/view?usp=sharing"
        download
        className="bg-gray-700 hover:bg-gray-800 text-white text-lg sm:text-2xl px-4 py-2 rounded-xl transition"
      >
        My Resume
      </a>
    </div>
  </div>
);

export default Home;
