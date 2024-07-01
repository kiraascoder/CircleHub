import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import RoomChat from "../components/RoomChat";
const Friends = () => {
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

export default Friends;
