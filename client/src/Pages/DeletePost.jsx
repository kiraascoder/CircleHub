import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const DeletePost = () => {
  const navigate = useNavigate();
  const currentUser = useContext(UserContext);
  const token = currentUser?.currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <p>Delete Post</p>
    </div>
  );
};

export default DeletePost;
