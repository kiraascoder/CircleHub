import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Homepage from "./Pages/Homepage";
import Aos from "aos";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
