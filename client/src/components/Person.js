import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/NavMenu.css'

function AccountUser({ id, username, profile_img }) {
  // const [accountUser, setAccountUser] = useState({})

  // function switchProfile() {
  //   console.log(username)
   
    // fetch("/accountuser").then((r) => {
    //   if (r.ok) {
    //     r.json().then((user) => setAccountUser(user))
    //   }
    // });
  // }
    
  return (
    <div className='account-users'>
      {/* <Link to="/UserProfile"> */}
        <div className='account-user'>
          <img className="account-user-avatar" src={profile_img} alt={username} />
          <p className='account-user-name' >{username}</p>
        </div>
      {/* </Link> */}
    </div>
  )
}

export default AccountUser