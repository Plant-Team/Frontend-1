import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const CreatePost = ( {token} ) => {


  const navigate = useNavigate();
  const [post, setPost] = useState({
    name: "",
    image: "",
    description: "",
    location: "",
  });

  const config = {headers: {Authorization: `Bearer ${token}`}}


function handleChange(event) {
setPost({...post, [event.target.id]: event.target.value })
}

function handleSubmit(event) {
    event.preventDefault()
    axios.post('https://secret-refuge-99565.herokuapp.com/api/plants', post, config)
    .then(() => {
        console.log("the post is" + post)
        navigate('/home')
    })
}   


  return (
    <>
      
      <form onSubmit={handleSubmit} className="create-form">

      <div>
        <label className="create-label" htmlFor="name">Name</label>
        <input onChange={handleChange} type="text" id="name" placeholder="name" />
      </div>

      <div>
        <label className="create-label" htmlFor="image">Image</label>  
        <input onChange={handleChange} type="text" id="image" placeholder="image-url" />
      </div>  

      <div>
        <label className="create-label" htmlFor="description">Description</label>
        <input onChange={handleChange} type="text" id="description" placeholder="description" />
      </div>

      <div>
        <label className="create-label" htmlFor="location">Location</label>
        <input onChange={handleChange} type="text" id="location" placeholder="location" />
      </div>
        <button className="create-button" type='submit'>Create</button>
      </form>
    </>
  );
};

export default CreatePost;
