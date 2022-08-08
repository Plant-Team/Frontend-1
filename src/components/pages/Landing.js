
import {Link} from 'react-router-dom'

const LandingNav = () => {
    return (
      <>
      <div className='landing-format'>

        <div>
          <h1 className='landing-title'>Plant World</h1>
          <p className='landing-text'>join us with creating an account and trade some plants.</p>
        </div>
  
        <form className='login-form'>
        <label htmlFor="name">Email</label>
          <input type="email" id="email" placeholder="write Your email" />
          <label htmlFor="name">Password</label>
          <input type="password" id="password" placeholder="write Your password" />
          <button>Login</button>
          <p className='create-account'><Link className='create-account-link'  to='/SignUp'>Create an Account</Link></p>
        </form>

      </div>
      </>
    );
  };
  
  export default LandingNav;