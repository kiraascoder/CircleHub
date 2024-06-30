import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import Login from "./components/Login";
import Register from "./components/Register";
import Me from "./Pages/Me";
import Community from "./Pages/Community";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Friends from "./Pages/Friends";

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
          <Route path="/friends" element={<Friends />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
