

import movieReducer from "../redux/movies/movieSlice";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: {movies:movieReducer},
})

export default store