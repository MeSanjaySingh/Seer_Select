// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVbNEot45GaFUT4O6CFOq0lzc6yAV9LoA",
  authDomain: "seerselect.firebaseapp.com",
  projectId: "seerselect",
  storageBucket: "seerselect.appspot.com",
  messagingSenderId: "329383436139",
  appId: "1:329383436139:web:c9639e6008d67de4f8362e",
  measurementId: "G-GMKJCVGW52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =  getAuth();