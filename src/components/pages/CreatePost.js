import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const CreatePost = () => {


  const navigate = useNavigate();
  const [post, setPost] = useState({
    name: "",
    image: "",
    description: "",
    location: "",
  });


function handleChange(event) {
setPost({...post, [event.target.id]: event.target.value })
}

function handleSubmit(event) {
    event.preventDefault()
    axios.post('https://secret-refuge-99565.herokuapp.com/api/plants', post)
    .then(() => {
        console.log(post)
        navigate('/home')
    })
}   


  return (
    <>
      <h1> this is post</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <input onChange={handleChange} type="text" id="name" placeholder="name" />
        <input onChange={handleChange} type="text" id="image" placeholder="image-url" />
        <input onChange={handleChange} type="text" id="description" placeholder="description" />
        <input onChange={handleChange} type="text" id="location" placeholder="location" />
        <button type='submit'>Create</button>
      </form>
    </>
  );
};

export default CreatePost;
