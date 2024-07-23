import React from "react";
import Sidebar from "../components/Sidebar";
import Home from "../components/Home";
const Homepage = () => {
  return (
    <div>
      <div
        className="
      flex"
      >
        <Sidebar  />
        <Home />
      </div>
    </div>
  );
};

export default Homepage;
