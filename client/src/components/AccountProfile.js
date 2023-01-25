import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import EditAccount from './EditAccount'
import ManageProfiles from './ManageProfiles'
import '../styles/AccountProfile.css'


function UserProfile({ user, setUser, people, setPerson, deleteProfile, setDataFetched, setUpdatedProfile }) {
  const [showEdit, setShowEdit] = useState(false)
  const [errors, setErrors] = useState(false)

  const navigate = useNavigate();
  console.log(user)

  // shows EditAccount component, allows update username and password
  function handleEditAccount() {
    setShowEdit(!showEdit);
  }

  // links to AddProfile component to add user profile
  function handleAdduser() {
    navigate('/add_profile')
  }

  // deletes main account and all users
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

  // lists current users on the account and sets up to delete induvidual users
  const mappedPeople = people.map((person) => {
    return <ManageProfiles
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
      setUpdatedProfile={setUpdatedProfile}
    />
  })

  return (
    <div className='user-profile-page'>
      <img className='user-profile-logo' src='./myflix-logo.png' alt='MYFLIX-LOGO' />
      <div className='user-profile'>
        <Link to='/' onClick={goToHome} className='back-link'>← Back to Home</Link>
        {/* <img src={user.profile_img} alt={user.username} className='user-avatar' /> */}
        <h1 className='greeting'>Your Account</h1>
        {showEdit ? <EditAccount user={user} setUser={setUser} /> : null}
        <button className="user-button" type="submit" onClick={handleEditAccount}>{showEdit ? "Cancel Edit Profile" : "Edit Account Profile"}</button>
        <button className="user-button" type="submit" onClick={handleDeleteAccount}>Delete Account</button>
        <button className="user-button" type="submit" onClick={handleAdduser}>Create a Profile</button>
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