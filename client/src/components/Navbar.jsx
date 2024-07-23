import React, { useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Navbar = () => {
  const headerRef = useRef(null);
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (headerRef.current) {
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollTop > 80) {
        headerRef.current.classList.add("fixed__header");
      } else {
        headerRef.current.classList.remove("fixed__header");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigateToProfile = () => {
    const userID = currentUser.data.id;
    console.log("User ID:", userID); // Debug log
    if (userID) {
      navigate(`/me/${userID}`);
    } else {
      console.error("User ID is not available");
    }
  };

  const handleLogout = () => {
    // Clear user from context and localStorage
    setCurrentUser(null);
    localStorage.removeItem("user"); // Clear user data from localStorage
    navigate("/login"); // Redirect to login page
  };

  return (
    <header
      ref={headerRef}
      className="w-full h-[60px] leading-[80px] flex items-center"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center"></span>
            <div className="leading-[20px]">
              <a href="/homepage">
                <h2 className="text-xl text-smallTextColor font-[700]">
                  Circle Hub
                </h2>
              </a>
            </div>
          </div>
          {/* End Logo */}
          {/* Menu Kanan */}
          <div className="flex items-center gap-4">
            {currentUser ? (
              <>
                <button
                  onClick={navigateToProfile}
                  className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300 text-sm "
                >
                  <i className="ri-user-line"></i>My Account
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-smallTextColor font-[600] py-2 px-4 rounded-[8px] max-h-[50px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300 text-lg "
                >
                  <i className="ri-logout-box-line"></i>Log out
                </button>
              </>
            ) : (
              <a href="/login">
                <button className="flex items-center gap-2 text-smallTextColor font-[600] py-2 px-4 rounded-[8px] max-h-[50px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300 text-lg ">
                  <i className="ri-login-box-line"></i>Login
                </button>
              </a>
            )}
          </div>
          {/* Akhir Menu Kanan */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
