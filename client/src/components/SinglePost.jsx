import React, { useState, useEffect } from "react";
import axios from "axios";
import PostAuthor from "./PostAuthor";

const SinglePost = ({
  postID,
  title,
  category,
  desc,
  img,
  authorID,
  createdAt,
  onDelete,
  currentUserName,
}) => {
  const [author, setAuthor] = useState({});
  const [isFollowing, setIsFollowing] = useState(false);

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

  useEffect(() => {
    const checkFollowingStatus = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/users/${currentUserName}/following/${authorID}`
        );
        setIsFollowing(response.data.isFollowing);
      } catch (error) {
        console.error("Error checking following status:", error);
      }
    };
    checkFollowingStatus();
  }, [currentUserName, authorID]);

  const imageUrl = img ? `http://localhost:5000/uploads/${img}` : null;

  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      onDelete(postID);
    }
  };

  const handleFollowClick = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/users/${currentUserName}/follow/${authorID}`
      );
      setIsFollowing(response.data.isFollowing);
    } catch (error) {
      console.error("Error following user:", error);
    }
  };

  return (
    <div className="flex bg-white shadow-lg rounded-lg md:max-w-2xl mb-2">
      <div className="flex items-start px-4 py-6">
        <img
          className="w-12 h-12 rounded-full object-cover mr-4 shadow"
          src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="avatar"
        />

        <div className="flex-1">
          <PostAuthor
            authorID={authorID}
            createdAt={createdAt}
            postID={postID}
          />
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{category}</p>
          <p className="mt-3 text-gray-700 text-sm">{desc}</p>
          {imageUrl && (
            <div className="mt-3">
              <img
                src={imageUrl}
                className="w-full h-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/150";
                }}
              />
            </div>
          )}
          <div className="mt-4 flex items-center">
            <div className="flex text-gray-700 text-sm mr-3">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-1"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span>12</span>
            </div>
            <div className="flex text-gray-700 text-sm mr-8">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-1"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              <span>8</span>
            </div>
            {currentUserName === author.name && (
              <button
                onClick={handleDeleteClick}
                className="ml-auto px-3 py-1 text-sm font-semibold text-white bg-red-600 rounded hover:bg-red-700"
              >
                Delete
              </button>
            )}
            {currentUserName !== author.name && !isFollowing && (
              <button
                onClick={handleFollowClick}
                className="ml-auto px-3 py-1 text-sm font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                Follow
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
