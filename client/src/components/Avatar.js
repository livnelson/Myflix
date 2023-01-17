// client/src/components/Avatar.js
import React from 'react'
import '../styles/SignUp.css'

function Avatar({ id, name, img_url }) {

  function avatarClick() {
    console.log(id)
  }
  return (
    <div className='avatar' onClick={avatarClick}>
      <img src={img_url} alt={name} />
    </div>
  )
}

export default Avatar