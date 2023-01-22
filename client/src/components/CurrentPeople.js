// import React, { useState, useEffect, useContext } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Context } from "../contexts/Context"
// import Login from './Login'
// import Nav from './Nav'
// import Logout from './Logout'
// import User from './User'
// import Person from './Person'
// import SelectProfile from './SelectProfile'

import '../styles/SelectUser.css'

function CurrentPeople({ id, username, profile_img}) {


  return (
    <div className='current-people'>
      <img className='avatar' src={profile_img} alt={username} />
     <p>{username}</p>
    </div>
  )
}

export default CurrentPeople