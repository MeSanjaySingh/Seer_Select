import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../Utils/constants";
import { addSimilarMovies } from "../Utils/moviesSlice";

const useSimilarMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  // const SimilarMovies = useSelector((store) => store.movies.SimilarMovies);

  const getSimilarMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addSimilarMovies(json.results));
  };

  useEffect(() => {
    getSimilarMovies();
  }, []);
};

export default useSimilarMovies;
