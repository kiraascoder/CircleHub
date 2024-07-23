import React from "react";

const Followers = ({ followersCount }) => {
  return (
    <div>
      <div className="text-xl font-semibold">Followers:</div>
      <p>{followersCount}</p> {/* Display number of followers */}
    </div>
  );
};

export default Followers;
