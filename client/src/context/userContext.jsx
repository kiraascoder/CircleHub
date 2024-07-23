import { createContext, useEffect, useState } from "react";

// Membuat UserContext
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // Inisialisasi state dengan data dari localStorage, jika ada
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    // Menyimpan currentUser ke localStorage jika tidak null
    if (currentUser === null) {
      localStorage.removeItem("user");
    } else {
      localStorage.setItem("user", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
