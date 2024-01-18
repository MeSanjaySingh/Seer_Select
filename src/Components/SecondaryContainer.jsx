import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-[#1b1a1a] w-screen">
        <div className="mt-0 md:-mt-44 pl-1 md:pl-4  z-20 relative">
          <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MoviesList title={"Trending"} movies={movies.TrendingMovies} />
          <MoviesList title={"TopRated"} movies={movies.TopRated} />
          <MoviesList title={"Similar Movies"} movies={movies.SimilarMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;

// MoviesList - Popular
//   -
// MoviesList - Now Playing
// MoviesList - Trending
// MoviesList - Horror
// MoviesList - Romantic
// MoviesList - Thriller
