import React from 'react'

const NewPost = ({handleSubmit,postTitle,setPostTitle,postBody,setPostBody}) => {

  return (
    <div className="newpost">
      <h2>NEW POST</h2>
      <form
          className="newpostForm" onSubmit={handleSubmit}>
     <label className='titlelabel' htmlFor="postTitle">TITLE :</label>
      <input className='titleinput'
      id="postTitle"
      type="text"
      required
      value={postTitle}
      onChange={(e)=>setPostTitle(e.target.value)}
      ></input>
      <label className='bodylabel' htmlFor="postBody">POST :</label>
       <input className='bodyinput'
      id="postBody"
      type="text"
      required
    
      value={postBody}
      onChange={(e)=>setPostBody(e.target.value)}
      ></input>
      <button type="submit" className='submit'>SUBMIT</button>
      </form>
    </div>
  )
}

export default NewPost