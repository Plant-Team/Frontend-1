import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import { RiPlantLine } from "react-icons/ri";

const Navigation = ( {signIn, token} ) => {
  // console.log('nav console', profile)
  // const {id} = useParams()
  const [users, setUsers] = useState([]);
  const url = {
    api: "https://secret-refuge-99565.herokuapp.com/api",
    endpoint: "/users/",
  };
  // const config = {headers: {Authorization: `Bearer ${token}`}}

  useEffect(() => {
    const url_api = `${url.api}${url.endpoint}`;
    // console.log('config is' + config)
    fetch(url_api)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  function findUser(username) {
    // const find = users.find(user => user.username === username)

    for (let i = 0; i <= users.length - 1 ; i++) {
    
        if(users[i].username === signIn.username){
           const userLog = users[i]._id
          console.log('this is user', users[i]._id)
          setUsers(userLog)
        }
      
    }
  }

  findUser()
  return (
    <>
    
      <nav className="nav-bar">
        

        <Link to='/'><p className="app-title">Plant World <RiPlantLine /></p></Link>


        <ul className="menu-nav" >
        <Link to='/home'><li>Home</li></Link>
        {/* <Link to='/saved'><li>Saved</li></Link> */}
        {/* <Link to='/myposts'><li>My Posts</li></Link> */}
        <Link to='/About'><li>About</li></Link>
        </ul>
        <div className="user-menu">

          <p>Welcome <Link to={`/Profile/${users}`}>{signIn.username}!</Link></p>


          <Link to='/'><p>log out</p></Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
