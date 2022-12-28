import './App.css';
import { useState } from 'react';

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
      {!loggedIn && (
        <div>
          <button onClick={signUp}>Sign Up</button>
          <button onClick={logIn}>Log In</button>
        </div>
      )}

      {loggedIn && (
        <div>
          <button onClick={logOut}>Log Out</button>
        </div>
      )}

    </div>
  );
}

export default App;
