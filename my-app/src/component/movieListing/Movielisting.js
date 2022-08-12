import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies,getAllShows } from '../../redux/movies/movieSlice'
import MovieCard from "../MovieCard/MovieCard"
import "./MovieListing.css"

const Movielisting = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
 

  let renderMovies,renderShows="";
renderMovies=movies.Response==="True"?(
  movies.Search.map((movie,index)=>(
  <MovieCard key={index}data={movie} />
  
)) ):(<div className='movies-error'><h3>{movies.error}</h3></div>);
console.log("rendermovies",renderMovies );
renderShows=shows.Response==="True"?(
  shows.Search.map((shows,index)=>(
  <MovieCard key={index}data={shows} />
)) ):(<div className='shows-error'><h3>{shows.error}</h3></div>);
console.log("render showsrender",renderShows);

  
  return (
    <div className='movies-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-conatiner'>{renderMovies}</div>
      </div>
      <div className='movie-list'>
        <h2>Shows</h2>
        <div className='movie-conatiner'>{renderShows}</div>
      </div>
      
    </div>
  )
}

export default Movielisting