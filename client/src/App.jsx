import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePost from "./Pages/CreatePost";
import Login from "./components/Login";
import Register from "./components/Register";
import Me from "./Pages/Me";
import Communities from "./Pages/Communities";
import Homepage from "./Pages/Homepage";
import Friends from "./Pages/Friends";
import Followers from "./components/Followers";
import Following from "./components/Following";
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
              <Route path="me/:id" element={<Me />} />
              <Route path="community" element={<Communities />} />
              <Route path="friends" element={<Friends />} />
              <Route path="createpost" element={<CreatePost />} />
              <Route path="followers" element={<Followers />} />
              <Route path="following" element={<Following />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
