import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import logo from "../img/logo2.png"

const Navbar = () => {

  const {currentUser} = useContext(AuthContext)
  
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" height={50} className='nav-logo'/>
        <div className="user">
            <img src={currentUser.photoURL} alt=''/>
            <span className='nav-name'>{currentUser.displayName}</span>
            <button onClick={()=>signOut(auth)}>logout</button>
        </div>
    </div>
  )
}

export default Navbar