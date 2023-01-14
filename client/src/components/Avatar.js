// client/src/components/Avatar.js
import React from 'react'
import '../styles/SignUp.css'

function Avatar({ name, img_url }) {
  return (
    <div className='avatar'>
      <img src={img_url} alt={name} />
    </div>
  )
}

export default Avatar