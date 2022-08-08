import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {

  const navigate = useNavigate()
  const [user, setUser] = useState({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
  })

  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post(`https://secret-refuge-99565.herokuapp.com/api/users/signup`, user)
    .then(() => (navigate('/')))
  }

  return (
    <>
      <div className="signup-background">
        <form onSubmit={handleSubmit} className="signup-form">
          <div>
            <label className="label" htmlFor="firstName">First Name</label>
            <input
            onChange={handleChange}
             type="text"
             id="firstName"
             placeholder="firstName" />
          </div>

          <div>
            <label className="label" htmlFor="lastName">Last Name</label>
            <input
            onChange={handleChange}
            type="text"
            id="lastName"
            placeholder="last name" />
          </div>

          <div>
            <label className="label" htmlFor="username">username</label>
            <input
            onChange={handleChange}
            type="text"
            id="username"
            placeholder="user name" />
          </div>

          <div>
            <label className="label" htmlFor="Email">Email</label>
            <input
            onChange={handleChange}
            type="email"
            id="email"
            placeholder="write Your email" />
          </div>

          <div>
            <label className="label" htmlFor="Password">Password</label>
            <input
            onChange={handleChange}
            type="password"
            id="password"
            placeholder="password" />
          </div>

          <div>
            <label className="label" htmlFor="confirmPassword">Confirm Password</label>
            <input
            onChange={handleChange}
            type="password"
            id="confirmPassword"
            placeholder="confirm password" />
          </div>

          <button type='submit'>Sign up</button>

        </form>
      </div>
    </>
  );
};

export default SignUp;