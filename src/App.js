import React, { useState } from 'react'

import "./index.css";
import { Routes, Route, useLocation, useNavigate} from "react-router-dom";

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
import axios from 'axios';

function App() {

  const location = useLocation()
  const navigate = useNavigate()

   const [signIn, setSignIn] = useState({
    username: '',
    password: ''
   })
//setting the token in state
   const [token, setToken] = useState('')

   const handleChange = (event) => {
    setSignIn ({...signIn, [event.target.id]: event.target.value})
   }
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
      console.log('response', res)
      console.log(res.data)
      setToken(res.data.token)
      (navigate('/home'))
    }
      
  )
  }

  return (
    <>


{location.pathname !== '/' && location.pathname !== '/SignUp'  ? <Navigation signIn={signIn}/> : null }
    
      <main>
        <Routes>
          <Route path="/" element={<Landing handleSubmit={handleSubmit} handleChange={handleChange}/>} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/home" element={<Home token={token}/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/myposts" element={<MyPosts/>} />
          <Route path="/createpost" element={<CreatePost/>} />
          <Route path="/createpost" element={<CreatePost/>} />
          <Route path='/plants/:id' element={<EditPost/>}/>
         
          {/* <Route path="/saved" element={<Saved/>} /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
