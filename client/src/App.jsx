import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cookies from "universal-cookie";
import Login from "./components/Login";
import Register from "./components/Register";
import Me from "./Pages/Me";
import Community from "./Pages/Community";
import Homepage from "./Pages/Homepage";
import Friends from "./Pages/Friends";
import Setting from "./Pages/Setting";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/me" element={<Me />} />
          <Route path="/community" element={<Community />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
