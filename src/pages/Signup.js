import './Home.css'
import { Link } from 'react-router-dom'

export default function signup() {
  return (
    <>
        <h1>Sign Up</h1>
        <Link to='/' className='button'>Continue</Link>
    </>
  )
}
