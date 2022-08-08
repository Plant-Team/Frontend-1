import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Search from "./Search";

// import ListGroup from "react-bootstrap/ListGroup";
const Post = ({ token }) => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('')

  const url = {
    api: "https://secret-refuge-99565.herokuapp.com/api",
    endpoint: "/plants",
  };
  
  const config = {headers: {Authorization: `Bearer ${token}`}}

  useEffect(() => {
    const url_api = `${url.api}${url.endpoint}`;
    console.log('config is' + config)
    fetch(url_api, config)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);
function handleChange(event) {
setQuery(event.target.value)
}
function handleSearch(event) {
  event.preventDefault()
  const Search = posts.filter((post) => {
    if(post.name) {
      return post.name.includes(query)
    }
  })
console.log(Search)
setPosts(Search)

}
  return (
<>
  <Search handleChange={handleChange} handleSearch={handleSearch}/>
      <div className='posts'>
        {posts.map((post, index) => {
          return (
            <div key={index} >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={post.image} />
              <Card.Body>
                <Card.Title>{post.name}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <Link to={`/plants/${post._id}`} ><button className="card-btn">Edit</button></Link>
              </Card.Body>
            </Card>
            </div>
          );
        })}
      </div>
 </>
  );
};
export default Post;











