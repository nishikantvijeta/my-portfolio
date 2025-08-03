const Achievements = () => {
  return (
    <div >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-white bg-green-600 w-full p-4 text-left rounded-lg">
        Achievements
      </h2>

      <div className="grid grid-cols-1 md:mx-4 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-300">
        {/* LeetCode Achievement */}
        <div className="bg-gray-800 p-3 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-yellow-400 mb-1">LeetCode(Knight Badge🛡️)</h2>
          <p className="text-sm mb-2">max rating:</p>
          <p className="text-2xl font-bold text-white mb-2">1845</p>
          <p className="text-sm mb-2">560+ Problems Solved</p>
          <a
            href="https://leetcode.com/u/nishikantvijeta/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 mt-2 text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-400 rounded-lg transition"
          >
            <i className="fa-solid fa-user"></i>
            View Profile
          </a>
        </div>

        {/* GeeksforGeeks */}
        <div className="bg-gray-800 p-5 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-green-400 mb-1">GeeksforGeeks Champion</h3>
          <p className="text-sm mb-2">Solved:</p>
          <p className="text-2xl font-bold text-white mb-2">350+ Problems</p>
          <p className="text-sm mb-2">Status: Active User</p>
          <a
            href="https://www.geeksforgeeks.org/user/nishikantvvl2y/" // Replace with your actual GFG profile
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 mt-2 text-sm font-medium text-white bg-green-500 hover:bg-green-400 rounded-lg transition"
          >
            <i className="fa-solid fa-user"></i>
            View Profile
          </a>
        </div>

        {/* JEE Achievement */}
        <div className="bg-gray-800 p-5 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-purple-400 mb-1">JEE Achievement</h3>
          <p className="text-sm mb-2">Secured</p>
          <p className="text-2xl font-bold text-white mb-2">97.07 percentile</p>
          <p className="text-sm mb-2">Jee Main 2022 Examination</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-3 py-1.5 mt-2 text-sm font-medium text-white bg-purple-500 hover:bg-purple-400 rounded-lg transition"
          >
            <i className="fa-solid fa-award"></i>
            View Profile
          </a>
        </div>
      </div>

      {/* Profile Statistics */}
      <div className="md:mx-6 mt-10">
        <h3 className="text-2xl font-bold text-white mb-4">Coding Profile Statistics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-300">
          {/* LeetCode Stats */}
          <div className="bg-gray-800 p-5 rounded-xl shadow-md">
            <h4 className="text-lg font-bold text-yellow-400 mb-2">LeetCode(Knight Badge🛡️)</h4>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>
                <span className="text-white font-medium">Problems Solved:</span>{' '}
                <span className="text-xl font-bold text-white">560+</span>
              </li>
              <li>
                <span className="text-white font-medium">Max Rating:</span>{' '}
                <span className="text-xl font-bold text-white">1845</span>
              </li>
              <li>
                <span className="text-white font-medium">Activity:</span>{' '}
                <span className="text-lg  text-white">Active User</span>
              </li>
            </ul>
          </div>

          {/* GFG Stats */}
          <div className="bg-gray-800 p-5 rounded-xl shadow-md">
            <h4 className="text-lg font-bold text-green-400 mb-2">GeeksforGeeks</h4>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>
                <span className="text-white font-medium">Problems Solved:</span>{' '}
                <span className="text-xl font-bold text-white">350+</span>
              </li>
              <li>
                <span className="text-white font-medium">Status:</span>{' '}
                <span className="text-lg font-semibold text-white">Active</span>
              </li>
              <li>
                <span className="text-white font-medium">Activity:</span>{' '}
                <span className="text-white">Active User</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
