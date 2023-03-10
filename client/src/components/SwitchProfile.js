import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/NavMenu.css'

function Person({ id, username, profile_img, setPerson, viewMenu, setViewMenu, setList }) {
  const navigate = useNavigate()

  // allows users to switch profiles from the NavMenu
  function handlePerson() {
    setViewMenu(!viewMenu)
    console.log(id)
    fetch(`/person_profile/${id}`)
      .then((res) => res.json())
      .then((personObj) => {
        console.log(personObj)
        setPerson(personObj)
        setList (personObj.lists)
        navigate('/Home')
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