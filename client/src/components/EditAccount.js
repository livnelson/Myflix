import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/EditProfile.css'

function EditAccount({ user, setUser }) {
  const [errors, setErrors] = useState(false)
  const [editPassword, setEditPassword] = useState("");
  const [editUserame, setEditUsername] = useState("")
  
  const navigate = useNavigate()

  function handlePasswordChange(e) {
    setEditPassword(e.target.value)
  }

  function handleUsernameChange(e) {
    setEditUsername(e.target.value)
    (e.target.value);
  }

  function handleEditUser(e) {
    e.preventDefault()
    
    console.log(user)
    
    const editUser = {
      username: editUserame,
      password: editPassword,
    };

    console.log(editUser)

    // updates account username and password
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
            <br />
            <input
              className="input-field"
              name="first_name"
              type="text"
              value={editUserame}
              placeholder="Enter a new username"
              onChange={handleUsernameChange}
              required
            />
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
            <button className="profile-button" type="submit">Save Changes</button>
          </form>
          <br />
        </div>
      </div>
      {errors ? <div className="errors">{errors}</div> : null}
    </div>
  )
}

export default EditAccount