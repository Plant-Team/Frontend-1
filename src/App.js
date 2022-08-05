

import "./index.css";
import { Routes, Route, useLocation } from "react-router-dom";

// pages
import Landing from "./components/pages/Landing";
import SignUp from "./components/pages/SignUp";
import Navigation from "./components/navbar/Navigation";
import Home from "./components/pages/Home";
import Saved from "./components/pages/Saved";

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
          <Route path="/saved" element={<Saved/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
