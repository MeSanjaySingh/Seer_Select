import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  const mainMovie = movies[15];
  // console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;
  return (
    <div className="w-screen pt-[26%] bg-[#171616] md:p-0">
      <VideoTitle title={original_title} overview={overview} />
      <div className="w-[98vw]">
        <VideoBackground movieId={id} />
      </div>
    </div>
  );
};

export default MainContainer;
