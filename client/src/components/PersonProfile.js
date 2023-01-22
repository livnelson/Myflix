// client/src/components/UserProfile.js
import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Login from './Login'
import PersonEdit from './PersonEdit'
import PersonFaveMovie from './PersonFaveMovie'
// import YouTube from 'react-youtube'
// import movieTrailer from "movie-trailer"
import '../styles/UserProfile.css'

const base_url = "http://image.tmdb.org/t/p/original/"


function PersonProfile({ user, setUser,  person, setPerson }) {
  const [showEdit, setShowEdit] = useState(false)
  const [myFaves, setMyFaves] = useState([])
  const [errors, setErrors] = useState(false)
  // const [trailerURL, setTrailerURL] = useState('')

  const navigate = useNavigate();
  console.log(user)

  function handleShowEdit() {
    setShowEdit(!showEdit);
  }

  function handleDeleteProfile() {
    fetch(`/deleteprofile/${person.id}}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (res.ok) {
          setPerson(null)
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

  const deleteMovie = (name) => setMyFaves(current => current.filter(p => p.name !== name))

  const filteredFaves = person.lists.filter((fave) => {
    if (fave.person_id === person.id) return true
})

  const mappedFaves = filteredFaves.map(movie => {
    return <PersonFaveMovie key={movie.id} id={movie.id} name={movie.name} poster_path={movie.poster_path} overview={movie.overview} deleteMovie={deleteMovie} />
  })

  return ( 
    <div className='user-profile-page'>
      <img className='user-profile-logo' src='./myflix-logo.png' alt='MYFLIX-LOGO' />
      <div className='user-profile'>
        <Link to='/Home' onClick={goToHome} className='back-link'>← Back to Home</Link>
        <img src={person.profile_img} alt={person.username} className='user-avatar' />
        <h1 className='greeting'>Hello {person.first_name}!</h1>
        {showEdit ? <PersonEdit person={person} setPerson={setPerson} setShowEdit={setShowEdit} showEdit={showEdit} /> : null}
        <button className="user-button" type="submit" onClick={handleShowEdit}>{showEdit ? "Cancel Edit Profile" : "Edit Profile"}</button>
        <button className="user-button" type="submit" onClick={handleDeleteProfile}>Delete Profile</button>
      </div>
      <br />
      <h2 className='fave-greeting'>My Faves List</h2>
      <div className='faves-row'>
        <div  className='faves-row-posters'>
          {mappedFaves}
        </div>
      </div>
      {errors ? <div className="errors">{errors}</div> : null}
    </div>
  )
}

export default PersonProfile