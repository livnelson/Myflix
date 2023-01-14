// client/src/components/NavMenu.js
import React from 'react'
import Logout from './Logout'
import { Link } from 'react-router-dom'
import '../styles/NavMenu.css'

function NavMenu({ user }) {

  return (
    <div className='navmenu'>
      <div className='nav-dropdown'>
        <Link to="/UserProfile">
          <div className='current-user'>
            <img className="current-user-avatar" src={user.avatar} alt={user.first_name} />
            <p className='current-user-name'>{user.first_name}</p>
          </div>
        </Link>
        <div className='logout'>
          <Logout />
        </div>
      </div>
    </div>
  )
}

export default NavMenu