import './Home.css'

import Title from '../components/Title'
import Modal from '../components/Modal'

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


export default function Home() {
    useLocation()

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
            <Link to='/Signup' onClick={signUp} className='button'>Sign Up</Link>
            <Link to='/Login' onClick={logIn} className='button'>Log In</Link>
          </>
        )}

        {loggedIn && (
          <>
            <div onClick={logOut} className='button'>Log Out</div>
          </>
        )}
        
        {modalOpen && <Modal closeModal={closeModal}>
          <h1>About</h1>
          <p>Firebase Tanks is a game that uses Firebase for realtime multiplayer</p>
        </Modal>}

        <>
          <div onClick={()=>{setModalOpen(true)}} className='button'>About</div>
        </>

    </div>
  )
}




