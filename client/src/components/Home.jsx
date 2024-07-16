import React, { useState } from "react";

import CreatePost from "../Pages/CreatePost";
import Posts from "./Posts";

const Home = () => {
  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  return (
    <div>
      <div className="flex bg-white shadow-lg rounded-lg md:max-w-2xl mb-2">
        <div className="flex items-start px-4 py-6">
          <img
            className="w-12 h-12 rounded-full object-cover mr-4 shadow"
            src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="avatar"
          />
          <button
            data-modal-target="crud-modal"
            data-modal-toggle="crud-modal"
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={toggleCard}
          >
            {!showCard ? "Buat Postingan" : "Buat Postingan"}
          </button>
        </div>
      </div>
      {showCard && <CreatePost onClose={toggleCard} />}
      <Posts />
    </div>
  );
};

export default Home;
