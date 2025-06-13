import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwmn-kDblo7_Ng4xpM4mo5drl_e3p4arG6JAPJ1-uyk_c37LP0jzRj3aumODb5lF983aQ/exec";
    const form = document.forms["submit-to-google-sheet"];

    // Create a message div for displaying messages
    const messageDiv = document.createElement("div");
    messageDiv.style.color = "green"; // Style the message
    messageDiv.style.marginTop = "10px";
    messageDiv.style.fontWeight = "bold";

    const submitHandler = (e) => {
      e.preventDefault();

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          messageDiv.textContent = "Message sent successfully!";
          form.appendChild(messageDiv); // Append the message to the form
          form.reset(); // Reset the form fields
          console.log("Success!", response);

          // Remove the message after 3 seconds
          setTimeout(() => {
            messageDiv.textContent = "";
          }, 3000);
        })
        .catch((error) => {
          messageDiv.textContent = "Error! " + error.message;
          messageDiv.style.color = "red"; // Change color for error message
          form.appendChild(messageDiv);
          console.error("Error!", error);
        });
    };

    form.addEventListener("submit", submitHandler);

    return () => form.removeEventListener("submit", submitHandler);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-6 md:p-12 flex flex-col md:flex-row gap-1">
      {/* Left: Contact Info */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center space-y-8 p-8 bg-gray-900 text-white min-h-[300px] md:min-h-full">

        <div className="space-y-4 text-lg">
          <p>
            <i className="fas fa-envelope text-blue-400 mr-3"></i>
            nishikantk.ug22.ec@nitp.ac.in
          </p>
          <p>
            <i className="fas fa-phone text-blue-400 mr-3"></i>+91-9973391516
          </p>
          <p>
            <i className="fas fa-location-dot text-blue-400 mr-3"></i>
            NIT Patna, Bihar, India
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-blue-400 mb-4">Follow Me</h3>
          <div className="flex justify-center space-x-6 text-3xl">
            <a
              href="https://www.linkedin.com/in/nishikantvijeta"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/nishikantvijeta"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.youtube.com/@nishikantvijeta"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
              aria-label="YouTube"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div className="md:w-1/2 bg-gray-800 rounded-xl p-8 shadow-lg">
        <h2 className="text-4xl font-extrabold mb-6 text-white text-center">
          Contact Me
        </h2>

        <form
          name="submit-to-google-sheet"
          className="flex flex-col gap-6"
          noValidate
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded shadow transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
