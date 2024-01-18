import MoviesCard from "./MoviesCard";
const MoviesList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="px-6 ">
      <h1 className=" text-2xl md:text-4xl py-4 pl-2 text-white">{title}</h1>
      <div className="flex flex-wrap overflow-x-scroll rounded-lg no-scrollbar">
        <div className="flex gap-5 rounded-lg">
          {movies?.map((movie) => (
            <MoviesCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
