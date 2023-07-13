
import './App.css';
import {  Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import Header from './Header';
import { useEffect, useState } from 'react';
import { Navigation } from './Navigation';
import Home from './Home';
import { format } from 'date-fns';
import NewPost from './NewPost';
import About from './About';
import Missing from './Missing';
import PostPage from './PostPage';
import api from "./api/spost";
function App() {
const[post,setPost]=useState([])

const navigate=useNavigate()
const[searchResult,setSearchResult]=useState([])
  const [search,setSearch]=useState('')
  const [postTitle,setPostTitle]=useState('')
  const [postBody,setPostBody]=useState('')

useEffect(()=>{
  const fetchposts=async ()=>{
    try{
      const response= await api.get('/post');
      setPost(response.data);
    }
    catch(err){
      if(err.response){
        console.log(err.response);
       
      }else{
        console.log(`Error :${err.message}`)
      }
    }
  }
  fetchposts();
},[])

useEffect(()=>{
  const filteredResults=post.filter((post)=>((post.body).toLowerCase()).includes(search.toLowerCase())
  ||((post.title).toLowerCase()).includes(search.toLowerCase())
  )
  setSearchResult(filteredResults.reverse());

}, [post, search])



const handleSubmit= async(e)=>{
  e.preventDefault();
  const id=post.length? post[post.length-1].id+1:1;
  const datetime=format(new Date(),'MMMM dd, yyyy pp');
  const newpost={id,title:postTitle,datetime,body:postBody};
  try{
  const response=await api.post('/post',newpost);
  const allpost=[...post,response.data];
  setPost(allpost);
  setPostTitle('');
  setPostBody('');
  navigate('/');
  }
  catch(err){
    if(err.response){
      console.log(err.response);
     
    }else{
      console.log(`Error :${err.message}`)
    }
  }
  
}
const  handleDelete=async(id)=>{
  try{
    await api.delete(`post/${id}`)
 const postlist=post.filter(post=> post.id !== id)
 setPost(postlist);
 navigate('/')
  }
  catch(err){
    if(err.response){
      console.log(err.response);
     
    }else{
      console.log(`Error :${err.message}`)
    }
  }
}


  return (
    <div className="App">
      <Header title="SOCIAL MEDIA"></Header>
       <Navigation 
       search={search} 
       setSearch={setSearch}
       />
       <Routes>
        <Route path="/" element= { <Home post={searchResult} /> }/>   
        <Route path="post" > 
        <Route index element={  <NewPost postTitle={postTitle} 
                 setPostTitle={setPostTitle} 
                 postBody={postBody}
                 setPostBody={setPostBody}
                 handleSubmit={handleSubmit}
                 />} />
                 <Route path=":id" element={<PostPage post={post}
                    handleDelete={handleDelete} />} /> 
                    </Route>
      <Route path="about" element={<About />} />
      <Route path="*" element={<Missing />} />

                 </Routes> 
                 
    </div>
  );
}

export default App;
