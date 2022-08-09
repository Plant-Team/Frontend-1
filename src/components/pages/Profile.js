import React, { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

const Profile = (  ) => {  
const [isprofile, setIsProfile] = useState(null)


const { id } = useParams();
const navigate = useNavigate();

// const [post, setPost] = useState(null);

// const config = {headers: {Authorization: `Bearer ${token}`}}

useEffect(() => {
  // write you fetch or axios here
  axios
    .get(`https://secret-refuge-99565.herokuapp.com/api/users/${id}`)
    .then((res) => {
      console.log("response from data id", res);
      setIsProfile(res.data);
    });
}, [id]);

const handleChange = (event) => {
  setIsProfile({ ...isprofile, [event.target.id]: event.target.value });
}

const handleSubmit = (event) => {
  event.preventDefault();
  // Write your PUT fetch() or axios() request here
  axios
    .put(`https://secret-refuge-99565.herokuapp.com/api/users/${id}`, isprofile)
    .then(() => {
      navigate("/home");
    });
};

const handleDelete = () => {
  // Write your DELETE fetch() or axios() request here
  axios
    .delete(`https://secret-refuge-99565.herokuapp.com/api/users/${id}`)
    .then(() => {
      navigate("/");
    });
};

if (!isprofile) {
  return <h1>Loading...</h1>;
}

return (
  <section className="edit-wraper">
    <h2>Editing {isprofile.name}</h2>
    <form onSubmit={handleSubmit} className='edit-form'>

      <div>
        <label htmlFor="firstName" className="edit-label">first name</label>
        <input onChange={handleChange} id="firstName" value={isprofile.firstName} />
      </div>

      <div>
        <label htmlFor="lastName" className="edit-label">last name</label>
        <input onChange={handleChange} id="lastName" value={isprofile.lastName} />
      </div>

      <div>
            <label htmlFor="username" className="edit-label">username</label>
        <input onChange={handleChange} id="username" value={isprofile.username} />
      </div>

      <div>
            <label htmlFor="email" className="edit-label">email</label>
        <input onChange={handleChange} id="email" value={isprofile.email} />
      </div>

      <div>
            <label htmlFor="password" className="edit-label">password</label>
        <input onChange={handleChange} id="password" value={isprofile.password} />
      </div>

      <div>
            <label htmlFor="confirmPassword" className="edit-label">confirm password</label>
        <input onChange={handleChange} id="confirmPassword" value={isprofile.confirmPassword} />
      </div>

      <div className="btn-block">
        <button type="submit" className="submit-btn">Submit</button>
        <button type="button" className="delete-btn" onClick={handleDelete}>delete</button>
      </div>
    </form>
  </section>
);
};

export default Profile;