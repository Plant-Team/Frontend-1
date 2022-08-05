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


<Container>

      <div className='posts'>
        {posts.map((post, index) => {
          return (
            <div key={index} >
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={'https://th.bing.com/th/id/OIP.2gFzJqRrYJf0lDly_8f2EQHaHa?pid=ImgDet&rs=1'} />
              <Card.Body>
                <Card.Title>{post.name}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                {/* </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body> */}
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
            </div>
          );
        })}
      </div>
</Container>
    </>
  );
};

export default Post;
