import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchAsyncMovies, fetchAsyncShows } from '../../redux/movies/movieSlice';
import  "./header.css"

const Header = () => {
  const dispatch=useDispatch();
  const[term,setTerm]=useState("");

  const submitHandler=(e)=>{
e.preventDefault();
if(term==="")return alert("Please Enter a valid search")
dispatch(fetchAsyncMovies(term));
dispatch(fetchAsyncShows(term));
setTerm("");

  }
  return (
    <div className='header'>
      
      <div className='logo'>
      <Link to= "/"> Movie App</Link>
      </div>
      <div className='search-bar'>
        <form onSubmit={submitHandler}>
          <input type ="text" value={term} placeholder='Search Movies or Shows' onChange={(e)=>setTerm(e.target.value)}></input>
        <button type='submit'  ><i className='fa fa-search'></i></button>
        </form>
      </div>
 
      
      <div className='img-user'>
        <img src="download.png" alt = 'user' />
      </div>
    </div>
  )
}

export default Header