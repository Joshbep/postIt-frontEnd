import './feed.css';
import React, { useContext, useState, useEffect } from 'react'
import Makepost from '../makePost/Makepost.js'
import Post from '../post/Post.js'
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";


let baseUrl = "http://localhost:3001"


function Feed({username}) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  const deletePost = (id) => {
    fetch(baseUrl + '/posts/' + id, {
      method: 'DELETE'
    }).then( res => {
      const copyPosts = [...posts]
      const findIndex = posts.findIndex(post => post._id === id)
      copyPosts.splice(findIndex, 1)
      setPosts(copyPosts)
    });
  }

  const handleEdit = (e, id) => {
        e.preventDefault()
        const description = posts.description
        fetch(baseUrl + '/posts/' + id, {
            method: 'PUT',
            body: JSON.stringify({
              description: e.target.value
            }),
            headers: {
              'Content-Type' : 'application/json'
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        })
        .then(resJson => {
          posts.description = e.target.value
        })
        .catch(err => (console.log(err)))
    }

  useEffect(()=>{
    const getPosts = async () => {
      const res = username
      ? await axios.get("/posts/profile/" + username)
      : await axios.get("/posts/timeline/" + user._id)
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    getPosts();
  }, [username, user._id])

  return (
    <div className="feed">
    <div className = "feedHeader">
      <h2>Posts</h2>
    </div>
      <div className="wrapper">
        {(!username || username === user.username) && <Makepost />}
        { posts.map((post, i) => {
          return (
            <Post key={post.id} post={post} deletePost={deletePost} i={i} handleEdit={handleEdit}/>
          )
        })
        }
      </div>
    </div>
  )
}

export default Feed;
