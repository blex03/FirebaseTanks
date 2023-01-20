import './Home.css'

import Title from '../components/Title'
import Modal from '../components/Modal'

import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Home(props) {
  const [modalOpen, setModalOpen] = useState(false)

  const closeModal = () => {
  setModalOpen(false)
  }

  return (
    <div>
        <Title title = 'Firebase Tanks' />
        {!props.loggedIn && (
          <>
            <Link to='/Signup' onClick={props.signUp} className='button'>Sign Up</Link>
            <Link to='/Login' onClick={props.logIn} className='button'>Log In</Link>
          </>
        )}

        {props.loggedIn && (
          <>
            <div onClick={props.logOut} className='button'>Log Out</div>
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




