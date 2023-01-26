import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import EditProfile from './EditProfile'
import FaveMovie from './FaveMovie'
import '../styles/AccountProfile.css'


function UserProfile({ person, setPerson, setList, list, setDataFetched, setUpdatedProfile, deleteProfile }) {
  const [showEdit, setShowEdit] = useState(false)
  const [errors, setErrors] = useState(false)  

  const navigate = useNavigate();
  console.log(person)

  // shows EditProfile component for user(person) 
  function handleShowEdit() {
    setShowEdit(!showEdit);
  }

  // allows users to delete their profile
  function handleDeleteProfile() {
    deleteProfile(person.id)
    fetch(`/deleteprofile/${person.id}}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        if (res.ok) {
          console.log('User Deleted')
          setDataFetched(true)
          setPerson(null)
          setUpdatedProfile(null)
          navigate('/')
        } else {
          res.json().then((err) => setErrors(err.errors));
        }
      })
    }
    
  function goToHome() {
    navigate('/')
  }

  // handles deleting movie from useres My Faves list
  const deleteMovie = (name) => {
    console.log(name)
    const newList= list.filter(movie => {
      return (movie.name !== name) 
    })
      console.log(newList)
      setList(newList)
    }

  // maps current users(person) fave movies for profile page
  const mappedFaves = list.map(movie => {
    return <FaveMovie 
              key={movie.id} 
              id={movie.id} 
              name={movie.name || movie.title || movie.original_name} 
              poster_path={movie.poster_path} 
              backdrop_path={movie.backdrop_path}
              overview={movie.overview}
              release_date={movie.release_date || movie.first_air_date}
              vote_average={movie.vote_average}
              vote_count={movie.vote_count}
              deleteMovie={deleteMovie} 
              setList={setList}
              list={list}
              setDataFetched={setDataFetched} />
  })

  return ( 
    <div className='user-profile-page'>
      <img className='user-profile-logo' src='./myflix-logo.png' alt='MYFLIX-LOGO' />
      <div className='user-profile'>
        <Link to='/Home' onClick={goToHome} className='back-link'>← Back to Home</Link>
        <img src={person.profile_img} alt={person.username} className='user-avatar' />
        <h1 className='greeting'>Hello {person.first_name}!</h1>
        {showEdit ? <EditProfile person={person} setPerson={setPerson} setShowEdit={setShowEdit} showEdit={showEdit} /> : null}
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

export default UserProfile