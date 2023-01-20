import './Home.css'
import { Link } from 'react-router-dom'

export default function login() {
  return (
    <div>
        <h1>Log In</h1>
        <Link to='/' className='button'>Continue</Link>
    </div>
  )
}
