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

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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
  return (
    <div className="absolute flex select-none items-center justify-between w-full bg-gradient-to-b  from-black px-8 py-1 z-10">
      <img className="w-56 " src={Logo} alt="logo"></img>
      {user && (
        <div className="flex">
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
