import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import Followers from "../components/Followers";
import Following from "../components/Following";
import EditProfileModal from "./EditProfile";
import Modal from "react-modal";

// Menetapkan elemen aplikasi utama untuk modal
Modal.setAppElement("#root");

const Me = () => {
  const placeholderImage = "https://via.placeholder.com/150";
  const [showEditModal, setShowEditModal] = useState(false);
  const [userData, setUserData] = useState("");

  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!currentUser || !token) return;

      try {
        console.log("Fetching user profile...");
        const response = await fetch(
          `http://localhost:5000/api/users/${currentUser.data.id}`,
          {
            method: "GET",
            credentials: "include", // Jika Anda perlu mengirim cookies
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json", // Menambahkan header content-type jika diperlukan
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        if (result) {
          console.log("User profile fetched successfully:", result);
          setUserData(result); // Mengatur state dengan data pengguna
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, [currentUser, token]);

  useEffect(() => {
    const fetchFollowers = async () => {
      if (!currentUser || !token) return;
      try {
        console.log("Fetching followers...");
        const response = await fetch(
          `http://localhost:5000/api/users/${currentUser.data.id}/followers`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = await response.json();

        if (result.success) {
          console.log(
            "Followers fetched successfully:",
            result.followers.length
          );
          setFollowersCount(result.followers.length);
        } else {
          console.error("Error fetching followers:", result.message);
        }
      } catch (error) {
        console.error("Error fetching followers:", error);
      }
    };

    const fetchFollowing = async () => {
      if (!currentUser || !token) return;
      try {
        console.log("Fetching following...");
        const response = await fetch(
          `http://localhost:5000/api/users/${currentUser.data.id}/followings`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = await response.json();

        if (result.success) {
          console.log(
            "Following fetched successfully:",
            result.followings.length
          );
          setFollowingCount(result.followings.length);
        } else {
          console.error("Error fetching following:", result.message);
        }
      } catch (error) {
        console.error("Error fetching following:", error);
      }
    };

    fetchFollowers();
    fetchFollowing();
  }, [currentUser, token]);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <section id="profile" className="container lg:pt-7">
      <div className="flex flex-col justify-center sm:py-12">
        <div className="w-full flex gap-10 py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
          {/* Column for image and basic info */}
          <div className="w-full md:basis-1/2">
            <div className="relative">
              <img
                src={placeholderImage}
                alt="Profile"
                className="w-72 h-72 rounded-full border-2 object-cover"
              />
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-semibold mt-6">{userData?.name}</h1>
              <div className="flex justify-center mt-2 gap-2">
                <i className="ri-edit-circle-line"></i>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => setShowEditModal(true)}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Column for additional information */}
          <div className="w-full basis-1/2 mt-10 sm:mt-0">
            <div className="container">
              <div className="space-y-1">
                <label className="text-xl font-semibold">Bio:</label>
                <p>{userData?.desc}</p>

                <label className="text-xl font-semibold">Email:</label>
                <p>{userData?.email}</p>

                <label className="text-xl font-semibold">Phone Number:</label>
                <p>{userData?.phoneNumber}</p>

                <div className="mt-4">
                  <Link to={`followers`}>
                    <Followers followersCount={followersCount} />
                  </Link>
                  <Link to={`following`}>
                    <Following followingCount={followingCount} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditProfileModal
        isOpen={showEditModal}
        onRequestClose={() => setShowEditModal(false)}
      />
    </section>
  );
};

export default Me;
