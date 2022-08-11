import  { useEffect } from 'react'
import MovieListing from "../movieListing/Movielisting";

import { useDispatch } from 'react-redux';
import  {  fetchAsyncMovies,fetchAsyncShows}  from '../../redux/movies/movieSlice';

const Home = () => {
 
    const dispatch= useDispatch()
    const movieText="harry",
    showText="friend";
  useEffect(() => {
   dispatch(fetchAsyncMovies(movieText));
   dispatch(fetchAsyncShows(showText));
  

  },[dispatch]);
        
return (
  <div>
    <div className='banner-img'></div>
    <MovieListing />
  </div>
)
}

export default Home