import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/NavMenu.css'

function Person({ id, username, profile_img,  person, setPerson }) {
  const navigate = useNavigate()

  function handlePerson() {
    console.log(username)
  }
    
  return (
    <div className='account-users' onClick={handlePerson}>
        <div className='account-user'>
          <img className="account-user-avatar" src={profile_img} alt={username} />
          <p className='account-user-name' >{username}</p>
        </div>
    </div>
  )
}

export default Person