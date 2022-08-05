import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
// import ListGroup from "react-bootstrap/ListGroup";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const url = {
    api: "https://secret-refuge-99565.herokuapp.com/api",
    endpoint: "/plants",
  };

  useEffect(() => {
    const url_api = `${url.api}${url.endpoint}`;
    fetch(url_api)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  return (
    <>

<Link to='/createpost'><button>ADD A POST</button></Link>




      <div className='posts'>
        {posts.map((post, index) => {
          return (
            <div key={index} >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={post.image} />
              <Card.Body>
                <Card.Title>{post.name}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
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
