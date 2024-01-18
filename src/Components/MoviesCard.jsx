import { IMG_CND_URL } from "../Utils/constants";

const MoviesCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-40 md:w-44 hover:cursor-pointer shadow-white ">
      <img
        className="rounded-xl hover:shadow-lg"
        alt="movie card"
        src={IMG_CND_URL + posterPath}
      ></img>
    </div>
  );
};

export default MoviesCard;
