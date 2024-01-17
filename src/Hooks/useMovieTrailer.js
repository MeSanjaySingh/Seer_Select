import { API_OPTION } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  // const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  // "Fetch Trailer Video" && "Updating the Store" with Trailer Video Data
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTION
    );
    const json = await data.json();
    // console.log(json);

    const FilterData = json.results.filter((video) => video.type === "Trailer");
    // Edge case If movies Does'nt have the video Named "Trailer"
    const trailer = FilterData.length ? FilterData[0] : json.results[0];
    // console.log(trailer);
    // setTrailerId(trailer.key); // 1 way of setting Trailer Video
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
