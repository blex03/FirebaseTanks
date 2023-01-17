import Title from '../components/Title'
import Modal from '../components/Modal'

import { useState } from 'react';


export default function Home() {
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
    <div>
        <Title title = 'Firebase Tanks' />
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
        
        {modalOpen && <Modal closeModal={closeModal}>
          <h1>About</h1>
          <p>Firebase Tanks is a game that uses Firebase for realtime multiplayer</p>
        </Modal>}

        <>
          <button onClick={()=>{setModalOpen(true)}}>About</button>
        </>
 

    </div>
  )
}




