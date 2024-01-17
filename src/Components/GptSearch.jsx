import React from "react";
import GptSeachPage from "./GptSeachPage";
import GptMoviesSuggestions from "./GptMoviesSuggestions";
import { BG_URL } from "../Utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="w-screen select-none object-cover" src={BG_URL} alt="logo" />
      </div>
      <div className="">
        <GptSeachPage />
        <GptMoviesSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
