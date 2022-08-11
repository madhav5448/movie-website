import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../component/Apis/MovieApi";
import {MovieApiKey} from "../../component/Apis/MovieApiKey";
export const fetchAsyncMovies=createAsyncThunk("movies/fetchAsyncMovies",async(term)=>{

    const response = await MovieApi
    .get(`?apikey=${MovieApiKey}
    &s=${term}&type=movie`)
  
    return  response.data
  });
  export const fetchAsyncShows=createAsyncThunk("movies/fetchAsyncShows",async(term)=>{
    
    const response = await MovieApi
    .get(`?apikey=${MovieApiKey}
    &s=${term}&type=series`)
  
    return  response.data
  });
  export const fetchAsyncMovieorshowDetail=createAsyncThunk("movies/fetchAsyncMovieorshowDetail",async(id)=>{
    
    const response = await MovieApi
    .get(`?apikey=${MovieApiKey}
    &i=${id}&Plot=full`)
  
    return  response.data
  });

const initialState= {
    movies:{},
    shows:{},
    selectedmovieorshow:{}
    
}
const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        addmovies:(state,{payload})=>{
            state.movies=payload;
        },
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("fullfilled");
            return {...state,movies:payload}
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("Rejected");
            
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log("fullfilled");
            return {...state,shows:payload}
        },
        [fetchAsyncMovieorshowDetail.fulfilled]:(state,{payload})=>{
            console.log("fullfilled");
            return {...state,selectedmovieorshow:payload}
        },
      
    }
});

export const {addmovies}=movieSlice.actions;
export const getAllMovies = (state)=>state.movies.movies
export const getAllShows = (state)=>state.movies.shows
export const getAllShowsormovies = (state)=>state.movies.selectedmovieorshow
export default movieSlice.reducer;