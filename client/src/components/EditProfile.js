// client/src/components/EditProfile.js
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function EditProfile({ user, setUser }) {
  const [errors, setErrors] = useState(false)
  // const [editUsername, setEditUsername] = useState();
  // const [editPassword, setEditPassword] = useState("");
  const [editFirstName, setEditFirstName] = useState("")
  const [editLastName, setEditLastName] = useState("")
  const [editAvatar, setEditAvatar] = useState("")
  
  const navigate = useNavigate()

  // function handleUsernameChange(e) {
  //   setEditUsername(e.target.value);
  // }

  // function handlePasswordChange(e) {
  //   setEditPassword(e.target.value);
  // }

  function handleFirstNameChange(e) {
    setEditFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setEditLastName(e.target.value);
  }

  function handlAvatarChange(e) {
    setEditAvatar(e.target.value);
  }

  function handleEditUser(e) {
    e.preventDefault()
    
    console.log(user)
    
    const editUser = {
      first_name: editFirstName,
      last_name: editLastName,
      // username: editUsername,
      // password: editPassword,
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
            navigate('/UserHome')
          })
        } else {
          res.json().then(json => setErrors(json.errors))
        }
      })
  }

  return (
    <div>
      <div className="new-user-card">
        <div className="create-user-form">

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
            {/* <input
              className="input-field"
              name="password"
              type="password"
              value={editPassword}
              placeholder="Enter a new password"
              onChange={handlePasswordChange}
              required
            />
            <br /> */}
            <input
              className="input-field"
              name="first_name"
              type="text"
              value={editFirstName}
              placeholder="Enter your first name"
              onChange={handleFirstNameChange}
              required
            />
            <br />
            <input
              className="input-field"
              name="last_name"
              type="text"
              value={editLastName}
              placeholder="Enter your last name"
              onChange={handleLastNameChange}
              required
            />
            <br />
            <input
              className="input-field"
              name="profile_img"
              value={editAvatar}
              placeholder="Choose your avatar"
              onChange={handlAvatarChange}
              required
            />
            <br />
            <button className="button" type="submit">Update Profile</button>
          </form>
          <br />
        </div>
      </div>
    </div>
  )
}

export default EditProfile