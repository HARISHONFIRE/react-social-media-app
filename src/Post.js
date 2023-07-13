import React from 'react'
import { Link } from 'react-router-dom'


const Post = ({post}) => {
  
  return (
    <div className="post">
    <Link to={`post/${post.id}`} ><h3> {post.title}</h3>
      <p className="postbody">{(post.body).length<=25?post.body:`${(post.body).slice(0,25)}...`}</p>
      </Link>
       <p className="postdate">{post.datetime}</p>

    </div>
  )
}

export default Post