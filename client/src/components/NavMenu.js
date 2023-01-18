// client/src/components/NavMenu.js
import React from 'react'
import Logout from './Logout'
import AccountUser from './AccountUser'
import { Link } from 'react-router-dom'
import '../styles/NavMenu.css'

function NavMenu({ user, accountUsers }) {

  const mappedaccountUsers = accountUsers.map((a_user) => {
    return <AccountUser key={a_user.id} id={a_user.id} username={a_user.username} profile_img={a_user.profile_img} />
})

  return (
    <div className='navmenu'>
      <div className='nav-dropdown'>
        <Link to="/UserProfile">
          <div className='current-user'>
            <img className="current-user-avatar" src={user.profile_img} alt={user.username} />
            <p className='current-user-name'>{user.username}</p>
          </div>
        </Link>
        <div className='account-users'>
        {mappedaccountUsers}
        </div>
        <div className='logout'>
          <Logout />
        </div>
      </div>
    </div>
  )
}

export default NavMenu