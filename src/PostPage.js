import React from 'react'
import { Link, useParams } from 'react-router-dom'

const PostPage = ({post,handleDelete}) => {
  const {id}=useParams();
  const singlepost=post.find(post=>(post.id).toString()===id);
  return (
    <div className='singlepost'>
          <div>
            {singlepost &&
            <>
            <h2> {singlepost.title} </h2>
            <p className='postbody'> {singlepost.body}  </p> 
            <p className='posttime'> {singlepost.datetime}  </p>
            <button onClick={()=>handleDelete(singlepost.id)} 
            >DELETE</button>           </>}
            {!singlepost &&
            <>
            <h2>POST NOT FOUND </h2>
            <p> visit home page</p>
            </>

            }
          </div>
    </div>
  )
}

export default PostPage