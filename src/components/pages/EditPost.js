import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditPost = ({ match }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    // write you fetch or axios here
    axios
      .get(`https://secret-refuge-99565.herokuapp.com/api/plants/${id}`)
      .then((res) => {
        console.log("response from data id", res);
        setPost(res.data);
      });
  }, [id]);

  const handleChange = (event) => {
    setPost({ ...post, [event.target.id]: event.target.value });
  };

  const editShowPage = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Write your PUT fetch() or axios() request here
    axios
      .put(`https://secret-refuge-99565.herokuapp.com/api/plants/${id}`, post)
      .then(() => {
        navigate("/home");
      });
  };

  const handleDelete = () => {
    // Write your DELETE fetch() or axios() request here
    axios
      .delete(`https://secret-refuge-99565.herokuapp.com/api/plants/${id}`)
      .then(() => {
        navigate("/home");
      });
  };

  if (!post) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <h2>Editing {post.name}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input onChange={handleChange} id="name" value={post.name} />
        <label htmlFor="image">image</label>
        <input onChange={handleChange} id="image" value={post.image} />
		<label htmlFor="description">description</label>
        <input onChange={handleChange} id="description" value={post.description} />
		<label htmlFor="location">location</label>
        <input onChange={handleChange} id="location" value={post.location} />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleDelete}>delete</button>
      </form>
    </section>
  );
};

export default EditPost;
