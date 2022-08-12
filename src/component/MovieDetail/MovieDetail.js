import React, { useEffect } from 'react';
import { useParams } from "react-router"
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieorshowDetail, getAllShowsormovies,removeselectedmovieorshow } from '../../redux/movies/movieSlice';
import "./MovieDetail.css"

const MovieDetail = () => {
    const dispatch = useDispatch();
    const { imdbID } = useParams();

    const data = useSelector(getAllShowsormovies)
    console.log(data)

    useEffect(() => {
        dispatch(fetchAsyncMovieorshowDetail(imdbID));
        return ()=>
        dispatch(removeselectedmovieorshow())
    }, [dispatch, imdbID]);



    return (
        <div className='movie-section' >
            {Object.keys(data).length===0?(<div><h3>...Loading</h3></div>):
         (   <>
            <div className='section-left'>

                <div className='movie-title'>{data.title}</div>
                <div className='movie-rating'>
                    <span>IMDB Rating <i class="fa-solid fa-star"></i>:{data.imdbRating}
                    </span>
                    <span>IMDB Votes <i class="fa-solid fa-thumbs-up"></i>:{data.imdbVotes}
                    </span>
                    <span>RunTime <i class="fa-solid fa-film"></i>:{data.Runtime}
                    </span>
                    <span>Year <i class="fa-solid fa-calendar"></i>:{data.Year}
                    </span>
                </div>
                <div className='movie-plot'>{data.Plot}</div>
                <div className='movie-info'>
                    <div>
                        <span>Director</span>
                        <span>{data.Director}</span>
                    </div>
                    <div>
                        <span>Star</span>
                        <span>{data.Actors}</span>
                    </div>
                    <div>
                        <span>Genres</span>
                        <span>{data.Genre}</span>
                    </div>
                    <div>
                        <span>Languages</span>
                        <span>{data.Language}</span>
                    </div>
                    <div>
                        <span>Award</span>
                        <span>{data.Awards}</span>
                    </div>
                </div>
            </div>
            <div className='section-right'>
                <img src={data.Poster} alt={data.Title} />
            </div>
            </>)}
        </div>
    );
};

export default MovieDetail;