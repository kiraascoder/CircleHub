import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const location = useLocation();
  const noNavPaths = ["/login", "/register", "/"];

  const shouldShowNavbar = !noNavPaths.includes(location.pathname);

  return (
    <div>
      {shouldShowNavbar && <Navbar />}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
