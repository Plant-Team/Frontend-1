
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
          <input type="email" id="email" placeholder="write Your email" />
          <input type="password" id="password" placeholder="write Your password" />
          <button>Login</button>
          <p><Link to='/SignUp'>Create an Account</Link></p>
        </form>

      </div>
      </>
    );
  };
  
  export default LandingNav;