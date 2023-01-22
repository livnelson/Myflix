import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import PersonProfile from './PersonProfile'
import '../styles/NavMenu.css'
import '../styles/SelectUser.css'

function SelectPerson({ id, username, profile_img, setPerson,  }) {
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
      <div className='person-avatars' onClick={handlePerson}>
        <div className='person'>
          <img className="person-avatar" src={profile_img} alt={username} />
          <p className='person-name' >{username}</p>
        </div>
      </div>
    </>
  )
}

export default SelectPerson