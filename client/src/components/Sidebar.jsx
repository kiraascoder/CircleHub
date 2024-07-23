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
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
