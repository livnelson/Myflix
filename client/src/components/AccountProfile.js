// client/src/components/UserProfile.js
import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
// import Login from './Login'
// import EditProfile from './EditProfile'
import SelectProfile from './SelectProfile'
// import FaveMovie from './FaveMovie'
// import YouTube from 'react-youtube'
// import movieTrailer from "movie-trailer"
import '../styles/UserProfile.css'

// const base_url = "http://image.tmdb.org/t/p/original/"


function UserProfile({ user, setUser, people, setPeople, setPerson }) {
  const [showEdit, setShowEdit] = useState(false)
  // const [myFaves, setMyFaves] = useState([])
  const [errors, setErrors] = useState(false)
  // const [trailerURL, setTrailerURL] = useState('')

  const navigate = useNavigate();
  console.log(user)

  // function handleShowEdit() {
  //   setShowEdit(!showEdit);
  // }

  function handleAdduser() {
    navigate('/add_profile')
  }

  function handleDeleteProfile() {
    fetch(`/users/${user.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (res.ok) {
          setUser(null)
          navigate('/')
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
    return <SelectProfile
      key={Math.random()}
      id={person.id}
      username={person.username}
      profile_img={person.profile_img}
      person={person}
      setPerson={setPerson}
      user={user}
    />
  })

  return (
    <div className='user-profile-page'>
      <img className='user-profile-logo' src='./myflix-logo.png' alt='MYFLIX-LOGO' />
      <div className='user-profile'>
        <Link to='/' onClick={goToHome} className='back-link'>← Back to Home</Link>
        <img src={user.profile_img} alt={user.username} className='user-avatar' />
        <h1 className='greeting'>Hello {user.first_name}!</h1>
        {/* {showEdit ? <EditProfile user={user} setUser={setUser} /> : null} */}
        {/* <button className="user-button" type="submit" onClick={handleShowEdit}>{showEdit ? "Cancel Edit Profile" : "Edit Profile"}</button> */}
        <button className="user-button" type="submit" onClick={handleDeleteProfile}>Delete Account</button>
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