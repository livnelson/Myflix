import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import PersonEdit from './PersonEdit'
import Row from './Row'
import PersonBanner from './PersonBanner'
import requests from '../requests'
// import FaveMovie from './FaveMovie'
import '../styles/UserProfile.css'
import '../styles/PersonProfile.css'
import '../styles/EditProfile.css'

const base_url = "http://image.tmdb.org/t/p/original/"

function PersonProfile({ person, setPerson }) {
  const [showEdit, setShowEdit] = useState(false)
  const [myFaves, setMyFaves] = useState([])
  const [errors, setErrors] = useState(false)

  const navigate = useNavigate();

  console.log(person)

  function handleShowEdit() {
    setShowEdit(!showEdit);
  }

  function handleDeletePerson() {
    // fetch(`/users/${user.id}`, {
    //   method: 'DELETE',
    //   headers: { 'Content-Type': 'application/json' }
    // })
    //   .then(res => {
    //     if (res.ok) {
    //       setUser(null)
    //       navigate('/')
    //       console.log('User Deleted')
    //     } else {
    //       res.json().then((err) => setErrors(err.errors));
    //     }
    //   })
  }

  function goToHome() {
    navigate('/')
  }

  useEffect(() => {
    // fetch('/allfaves', {
    //   method: 'GET',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify()
    // })
    //   .then(res => {
    //     if (res.ok) {
    //       res.json().then(faves => {
    //         console.log(faves)
    //         setMyFaves(faves)
    //       })
    //     }
    //   })
  }, [])

  // const deleteMovie = (name) => setMyFaves(current => current.filter(p => p.name !== name))

  //   const filteredFaves = myFaves.filter((fave) => {
  //     if (fave.user.person_id === person.id) return true
  // })

  // const mappedFaves = person.my_lists.map(movie => {
  //   return <FaveMovie key={movie.id} id={movie.id} name={movie.name} poster_path={movie.poster_path} overview={movie.overview} deleteMovie={deleteMovie} />
  // })

  // if (!user) return  <Login />

  return (
    <div className='person-profile-page'>
      <div className='person-header'>
        <img className='user-profile-logo' src='./myflix-logo.png' alt='MYFLIX-LOGO' />
        <Link to='/' onClick={goToHome} className='person-back-link'>← Back to Main Profile</Link>
      </div>
      <div className='person-profile'>
        <div className='person-welcome'>
          <img id='person-avatar' src={person.profile_img} alt={person.username} />
          <h1 id='person-greeting'>Hello {person.username}!</h1>
          <button className="person-button" type="submit" onClick={handleShowEdit}>{showEdit ? "Cancel Edit" : "Edit Profile"}</button>
          <button className="person-button" type="submit" onClick={handleDeletePerson}>Delete Profile</button>
        </div>
        {showEdit ? <PersonEdit person={person} setPerson={setPerson} setShowEdit={setShowEdit} showEdit={showEdit}/> : null}
      </div>
      <br />
      <PersonBanner person={person} />
      <div className='person-faves'>
        <h2 className='fave-greeting'>My Faves List</h2>
        <div className='faves-row'>
          <div className='faves-row-posters'>
            {/* {mappedFaves} */}
          </div>
        </div>
      </div>
      <div className='rows'>
        <Row title="Trending Now" fetchURL={requests.fetchTrending} />
        <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
        <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      </div>
      {errors ? <div className="errors">{errors}</div> : null}
    </div>
  )
}

export default PersonProfile