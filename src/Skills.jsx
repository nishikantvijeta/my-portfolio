import React from "react";

const Skills = () => (
  <div >
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white bg-purple-700 w-full p-4 md:p-6 text-left rounded-lg">
      Skills & Technologies
    </h2>

    {/* Skills Section - 2 columns */}
    <div className="grid grid-cols-1 mx-2 md:mx-6 mt-10 md:grid-cols-2 gap-6">
      {/* Programming Languages */}
      <div className="bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg text-gray-300">
        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <i className="fa-solid fa-code text-blue-400"></i> Programming Languages
        </h3>
        <ul className="list-disc list-inside text-gray-400 space-y-1">
          <li>C++</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>

      {/* Technologies */}
      <div className="bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg text-gray-300">
        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <i className="fa-solid fa-gears text-blue-400"></i> Technologies
        </h3>
        <ul className="list-disc list-inside text-gray-400 space-y-1">
          <li>Data Structures & Algorithms</li>
          <li>Problem Solving</li>
          <li>OOP</li>
          <li>Operating Systems</li>
          <li>Computer Networks</li>
          <li>DBMS</li>
        </ul>
      </div>

      {/* Tools */}
      <div className="bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg text-gray-300">
        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <i className="fa-solid fa-screwdriver-wrench text-blue-400"></i> Tools
        </h3>
        <ul className="list-disc list-inside text-gray-400 space-y-1">
          <li>Git & GitHub</li>
          <li>VS Code</li>
          <li>Xilinx</li>
        </ul>
      </div>

      {/* Strong Areas */}
      <div className="bg-gray-800 rounded-xl p-4 md:p-6 shadow-lg text-gray-300">
        <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <i className="fa-solid fa-star text-blue-400"></i> I am really good at
        </h3>
        <ul className="list-disc list-inside text-gray-400 space-y-1">
          <li>Problem Solving</li>
          <li>Web Development</li>
          <li>Software Engineering</li>
        </ul>
      </div>
    </div>

    {/* Proficiency Levels - Horizontal 3 cards */}
    <h3 className="text-2xl font-bold text-white mt-10 mb-4 text-center">Proficiency Levels</h3>
    <div className="grid grid-cols-1  md:mx-6 mt-6 md:grid-cols-3 gap-4">
  {/* Advanced */}
  <div className="bg-gray-800 rounded-xl p-4 shadow-lg text-gray-300 text-center">
    <div className="w-10 h-10 rounded-full bg-green-400 text-white flex items-center justify-center text-lg font-bold mb-2 mx-auto">
      A
    </div>
    <p className="text-white font-semibold">Advanced</p>
    <p className="text-gray-400 mt-1">C++, Problem Solving</p>
  </div>

  {/* Intermediate */}
  <div className="bg-gray-800 rounded-xl p-4 shadow-lg text-gray-300 text-center">
    <div className="w-10 h-10 rounded-full bg-yellow-400 text-white flex items-center justify-center text-lg font-bold mb-2 mx-auto">
      I
    </div>
    <p className="text-white font-semibold">Intermediate</p>
    <p className="text-gray-400 mt-1">JavaScript,React.js DBMS, OOPs, Computer Networks</p>
  </div>

  {/* Beginner */}
  <div className="bg-gray-800 rounded-xl p-4 shadow-lg text-gray-300 text-center">
    <div className="w-10 h-10 rounded-full bg-red-400 text-white flex items-center justify-center text-lg font-bold mb-2 mx-auto">
      B
    </div>
    <p className="text-white font-semibold">Beginner</p>
    <p className="text-gray-400 mt-1">Python, Advanced OS Concepts</p>
  </div>
</div>

  </div>
);

export default Skills;
