import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../Assets/Logo.png";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { userIcon } from "../Utils/constants";
import { GiArtificialHive } from "react-icons/gi";
import { addtoggleGptSearchView } from "../Utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../Utils/constants";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        // ...
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribed when componet unmount..
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleGptSearchClick = () => {
    // Toggel GPT Search ..
    dispatch(addtoggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    //
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute flex select-none items-center justify-between w-full bg-gradient-to-b  from-black px-8 py-1 z-10">
      <img className="w-56 " src={Logo} alt="logo"></img>
      {user && (
        <div className="flex items-center">
          {showGptSearch && (
            <select
              className="p-2 bg-slate-200 font-mono text-black rounded-xl outline-none"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="p-2 mr-4 rounded-lg flex items-center font-bold font-mono bg-orange-400  m-2"
            onClick={handleGptSearchClick}
          >
            <GiArtificialHive size={20} />
            {showGptSearch ? "Leverage GPT" : "GPTSearch"}
          </button>
          <img
            alt="usericon"
            src={userIcon}
            className="w-[40px] h-[40px] rounded-md mr-5 "
          ></img>
          <button
            className=" p-2 bg-red-500 rounded-sm font-bold text-white font-mono hover:animate-pulse hover:shadow-lg "
            onClick={handelSignOut}
          >
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
