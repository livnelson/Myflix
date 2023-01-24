import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import PersonEdit from './PersonEdit'
import PersonFaveMovie from './PersonFaveMovie'
import '../styles/AccountProfile.css'


function PersonProfile({ person, setPerson, setList, list, setDataFetched }) {
  const [showEdit, setShowEdit] = useState(false)
  const [errors, setErrors] = useState(false)

  const navigate = useNavigate();
  console.log(person)

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
          console.log('User Deleted')
          navigate('/')
        } else {
          res.json().then((err) => setErrors(err.errors));
        }
      })
  }

  function goToHome() {
    navigate('/')
  }

  const deleteMovie = (name) => {
    console.log(name)
    const newList= list.filter(movie => {
      return (movie.name !== name) 

    })
    // setList(current => current.filter(p => { 
      //   console.log(p.name)
      //   // p.name === name 
      console.log(newList)
      setList(newList)
    }

//   const filteredFaves = person.lists.filter((fave) => {
//     if (fave.person_id === person.id) return true
// })

  const mappedFaves = person.lists.map(movie => {
    return <PersonFaveMovie 
              key={movie.id} 
              id={movie.id} 
              name={movie.name} 
              poster_path={movie.poster_path} 
              overview={movie.overview} 
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