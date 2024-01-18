import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer.js";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className=" w-[98.7vw]">
      <iframe
        title="trailerVideo"
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&vq=hd1080p&autoplay=1&loop=1&mute=1&iv_load_policy=3&rel=0&showinfo=0&autohide=&controls=0&modestbranding=0"
        }
        allowtransparency="true"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      ></iframe>
    </div>
  );
};
export default VideoBackground;
