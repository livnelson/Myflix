// client/src/components/UserProfile.js
import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import EditProfile from './EditProfile'
import FaveMovie from './FaveMovie'
import '../styles/UserProfile.css'

function UserProfile({ user, setUser }) {
  const [showEdit, setShowEdit] = useState(false)
  const [myFaves, setMyFaves] = useState([])
  const [errors, setErrors] = useState(false)

  const navigate = useNavigate();

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
          console.log('User Deleted')
          navigate('/')
        } else {
          res.json().then((err) => setErrors(err.errors));
        }
      })
  }

  function goToHome() {
    navigate('/UserHome')
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

  const mappedFaves = myFaves.map(movie =>{
    return <FaveMovie key={movie.id} name={movie.name} poster_path={movie.poster_path} />
  })


  return (
    <div>
      <div className='user-profile'>
        <Link to='/' onClick={goToHome} className='back-link'>← Back to Home</Link>
        <img src={user.avatar} alt={user.username} className='avatar' />
        <h1 className='greeting'>Hello {user.first_name}!</h1>
        <button className="button" type="submit" onClick={handleShowEdit}>Edit  Profile</button>
        {showEdit ? <EditProfile user={user} setUser={setUser} /> : null}
        <button className="button" type="submit" onClick={handleDeleteProfile}>Delete Profile</button>
      </div>
      <h2 className='my-faves'>My Faves List</h2>
      <div className='myfaves-movies'>
        <div className='myfave-posters'>
      {mappedFaves}
        </div>
      </div>
    </div>
  )
}

export default UserProfile