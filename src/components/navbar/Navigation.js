import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="nav-bar">
        <p>Plant app</p>
        <ul className="menu-nav" >
        <Link to='/home'><li>Home</li></Link>
        <Link to='/saved'><li>Saved</li></Link>
        </ul>
        <div className="user-menu">
          <p>Welcome</p>
          <Link to='/'><p>log out</p></Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
