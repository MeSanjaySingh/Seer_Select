import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptSuggestion: null,
    movieNames: null,
  },

  reducers: {
    addtoggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMoviesSuggestions: (state, action) => {
      const { movieNames, gptSuggestion } = action.payload;
      state.movieNames = movieNames;
      state.gptSuggestion = gptSuggestion;
    },
  },
});
export const { addtoggleGptSearchView, addGptMoviesSuggestions } =
  gptSlice.actions;
export default gptSlice.reducer;
