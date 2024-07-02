import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

const Setting = () => {
  return (
    <div>
      <Layout />
      <div
        className="
          flex"
      >
        <Sidebar />
        <p>Testing</p>
      </div>
    </div>
  );
};

export default Setting;
