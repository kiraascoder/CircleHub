import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PostAuthor = ({ authorID, createdAt }) => {
  const [author, setAuthor] = useState({});

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/users/${authorID}`
        );
        setAuthor(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAuthor();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 -mt-1">
          {author.name}
        </h2>
        <small className="text-sm text-gray-700">{createdAt}</small>
      </div>
    </div>
  );
};

export default PostAuthor;
