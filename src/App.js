import './App.css';
import { useState } from 'react';
import Title from './components/Title'

function App() {
  <Title />
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
      <Title title="Firebase Tanks"/>
      {!loggedIn && (
        <>
          <button onClick={signUp}>Sign Up</button>
          <button onClick={logIn}>Log In</button>
        </>
      )}

      {loggedIn && (
        <>
          <button onClick={logOut}>Log Out</button>
        </>
      )}

    </div>
  );
}

export default App;
