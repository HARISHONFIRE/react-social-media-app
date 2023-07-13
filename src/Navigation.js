import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = ({search,setSearch}) => {
    
  return (
    <div className="navigation">
        <form
            className='searchForm' onSubmit={(e)=>e.preventDefault()}
            >
                <label htmlFor='search'> Search post</label>
                <input
                    id="search"
                    type='text'
                    placeholder='search posts'
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)} />
            </form>
            <ul>
               <li> <Link to="/">HOME</Link></li>
               <li> <Link to="post">POST</Link></li>
               <li> <Link to="about">ABOUT</Link></li>
            </ul>
    </div>
  )
}
