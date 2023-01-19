// client/src/components/UserProfile.js
import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Login from './Login'
import EditProfile from './EditProfile'
import FaveMovie from './FaveMovie'
// import YouTube from 'react-youtube'
// import movieTrailer from "movie-trailer"
import '../styles/UserProfile.css'

const base_url = "http://image.tmdb.org/t/p/original/"


function UserProfile({ user, setUser }) {
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

  useEffect(() => {
    fetch('/allfaves', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
    })
      .then(res => {
        if (res.ok) {
          res.json().then(faves => {
            console.log(faves)
            setMyFaves(faves)

          })
        }
      })
  }, [])

  const deleteMovie = (name) => setMyFaves(current => current.filter(p => p.name !== name))

  const filteredFaves = myFaves.filter((fave) => {
    if (fave.user_id === user.id) return true
})

  const mappedFaves = filteredFaves.map(movie => {
    return <FaveMovie key={movie.id} id={movie.id} name={movie.name} poster_path={movie.poster_path} overview={movie.overview} deleteMovie={deleteMovie} />
  })

  // if (!user) return  <Login />

  return ( 
    <div className='user-profile-page'>
      <img className='user-profile-logo' src='./myflix-logo.png' alt='MYFLIX-LOGO' />
      <div className='user-profile'>
        <Link to='/' onClick={goToHome} className='back-link'>← Back to Home</Link>
        <img src={user.profile_img} alt={user.username} className='user-avatar' />
        <h1 className='greeting'>Hello {user.first_name}!</h1>
        {showEdit ? <EditProfile user={user} setUser={setUser} /> : null}
        <button className="button" type="submit" onClick={handleShowEdit}>Edit  Profile</button>
        <button className="button" type="submit" onClick={handleDeleteProfile}>Delete Profile</button>
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

export default UserProfile