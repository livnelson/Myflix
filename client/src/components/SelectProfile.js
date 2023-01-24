import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import PersonProfile from './PersonProfile'
import '../styles/NavMenu.css'
import '../styles/SelectProfile.css'

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
      <div className='person-avatars' onClick={handlePerson}>
        <div className='person'>
          <img className="person-avatar" src={profile_img} alt={username} />
          {/* {hover && <div className="delete-button" onClick={handleDelete}>ⓧ</div>} */}
        </div>
        <p className='person-name' >{username}</p>
      </div>
    </>
  )
}

export default SelectProfile