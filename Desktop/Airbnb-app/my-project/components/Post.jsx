import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

function Post() {
    const [post, setPost] = useState([]);
    useEffect(() => {
          axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {console.log(res)
             setPost(res.data)})
               .catch(err => {
                   console.log(err);
               },[])
    })
  return (
  <div>
      <ul>{
          post.map(pos =>  (
          <li key={pos.id}>{pos.title}</li>
          ))} </ul>
  </div>
  );
}

export default Post;
