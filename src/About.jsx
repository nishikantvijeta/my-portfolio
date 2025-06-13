import React from "react";

const About = () => (
    // className="p-6 md:ml-40 mt-20 md:mt-0 max-w-8xl
  <div>
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white bg-red-500 w-full p-4 md:p-6 text-left rounded-lg">About Me</h2>
    <div className="p-4">
    <p className="text-gray-300 text-lg leading-relaxed">
      I'm a passionate Full Stack Developer currently pursuing my B.Tech in Electronics and Communication Engineering at <span className="text-blue-400 font-semibold">NIT Patna</span>.  
      I have worked on technologies like <span className="text-blue-300">HTML, CSS, JavaScript, React.js</span>, and enjoy solving problems and building modern, responsive web applications that make a real-world impact.
    
     I am passionate about developing complex applications that solve real-world problems impacting users.
    </p>

    <ul className="text-gray-300 text-md mt-6 ml-6 list-disc space-y-1">
      <li><strong>Languages:</strong> JavaScript, C++, HTML, CSS</li>
      <li><strong>Frontend:</strong> React.js, Tailwind CSS, Bootstrap</li>
      <li><strong>Backend:</strong> Node.js, Express.js</li>
      <li><strong>Database:</strong> MongoDB, MySQL</li>
      <li><strong>Tools:</strong> Git, GitHub, VS Code</li>
      <li><strong>Other Interests:</strong> Data Structures & Algorithms, UI/UX Design</li>
    </ul>

    <p className="text-gray-300 text-lg leading-relaxed mt-6">
      I'm always looking for new opportunities to learn, grow, and contribute to impactful tech solutions. Let's build something amazing together!
    </p>
</div>
  </div>
);

export default About;
