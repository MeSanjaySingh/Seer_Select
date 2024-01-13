import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../Assets/Logo.png"

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute flex items-center justify-between w-full bg-gradient-to-b from-black px-8 py-2 z-10">
      <img
        className="w-56 "
        src={Logo}
        alt="logo"
      ></img>
      {user && (
        <div className="flex">
          <img
            alt="usericon"
            src={user?.photoURL}
            className="w-[50px] h-[50px] rounded-md mr-5"
          ></img>
          <button
            className=" p-3 bg-red-500 rounded-lg font-bold text-white font-mono hover:animate-pulse hover:shadow-lg "
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
