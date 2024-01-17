import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../Utils/constants";
import { addTopRated } from "../Utils/moviesSlice";

const useTopRated = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const TopRated = useSelector((store) => store.movies.UpcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    !TopRated && getUpcomingMovies();
  }, []);
};

export default useTopRated;
