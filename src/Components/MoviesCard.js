import { IMG_CND_URL } from "../Utils/constants";

const MoviesCard = ({ posterPath }) => {
  return (
    <div className="w-44">
      <img alt="movie card" src={IMG_CND_URL + posterPath}></img>
    </div>
  );
};

export default MoviesCard;
