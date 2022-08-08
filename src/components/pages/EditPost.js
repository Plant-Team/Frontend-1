import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditPost = ({ token }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);

  const config = {headers: {Authorization: `Bearer ${token}`}}

  useEffect(() => {
    // write you fetch or axios here
    axios
      .get(`https://secret-refuge-99565.herokuapp.com/api/plants/${id}`, config)
      .then((res) => {
        console.log("response from data id", res);
        setPost(res.data);
      });
  }, [id]);

  const handleChange = (event) => {
    setPost({ ...post, [event.target.id]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Write your PUT fetch() or axios() request here
    axios
      .put(`https://secret-refuge-99565.herokuapp.com/api/plants/${id}`, post, config)
      .then(() => {
        navigate("/home");
      });
  };

  const handleDelete = () => {
    // Write your DELETE fetch() or axios() request here
    axios
      .delete(`https://secret-refuge-99565.herokuapp.com/api/plants/${id}`, config)
      .then(() => {
        navigate("/home");
      });
  };

  if (!post) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="edit-wraper">
      <h2>Editing {post.name}</h2>
      <form onSubmit={handleSubmit} className='edit-form'>

        <div>
          <label htmlFor="name" className="edit-label">name</label>
          <input onChange={handleChange} id="name" value={post.name} />
        </div>

        <div>
          <label htmlFor="image" className="edit-label">image</label>
          <input onChange={handleChange} id="image" value={post.image} />
        </div>

        <div>
		      <label htmlFor="description" className="edit-label">description</label>
          <input onChange={handleChange} id="description" value={post.description} />
        </div>

        <div>
		      <label htmlFor="location" className="edit-label">location</label>
          <input onChange={handleChange} id="location" value={post.location} />
        </div>

        <div className="btn-block">
          <button type="submit" className="submit-btn">Submit</button>
          <button type="button" className="delete-btn" onClick={handleDelete}>delete</button>
        </div>
      </form>
    </section>
  );
};

export default EditPost;
