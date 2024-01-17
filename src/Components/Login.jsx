import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";
import { updateProfile } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { BG_URL } from "../Utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the Form Data

    // console.log(email.current.value);
    // console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);

    if (message) return;

    // SignIn / SignUp Logic ::

    if (!isSignInForm) {
      // SignUp Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/118761330?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
        });
    } else {
      // SignIn Logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="select-none">
      <Header />
      <div className="w-full">
        <img
          className="absolute bg-blend-multiply shadow bg-black"
          src={BG_URL}
          alt="logo"
        ></img>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute my-28 mx-auto left-0 right-0 p-12 bg-primary w-4/12 rounded-md text-white"
      >
        <h1 className="font-bold text-3xl font-sans mb-7 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          type="text"
          placeholder="Email or Phone Number"
          className="p-3 mb-3 bg-[#333] shadow-sm shadow-orange-400 rounded-md m-2 w-full outline-none border-none"
        ></input>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 mb-3 bg-[#333] shadow-sm shadow-orange-400 rounded-md m-2 w-full outline-none border-none"
          ></input>
        )}
        <input
          ref={password}
          type="password"
          placeholder="Enter a Password"
          className="p-3 bg-[#333] shadow-sm shadow-orange-400 rounded-md m-2 w-full outline-none border-none"
        ></input>
        <p className="text-orange-600 font-bold ml-3 transition-all animate-pulse mt-2 px-2 ">
          {errorMessage}
        </p>

        <button
          className="p-4 m-2 font-bold bg-red-600 rounded-md w-full mb-5 mt-6"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h2 className="text-gray-500 text-lg">
          {isSignInForm ? "New To Netflix?" : " Already a Member? "}
          <span
            className="font-bold text-lg text-white hover:underline cursor-pointer ml-3"
            onClick={toggleSignIn}
          >
            {isSignInForm ? "Sign Up Now." : " Sign In Now "}
          </span>
        </h2>
        <p className="text-base mt-5 text-gray-500 ">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            Learn More
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
