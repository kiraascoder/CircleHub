import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import id from "javascript-time-ago/locale/id.json";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(id);

const PostAuthor = ({ authorID, createdAt, postID }) => {
  const [author, setAuthor] = useState(null); // Ubah ke null untuk cek loading

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/users/${authorID}`
        );
        setAuthor(response.data);
      } catch (error) {
        console.error("Error fetching author:", error);
      }
    };
    fetchAuthor();
  }, [authorID]);

  if (author === null) {
    return <div>Loading...</div>; // Tampilkan loading state
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 -mt-1">
          {author.name}
        </h2>
        <small className="text-sm text-gray-700">
          <ReactTimeAgo date={new Date(createdAt)} locale="id" />
        </small>
      </div>
    </div>
  );
};

export default PostAuthor;
