import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Home from "../components/Home";
const Homepage = () => {
  return (
    <div>
      <Layout />
      <div
        className="
      flex"
      >
        <Sidebar />
        <Home />
      </div>
    </div>
  );
};

export default Homepage;
