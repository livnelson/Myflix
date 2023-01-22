import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import PersonProfile from './PersonProfile'
import '../styles/NavMenu.css'

function Person({ id, username, profile_img, setPerson,  }) {
  const navigate = useNavigate()

  // const configPerson = {
  //   username, 
  //   user_id: user.id
  // }

  function handlePerson() {
    console.log(id)
    fetch(`/person_profile/${id}`)
    // fetch(`/login_person`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(configPerson),
    // })
      .then((res) => res.json())
      .then((personObj) => {
        console.log(personObj)
        setPerson(personObj)
        navigate('/Home')
        // setShowProfile(!showProfile)
      })
  }

  return (
    <>
      <div className='account-users' onClick={handlePerson}>
        <div className='account-user'>
          <img className="account-user-avatar" src={profile_img} alt={username} />
          <p className='account-user-name' >{username}</p>
        </div>
      </div>
    </>
  )
}

export default Person