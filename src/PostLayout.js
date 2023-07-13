import React from 'react'

const PostLayout = () => {
  return (
    <div>
          <Link to="/postpage/newpost"> NEWPOST</Link> 
         <br></br>
        <Link to="/postpage/1">post 1</Link>
        <br></br>
        <Link to="/postpage/2">post 2</Link>
        <br></br>
        <Link to="/postpage/3">post 3</Link>
    </div>
  )
}

export default PostLayout