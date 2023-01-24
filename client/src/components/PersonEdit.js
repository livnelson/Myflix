import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/PersonEdit.css'

function PersonEdit({ person, setPerson, showEdit, setShowEdit }) {
  const [errors, setErrors] = useState(false)
  const [editUsername, setEditUsername] = useState()
  const [editAvatar, setEditAvatar] = useState("")
  const [avatars, setAvatars] = useState([])
  
  // const navigate = useNavigate()

  function handleUserameChange(e) {
    setEditUsername(e.target.value);
  }

  const handleAvatarClick = (avatar) => {
    console.log(avatar.id)
    setEditAvatar(avatar.imgUrl);
  }

  useEffect(() => {
    fetch('/avatars')
      .then((r) => r.json())
      .then(avatars => {
        console.log(avatars)
        setAvatars(avatars)
      })
  },[])

  const mappedAvatars = avatars.map((avatar) => (
    <img 
      key={avatar.id} 
      id={avatar.id} 
      src={avatar.imgUrl}
      alt={avatar.name} 
      className='signup-avatars' 
      onClick={() => handleAvatarClick(avatar)} />
  ))

  const editUser = {
    username: editUsername,
    profile_img: editAvatar
  };
  
  function handleEditPerson(e) {
    e.preventDefault()
    
    console.log(person)

    console.log(editUser)

    fetch(`/updateperson/${person.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editUser)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(updatedUser => {
            console.log(updatedUser)
            setPerson(updatedUser)
            setEditUsername('')
            setShowEdit(!showEdit)
          })
        } else {
          res.json().then(json => setErrors(json.errors))
        }
      })
  }

  return (
    <div>
      <div id="edit-person-card">
        <div className="edit-person-form">
          <form onSubmit={handleEditPerson}>
            <h3>Edit Your Profile</h3>
            <br />
            <input
              className="input-field"
              name="first_name"
              type="text"
              value={editUsername}
              placeholder="Enter a new profile name"
              onChange={handleUserameChange}
              // required
            />
            <br />
             <div className='avatar-section'>
                <h3 className='signup-subheading'>Choose Your Avatar</h3>
                <div className='avatars'>
                  {mappedAvatars}
                </div>
              </div>
            <button id="person-save-button" type="submit">Save Changes</button>
          </form>
          <br />
        </div>
      </div>
    </div>
  )
}

export default PersonEdit