import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'> SJG Chat</span>
        <div className="user">
            <img src='https://images.pexels.com/photos/14021938/pexels-photo-14021938.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' alt=''/>
            <span>John</span>
            <button>logout</button>
        </div>
    </div>
  )
}

export default Navbar