import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import '../styles/NavMenu.css'
import '../styles/ManageProfile.css'


function SelectProfile({ username, profile_img, setPerson, person, deleteProfile, setDataFetched, setUpdatedProfile }) {
  const [errors, setErrors] = useState(false)

  const navigate = useNavigate()

  // delets user from account
  function handleDeleteProfile() {
    console.log(person)
    fetch(`/deleteprofile/${person.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (res.ok) {
          // setPerson(null)
          deleteProfile(res)
          setDataFetched(true)
          setUpdatedProfile()
          navigate('/')
          console.log('User Deleted')
        } else {
          res.json().then((err) => setErrors(err.errors));
        }
      })
  }

  return (
    <>
      <div id='current-person-avatars' onClick={handleDeleteProfile}>
        <div className="tooltip" >
          <span className="tooltiptext">Click to Delete User</span>
          <div id='current-person'>
            <img id="current-person-avatar" src={profile_img} alt={username} />
          </div>
        </div>
        <p className='current-person-name' >{username}</p>
      </div>
      {errors ? <div className="errors">{errors}</div> : null}
    </>
  )
}

export default SelectProfile