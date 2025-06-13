import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Left Column - About */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">About</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            I hope you like my portfolio. If you have any query then feel free to ask or contact me.
          
            <br />
            Thanks! Have a great day!
          </p>
        </div>

        {/* Middle Column - Links */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Links</h3>
          <div className="flex flex-col space-y-2 text-sm">
  <a href="#about" className="hover:text-red-500 transition">About</a>
  <a href="#education" className="hover:text-red-500 transition">Education</a>
  <a href="#projects" className="hover:text-red-500 transition">Projects</a>
  <a href="#skills" className="hover:text-red-500 transition">Skills</a>
  <a href="#achievements" className="hover:text-red-500 transition">Achievements</a>
  <a href="#contact" className="hover:text-red-500 transition">Contact</a>
</div>
        </div>

        {/* Right Column - Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Have a Question?</h3>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-300">
            <i className="fas fa-map-marker-alt text-blue-400"></i>
            Patna, Bihar, India
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-300">
            <i className="fas fa-phone text-blue-400"></i>
            +91 9973391516
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-300">
            <i className="fas fa-envelope text-blue-400"></i>
            nishikantk.ug22.ec@nitp.ac.in
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-2 text-xl">
            <a
              href="https://github.com/nishikantvijeta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-100"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/nishikant-kumar-5101a3271/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center border-t border-gray-700 pt-6 text-sm">
        <p className="text-gray-400 font-semibold">
         Copyright <span className="text-white font-bold"> © 2025</span>. All rights reserved.
        </p>
        <p className="text-m text-gray-400 mt-1 font-semibold">
          Built with React and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
