import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/NavMenu.css'
import '../styles/SelectProfile.css'

function SelectProfile({ id, username, profile_img, setPerson }) {
  const navigate = useNavigate()

  // allows users to select their profile from the WelcomePage component
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

  return (
    <>
      <div className='person-avatars' onClick={handlePerson}>
        <div className='person'>
          <img className="person-avatar" src={profile_img} alt={username} />
        </div>
        <p className='person-name' >{username}</p>
      </div>
    </>
  )
}

export default SelectProfile