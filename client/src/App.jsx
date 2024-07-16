import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cookies from "universal-cookie";
import Login from "./components/Login";
import Register from "./components/Register";
import Me from "./Pages/Me";
import Communities from "./Pages/Communities";
import Homepage from "./Pages/Homepage";
import Friends from "./Pages/Friends";
import Setting from "./Pages/Setting";
import Layout from "./components/Layout";
import Logout from "./Pages/Logout";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route>
              <Route index path="homepage" element={<Homepage />} />
              <Route path="logout" element={<Logout />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="me" element={<Me />} />
              <Route path="community" element={<Communities />} />
              <Route path="friends" element={<Friends />} />
              <Route path="setting" element={<Setting />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
