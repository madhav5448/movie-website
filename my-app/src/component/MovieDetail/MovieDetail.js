import React,{useEffect} from 'react';
import {useParams} from "react-router"
import { useDispatch,useSelector } from 'react-redux';
import { fetchAsyncMovieorshowDetail, getAllShowsormovies } from '../../redux/movies/movieSlice';


const MovieDetail = () => {
    const {imdbID}=useParams();
    const dispatch=useDispatch;
    const data=useSelector(getAllShowsormovies)
  
    useEffect(()=>{
        dispatch(fetchAsyncMovieorshowDetail(imdbID));
    },[dispatch,imdbID]);
    return (
        <div>
            <h1>Movie Deatail</h1>
           
        </div>
    );
};

export default MovieDetail;