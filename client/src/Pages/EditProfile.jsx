import React, { useState, useContext } from "react";
import Modal from "react-modal";
import axios from "axios"; // Pastikan axios diimport
import { UserContext } from "../context/userContext";

const EditProfile = ({ isOpen, onRequestClose }) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const user = currentUser?.data;

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    desc: user?.desc || "",
    phoneNumber: user?.phoneNumber || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/users/${currentUser.data.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        setCurrentUser((prev) => ({
          ...prev,
          data: response.data.user,
        }));
        onRequestClose();
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error("Failed to update profile", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Profile"
      ariaHideApp={false}
    >
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Current Password:
          <input
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
          />
        </label>
        <label>
          New Password:
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
          ></textarea>
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </Modal>
  );
};

export default EditProfile;
