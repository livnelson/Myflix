// client/src/components/EditProfile.js
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/EditProfile.css'

function EditProfile({ user, setUser }) {
  const [errors, setErrors] = useState(false)
  // const [editUsername, setEditUsername] = useState();
  const [editPassword, setEditPassword] = useState("");
  const [editFirstName, setEditFirstName] = useState("")
  const [editLastName, setEditLastName] = useState("")
  const [editAvatar, setEditAvatar] = useState("")
  const [avatars, setAvatars] = useState([])
  
  const navigate = useNavigate()



  // function handleUsernameChange(e) {
  //   setEditUsername(e.target.value);
  // }

  function handlePasswordChange(e) {
    setEditPassword(e.target.value);
  }

  function handleFirstNameChange(e) {
    setEditFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setEditLastName(e.target.value);
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
    <img key={avatar.id} id={avatar.id} src={avatar.imgUrl} alt={avatar.name} className='signup-avatars' onClick={() => handleAvatarClick(avatar)} />
  ))

  function handleEditUser(e) {
    e.preventDefault()
    
    console.log(user)
    
    const editUser = {
      first_name: editFirstName,
      last_name: editLastName,
      // username: editUsername,
      password: editPassword,
      profile_img: editAvatar
    };

    console.log(editUser)

    fetch(`/updateuser/${user.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editUser)
    })
      .then(res => {
        if (res.ok) {
          res.json().then(updatedUser => {
            console.log(updatedUser)
            setUser(updatedUser)
            navigate('/')
          })
        } else {
          res.json().then(json => setErrors(json.errors))
        }
      })
  }


  return (
    <div>
      <div className="edit-user-card">
        <div className="edit-user-form">

          <form onSubmit={handleEditUser}>
            <h3>Edit Your Profile</h3>
            {/* <input
              className="input-field"
              name="username"
              type="text"
              value={editUsername}
              placeholder="Enter your username"
              onChange={handleUsernameChange}
              required
            /> */}
            <br />
            <input
              className="input-field"
              name="password"
              type="password"
              value={editPassword}
              placeholder="Enter a new password"
              onChange={handlePasswordChange}
              required
            />
            <br />
            <input
              className="input-field"
              name="first_name"
              type="text"
              value={editFirstName}
              placeholder="Enter your first name"
              onChange={handleFirstNameChange}
            />
            <br />
            <input
              className="input-field"
              name="last_name"
              type="text"
              value={editLastName}
              placeholder="Enter your last name"
              onChange={handleLastNameChange}
            />
            <br />
             <div className='avatar-section'>
                <h3 className='signup-subheading'>Choose Your Avatar</h3>
                <div className='avatars'>
                  {mappedAvatars}
                </div>
              </div>
            <br />
            <button className="button" type="submit">Save Changes</button>
          </form>
          <br />
        </div>
      </div>
    </div>
  )
}

export default EditProfile