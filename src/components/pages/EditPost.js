import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const EditPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState();
    const [modal, setModal] = useState(false);

    
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
		axios.put(`https://secret-refuge-99565.herokuapp.com/api/plants${id}`, post)
		.then(() => {
			navigate('/myposts')
		})
		
	};

    const handleDelete = () => {
		// Write your DELETE fetch() or axios() request here
		axios.delete(`https://secret-refuge-99565.herokuapp.com/api/plants${id}`)
		.then(() => {
			navigate('/myposts');
		})
	};

  return (
    <section>
			{modal ? (
				<div className='modal'>
					<h2>Editing {post.name}</h2>
					<form onSubmit={handleSubmit}>
						<label htmlFor='post'>Post</label>
						<input onChange={handleChange} id='post' value={post.name} />
						<label htmlFor='description'>Description</label>
                        <label htmlFor='image'>Image</label>
                        <input onChange={handleChange} id='image' value={post.image} />
                        <label htmlFor='location'>Location</label>
                        <input onChange={handleChange} id='image' value={post.location} />
						<input
							onChange={handleChange}
							id='description'
							value={post.decription}
						/>
						<button type='submit'>Submit</button>
						<button type='button' onClick={closeModal}>
							Close
						</button>
					</form>
				</div>
			) : (
				<>
                <button onClick={editShowPage}>Edit</button>
				<button onClick={handleDelete}>Delete</button>
				</>
			)}
		</section>
	);
};

export default EditPost