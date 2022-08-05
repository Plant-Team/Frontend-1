

import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";

// pages
import Landing from "./components/pages/Landing";
import SignUp from "./components/pages/SignUp";
import Navigation from "./components/navbar/Navigation";
import Home from "./components/pages/Home";
// import Saved from "./components/pages/Saved";
import About from "./components/pages/About";
import MyPosts from "./components/pages/MyPosts";

function App() {

  const location = useLocation()

   



  return (
    <>


{location.pathname !== '/' && location.pathname !== '/SignUp'  ? <Navigation/> : null }
    
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/myposts" element={<MyPosts/>} />
          {/* <Route path="/saved" element={<Saved/>} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
