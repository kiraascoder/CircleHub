import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Logout = () => {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Logging out...");
    setCurrentUser(null);
    console.log("User removed from localStorage");
    navigate("/login");
  }, [setCurrentUser, navigate]);

  return <div>Logging out...</div>;
};

export default Logout;
