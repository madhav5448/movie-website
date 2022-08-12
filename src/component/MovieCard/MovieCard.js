import React from 'react'
import { Link } from 'react-router-dom'
import "./MovieCard.css"



const MovieCard = (props) => {
  const {data}=props
  console.log("detail",data)  
  return (
    <div className='card-item'>
      
     
      <div className='card-inner'>
       <Link to={`movies/${data.imdbID}`}>
        <div className='card-top'>
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className='card-bottom'>
          <div className='card-info'>
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>

          </div>
        </div>
        </Link>
      </div>
    
    </div>
  )
}

export default MovieCard