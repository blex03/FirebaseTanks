import './App.css';
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Page Components
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'



function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  const signUp = () => {
  setLoggedIn(true)
  console.log("Signed Up")
  }

  const logIn = () => {
  setLoggedIn(true)
  console.log("Logged In") 
  }

  const logOut = () => {
  console.log("Logged Out")
  setLoggedIn(false)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Home signUp={signUp} logIn={logIn} logOut={logOut} loggedIn={loggedIn}/>} />
          <Route path = "/Signup" element = {<Signup />} />
          <Route path = "/Login" element = {<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
