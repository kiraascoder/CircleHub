import React from "react";

const Sidebar = () => {
  return (
    <div>
      <aside className="flex">
        <div className="flex flex-col items-center w-12 h-screen py-8 space-y-8 bg-white dark:border-gray-700">
          <a href="/homepage">
            <i className="ri-home-smile-line"></i>
          </a>

          <a href="/community">
            <i className="ri-group-line"></i>
          </a>

          <a href="friends">
            <i className="ri-user-follow-line"></i>
          </a>
          <a href="setting" className="">
            <i className="ri-settings-line"></i>
          </a>
        </div>
        <div className="h-screen py-8 overflow-y-auto bg-white  sm:w-52 w-60">
          <h2 className="px-5 text-lg font-medium dark:text-black">Friends</h2>
          <div className="">
            <div className="mt-4 space-y-4">
              <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
                <img></img>
                <div className="text-left rtl:text-right">
                  <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-black">
                    Harris
                  </h1>

                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    11.2 Followers
                  </p>
                </div>
              </button>
            </div>
          </div>
          <h2 className="px-5 py-5 text-lg font-medium dark:text-black">
            Community
          </h2>
          <div className="">
            <div className="space-y-4">
              <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
                <img></img>
                <div className="text-left rtl:text-right">
                  <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-black">
                    Harris
                  </h1>

                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    11.2 Followers
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
