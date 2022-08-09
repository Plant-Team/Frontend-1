import { Link } from "react-router-dom";
import 

const Navigation = ( {signIn, profile} ) => {
  console.log(profile)
  return (
    <>
      <nav className="nav-bar">
        
        <p>Plant World</p>
        <ul className="menu-nav" >
        <Link to='/home'><li>Home</li></Link>
        {/* <Link to='/saved'><li>Saved</li></Link> */}
        <Link to='/myposts'><li>My Posts</li></Link>
        <Link to='/About'><li>About</li></Link>
        </ul>
        <div className="user-menu">
          <p>Welcome <Link to={`/Profile`}>{signIn.username}!</Link></p>
          <Link to='/'><p>log out</p></Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
