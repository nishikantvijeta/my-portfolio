import React from "react";

const links = [
  { name: "Home", icon: "fa-solid fa-house", mobile: false },
  { name: "About", icon: "fa-solid fa-user", mobile: true },
  { name: "Education", icon: "fa-solid fa-graduation-cap", mobile: true },
  { name: "Projects", icon: "fa-solid fa-diagram-project", mobile: true },
  { name: "Skills", icon: "fa-solid fa-tools", mobile: false },
  { name: "Achievements", icon: "fa-solid fa-trophy", mobile: false },
  { name: "Contact", icon: "fa-solid fa-envelope", mobile: true },
];

const Sidebar = () => {
  return (
    <>
      {/* ✅ Mobile Top Navbar */}
      <nav className="md:hidden flex flex-wrap justify-center gap-3 bg-gray-800 text-white p-3 fixed top-0 left-0 w-full z-50">
        {links
          .filter((link) => link.mobile)
          .map(({ name, icon }) => (
            <a
              key={name}
              href={`#${name.toLowerCase()}`}
              className="flex items-center gap-1 text-sm font-semibold px-2 py-1 hover:text-blue-400"
            >
              <i className={`${icon} text-base`}></i>
              {name}
            </a>
          ))}
      </nav>

      {/* ✅ Mobile Profile Image - Only on small screens */}
      <div className="md:hidden flex flex-col items-center pt-28 mb-[-5rem]">
        <img
          src="/myimage.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover"
        />
      </div>

      {/* ✅ Desktop Sidebar */}
      <aside className="hidden md:flex flex-col fixed top-0 left-0 h-full w-72 bg-gray-800 text-white p-6 z-40">
        <img
          src="/myimage.jpg"
          alt="Profile"
          className="w-56 h-56 rounded-full mb-8 object-cover mx-auto"
        />
        <ul className="space-y-3 ml-8">
          {links.map(({ name, icon }) => (
            <li key={name}>
              <a
                href={`#${name.toLowerCase()}`}
                className="flex items-center gap-4 hover:text-blue-400 transition text-xl"
              >
                <i className={`${icon} text-blue-400 text-sm`}></i>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
