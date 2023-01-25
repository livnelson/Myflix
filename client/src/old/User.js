import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function User({ id, username, profile_img }) {
  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState(false)

  const navigate = useNavigate()

  function handleSelectUser() {
    console.log(id)
    console.log(username)
    navigate('/UserHome')

    // fetch(`/home/${id}`)
    //   .then(res => {
    //     if (res.ok) {
    //       res.json().then(user => {
    //         setUser(user)
    //       })
    //     } 
    //     else {
    //       res.json().then(data => setErrors(data.error))
    //     }
    //   })
  }

  return (
    <div className='select-user'>
      <div onClick={handleSelectUser}>
        <img className='select-user-avatar' src={profile_img} alt={username} />
        <p className='select-user-name' >{username}</p>
      </div>
    </div>
  )
}

export default User