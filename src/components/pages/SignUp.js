import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUp = ({getUsers}) => {

  const navigate = useNavigate()
  const [user, setUser] = useState({
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      valid:''
  })


  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value })
   
  }

//   function capitalizeInputValue(string) {
//     string = string.toLowerCase().split(' ');
//    for (let i = 0; i < string.length; i++) {
//      string[i] = string[i].charAt(0).toUpperCase() +
//      string[i].substring(1);
//    }
//    return string.join(' ');
//  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    if(user.password === user.confirmPassword) {
        if(user.password.length && user.confirmPassword.length >= 8 ) {
       
        console.log('valid')
        setUser({...user, valid: 'valid'})
        axios.post(`https://secret-refuge-99565.herokuapp.com/api/users/signup`, user)
        .then(() => {
          getUsers()
          navigate('/')
        })
        
      } else {
        alert('password should be 8 characters or more!! ')
      }
      } else {
        console.log('invalid')
        setUser({...user, valid: 'invalid'})
    }
    
    
  }

  return (
    <>
      <div className="signup-background">
        <form onSubmit={handleSubmit} className="signup-form">
          <div>
            <label className="label" htmlFor="firstname">First Name</label>

            <input 
            onChange={handleChange}
             type="text"
             id="firstname"
             placeholder="firstName" required />
          </div>

          <div>
            <label className="label" htmlFor="lastName">Last Name</label>
            <input 
            onChange={handleChange}
            type="text"
            id="lastname"
            placeholder="last name" required />
           </div>

          <div>
            <label className="label" htmlFor="username">username</label>
            <input
            onChange={handleChange}
            type="text"
            id="username"
            placeholder="user name" required />
          </div>

          <div>
            <label className="label" htmlFor="Email">Email</label>
            <input
            onChange={handleChange}
            type="email"
            id="email"
            placeholder="write Your email" required />
          </div>

          <div>
            <label className="label" htmlFor="Password">Password</label>
            <input
            onChange={handleChange}
            type="password"
            id="password"
            placeholder="password" required />
          </div>

          <div>
            <label className="label" htmlFor="confirmPassword">Confirm Password</label>
            <input
            onChange={handleChange}
            type="password"
            id="confirmPassword"
            placeholder="confirm password" required/>
          </div>

          <p className={user.valid}><span className='valid-default' >Passwords must match.</span></p>
          <button type='submit'>Sign up</button>

        </form>
      </div>
    </>
  );
};

export default SignUp;