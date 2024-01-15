import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    TrendingMovies: null,
    TopRated: null,
    SimilarMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.TrendingMovies = action.payload;
    },
    addTopRated: (state, action) => {
      state.TopRated = action.payload;
    },
    addSimilarMovies: (state, action) => {
      state.SimilarMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addTrendingMovies,
  addTopRated,
  addSimilarMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
