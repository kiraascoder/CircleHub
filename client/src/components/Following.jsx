import React from "react";

const Following = ({ followingCount }) => {
  return (
    <div>
      <div className="text-xl font-semibold mt-4">Following:</div>
      <p>{followingCount}</p> {/* Display number of followings */}
    </div>
  );
};

export default Following;
