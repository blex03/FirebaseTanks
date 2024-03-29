import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAKCJjF2FRd00lhdSFmHCuvvQ0ZusaI8hk",
    authDomain: "fir-tanks.firebaseapp.com",
    databaseURL: "https://fir-tanks-default-rtdb.firebaseio.com",
    projectId: "fir-tanks",
    storageBucket: "fir-tanks.appspot.com",
    messagingSenderId: "210068901275",
    appId: "1:210068901275:web:46da70a750e04c2c6fe53e",
    measurementId: "G-RTKWB1TC9F"
  };

//Initialize firebase
initializeApp(firebaseConfig);
export { getFirestore, collection, getDocs }


