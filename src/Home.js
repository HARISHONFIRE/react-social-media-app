import React from 'react';
import Feed from './Feed';
const Home = ({post}) => {
  return (
    <div>
      {post.length?(<Feed post={post} /> ):(<p style={{marginTop:"30px"}}> NO POST TO DISPLAY</p>)
      
      }
    </div>
  )
}

export default Home