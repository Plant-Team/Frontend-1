import { useEffect, useState } from "react";
// import axios from 'axios'

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
   <div>
    {posts.map((post,index) => {
      return (
        <div key={index}>

          <img src={'https://i.imgur.com/1DZOV9D.jpeg'} alt={post.name}/>
          <p>{post.name}</p>
        </div>

      )
    })}
   </div>

    </>
  );
};

export default Post;
