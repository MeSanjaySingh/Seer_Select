import React, { useRef } from "react";
import lang from "../Utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../Utils/openai";
import { API_OPTION } from "../Utils/constants";
import { addGptMoviesSuggestions } from "../Utils/gptSlice";

const GptSeachPage = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  // Movies Search in TMDB

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);
    // Make an API call to OPEN AI and get the Movies Suggestions Results

    // "GPT Template to give results exactly like in this format."
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example results given ahead. Example Results: Drishyam, 3 Idiots, Vikram, Wednesday, Dangal ";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // TODO : Write Error Handling..
    }
    // console.log(gptResults.choices[0]?.message?.content);
    // "Andaz Apna Apna, Chupke Chupke, Gol Maal, Angoor, Dil Chahta Hai"
    const gptMovies = gptResults.choices[0]?.message?.content.split(",");
    // AFTER SPLIT ==> ["Andaz Apna Apna", "Chupke Chupke", "Gol Maal", "Angoor", "Dil Chahta Hai"]
    // Now For each movies I will search TMDB API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    // For Each movies there will a new Promises i.e, 5 Promises ==>

    // [Promise,Promise,Promise,Promise,Promise]

    const tmdbResults = await Promise.all(promiseArray);
    // console.log(tmdbResults);
    dispatch(
      addGptMoviesSuggestions({
        movieNames: gptMovies,
        gptSuggestion: tmdbResults,
      })
    );
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center ">
      <form
        className=" w-1/2 top-24 bg-transparent  rounded-xl grid grid-cols-12 text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="outline-none py-4 m-6 col-span-9  px-5 rounded-md text-black"
          placeholder={lang[langKey].gptSearchPlaceholder}
        ></input>

        <button
          className="p-2 m-7 hover:scale-105 font-bold transition-all col-span-3 bg-red-600 text-white rounded-md"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSeachPage;
