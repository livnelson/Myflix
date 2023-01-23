

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import PersonProfile from './PersonProfile'
import '../styles/NavMenu.css'
import '../styles/ManageProfile.css'

function SelectProfile({ id, username, profile_img, setPerson, person }) {
  const [hover, setHover] = useState(false)
  const navigate = useNavigate()

  function handlePerson() {
    console.log(id)
    fetch(`/person_profile/${id}`)
      .then((res) => res.json())
      .then((personObj) => {
        console.log(personObj)
        setPerson(personObj)
        navigate('/Home')
      })
  }

  function handleDelete() {

  }

  // function handlePerson() {
  //   console.log(id)
  //   fetch(`person_profile/${id}`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(person)
  //   })
  //     .then((res) => res.json())
  //     .then((personObj) => {
  //       console.log(personObj)
  //       setPerson(personObj)
  //       navigate('/Home')
  //     })
  // }

  return (
    <>
      <div id='current-person-avatars' onClick={handlePerson}>
        <div class="tooltip" >
          <span class="tooltiptext">Delete User</span>
          <div id='current-person'>
            <img id="current-person-avatar" src={profile_img} alt={username} />
          </div>
        </div>
        <p className='person-name' >{username}</p>
      </div>
    </>
  )
}

export default SelectProfile