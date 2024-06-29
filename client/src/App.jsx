import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import Login from "./components/Login";
import Register from "./components/Register";
import Me from "./Pages/Me";
import Community from "./Pages/Community";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/me" element={<Me />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
