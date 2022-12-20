import { initializeApp } from "firebase/app";
import { 
  getFirestore, collection, onSnapshot, 
  addDoc, deleteDoc, doc 
} from "firebase/firestore";

import { 
  getAuth, createUserWithEmailAndPassword, signOut,
  signInWithEmailAndPassword
} from "firebase/auth";

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

//init firebase app
initializeApp(firebaseConfig);

//init services
const db = getFirestore();
const auth = getAuth();

//collection ref
const colRef = collection(db, "Players");

//realtime collection data
onSnapshot(colRef, (snapshot) => {
  let players = []
  snapshot.docs.forEach((doc) => {
    players.push({ ...doc.data(), id: doc.id })
  })
  console.log(players)
})

const addPlayerForm = document.querySelector('.add')
addPlayerForm.addEventListener('submit', (e) => {
  e.preventDefault()

  addDoc(colRef, {
    Name: addPlayerForm.name.value,
    Email: addPlayerForm.email.value,
  })

  .then(() => {
    addPlayerForm.reset()
  })


})

const deletePlayerForm = document.querySelector('.delete')
deletePlayerForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const docRef = doc(db, "Players", deletePlayerForm.id.value)

  deleteDoc(docRef)

  .then(() => {
    deletePlayerForm.reset()
  })

})

const signUpForm = document.querySelector('.signup')
signUpForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = signUpForm.email.value
  const password = signUpForm.password.value


  createUserWithEmailAndPassword(auth, email, password)
  .then((cred) => {
    console.log('User Created:', cred.user)
    signUpForm.reset()
  })

  .catch((err) => {
    console.log(err.message)
  })

})

//Log in and out
const logOutButton = document.querySelector('.logout')
logOutButton.addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      console.log('User Logged Out')
    })
    .catch((err) => {
      console.log(err.message)
    })

})
const logInForm = document.querySelector('.login')
logInForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = logInForm.email.value
  const password = logInForm.password.value

  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log('User Logged In:', cred.user)
    })
    .catch((err) => {
      console.log(err.message)
    })

})