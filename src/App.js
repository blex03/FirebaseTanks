import './App.css';
import { useState } from 'react';
import Title from './components/Title'
import Modal from './components/Modal'

function App() {
  <Title />
  const [loggedIn, setLoggedIn] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

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

  const closeModal = () => {
    setModalOpen(false)
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
      
      <>
        <button onClick={()=>{setModalOpen(true)}}>About</button>
      </>

      {modalOpen && <Modal closeModal={closeModal}>
        <h2>About</h2>
        <p>Firebase Tanks is a game that uses Firebase for realtime multiplayer</p>
      </Modal>}
    </div>
  );
}

export default App;
