// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDs2jgrc41L1Ct7jFmU04ds9cirNDg8GI0",
  authDomain: "teresitas-birria.firebaseapp.com",
  projectId: "teresitas-birria",
  storageBucket: "teresitas-birria.appspot.com",
  messagingSenderId: "370473005922",
  appId: "1:370473005922:web:094c62505bea03143f723b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
