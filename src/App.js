import React, { useState, useEffect } from 'react'

import "./index.css";
import { Routes, Route, useLocation, useNavigate, useParams} from "react-router-dom";

// pages
import Landing from "./components/pages/Landing";
import SignUp from "./components/pages/SignUp";
import Navigation from "./components/navbar/Navigation";
import Home from "./components/pages/Home";
// import Saved from "./components/pages/Saved";
import About from "./components/pages/About";
import MyPosts from "./components/pages/MyPosts";
import CreatePost from "./components/pages/CreatePost";
import EditPost from "./components/pages/EditPost";
import Profile from './components/pages/Profile';
import axios from 'axios';

function App() {

  const location = useLocation()
  const navigate = useNavigate()

  // The signin state
   const [signIn, setSignIn] = useState({
    username: '',
    password: ''
   })
//setting the token in state
   const [token, setToken] = useState('')

// API call for user, sending it to Navigate
// Profile State
// const [profile, setProfile] = useState(null)
// // 
// const {id} = useParams()
// // Use effect for profile
// useEffect(() => {
//   // write you fetch or axios here
//   axios
//     .get(`https://secret-refuge-99565.herokuapp.com/api/users/`)
//     .then((res) => {
      
//       setProfile(res.data[1]._id);
//       console.log("response from data id App", profile)
//     });
// }, []);

// Handlechange for logging in
   const handleChange = (event) => {
    setSignIn ({...signIn, [event.target.id]: event.target.value})
   }
  //  console.log(signIn)
  const loginUrl = `https://secret-refuge-99565.herokuapp.com/api/users/signin`
  const config = {
    headers: {
      'Content-Type': 'application/JSON',
      'Accept-Language': 'TH'
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  axios.post(loginUrl, signIn, config)
    .then(res => {
      console.log(res.data)
      setToken(res.data.token)
      (navigate('/home'))
    }
      
  )
  }

  return (
    <>


{location.pathname !== '/' && location.pathname !== '/SignUp'  ? <Navigation signIn={signIn} token={token} /> : null }
    
      <main>
        <Routes>
          <Route path="/" element={<Landing handleSubmit={handleSubmit} handleChange={handleChange}/>} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/home" element={<Home token={token}/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/myposts" element={<MyPosts/>} />
          <Route path="/createpost" element={<CreatePost token={token}/>} />
          <Route path='/plants/:id' element={<EditPost token={token}/>}/>
          <Route path='/Profile/:id' element={<Profile token={token}/>}/>
         
          {/* <Route path="/saved" element={<Saved/>} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
