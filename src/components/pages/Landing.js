
import {Link} from 'react-router-dom'

const LandingNav = ( {handleChange, handleSubmit} ) => {
    return (
      <>
      <div className='landing-format'>

        <div>
          <h1 className='landing-title'>Plant World</h1>
          <p className='landing-text'>join us with creating an account and trade some plants.</p>
        </div>
  
        <form onSubmit={handleSubmit} className='login-form'>
        <label htmlFor="username">username</label>
          <input onChange={(event) => handleChange (event)} type="text" id="username" placeholder="username" />
          <label htmlFor="password">Password</label>
          <input onChange={(event) => handleChange (event)} type="password" id="password" placeholder="password" />
          <button>Login</button>
          <p className='create-account'><Link className='create-account-link'  to='/SignUp'>Create an Account</Link></p>
        </form>

      </div>
      </>
    );
  };
  
  export default LandingNav;