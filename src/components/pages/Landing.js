
import {Link} from 'react-router-dom'

const LandingNav = () => {
    return (
      <>
      <div className='landing-format'>

        <div>
          <h1>Plant App</h1>
          <p>join us with creating an account and trade some plants.</p>
        </div>
  
        <form className='login-form'>
        <label htmlFor="username">username</label>
          <input type="text" id="username" placeholder="username" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="password" />
          <button>Login</button>
          <p className='create-account'><Link className='create-account-link'  to='/SignUp'>Create an Account</Link></p>
        </form>

      </div>
      </>
    );
  };
  
  export default LandingNav;