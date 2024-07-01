import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import RoomChat from "../components/RoomChat";

const Community = () => {
  return (
    <div>
      <Layout />
      <div
        className="
      flex"
      >
        <Sidebar />
        <div className="grow">
          <p>Testing</p>
        </div>
      </div>
    </div>
  );
};

export default Community;
