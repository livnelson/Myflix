// client/src/components/UserProfile.js
import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import EditProfile from './EditProfile'
import ManageProfile from './ManageProfile'
import '../styles/AccountProfile.css'


function UserProfile({ user, setUser, people, setPerson, deleteProfile, setDataFetched }) {
  const [showEdit, setShowEdit] = useState(false)
  const [errors, setErrors] = useState(false)

  const navigate = useNavigate();
  console.log(user)

  function handleEditAccount() {
    setShowEdit(!showEdit);
  }

  function handleAdduser() {
    navigate('/add_profile')
  }

  function handleDeleteAccount() {
    fetch(`/users/${user.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (res.ok) {
          setUser(null)
          navigate('/signup')
          console.log('User Deleted')
        } else {
          res.json().then((err) => setErrors(err.errors));
        }
      })
  }

  function goToHome() {
    navigate('/')
  }

  const mappedPeople = people.map((person) => {
    return <ManageProfile
      key={person.id}
      id={person.id}
      username={person.username}
      profile_img={person.profile_img}
      first_name={person.first_name}
      person={person}
      setPerson={setPerson}
      user={user}
      deleteProfile={deleteProfile}
      setDataFetched={setDataFetched}
    />
  })

  return (
    <div className='user-profile-page'>
      <img className='user-profile-logo' src='./myflix-logo.png' alt='MYFLIX-LOGO' />
      <div className='user-profile'>
        <Link to='/' onClick={goToHome} className='back-link'>← Back to Home</Link>
        {/* <img src={user.profile_img} alt={user.username} className='user-avatar' /> */}
        <h1 className='greeting'>Welcome {user.first_name}!</h1>
        {showEdit ? <EditProfile user={user} setUser={setUser} /> : null}
        <button className="user-button" type="submit" onClick={handleEditAccount}>{showEdit ? "Cancel Edit Profile" : "Edit Account Profile"}</button>
        <button className="user-button" type="submit" onClick={handleDeleteAccount}>Delete Account</button>
        <button className="user-button" type="submit" onClick={handleAdduser}>Add a New User</button>
      </div>
      <br />
      <div className='manage-users'>
      <h2 className='fave-greeting'>Manage Current Users</h2>
      <div className='current-users'>
        <div className='select-users'>
          {mappedPeople}
        </div>
      </div>
      </div>
      {errors ? <div className="errors">{errors}</div> : null}
    </div>
  )
}

export default UserProfile