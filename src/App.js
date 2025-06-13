// App.js
import React from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Achievements from "./Achievements";

import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">
      <Sidebar />

      {/* Content shifted for fixed sidebar on desktop */}
      <main className="mt-[-4rem] md:pt-0 md:ml-72 p-4 space-y-10">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        
        <section id="achievements"><Achievements /></section>
        
        <section id="contact"><Contact /></section>
        <Footer />
      </main>
    </div>
  );
}


export default App;
