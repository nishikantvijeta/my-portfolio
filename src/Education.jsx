import React from "react";

const Education = () => (
  <div>
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white bg-pink-600 w-full p-4 md:p-6 text-left rounded-lg">
      Education
    </h2>

    {/* B.Tech */}
    <div className="bg-gray-800 rounded-xl p-4 md:p-8 shadow-lg text-gray-300 mb-8 mx-2 md:mx-8">
      {/* Row 1 */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-graduation-cap text-blue-400 text-xl md:text-2xl"></i>
          <h3 className="text-base md:text-xl font-semibold">
            B.Tech in Electronics and Communication Engineering
          </h3>
        </div>
        <div className="flex items-center gap-2 text-sm md:text-base mt-2 md:mt-0">
          <i className="fa-solid fa-calendar-days text-blue-400"></i>
          <span className="text-white">2022 - 2026 (Expected)</span>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-location-dot text-blue-400 text-lg md:text-xl"></i>
          <p className="text-base md:text-lg font-medium text-blue-300">
            National Institute of Technology, Patna
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm md:text-base mt-2 md:mt-0">
          <i className="fa-solid fa-chart-line text-blue-400"></i>
          <span className="text-gray-400 font-semibold">CGPA:</span>
          <span className="text-white">7.26</span>
        </div>
      </div>

      <p className="text-sm md:text-base text-gray-400 mt-1">
        Electronics and Communication Engineering
      </p>
    </div>

    {/* Intermediate */}
    <div className="bg-gray-800 rounded-xl p-4 md:p-8 shadow-lg text-gray-300 mb-8 mx-2 md:mx-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-graduation-cap text-blue-400 text-xl md:text-2xl"></i>
          <h3 className="text-base md:text-xl font-semibold">Intermediate</h3>
        </div>
        <div className="flex items-center gap-2 text-sm md:text-base mt-2 md:mt-0">
          <i className="fa-solid fa-calendar-days text-blue-400"></i>
          <span className="text-white">2021</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-location-dot text-blue-400 text-lg md:text-xl"></i>
          <p className="text-base md:text-lg font-medium text-blue-300">
            S.N.S College, Tekari, Gaya (BSEB Board)
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm md:text-base mt-2 md:mt-0">
          <i className="fa-solid fa-chart-line text-blue-400"></i>
          <span className="text-gray-400 font-semibold">Percentage:</span>
          <span className="text-white">83.6</span>
        </div>
      </div>

      <p className="text-sm md:text-base text-gray-400 mt-1">
        Intermediate (Science)
      </p>
    </div>

    {/* Secondary */}
    <div className="bg-gray-800 rounded-xl p-4 md:p-8 shadow-lg text-gray-300 mb-8 mx-2 md:mx-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-graduation-cap text-blue-400 text-xl md:text-2xl"></i>
          <h3 className="text-base md:text-xl font-semibold">Secondary</h3>
        </div>
        <div className="flex items-center gap-2 text-sm md:text-base mt-2 md:mt-0">
          <i className="fa-solid fa-calendar-days text-blue-400"></i>
          <span className="text-white">2019</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-location-dot text-blue-400 text-lg md:text-xl"></i>
          <p className="text-base md:text-lg font-medium text-blue-300">
            R.D Public School, Tekari (CBSE Board)
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm md:text-base mt-2 md:mt-0">
          <i className="fa-solid fa-chart-line text-blue-400"></i>
          <span className="text-gray-400 font-semibold">Percentage:</span>
          <span className="text-white">92</span>
        </div>
      </div>

      <p className="text-sm md:text-base text-gray-400 mt-1">
        Secondary School Education
      </p>
    </div>
  </div>
);

export default Education;
