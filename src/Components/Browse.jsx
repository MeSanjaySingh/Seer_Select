import Header from "./Header";
import usenowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTrendingMovies from "../Hooks/useTrendingMovies";
import useTopRated from "../Hooks/useTopRated";
import useSimilarMovies from "../Hooks/useSimilarMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  //Calling Hook
  usenowPlayingMovies();
  useTrendingMovies();
  useTopRated();
  useSimilarMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/* 
    Main Container
      - Video Background
      - Video title
    
    Secondary container
      - Movies List *n
      - Card * n
     */}
    </div>
  );
};

export default Browse;
