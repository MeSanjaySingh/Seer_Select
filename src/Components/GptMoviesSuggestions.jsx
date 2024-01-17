import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptMoviesSuggestions = () => {
  const { gptSuggestion, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-6 m-6 bg-[#151515d3] rounded-2xl text-white bg-opacity-90">
      <div>
        {movieNames.map((movieName, index) => (
          <MoviesList
            key={movieName}
            title={movieName}
            movies={gptSuggestion[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMoviesSuggestions;
