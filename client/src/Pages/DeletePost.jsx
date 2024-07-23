import React, { useContext, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/userContext";
import axios from "axios";

const DeletePost = ({ postID, onDelete }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentUser = useContext(UserContext);
  const token = currentUser?.currentUser?.token;

  const deletePost = useCallback(async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/posts/${postID}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        onDelete(postID); // Call the onDelete prop function after successful deletion
        navigate("/homepage");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  }, [postID, token, navigate, onDelete]);

  return (
    <button
      className="btn sm danger"
      onClick={deletePost}
      style={{ cursor: "pointer" }}
    >
      Delete
    </button>
  );
};

export default DeletePost;
