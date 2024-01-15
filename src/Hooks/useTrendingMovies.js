import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../Utils/constants";
import { addTrendingMovies } from "../Utils/moviesSlice";

const useTrendingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const TrendingMovies = useSelector((store) => store.movies.TrendingMovies);

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US?page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    !TrendingMovies && getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
