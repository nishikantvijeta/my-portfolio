const Projects = () => (
  <div>
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white bg-blue-500 w-full p-4 md:p-6 text-left rounded-lg">
      Projects
    </h2>

    <div className="grid grid-cols-1 md:mx-6 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* Project Card Template */}
      {/* Example: LMS */}
      <div className="bg-gray-800 rounded-xl p-4 shadow-lg text-gray-300">
        <h3 className="text-lg font-bold text-blue-300">LMS (Learning Management System)</h3>
        <p className="text-sm text-green-400 mb-1">Completed - 2024</p>
        <p className="text-gray-400 text-sm mb-2">
          A full-stack LMS to manage online courses, users, payments and more with a modern UI.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-400 mb-2">
          <li>Role-based auth</li>
          <li>Payment integration</li>
          <li>Secure backend</li>
        </ul>
        <p className="text-sm mb-2">
          <strong className="text-gray-400">Tech:</strong> React, Node.js, MongoDB, Razorpay
        </p>
        <div className="flex gap-4 mt-3">
          <a
            href="https://github.com/nishikantvijeta/lms3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 rounded-lg shadow transition"
          >
            <i className="fa-brands fa-github text-white"></i>
            Code
          </a>
          <a
            href="https://lms-5.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow transition"
          >
            <i className="fa-solid fa-up-right-from-square text-white"></i>
            Live Demo
          </a>
        </div>
      </div>

      {/* Tic-Tac-Toe */}
      <div className="bg-gray-800 rounded-xl p-4 shadow-lg text-gray-300">
        <h3 className="text-lg font-bold text-blue-300">Tic-Tac-Toe</h3>
        <p className="text-sm text-green-400 mb-1">Completed</p>
        <p className="text-gray-400 text-sm mb-2">
          A React-based fun game of Tic-Tac-Toe with smart UI.
        </p>
        <ul className="list-disc list-inside text-sm text-gray-400 mb-2">
          <li>Two-player interactive gameplay</li>
          <li>Instant win/draw detection</li>
          <li>Responsive grid layout</li>
          <li>Clean and intuitive UI</li>
        </ul>
        <p className="text-sm mb-2">
          <strong className="text-gray-400">Tech:</strong> ReactJS
        </p>
        <div className="flex gap-4 mt-3">
          <a
            href="https://github.com/nishikantvijeta/tic-tac-toe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 rounded-lg shadow transition"
          >
            <i className="fa-brands fa-github text-white"></i>
            Code
          </a>
          <a
            href="https://tic-tac-toe-nishikants-projects-9dd911be.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow transition"
          >
            <i className="fa-solid fa-up-right-from-square text-white"></i>
            Live
          </a>
        </div>
      </div>

      {/* Repeat the same button style for other projects */}

      {[
        {
          title: "Weather App",
          desc: "A responsive weather app displaying real-time weather for different locations with smooth navigation.",
          features: ["Real-time weather", "Location search", "Responsive & optimized"],
          tech: "HTML, CSS, JavaScript",
          code: "https://github.com/nishikantvijeta/weather-app-project",
          live: "https://github.com/nishikantvijeta/weather-app-project"
        },
        {
          title: "Calculator",
          desc: "A simple calculator built using HTML, CSS, and JS.",
          tech: "HTML, CSS, JavaScript",
          code: "https://github.com/nishikantvijeta/Calculator",
          live: "https://nishikantvijeta.github.io/Calculator/"
        },
        {
          title: "Currency Converter",
          desc: "A web tool for converting currencies based on exchange rate.",
          tech: "JavaScript, HTML, CSS",
          code: "https://github.com/nishikantvijeta/Currency-Converter",
          live: "https://nishikantvijeta.github.io/Currency-Converter/"
        },
        {
          title: "Food Delivery Website",
          desc: "A simple static food delivery website showing menus and UI.",
          tech: "HTML, CSS, JavaScript",
          code: "https://github.com/nishikantvijeta/food-delivery",
          live: "https://nishikantvijeta.github.io/food-delivery/"
        }
      ].map((project, index) => (
        <div key={index} className="bg-gray-800 rounded-xl p-4 shadow-lg text-gray-300">
          <h3 className="text-lg font-bold text-blue-300">{project.title}</h3>
          <p className="text-sm text-green-400 mb-1">Completed</p>
          <p className="text-gray-400 text-sm mb-2">{project.desc}</p>
          {project.features && (
            <ul className="list-disc list-inside text-sm text-gray-400 mb-2">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          )}
          <p className="text-sm mb-2">
            <strong className="text-gray-400">Tech:</strong> {project.tech}
          </p>
          <div className="flex gap-4 mt-3">
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 rounded-lg shadow transition"
            >
              <i className="fa-brands fa-github text-white"></i>
              Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow transition"
            >
              <i className="fa-solid fa-up-right-from-square text-white"></i>
              Live
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
