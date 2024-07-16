import React from "react";
import Community from "../components/Community";
import Sidebar from "../components/Sidebar";

const Communities = () => {
  return (
    <div>
      <div
        className="
      flex
      "
      >
        <Sidebar />
        <Community />
      </div>
    </div>
  );
};

export default Communities;
